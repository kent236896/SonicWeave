export type AudioFeatures = {
  /** Equalized+compressed spectrum (0..1). Same length as input bins. */
  spectrum: Float32Array
  /** Log-spaced band energies (0..1) for easy mapping. */
  bands: Float32Array
  /** Spectral flux onset strength (roughly 0..1). */
  onset: number
  /** Beat phase 0..2π and short pulse 0..1 (optional but handy). */
  beat: { bpm: number; phase: number; pulse: number }
  /** Auto-gain applied to bring quiet sections up. */
  agcGain: number
}

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v))
}

function wrap2pi(x: number): number {
  const t = Math.PI * 2
  x %= t
  return x < 0 ? x + t : x
}

function wrapPi(a: number): number {
  let x = a
  while (x > Math.PI) x -= Math.PI * 2
  while (x < -Math.PI) x += Math.PI * 2
  return x
}

class BeatTracker {
  bpm = 120
  phase = 0
  pulse = 0
  private tSinceBeat = 999
  private prevEnv = 0
  private mean = 0
  private variance = 0

  update(p: { dt: number; onset: number; sensitivity: number; lock: number }): { bpm: number; phase: number; pulse: number } {
    const dt = Math.max(0, p.dt)
    const sens = Math.max(0, Math.min(1.5, p.sensitivity))
    const lock = Math.max(0, Math.min(1.5, p.lock))
    const bpmMin = 80
    const bpmMax = 170

    // continuous phase
    const omega = (Math.PI * 2 * this.bpm) / 60
    this.phase = wrap2pi(this.phase + omega * dt)

    // onset envelope + adaptive threshold
    const onset = Math.max(0, p.onset)
    const env = Math.max(onset, this.prevEnv * Math.exp(-dt * (10 + sens * 8)))
    this.prevEnv = env

    const a = 1 - Math.exp(-dt * 2.0)
    const d = env - this.mean
    this.mean += d * a
    this.variance += (d * d - this.variance) * a
    const std = Math.sqrt(Math.max(1e-6, this.variance))
    const thresh = this.mean + std * (1.2 - sens * 0.5)

    this.tSinceBeat += dt
    const minInterval = 60 / bpmMax
    const maxInterval = 60 / bpmMin

    const phaseErr = wrapPi(this.phase)
    const beatWindow = 1.1 - lock * 0.55
    const gated = Math.abs(phaseErr) <= Math.max(0.25, beatWindow)
    const isBeat = env > thresh && gated && this.tSinceBeat > minInterval * 0.85

    if (isBeat) {
      const interval = Math.max(minInterval, Math.min(maxInterval, this.tSinceBeat))
      const measuredBpm = 60 / interval
      const alpha = 0.06 + sens * 0.03
      this.bpm = this.bpm * (1 - alpha) + measuredBpm * alpha
      this.bpm = Math.max(bpmMin, Math.min(bpmMax, this.bpm))

      const pull = 0.22 + sens * 0.08 + lock * 0.12
      const maxAdjust = 0.55 - lock * 0.25
      const adj = Math.max(-maxAdjust, Math.min(maxAdjust, phaseErr)) * pull
      this.phase = wrap2pi(this.phase - adj)

      this.tSinceBeat = 0
      this.pulse = 1
    }

    this.pulse *= Math.exp(-dt * (7 + sens * 10))
    return { bpm: this.bpm, phase: this.phase, pulse: this.pulse }
  }
}

export type AudioFeatureConfig = {
  bandCount?: number
  minFreqHz?: number
  maxFreqHz?: number
  /** 0..1 */
  compression?: number
  /** target energy after agc */
  targetEnergy?: number
  /** 0..1 */
  agcSpeed?: number
  /** 0..1 */
  onsetSensitivity?: number
  /** 0..1.5 */
  beatLock?: number
}

export class AudioFeatureEngine {
  private cfg: Required<AudioFeatureConfig>
  private prevSpectrum: Float32Array | null = null
  private spectrum: Float32Array = new Float32Array(0)
  private bands: Float32Array
  private bandMeans: Float32Array
  private agcMean = 0.25
  private beat = new BeatTracker()

  constructor(config: AudioFeatureConfig = {}) {
    this.cfg = {
      bandCount: Math.max(8, Math.min(64, Math.floor(config.bandCount ?? 32))),
      minFreqHz: Math.max(10, config.minFreqHz ?? 40),
      maxFreqHz: Math.max(1000, config.maxFreqHz ?? 16000),
      compression: Math.max(0, Math.min(1, config.compression ?? 0.55)),
      targetEnergy: Math.max(0.02, Math.min(0.8, config.targetEnergy ?? 0.22)),
      agcSpeed: Math.max(0, Math.min(1, config.agcSpeed ?? 0.12)),
      onsetSensitivity: Math.max(0, Math.min(1, config.onsetSensitivity ?? 0.75)),
      beatLock: Math.max(0, Math.min(1.5, config.beatLock ?? 0.9)),
    }
    this.bands = new Float32Array(this.cfg.bandCount)
    this.bandMeans = new Float32Array(this.cfg.bandCount)
    for (let i = 0; i < this.bandMeans.length; i++) this.bandMeans[i] = 0.15
  }

  update(p: { frequencyData: Uint8Array; dt: number; sampleRateHz?: number }): AudioFeatures {
    const fd = p.frequencyData
    const dt = Math.max(0, p.dt)
    const sr = p.sampleRateHz ?? 44100
    const n = fd.length

    if (this.spectrum.length !== n) {
      this.spectrum = new Float32Array(n)
      this.prevSpectrum = null
    }

    // Convert to 0..1
    let energy = 0
    for (let i = 0; i < n; i++) {
      const v = (fd[i] ?? 0) / 255
      this.spectrum[i] = v
      energy += v
    }
    energy = n ? energy / n : 0

    // AGC: bring quiet parts up, prevent loud parts from dominating
    const agcA = 1 - Math.exp(-dt * (0.8 + this.cfg.agcSpeed * 6))
    this.agcMean += (energy - this.agcMean) * agcA
    const gain = clamp01(this.cfg.targetEnergy / Math.max(1e-4, this.agcMean))
    this.cfg.maxFreqHz = Math.min(this.cfg.maxFreqHz, sr / 2)

    // Equalize by log bands mean (prevents "only half moves")
    const bandCount = this.cfg.bandCount
    this.bands.fill(0)
    const counts = new Uint16Array(bandCount)
    const minF = this.cfg.minFreqHz
    const maxF = Math.max(minF + 1, this.cfg.maxFreqHz)
    const binWidth = (sr / 2) / Math.max(1, n)

    for (let i = 0; i < n; i++) {
      const f = (i + 0.5) * binWidth
      if (f < minF || f > maxF) continue
      const t = (Math.log(f) - Math.log(minF)) / (Math.log(maxF) - Math.log(minF))
      const bi = Math.max(0, Math.min(bandCount - 1, Math.floor(t * bandCount)))
      const v = clamp01(this.spectrum[i] * gain)
      this.bands[bi] += v
      counts[bi] += 1
    }

    for (let b = 0; b < bandCount; b++) {
      const c = counts[b] || 1
      const v = this.bands[b] / c
      const meanA = 1 - Math.exp(-dt * 0.25)
      this.bandMeans[b] += (v - this.bandMeans[b]) * meanA
      const eq = v / Math.max(1e-3, this.bandMeans[b])
      // compress and clamp
      const gamma = 1 - this.cfg.compression * 0.55 // 0.45..1
      this.bands[b] = clamp01(Math.pow(Math.min(1.5, eq), gamma))
    }

    // Build equalized+compressed spectrum too (for fine-grain effects)
    const gamma = 1 - this.cfg.compression * 0.55
    for (let i = 0; i < n; i++) {
      const v = clamp01(this.spectrum[i] * gain)
      this.spectrum[i] = clamp01(Math.pow(v, gamma))
    }

    // Onset: spectral flux on equalized spectrum
    let flux = 0
    if (this.prevSpectrum) {
      const step = n > 512 ? 4 : n > 256 ? 2 : 1
      for (let i = 0; i < n; i += step) {
        const d = this.spectrum[i] - this.prevSpectrum[i]
        if (d > 0) flux += d
      }
      flux /= Math.max(1, n / step)
    }
    this.prevSpectrum = new Float32Array(this.spectrum)

    const onset = clamp01(flux * (1.2 + this.cfg.onsetSensitivity * 2.2))
    const beat = this.beat.update({
      dt,
      onset,
      sensitivity: this.cfg.onsetSensitivity,
      lock: this.cfg.beatLock,
    })

    return {
      spectrum: this.spectrum,
      bands: this.bands,
      onset,
      beat,
      agcGain: gain,
    }
  }
}

