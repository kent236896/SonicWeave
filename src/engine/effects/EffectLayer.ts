/**
 * EffectLayer - Manages modular effects.
 * Clean separation: effects init on scene, update each frame, proper dispose.
 */

import type { Scene } from 'three'
import type { IEffect } from './types'
import type { AudioData } from '../templates/types'

export class EffectLayer {
  private effects: IEffect[] = []
  private scene: Scene | null = null

  addEffect(effect: IEffect): void {
    if (this.scene) effect.init(this.scene)
    this.effects.push(effect)
  }

  removeEffect(effect: IEffect): void {
    effect.dispose()
    this.effects = this.effects.filter((e) => e !== effect)
  }

  init(scene: Scene): void {
    this.scene = scene
    for (const e of this.effects) e.init(scene)
  }

  update(audioData: AudioData, deltaTime: number): void {
    for (const e of this.effects) e.update(audioData, deltaTime)
  }

  dispose(): void {
    for (const e of this.effects) e.dispose()
    this.effects = []
    this.scene = null
  }
}
