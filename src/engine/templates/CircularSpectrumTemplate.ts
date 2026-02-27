/**
 * CircularSpectrumTemplate - Frequency bars in circle.
 * Uses ParameterMappingSystem + raw frequencyData.
 */

import * as THREE from 'three'
import type { ITemplate } from './types'
import type { AudioData } from './types'
import { ParameterMappingSystem } from '../mapping/ParameterMappingSystem'
import { SPECTRUM_MAPPINGS } from './configs/spectrumMappings'

const BAR_COUNT = 128
const RADIUS = 2
const BAR_WIDTH = 0.02
const BAR_HEIGHT_SCALE = 0.015
const SMOOTH_FACTOR = 0.15

export class CircularSpectrumTemplate implements ITemplate {
  private scene: THREE.Scene | null = null
  private group: THREE.Group | null = null
  private bars: THREE.Mesh[] = []
  private geometries: THREE.BoxGeometry[] = []
  private material: THREE.MeshBasicMaterial | null = null
  private mappingSystem: ParameterMappingSystem
  private smoothedHeights: Float32Array = new Float32Array(BAR_COUNT)

  constructor() {
    this.mappingSystem = new ParameterMappingSystem(SPECTRUM_MAPPINGS)
  }

  init(scene: THREE.Scene, _audioData: AudioData): void {
    this.scene = scene
    this.group = new THREE.Group()
    this.bars = []
    this.geometries = []
    this.mappingSystem.reset()
    this.material = new THREE.MeshBasicMaterial({
      color: 0x00aaff,
      transparent: true,
      opacity: 0.9,
    })

    for (let i = 0; i < BAR_COUNT; i++) {
      const geo = new THREE.BoxGeometry(BAR_WIDTH, 0.01, BAR_WIDTH)
      this.geometries.push(geo)
      const mesh = new THREE.Mesh(geo, this.material)
      const angle = (i / BAR_COUNT) * Math.PI * 2
      mesh.position.x = Math.cos(angle) * RADIUS
      mesh.position.z = Math.sin(angle) * RADIUS
      mesh.rotation.y = -angle
      this.group.add(mesh)
      this.bars.push(mesh)
    }

    scene.add(this.group)
  }

  update(audioData: AudioData, _deltaTime: number): void {
    if (!this.group || this.bars.length === 0) return

    const { mapped, frequencyData, binCount } = audioData
    const p = this.mappingSystem.map(mapped)
    const binsPerBar = Math.max(1, Math.floor(binCount / BAR_COUNT))

    for (let i = 0; i < BAR_COUNT; i++) {
      let sum = 0
      const start = i * binsPerBar
      const end = Math.min(start + binsPerBar, binCount)
      const range = end - start
      for (let j = start; j < end; j++) {
        sum += frequencyData[j] ?? 0
      }
      const raw = range > 0 ? sum / range / 255 : 0
      const target = raw * (p.energyScale ?? 1)
      this.smoothedHeights[i] += (target - this.smoothedHeights[i]) * SMOOTH_FACTOR
    }

    const hue = 0.55 + (p.hueOffset ?? 0)
    const color = new THREE.Color().setHSL(hue, 0.8, 0.6)
    this.material?.color.copy(color)

    const scale = p.scale ?? 1
    for (let i = 0; i < BAR_COUNT; i++) {
      const h = Math.max(0.01, this.smoothedHeights[i] * BAR_HEIGHT_SCALE * scale)
      this.bars[i].scale.y = h / 0.01
      this.bars[i].position.y = h / 2
    }

    this.group.rotation.y += p.rotationSpeed ?? 0
  }

  dispose(): void {
    if (this.scene && this.group) {
      this.scene.remove(this.group)
    }
    this.geometries.forEach((g) => g.dispose())
    this.geometries = []
    this.material?.dispose()
    this.bars = []
    this.group = null
    this.material = null
    this.scene = null
  }
}
