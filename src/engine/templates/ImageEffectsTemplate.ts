/**
 * ImageEffectsTemplate - ImageLayer + FerrofluidEffect overlay.
 * Load image as background, ferrofluid effect on top.
 */

import * as THREE from 'three'
import type { ITemplate } from './types'
import type { AudioData } from './types'
import { ImageLayer } from '../layers/ImageLayer'
import { EffectLayer } from '../effects/EffectLayer'
import { FerrofluidEffect } from '../effects/FerrofluidEffect'

export class ImageEffectsTemplate implements ITemplate {
  private scene: THREE.Scene | null = null
  private imageLayer: ImageLayer
  private effectLayer: EffectLayer
  private ferrofluidEffect: FerrofluidEffect

  constructor() {
    this.imageLayer = new ImageLayer()
    this.ferrofluidEffect = new FerrofluidEffect({
      blobCount: 6,
      blobSize: 0.2,
      noiseStrength: 0.06,
      audioReactive: true,
    })
    this.effectLayer = new EffectLayer()
    this.effectLayer.addEffect(this.ferrofluidEffect)
  }

  /** Load image before or after init. Call from external (e.g. file picker). */
  loadImage(url: string): Promise<boolean> {
    return this.imageLayer.loadFromUrl(url)
  }

  setImageParams(scale: number, rotation: number): void {
    this.imageLayer.setParams({ scale, rotation })
  }

  init(scene: THREE.Scene, audioData: AudioData): void {
    this.scene = scene
    this.imageLayer.init(scene)
    this.effectLayer.init(scene)
    if (audioData.resolution) {
      this.ferrofluidEffect.setResolution(
        audioData.resolution.width,
        audioData.resolution.height
      )
    }
  }

  update(audioData: AudioData, deltaTime: number): void {
    this.imageLayer.update()
    if (audioData.resolution) {
      this.ferrofluidEffect.setResolution(
        audioData.resolution.width,
        audioData.resolution.height
      )
    }
    this.effectLayer.update(audioData, deltaTime)
  }

  dispose(): void {
    this.imageLayer.dispose()
    this.effectLayer.dispose()
    this.scene = null
  }
}
