/**
 * EffectManager - Manage one or more active effects. Clean disposal.
 */

import type { Scene } from 'three'
import type { IEffect } from '../effects/types'
import type { AudioData } from './types'

export type EffectId = 'particles' | 'spectrum' | 'tunnel'

export class EffectManager {
  private effects: IEffect[] = []

  /** Replace all active effects with a new list (for layers). */
  setEffects(effects: IEffect[], scene: Scene): void {
    this.dispose()
    this.effects = []
    effects.forEach((effect) => {
      effect.init(scene)
      this.effects.push(effect)
    })
  }

  update(audioData: AudioData, deltaTime: number): void {
    for (const effect of this.effects) {
      effect.update(audioData, deltaTime)
    }
  }

  getEffects(): IEffect[] {
    return this.effects
  }

  dispose(): void {
    for (const effect of this.effects) {
      effect.dispose()
    }
    this.effects = []
  }
}
