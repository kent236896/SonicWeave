/**
 * AudioEngine - FFT analysis from mic or file source.
 * Playback control for file source.
 */

export interface FrequencyBands {
  low: number
  mid: number
  high: number
}

export interface AudioEngineConfig {
  fftSize?: number
  smoothingFactor?: number
  lowCutoff?: number
  midCutoff?: number
  sampleRate?: number
}

const DEFAULT_CONFIG = {
  fftSize: 2048,
  smoothingFactor: 0.8,
  lowCutoff: 250,
  midCutoff: 4000,
  sampleRate: 44100,
}

export class AudioEngine {
  private audioContext: AudioContext | null = null
  private analyser: AnalyserNode | null = null
  private source: MediaStreamAudioSourceNode | MediaElementAudioSourceNode | null = null
  private stream: MediaStream | null = null
  private audioElement: HTMLAudioElement | null = null
  private currentBlobUrl: string | null = null

  private config: Required<AudioEngineConfig>
  private frequencyData: Uint8Array | null = null
  private smoothedBands: FrequencyBands = { low: 0, mid: 0, high: 0 }

  constructor(config: AudioEngineConfig = {}) {
    this.config = { ...DEFAULT_CONFIG, ...config }
  }

  /** Initialize with microphone */
  async initMic(): Promise<void> {
    this.cleanupSource()
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

  /** Load audio file. Returns true on success. */
  async loadFile(file: File): Promise<boolean> {
    if (this.currentBlobUrl) {
      URL.revokeObjectURL(this.currentBlobUrl)
      this.currentBlobUrl = null
    }
    this.cleanupSource()
    if (!this.audioContext) {
      this.audioContext = new AudioContext({ sampleRate: this.config.sampleRate })
    }
    const url = URL.createObjectURL(file)
    const el = new Audio()
    el.crossOrigin = 'anonymous'
    el.loop = true

    return new Promise((resolve) => {
      let initialized = false

      el.oncanplaythrough = () => {
        if (initialized) return
        initialized = true

        if (this.audioContext?.state === 'suspended') {
          this.audioContext.resume()
        }
        this.audioElement = el
        this.analyser = this.audioContext!.createAnalyser()
        this.analyser.fftSize = this.config.fftSize
        this.analyser.smoothingTimeConstant = this.config.smoothingFactor
        this.analyser.minDecibels = -80
        this.analyser.maxDecibels = -10

        this.source = this.audioContext!.createMediaElementSource(el)
        this.source.connect(this.analyser)
        this.analyser.connect(this.audioContext!.destination)
        this.frequencyData = new Uint8Array(this.analyser.frequencyBinCount)
        this.currentBlobUrl = url
        resolve(true)
      }
      el.onerror = () => {
        URL.revokeObjectURL(url)
        resolve(false)
      }
      el.src = url
    })
  }

  private cleanupSource(): void {
    if (this.stream) {
      this.stream.getTracks().forEach((t) => t.stop())
    }
    this.source?.disconnect()
    this.audioElement = null
    this.stream = null
    this.source = null
    if (this.currentBlobUrl) {
      URL.revokeObjectURL(this.currentBlobUrl)
      this.currentBlobUrl = null
    }
  }

  play(): void {
    this.audioElement?.play()
  }

  pause(): void {
    this.audioElement?.pause()
  }

  get isPlaying(): boolean {
    return this.audioElement ? !this.audioElement.paused : false
  }

  get currentTime(): number {
    return this.audioElement?.currentTime ?? 0
  }

  get duration(): number {
    return this.audioElement?.duration ?? 0
  }

  set currentTime(t: number) {
    if (this.audioElement) this.audioElement.currentTime = t
  }

  setSmoothingFactor(f: number): void {
    this.config.smoothingFactor = Math.max(0, Math.min(1, f))
    if (this.analyser) this.analyser.smoothingTimeConstant = this.config.smoothingFactor
  }

  getFrequencyData(): Uint8Array {
    if (!this.frequencyData) return new Uint8Array(0)
    return new Uint8Array(this.frequencyData)
  }

  get frequencyBinCount(): number {
    return this.frequencyData?.length ?? 0
  }

  getFrequencyBands(): FrequencyBands {
    if (!this.analyser || !this.frequencyData) return this.smoothedBands

    this.analyser.getByteFrequencyData(this.frequencyData)
    const binCount = this.frequencyData.length
    const nyquist = (this.audioContext?.sampleRate ?? 44100) / 2
    const binWidth = nyquist / binCount
    const lowEnd = Math.floor(this.config.lowCutoff / binWidth)
    const midEnd = Math.floor(this.config.midCutoff / binWidth)

    const low = this.avg(0, lowEnd)
    const mid = this.avg(lowEnd, midEnd)
    const high = this.avg(midEnd, binCount)

    this.smoothedBands = { low: low / 255, mid: mid / 255, high: high / 255 }
    return this.smoothedBands
  }

  private avg(start: number, end: number): number {
    if (!this.frequencyData || start >= end) return 0
    let s = 0
    for (let i = start; i < end; i++) s += this.frequencyData[i]
    return s / (end - start)
  }

  hasAudioSource(): boolean {
    return !!(this.source || this.stream)
  }

  dispose(): void {
    this.cleanupSource()
    this.audioContext?.close()
    this.audioContext = null
    this.analyser = null
    this.frequencyData = null
  }
}
