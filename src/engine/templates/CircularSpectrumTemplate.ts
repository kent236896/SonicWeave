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

    const { mapped, frequencyData, binCount, resolution } = audioData
    const p = this.mappingSystem.map(mapped)
    const step = binCount > 0 ? binCount / BAR_COUNT : 1

    for (let i = 0; i < BAR_COUNT; i++) {
      let sum = 0
      const start = Math.floor(i * step)
      const end = Math.floor((i + 1) * step)
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

    // 基于 canvas 分辨率和相机视锥，动态限制柱子最大高度，
    // 让不同分辨率下条形始终刚好“填满”可视区域而不会溢出或太矮。
    const cameraZ = 5
    const fovRad = (60 * Math.PI) / 180
    const halfHeight = cameraZ * Math.tan(fovRad / 2)
    const aspect =
      resolution && resolution.height > 0
        ? resolution.width / resolution.height
        : 1
    const baseMaxVertical = halfHeight * 0.95
    const maxVertical = baseMaxVertical * scale

    for (let i = 0; i < BAR_COUNT; i++) {
      const rawH = Math.max(0.01, this.smoothedHeights[i] * BAR_HEIGHT_SCALE * scale)
      const h = Math.min(maxVertical, rawH)
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
