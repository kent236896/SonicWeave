/**
 * RenderLoopController - Single RAF loop for rendering.
 * Drives AudioEngine → ParameterMappingEngine → Template (init/update) → VisualEngine render.
 * Ensures proper dispose() when switching templates to prevent GPU memory leaks.
 */

import * as THREE from 'three'
import type { AudioEngine } from '../audio/AudioEngine'
import type { ParameterMappingEngine } from '../mapping/ParameterMappingEngine'
import type { VisualEngine } from '../visual/VisualEngine'
import type { ITemplate } from '../templates/types'
import type { AudioData } from '../templates/types'

export type { ITemplate } from '../templates/types'

export class RenderLoopController {
  private audioEngine: AudioEngine
  private mappingEngine: ParameterMappingEngine
  private visualEngine: VisualEngine
  private template: ITemplate | null = null

  private rafId: number | null = null
  private isRunning = false
  private lastTime = 0
  private frequencyDataCopy: Uint8Array = new Uint8Array(0)

  constructor(
    audioEngine: AudioEngine,
    mappingEngine: ParameterMappingEngine,
    visualEngine: VisualEngine
  ) {
    this.audioEngine = audioEngine
    this.mappingEngine = mappingEngine
    this.visualEngine = visualEngine
  }

  /** Set active template. Disposes previous template before init of new one. */
  setTemplate(template: ITemplate | null): void {
    this.template?.dispose()
    this.template = template

    if (template) {
      const bands = this.audioEngine.getFrequencyBands()
      const mapped = this.mappingEngine.map(bands)
      const freq = this.audioEngine.getFrequencyData()
      if (freq.length !== this.frequencyDataCopy.length) {
        this.frequencyDataCopy = new Uint8Array(freq.length)
      }
      this.frequencyDataCopy.set(freq)
      const size = new THREE.Vector2()
      this.visualEngine.getSize(size)
      const audioData: AudioData = {
        mapped,
        frequencyData: this.frequencyDataCopy,
        binCount: this.audioEngine.frequencyBinCount,
        resolution: { width: size.x, height: size.y },
      }
      template.init(this.visualEngine.scene, audioData)
    }
  }

  /** Start render loop */
  start(): void {
    if (this.isRunning) return
    this.isRunning = true
    this.lastTime = performance.now()
    this.tick()
  }

  /** Stop render loop */
  stop(): void {
    this.isRunning = false
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId)
      this.rafId = null
    }
  }

  private tick = (): void => {
    if (!this.isRunning) return

    const now = performance.now()
    const deltaTime = (now - this.lastTime) / 1000
    this.lastTime = now

    const bands = this.audioEngine.getFrequencyBands()
    const mapped = this.mappingEngine.map(bands)
    const freq = this.audioEngine.getFrequencyData()
    if (freq.length !== this.frequencyDataCopy.length) {
      this.frequencyDataCopy = new Uint8Array(freq.length)
    }
    this.frequencyDataCopy.set(freq)

    const size = new THREE.Vector2()
    this.visualEngine.getSize(size)

    const audioData: AudioData = {
      mapped,
      frequencyData: this.frequencyDataCopy,
      binCount: this.audioEngine.frequencyBinCount,
      resolution: { width: size.x, height: size.y },
    }

    this.template?.update(audioData, deltaTime)
    this.visualEngine.render()

    this.rafId = requestAnimationFrame(this.tick)
  }
}
