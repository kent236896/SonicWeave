/**
 * ParticleBloomTemplate - Audio-reactive particle sphere.
 * Uses ParameterMappingSystem for data-driven band mapping.
 */

import * as THREE from 'three'
import type { ITemplate } from './types'
import type { AudioData } from './types'
import { ParameterMappingSystem } from '../mapping/ParameterMappingSystem'
import { PARTICLE_MAPPINGS } from './configs/particleMappings'

const PARTICLE_COUNT = 8000

export class ParticleBloomTemplate implements ITemplate {
  private scene: THREE.Scene | null = null
  private points: THREE.Points | null = null
  private geometry: THREE.BufferGeometry | null = null
  private material: THREE.PointsMaterial | null = null
  private mappingSystem: ParameterMappingSystem

  private baseSize = 0.02
  private rotationY = 0

  constructor() {
    this.mappingSystem = new ParameterMappingSystem(PARTICLE_MAPPINGS)
  }

  init(scene: THREE.Scene, _audioData: AudioData): void {
    this.scene = scene
    this.rotationY = 0
    this.mappingSystem.reset()

    const positions = new Float32Array(PARTICLE_COUNT * 3)

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const radius = 1.5 + Math.random() * 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = radius * Math.cos(phi)
    }

    this.geometry = new THREE.BufferGeometry()
    this.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    this.material = new THREE.PointsMaterial({
      size: this.baseSize,
      color: 0x4488ff,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    this.points = new THREE.Points(this.geometry, this.material)
    scene.add(this.points)
  }

  update(audioData: AudioData, deltaTime: number): void {
    if (!this.material || !this.points) return

    const p = this.mappingSystem.map(audioData.mapped)

    this.material.size = this.baseSize * (p.size ?? 1)
    this.rotationY += (p.rotationSpeed ?? 0) * 60 * deltaTime
    this.points.rotation.y = this.rotationY

    const hue = 0.55 + (p.hueOffset ?? 0)
    const color = new THREE.Color().setHSL(hue, 0.7, 0.6)
    this.material.color.copy(color)
  }

  dispose(): void {
    if (this.scene && this.points) {
      this.scene.remove(this.points)
    }
    this.geometry?.dispose()
    this.material?.dispose()
    this.points = null
    this.geometry = null
    this.material = null
    this.scene = null
  }
}
