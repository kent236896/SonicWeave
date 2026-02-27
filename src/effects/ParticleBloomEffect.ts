/**
 * ParticleBloomEffect - IEffect wrapper.
 * Low → particle size, Mid → rotation speed, High → particle count.
 */

import * as THREE from 'three'
import type { IEffect } from './types'
import type { AudioData } from '../core/types'

const GROUP_SIZE = 800
const GROUP_COUNT = 20

function createCircleTexture(): THREE.CanvasTexture {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) {
    return new THREE.CanvasTexture(canvas)
  }

  ctx.clearRect(0, 0, size, size)
  const r = size / 2
  const grd = ctx.createRadialGradient(r, r, 0, r, r, r)
  grd.addColorStop(0, 'rgba(255,255,255,1)')
  grd.addColorStop(1, 'rgba(255,255,255,0)')

  ctx.fillStyle = grd
  ctx.beginPath()
  ctx.arc(r, r, r, 0, Math.PI * 2)
  ctx.closePath()
  ctx.fill()

  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

interface ParticleParams {
  baseSize?: number
  rotationSpeed?: number
  maxGroups?: number
  hue?: number
  opacity?: number
}

export class ParticleBloomEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private groups: THREE.Points[] = []
  private geometries: THREE.BufferGeometry[] = []
  private material: THREE.PointsMaterial | null = null
  private params: Required<ParticleParams> = {
    baseSize: 0.04,
    rotationSpeed: 2,
    maxGroups: 20,
    hue: 0.55,
    opacity: 0.8,
  }
  private rotationY = 0

  init(scene: THREE.Scene): void {
    this.scene = scene
    this.rotationY = 0
    this.material = new THREE.PointsMaterial({
      size: this.params.baseSize,
      color: 0x4488ff,
      transparent: true,
      opacity: this.params.opacity,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      map: createCircleTexture(),
      alphaTest: 0.4,
    })

    for (let g = 0; g < GROUP_COUNT; g++) {
      const pos = new Float32Array(GROUP_SIZE * 3)
      for (let i = 0; i < GROUP_SIZE; i++) {
        const r = 1.5 + Math.random() * 2
        const th = Math.random() * Math.PI * 2
        const ph = Math.random() * Math.PI
        pos[i * 3] = r * Math.sin(ph) * Math.cos(th)
        pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th)
        pos[i * 3 + 2] = r * Math.cos(ph)
      }
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
      const points = new THREE.Points(geo, this.material)
      this.groups.push(points)
      this.geometries.push(geo)
      scene.add(points)
    }
  }

  update(d: AudioData, dt: number): void {
    if (!this.material || !this.groups.length) return
    const { mapped } = d
    const low = mapped.low
    const mid = mapped.mid
    const high = mapped.high
    const energy = mapped.energy

    this.material.size = this.params.baseSize * (0.3 + energy * 2)
    this.rotationY += mid * this.params.rotationSpeed * 0.03 * 60 * dt
    const hue = this.params.hue + high * 0.3
    this.material.color.copy(new THREE.Color().setHSL(hue, 0.7, 0.6))
    this.material.opacity = this.params.opacity

    const maxGroups = Math.min(GROUP_COUNT, Math.max(1, Math.round(this.params.maxGroups)))
    const visibleGroups = Math.max(1, Math.floor(1 + high * (maxGroups - 1)))
    for (let i = 0; i < GROUP_COUNT; i++) {
      this.groups[i].visible = i < visibleGroups
    }
    this.groups.forEach((g) => {
      g.rotation.y = this.rotationY
    })
  }

  setParams(p: Record<string, unknown>): void {
    const x = p as ParticleParams
    if (typeof x.baseSize === 'number') this.params.baseSize = Math.max(0.01, Math.min(0.16, x.baseSize))
    if (typeof x.rotationSpeed === 'number') this.params.rotationSpeed = Math.max(0, Math.min(6, x.rotationSpeed))
    if (typeof x.maxGroups === 'number') this.params.maxGroups = Math.max(1, Math.min(20, Math.round(x.maxGroups)))
    if (typeof x.hue === 'number') this.params.hue = Math.max(0, Math.min(1, x.hue))
    if (typeof x.opacity === 'number') this.params.opacity = Math.max(0.2, Math.min(1, x.opacity))
  }

  dispose(): void {
    if (this.scene) {
      this.groups.forEach((g) => this.scene!.remove(g))
    }
    this.geometries.forEach((geo) => geo.dispose())
    this.material?.dispose()
    this.groups = []
    this.geometries = []
    this.material = null
    this.scene = null
  }
}
