/**
 * AudioEngine - FFT analysis, frequency band extraction, smoothing.
 * Uses Web Audio API AnalyserNode for real-time audio analysis.
 */

export interface FrequencyBands {
  low: number
  mid: number
  high: number
}

export interface AudioEngineConfig {
  /** FFT size (must be power of 2). Default 2048 */
  fftSize?: number
  /** Smoothing factor 0–1. Higher = smoother, more lag. Default 0.8 */
  smoothingFactor?: number
  /** Low band upper bound (Hz). Default 250 */
  lowCutoff?: number
  /** Mid band upper bound (Hz). Default 4000 */
  midCutoff?: number
  /** Sample rate (Hz). Usually from audio context. Default 44100 */
  sampleRate?: number
}

const DEFAULT_CONFIG: Required<AudioEngineConfig> = {
  fftSize: 2048,
  smoothingFactor: 0.8,
  lowCutoff: 250,
  midCutoff: 4000,
  sampleRate: 44100,
}

export class AudioEngine {
  private audioContext: AudioContext | null = null
  private analyser: AnalyserNode | null = null
  private source: MediaStreamAudioSourceNode | null = null
  private stream: MediaStream | null = null

  private config: Required<AudioEngineConfig>
  private frequencyData: Uint8Array | null = null
  private smoothedBands: FrequencyBands = { low: 0, mid: 0, high: 0 }

  constructor(config: AudioEngineConfig = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config }
  }

  /** Initialize and request microphone access */
  async init(): Promise<void> {
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    this.audioContext = new AudioContext({ sampleRate: this.config.sampleRate })
    this.config.sampleRate = this.audioContext.sampleRate

    this.analyser = this.audioContext.createAnalyser()
    this.analyser.fftSize = this.config.fftSize
    this.analyser.smoothingTimeConstant = this.config.smoothingFactor
    this.analyser.minDecibels = -80
    this.analyser.maxDecibels = -10

    this.source = this.audioContext.createMediaStreamSource(this.stream)
    this.source.connect(this.analyser)

    this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount)
  }

  /** Update smoothing factor at runtime (0–1) */
  setSmoothingFactor(factor: number): void {
    this.config.smoothingFactor = Math.max(0, Math.min(1, factor))
    if (this.analyser) {
      this.analyser.smoothingTimeConstant = this.config.smoothingFactor
    }
  }

  /** Raw FFT bins (0-255). Call getFrequencyBands first to populate. Returns copy. */
  getFrequencyData(): Uint8Array {
    if (!this.frequencyData) return new Uint8Array(0)
    return new Uint8Array(this.frequencyData)
  }

  /** Frequency bin count (fftSize / 2) */
  get frequencyBinCount(): number {
    return this.frequencyData?.length ?? 0
  }

  /** Get raw frequency bands (0–1 normalized). Fills frequencyData for getFrequencyData(). */
  getFrequencyBands(): FrequencyBands {
    if (!this.analyser || !this.frequencyData) {
      return this.smoothedBands
    }

    this.analyser.getByteFrequencyData(this.frequencyData)
    const binCount = this.frequencyData.length
    const nyquist = this.config.sampleRate / 2
    const binWidth = nyquist / binCount

    const lowEnd = Math.floor(this.config.lowCutoff / binWidth)
    const midEnd = Math.floor(this.config.midCutoff / binWidth)

    const low = this.averageInRange(0, lowEnd)
    const mid = this.averageInRange(lowEnd, midEnd)
    const high = this.averageInRange(midEnd, binCount)

    this.smoothedBands = {
      low: low / 255,
      mid: mid / 255,
      high: high / 255,
    }

    return this.smoothedBands
  }

  private averageInRange(start: number, end: number): number {
    if (!this.frequencyData || start >= end) return 0
    let sum = 0
    let count = 0
    for (let i = start; i < end; i++) {
      sum += this.frequencyData[i]
      count++
    }
    return count > 0 ? sum / count : 0
  }

  /** Dispose and release resources */
  dispose(): void {
    if (this.stream) {
      this.stream.getTracks().forEach((t) => t.stop())
    }
    this.source?.disconnect()
    this.audioContext?.close()
    this.audioContext = null
    this.analyser = null
    this.source = null
    this.stream = null
    this.frequencyData = null
  }
}
