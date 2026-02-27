/**
 * Effect system - init, update, setParams, dispose.
 */

import type { Scene } from 'three'
import type { AudioData } from '../core/types'

export interface IEffect {
  init(scene: Scene): void
  update(audioData: AudioData, deltaTime: number): void
  setParams(params: Record<string, unknown>): void
  dispose(): void
}
