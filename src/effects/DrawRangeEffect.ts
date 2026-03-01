/**
 * DrawRangeEffect - 粒子网络连线。基于 webgl_buffergeometry_drawrange。
 * 粒子在立方体内运动，距离近的粒子之间绘制连线。
 */

import * as THREE from 'three'
import type { IEffect } from './types'
import type { AudioData } from '../core/types'

interface ParticleData {
  velocity: THREE.Vector3
  numConnections: number
}

interface DrawRangeParams {
  color?: string
  lineColor?: string
  particleCount?: number
  minDistance?: number
  maxConnections?: number
  limitConnections?: boolean
  showDots?: boolean
  showLines?: boolean
  pointSize?: number
  lineBrightness?: number
  reactCount?: number
  reactDistance?: number
  reactSpeed?: number
  reactRotation?: number
}

function clamp(v: number, a: number, b: number): number {
  return Math.max(a, Math.min(b, v))
}

const MAX_PARTICLE_COUNT = 300

export class DrawRangeEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private group: THREE.Group | null = null
  private pointCloud: THREE.Points | null = null
  private linesMesh: THREE.LineSegments | null = null
  private particles: THREE.BufferGeometry | null = null
  private particlePositions: Float32Array | null = null
  private positions: Float32Array | null = null
  private colors: Float32Array | null = null
  private particlesData: ParticleData[] = []
  private smoothEnergy = 0.3
  private smoothLow = 0.3
  private smoothHigh = 0.3

  private params: Required<DrawRangeParams> = {
    color: '#4488ff',
    lineColor: '#66aaff',
    particleCount: 120,
    minDistance: 0.4,
    maxConnections: 15,
    limitConnections: true,
    showDots: true,
    showLines: true,
    pointSize: 0.018,
    lineBrightness: 1.0,
    reactCount: 2.0,
    reactDistance: 1.5,
    reactSpeed: 2.0,
    reactRotation: 1.5,
  }

  private r = 2
  private rHalf = 1

  init(scene: THREE.Scene): void {
    this.scene = scene
    this.group = new THREE.Group()
    this.group.renderOrder = 20
    scene.add(this.group)

    const segments = MAX_PARTICLE_COUNT * MAX_PARTICLE_COUNT
    this.positions = new Float32Array(segments * 3)
    this.colors = new Float32Array(segments * 3)
    this.particlePositions = new Float32Array(MAX_PARTICLE_COUNT * 3)

    this.particlesData = []
    for (let i = 0; i < MAX_PARTICLE_COUNT; i++) {
      const x = Math.random() * this.r - this.rHalf
      const y = Math.random() * this.r - this.rHalf
      const z = Math.random() * this.r - this.rHalf
      this.particlePositions[i * 3] = x
      this.particlePositions[i * 3 + 1] = y
      this.particlePositions[i * 3 + 2] = z
      this.particlesData.push({
        velocity: new THREE.Vector3(0.002 * (-1 + Math.random() * 2), 0.002 * (-1 + Math.random() * 2), 0.002 * (-1 + Math.random() * 2)),
        numConnections: 0,
      })
    }

    const pMaterial = new THREE.PointsMaterial({
      color: this.params.color,
      size: this.params.pointSize,
      blending: THREE.AdditiveBlending,
      transparent: true,
      sizeAttenuation: true,
      depthWrite: false,
    })

    this.particles = new THREE.BufferGeometry()
    this.particles.setDrawRange(0, this.params.particleCount)
    this.particles.setAttribute('position', new THREE.BufferAttribute(this.particlePositions, 3).setUsage(THREE.DynamicDrawUsage))

    this.pointCloud = new THREE.Points(this.particles, pMaterial)
    this.group.add(this.pointCloud)

    const lineGeometry = new THREE.BufferGeometry()
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(this.positions, 3).setUsage(THREE.DynamicDrawUsage))
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(this.colors, 3).setUsage(THREE.DynamicDrawUsage))
    lineGeometry.setDrawRange(0, 0)

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      depthWrite: false,
    })

    this.linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial)
    this.group.add(this.linesMesh)
  }

  update(d: AudioData, dt: number): void {
    if (!this.pointCloud || !this.linesMesh || !this.particles || !this.particlePositions || !this.positions || !this.colors) return

    const { low, high, energy } = d.mapped
    const a = 1 - Math.exp(-dt / 0.008)
    this.smoothEnergy += (energy - this.smoothEnergy) * a
    this.smoothLow += (low - this.smoothLow) * a
    this.smoothHigh += (high - this.smoothHigh) * a

    const e = Math.min(1, this.smoothEnergy * 1.6)
    const particleCount = Math.round(
      this.params.particleCount * (1 + e * this.params.reactCount)
    )
    const clampedCount = Math.min(MAX_PARTICLE_COUNT, Math.max(20, particleCount))
    this.particles.setDrawRange(0, clampedCount)

    const minDist = this.params.minDistance * (1 + e * this.params.reactDistance)
    const speedMult = 1 + e * this.params.reactSpeed

    let vertexpos = 0
    let colorpos = 0
    let numConnected = 0

    for (let i = 0; i < clampedCount; i++) this.particlesData[i].numConnections = 0

    for (let i = 0; i < clampedCount; i++) {
      const particleData = this.particlesData[i]
      this.particlePositions[i * 3] += particleData.velocity.x * speedMult
      this.particlePositions[i * 3 + 1] += particleData.velocity.y * speedMult
      this.particlePositions[i * 3 + 2] += particleData.velocity.z * speedMult

      if (this.particlePositions[i * 3 + 1] < -this.rHalf || this.particlePositions[i * 3 + 1] > this.rHalf)
        particleData.velocity.y = -particleData.velocity.y
      if (this.particlePositions[i * 3] < -this.rHalf || this.particlePositions[i * 3] > this.rHalf)
        particleData.velocity.x = -particleData.velocity.x
      if (this.particlePositions[i * 3 + 2] < -this.rHalf || this.particlePositions[i * 3 + 2] > this.rHalf)
        particleData.velocity.z = -particleData.velocity.z

      if (this.params.limitConnections && particleData.numConnections >= this.params.maxConnections) continue

      for (let j = i + 1; j < clampedCount; j++) {
        const particleDataB = this.particlesData[j]
        if (this.params.limitConnections && particleDataB.numConnections >= this.params.maxConnections) continue

        const dx = this.particlePositions[i * 3] - this.particlePositions[j * 3]
        const dy = this.particlePositions[i * 3 + 1] - this.particlePositions[j * 3 + 1]
        const dz = this.particlePositions[i * 3 + 2] - this.particlePositions[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (dist < minDist) {
          particleData.numConnections++
          particleDataB.numConnections++

          const alpha = (1.0 - dist / minDist) * (0.7 + 0.3 * this.smoothEnergy)
          const c = new THREE.Color(this.params.lineColor)
          const bright = this.params.lineBrightness * (0.5 + 0.5 * alpha)

          this.positions[vertexpos++] = this.particlePositions[i * 3]
          this.positions[vertexpos++] = this.particlePositions[i * 3 + 1]
          this.positions[vertexpos++] = this.particlePositions[i * 3 + 2] 
          this.positions[vertexpos++] = this.particlePositions[j * 3]
          this.positions[vertexpos++] = this.particlePositions[j * 3 + 1]
          this.positions[vertexpos++] = this.particlePositions[j * 3 + 2]

          this.colors[colorpos++] = Math.min(1, c.r * bright)
          this.colors[colorpos++] = Math.min(1, c.g * bright)
          this.colors[colorpos++] = Math.min(1, c.b * bright)
          this.colors[colorpos++] = Math.min(1, c.r * bright)
          this.colors[colorpos++] = Math.min(1, c.g * bright)
          this.colors[colorpos++] = Math.min(1, c.b * bright)

          numConnected++
        }
      }
    }

    this.linesMesh.geometry.setDrawRange(0, numConnected * 2)
    this.linesMesh.geometry.attributes.position.needsUpdate = true
    this.linesMesh.geometry.attributes.color.needsUpdate = true
    this.particles.attributes.position.needsUpdate = true

    this.pointCloud.visible = this.params.showDots
    this.linesMesh.visible = this.params.showLines

    const rotSpeed = 0.2 + this.smoothEnergy * 0.9 * this.params.reactRotation + this.smoothLow * 0.4
    this.group!.rotation.y += dt * rotSpeed
    this.group!.rotation.x = this.smoothLow * 0.6
    this.group!.scale.setScalar(0.88 + this.smoothEnergy * 0.28)

    if (this.pointCloud.material instanceof THREE.PointsMaterial) {
      this.pointCloud.material.color.set(this.params.color)
      this.pointCloud.material.size = this.params.pointSize * (0.8 + 0.2 * this.smoothEnergy + this.smoothHigh * 0.4)
    }
  }

  setParams(p: Record<string, unknown>): void {
    const x = p as DrawRangeParams
    if (typeof x.color === 'string') this.params.color = x.color
    if (typeof x.lineColor === 'string') this.params.lineColor = x.lineColor
    if (typeof x.particleCount === 'number')
      this.params.particleCount = clamp(x.particleCount, 10, MAX_PARTICLE_COUNT)
    if (typeof x.minDistance === 'number')
      this.params.minDistance = clamp(x.minDistance, 0.1, 1.5)
    if (typeof x.maxConnections === 'number')
      this.params.maxConnections = clamp(x.maxConnections, 0, 30)
    if (typeof x.limitConnections === 'boolean') this.params.limitConnections = x.limitConnections
    if (typeof x.showDots === 'boolean') this.params.showDots = x.showDots
    if (typeof x.showLines === 'boolean') this.params.showLines = x.showLines
    if (typeof x.pointSize === 'number')
      this.params.pointSize = clamp(x.pointSize, 0.005, 0.08)
    if (typeof x.lineBrightness === 'number')
      this.params.lineBrightness = clamp(x.lineBrightness, 0.3, 2)
    if (typeof x.reactCount === 'number') this.params.reactCount = clamp(x.reactCount, 0, 3)
    if (typeof x.reactDistance === 'number') this.params.reactDistance = clamp(x.reactDistance, 0, 3)
    if (typeof x.reactSpeed === 'number') this.params.reactSpeed = clamp(x.reactSpeed, 0, 4)
    if (typeof x.reactRotation === 'number') this.params.reactRotation = clamp(x.reactRotation, 0, 3)

    if (this.particles) this.particles.setDrawRange(0, this.params.particleCount)
    if (this.pointCloud) {
      this.pointCloud.visible = this.params.showDots
      if (this.pointCloud.material instanceof THREE.PointsMaterial) {
        this.pointCloud.material.color.set(this.params.color)
        this.pointCloud.material.size = this.params.pointSize
      }
    }
    if (this.linesMesh) this.linesMesh.visible = this.params.showLines
  }

  dispose(): void {
    if (this.scene && this.group) this.scene.remove(this.group)
    this.particles?.dispose()
    this.pointCloud?.geometry?.dispose()
    ;(this.pointCloud?.material as THREE.Material)?.dispose()
    this.linesMesh?.geometry?.dispose()
    ;(this.linesMesh?.material as THREE.Material)?.dispose()
    this.pointCloud = null
    this.linesMesh = null
    this.particles = null
    this.particlePositions = null
    this.positions = null
    this.colors = null
    this.group = null
    this.scene = null
  }
}
