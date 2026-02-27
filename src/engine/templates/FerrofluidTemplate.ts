/**
 * FerrofluidTemplate - EffectLayer with FerrofluidEffect.
 * Blob merging, noise, audio-reactive. Uses resolution from audioData.
 */

import type { ITemplate } from './types'
import type { AudioData } from './types'
import { EffectLayer } from '../effects/EffectLayer'
import { FerrofluidEffect } from '../effects/FerrofluidEffect'

export class FerrofluidTemplate implements ITemplate {
  private effectLayer: EffectLayer
  private ferrofluidEffect: FerrofluidEffect

  constructor() {
    this.ferrofluidEffect = new FerrofluidEffect({
      blobCount: 8,
      blobSize: 0.25,
      noiseStrength: 0.08,
      noiseSpeed: 1,
      threshold: 0.02,
      smoothness: 0.15,
      audioReactive: true,
      resolutionScale: 1,
    })
    this.effectLayer = new EffectLayer()
    this.effectLayer.addEffect(this.ferrofluidEffect)
  }

  init(scene: import('three').Scene, audioData: AudioData): void {
    this.effectLayer.init(scene)
    if (audioData.resolution) {
      this.ferrofluidEffect.setResolution(
        audioData.resolution.width,
        audioData.resolution.height
      )
    }
  }

  update(audioData: AudioData, deltaTime: number): void {
    if (audioData.resolution) {
      this.ferrofluidEffect.setResolution(
        audioData.resolution.width,
        audioData.resolution.height
      )
    }
    this.effectLayer.update(audioData, deltaTime)
  }

  dispose(): void {
    this.effectLayer.dispose()
  }
}
