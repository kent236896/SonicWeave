/**
 * CSS3DSpritesEffect - WebGL approximation of css3d_sprites.
 * Sprites in 3D space with layout transitions (plane, cube, sphere, random).
 */

import * as THREE from 'three'
import type { IEffect } from './types'
import type { AudioData } from '../core/types'

const PARTICLES_TOTAL = 512

function createSpriteTexture(): THREE.CanvasTexture {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) return new THREE.CanvasTexture(canvas)

  ctx.clearRect(0, 0, size, size)
  const r = size / 2
  const grd = ctx.createRadialGradient(r, r, 0, r, r, r)
  grd.addColorStop(0, 'rgba(255,255,255,1)')
  grd.addColorStop(0.7, 'rgba(255,255,255,0.9)')
  grd.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = grd
  ctx.beginPath()
  ctx.arc(r, r, r, 0, Math.PI * 2)
  ctx.fill()

  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

type Layout = 'plane' | 'cube' | 'sphere' | 'random'

interface SpritesParams {
  color?: string
  opacity?: number
  size?: number
  layout?: Layout
  transitionDuration?: number
  pulseSpeed?: number
  pulseAmount?: number
  reactScale?: number
  reactRotation?: number
  reactPulse?: number
  reactHue?: number
}

function clamp(v: number, a: number, b: number): number {
  return Math.max(a, Math.min(b, v))
}

export class CSS3DSpritesEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private points: THREE.Points | null = null
  private geo: THREE.BufferGeometry | null = null
  private mat: THREE.PointsMaterial | null = null
  private group: THREE.Group | null = null

  private positions: number[] = []
  private currentPos = new Float32Array(PARTICLES_TOTAL * 3)
  private targetPos = new Float32Array(PARTICLES_TOTAL * 3)
  private layoutIndex = 0
  private readonly layouts: Layout[] = ['plane', 'cube', 'sphere', 'random']
  private smoothEnergy = 0.3
  private smoothLow = 0.3
  private smoothMid = 0.3
  private smoothHigh = 0.3

  private params: Required<SpritesParams> = {
    color: '#4488ff',
    opacity: 0.95,
    size: 0.12,
    layout: 'plane',
    transitionDuration: 2,
    pulseSpeed: 0.002,
    pulseAmount: 0.3,
    reactScale: 1.2,
    reactRotation: 0.8,
    reactPulse: 1.0,
    reactHue: 0.3,
  }

  init(scene: THREE.Scene): void {
    this.scene = scene
    this.group = new THREE.Group()
    this.group.renderOrder = 30
    scene.add(this.group)

    this.layoutIndex = this.layouts.indexOf(this.params.layout)
    if (this.layoutIndex < 0) this.layoutIndex = 0
    this.buildPositions()
    this.build()
  }

  private buildPositions(): void {
    this.positions = []

    // Plane: 16 x 32 = 512
    const amountX = 16
    const amountZ = 32
    const sep = 0.28
    const ox = ((amountX - 1) * sep) / 2
    const oz = ((amountZ - 1) * sep) / 2
    for (let i = 0; i < PARTICLES_TOTAL; i++) {
      const x = (i % amountX) * sep - ox
      const z = Math.floor(i / amountX) * sep - oz
      const y = (Math.sin(x * 2) + Math.sin(z * 2)) * 0.08
      this.positions.push(x, y, z)
    }

    // Cube: 8 x 8 x 8 = 512
    const amt = 8
    const sepC = 0.28
    const off = ((amt - 1) * sepC) / 2
    for (let i = 0; i < PARTICLES_TOTAL; i++) {
      const x = (i % amt) * sepC - off
      const y = Math.floor((i / amt) % amt) * sepC - off
      const z = Math.floor(i / (amt * amt)) * sepC - off
      this.positions.push(x, y, z)
    }

    // Sphere
    const radius = 1.2
    for (let i = 0; i < PARTICLES_TOTAL; i++) {
      const phi = Math.acos(-1 + (2 * i) / PARTICLES_TOTAL)
      const theta = Math.sqrt(PARTICLES_TOTAL * Math.PI) * phi
      this.positions.push(
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      )
    }

    // Random
    for (let i = 0; i < PARTICLES_TOTAL; i++) {
      this.positions.push(
        (Math.random() * 2 - 1) * 1.5,
        (Math.random() * 2 - 1) * 1.5,
        (Math.random() * 2 - 1) * 1.5
      )
    }
  }

  private build(): void {
    if (!this.group) return
    if (this.points) this.group.remove(this.points)
    this.geo?.dispose()

    const pos = new Float32Array(PARTICLES_TOTAL * 3)
    const offset = this.layoutIndex * PARTICLES_TOTAL * 3
    for (let i = 0; i < PARTICLES_TOTAL * 3; i++) {
      pos[i] = this.positions[offset + i] ?? 0
    }
    this.currentPos.set(pos)
    this.targetPos.set(pos)

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(this.currentPos, 3))
    geo.computeBoundingSphere()
    this.geo = geo

    const tex = createSpriteTexture()
    const mat = new THREE.PointsMaterial({
      size: this.params.size,
      map: tex,
      transparent: true,
      opacity: this.params.opacity,
      depthWrite: false,
      depthTest: true,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    })
    try {
      mat.color.set(this.params.color)
    } catch {
      mat.color.set('#4488ff')
    }
    this.mat = mat

    const pts = new THREE.Points(geo, mat)
    pts.frustumCulled = false
    this.points = pts
    this.group.add(pts)
  }

  update(d: AudioData, dt: number): void {
    if (!this.points || !this.geo || !this.mat || !this.group) return

    const { low, mid, high, energy } = d.mapped
    const features = d.features
    const t = performance.now() * 0.001

    // 平滑包络：避免无重音时乱闪，让反应跟随韵律
    const tau = 0.06
    const a = 1 - Math.exp(-dt / tau)
    this.smoothEnergy += (energy - this.smoothEnergy) * a
    this.smoothLow += (low - this.smoothLow) * a
    this.smoothMid += (mid - this.smoothMid) * a
    this.smoothHigh += (high - this.smoothHigh) * a

    // 节拍脉冲：仅当 pulse 足够强且 onset 明显时使用，避免误触发
    const rawPulse = features?.beat?.pulse ?? 0
    const onset = features?.onset ?? 0
    const useBeat = rawPulse > 0.4 && onset > 0.15
    const beatKick = useBeat ? rawPulse : 0

    // Layout transition
    const layoutIdx = this.layouts.indexOf(this.params.layout)
    if (layoutIdx >= 0 && layoutIdx !== this.layoutIndex) {
      this.layoutIndex = layoutIdx
      const offset = this.layoutIndex * PARTICLES_TOTAL * 3
      for (let i = 0; i < PARTICLES_TOTAL * 3; i++) {
        this.targetPos[i] = this.positions[offset + i] ?? 0
      }
    }

    const dur = this.params.transitionDuration
    const factor = 1 - Math.exp((-dt * 2.5) / Math.max(0.1, dur))

    const posAttr = this.geo.getAttribute('position') as THREE.BufferAttribute
    for (let i = 0; i < PARTICLES_TOTAL * 3; i++) {
      const cur = this.currentPos[i]
      const tar = this.targetPos[i]
      this.currentPos[i] = cur + (tar - cur) * factor
      posAttr.array[i] = this.currentPos[i]
    }
    posAttr.needsUpdate = true

    // Scale pulse: base + 平滑能量 + 节拍（仅重音时）
    const basePulse =
      Math.sin(Math.floor(this.currentPos[0] * 10) + t * 60 * this.params.pulseSpeed) *
        this.params.pulseAmount +
      1
    const audioPulse = 1 + beatKick * this.params.reactPulse
    const audioScale = 1 + this.smoothEnergy * this.params.reactScale
    const scale = basePulse * audioPulse * audioScale
    this.mat.size = this.params.size * scale

    // 旋转：用平滑的 mid/high，跟随韵律
    const rotSpeed =
      (this.smoothMid * 0.6 + this.smoothHigh * 0.4) * this.params.reactRotation * 1.5
    this.group.rotation.y += rotSpeed * dt
    this.group.rotation.x += rotSpeed * 0.25 * dt

    this.mat.opacity = this.params.opacity
    // 颜色：平滑 low 驱动色相
    try {
      const base = new THREE.Color(this.params.color)
      const hsl = { h: 0, s: 0, l: 0 }
      base.getHSL(hsl)
      hsl.h = (hsl.h + this.smoothLow * this.params.reactHue * 0.12) % 1
      if (hsl.h < 0) hsl.h += 1
      hsl.l = 0.5 + (this.smoothEnergy - 0.3) * 0.12
      this.mat.color.setHSL(hsl.h, hsl.s, Math.max(0.25, Math.min(0.9, hsl.l)))
    } catch {
      this.mat.color.set(this.params.color)
    }
  }

  setParams(p: Record<string, unknown>): void {
    const x = p as SpritesParams
    if (typeof x.color === 'string') this.params.color = x.color
    if (typeof x.opacity === 'number') this.params.opacity = clamp(x.opacity, 0.1, 1)
    if (typeof x.size === 'number') this.params.size = clamp(x.size, 0.02, 0.5)
    if (x.layout && this.layouts.includes(x.layout)) this.params.layout = x.layout
    if (typeof x.transitionDuration === 'number')
      this.params.transitionDuration = clamp(x.transitionDuration, 0.5, 6)
    if (typeof x.pulseSpeed === 'number') this.params.pulseSpeed = clamp(x.pulseSpeed, 0, 0.01)
    if (typeof x.pulseAmount === 'number') this.params.pulseAmount = clamp(x.pulseAmount, 0, 1)
    if (typeof x.reactScale === 'number') this.params.reactScale = clamp(x.reactScale, 0, 3)
    if (typeof x.reactRotation === 'number') this.params.reactRotation = clamp(x.reactRotation, 0, 2)
    if (typeof x.reactPulse === 'number') this.params.reactPulse = clamp(x.reactPulse, 0, 3)
    if (typeof x.reactHue === 'number') this.params.reactHue = clamp(x.reactHue, 0, 1)
  }

  dispose(): void {
    if (this.scene && this.group) this.scene.remove(this.group)
    if (this.group && this.points) this.group.remove(this.points)
    this.geo?.dispose()
    this.mat?.map?.dispose()
    this.mat?.dispose()
    this.points = null
    this.geo = null
    this.mat = null
    this.group = null
    this.scene = null
  }
}
