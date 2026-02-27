/**
 * Template types - Contracts for audio-reactive visual templates.
 * Each template implements init, update, dispose for proper lifecycle and cleanup.
 */

import type { Scene } from 'three'
import type { MappedParams } from '../mapping/ParameterMappingEngine'

/** Audio data passed to templates - reusable mapped params + raw spectrum */
export interface AudioData {
  /** Mapped low/mid/high bands (0-1, configurable scaling) */
  mapped: MappedParams
  /** Raw FFT bins (0-255), for spectrum visualizers. Length = frequencyBinCount */
  frequencyData: Uint8Array
  /** Number of frequency bins */
  binCount: number
  /** Canvas size for effects (resolution scaling). Optional. */
  resolution?: { width: number; height: number }
}

/** Template lifecycle - init on scene, update each frame, dispose on switch/unmount */
export interface ITemplate {
  /** Called once when template is activated. Add objects to scene. */
  init(scene: Scene, audioData: AudioData): void
  /** Called every frame. audioData.mapped = reusable band mapping. */
  update(audioData: AudioData, deltaTime: number): void
  /** Remove from scene, dispose geometry/material/textures. Prevents GPU leaks. */
  dispose(): void
}
