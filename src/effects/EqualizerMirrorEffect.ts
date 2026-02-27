/**
 * EqualizerMirrorEffect - Horizontal equalizer bars with mirrored reflection.
 */

import * as THREE from 'three'
import type { IEffect } from './types'
import type { AudioData } from '../core/types'

const BASE_THICKNESS = 0.02

interface EqParams {
  barCount?: number
  length?: number // 0.5-2, as fraction of viewport width
  color?: string // hex, e.g. #4fc3ff
  showReflection?: boolean
  showBaseline?: boolean
  flipX?: boolean
  flipY?: boolean
  hue?: number // 0-1
  saturation?: number // 0-1
  lightness?: number // 0-1
  opacity?: number // 0-1
  heightScale?: number // 0-1.5
  reflection?: number // 0-1
  glow?: number // 0-2
  glowSize?: number // 0-2
  gap?: number // 0-1
  smoothing?: number // 0-1
}

export class EqualizerMirrorEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private group: THREE.Group | null = null
  private bars: THREE.InstancedMesh | null = null
  private barsRef: THREE.InstancedMesh | null = null
  private barsGlow: THREE.InstancedMesh | null = null
  private barsRefGlow: THREE.InstancedMesh | null = null
  private mat: THREE.MeshBasicMaterial | null = null
  private matRef: THREE.MeshBasicMaterial | null = null
  private matGlow: THREE.MeshBasicMaterial | null = null
  private matRefGlow: THREE.MeshBasicMaterial | null = null
  private glow: THREE.Mesh | null = null
  private glowMat: THREE.MeshBasicMaterial | null = null
  private barGeo: THREE.BoxGeometry | null = null
  private glowGeo: THREE.PlaneGeometry | null = null
  private barCount = 128
  private heights = new Float32Array(128)

  private params: Required<EqParams> = {
    barCount: 128,
    length: 0.95,
    color: '#4fc3ff',
    showReflection: true,
    showBaseline: true,
    flipX: false,
    flipY: false,
    hue: 0.55,
    saturation: 0.85,
    lightness: 0.65,
    opacity: 0.95,
    heightScale: 1,
    reflection: 0.65,
    glow: 0.9,
    glowSize: 0.9,
    gap: 0.25,
    smoothing: 0.18,
  }

  init(scene: THREE.Scene): void {
    this.scene = scene
    this.group = new THREE.Group()
    this.group.renderOrder = 50

    this.barGeo = new THREE.BoxGeometry(1, 1, 1)

    this.mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: this.params.opacity,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    this.matRef = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: this.params.opacity * this.params.reflection,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    this.matGlow = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.4,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    this.matRefGlow = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })

    this.rebuildBars(this.barCount)

    // Baseline glow
    const glowTex = this.createGlowTexture()
    this.glowMat = new THREE.MeshBasicMaterial({
      map: glowTex,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    })
    this.glowGeo = new THREE.PlaneGeometry(1, 1)
    this.glow = new THREE.Mesh(this.glowGeo, this.glowMat)
    this.glow.frustumCulled = false
    this.glow.renderOrder = 49

    this.group.add(this.glow)
    scene.add(this.group)
  }

  update(d: AudioData, _dt: number): void {
    if (
      !this.group ||
      !this.bars ||
      !this.barsRef ||
      !this.barsGlow ||
      !this.barsRefGlow ||
      !this.mat ||
      !this.matRef ||
      !this.matGlow ||
      !this.matRefGlow ||
      !this.glow
    )
      return

    const { frequencyData, binCount, mapped } = d
    const n = this.barCount
    const step = binCount > 0 ? binCount / n : 1

    // View frustum in world units (match other effects' camera assumptions)
    const cameraZ = 5
    const fovRad = (60 * Math.PI) / 180
    const halfH = cameraZ * Math.tan(fovRad / 2)
    const aspect =
      d.resolution && d.resolution.height > 0
        ? d.resolution.width / d.resolution.height
        : 1
    const halfW = halfH * aspect

    const maxH = halfH * 0.9 * this.params.heightScale
    // 频谱长度占据当前图层视口宽度的比例
    const totalW = halfW * 2 * this.params.length
    const cell = totalW / n
    const barW = Math.max(0.004, cell * (1 - this.params.gap))
    const thickness = Math.max(0.002, Math.min(0.08, BASE_THICKNESS * (0.6 + barW * 6)))
    const baseY = 0

    const showRef = this.params.showReflection
    const showBase = this.params.showBaseline
    this.barsRef.visible = showRef
    this.barsRefGlow.visible = showRef
    this.glow.visible = showBase
    // horizontal/vertical flip for the whole effect
    this.group.scale.x = this.params.flipX ? -1 : 1
    this.group.scale.y = this.params.flipY ? -1 : 1

    // color
    const col = parseHexColor(this.params.color) ?? new THREE.Color().setHSL(this.params.hue, this.params.saturation, this.params.lightness)
    this.mat.color.copy(col)
    this.mat.opacity = this.params.opacity
    this.matRef.color.copy(col)
    this.matRef.opacity = showRef ? this.params.opacity * this.params.reflection : 0
    this.matGlow.color.copy(col)
    this.matGlow.opacity = this.params.opacity * 0.5 * this.params.glow
    this.matRefGlow.color.copy(col)
    this.matRefGlow.opacity = showRef ? this.params.opacity * this.params.reflection * 0.35 * this.params.glow : 0
    this.glowMat!.color.copy(col)
    this.glowMat!.opacity = showBase ? 0.35 + mapped.energy * 0.6 : 0

    // baseline glow sizing
    this.glow.position.set(0, baseY, 0)
    this.glow.scale.set(totalW, Math.max(0.06, maxH * 0.12), 1)

    // energy per bar
    let minV = 1
    let maxV = 0
    const raw = new Float32Array(n)
    for (let i = 0; i < n; i++) {
      let s = 0
      const st = Math.floor(i * step)
      const en = Math.floor((i + 1) * step)
      const range = en - st
      if (range > 0) {
        for (let j = st; j < en; j++) s += frequencyData[j] ?? 0
        raw[i] = s / range / 255
      } else raw[i] = 0
      if (raw[i] < minV) minV = raw[i]
      if (raw[i] > maxV) maxV = raw[i]
    }
    const span = Math.max(1e-6, maxV - minV)

    const mHead = new THREE.Matrix4()
    const mRef = new THREE.Matrix4()
    const mGlow = new THREE.Matrix4()
    const mRefGlow = new THREE.Matrix4()
    const q = new THREE.Quaternion()
    const pos = new THREE.Vector3()
    const sc = new THREE.Vector3()

    for (let i = 0; i < n; i++) {
      const norm = (raw[i] - minV) / span
      const shaped = Math.pow(Math.min(1, norm), 0.75)
      const target = shaped * (0.2 + mapped.energy * 1.2)
      const a = this.params.smoothing
      this.heights[i] += (target - this.heights[i]) * a
      const h = Math.max(0.01, this.heights[i] * maxH)

      const x = -totalW / 2 + (i + 0.5) * cell

      // main bar
      pos.set(x, baseY + h / 2, 0)
      sc.set(barW, h, thickness)
      mHead.compose(pos, q, sc)
      this.bars.setMatrixAt(i, mHead)

      // reflection bar
      const hr = h * (0.65 + this.params.reflection * 0.35)
      pos.set(x, baseY - hr / 2, 0)
      sc.set(barW, hr, thickness)
      mRef.compose(pos, q, sc)
      this.barsRef.setMatrixAt(i, mRef)

      // glow (slightly bigger)
      const gs = 1 + this.params.glowSize * 0.9
      pos.set(x, baseY + h / 2, 0)
      sc.set(barW * gs, h * gs, thickness * (1.2 + this.params.glowSize))
      mGlow.compose(pos, q, sc)
      this.barsGlow.setMatrixAt(i, mGlow)

      pos.set(x, baseY - hr / 2, 0)
      sc.set(barW * gs, hr * gs, thickness * (1.2 + this.params.glowSize))
      mRefGlow.compose(pos, q, sc)
      this.barsRefGlow.setMatrixAt(i, mRefGlow)
    }
    this.bars.instanceMatrix.needsUpdate = true
    this.barsRef.instanceMatrix.needsUpdate = true
    this.barsGlow.instanceMatrix.needsUpdate = true
    this.barsRefGlow.instanceMatrix.needsUpdate = true
  }

  setParams(p: Record<string, unknown>): void {
    const x = p as EqParams
    if (typeof x.barCount === 'number') {
      const next = Math.max(16, Math.min(512, Math.round(x.barCount)))
      if (next !== this.barCount) {
        this.barCount = next
        this.params.barCount = next
        this.heights = new Float32Array(next)
        if (this.group) this.rebuildBars(next)
      }
    }
    if (typeof x.length === 'number') this.params.length = Math.max(0.5, Math.min(2, x.length))
    if (typeof x.color === 'string') this.params.color = x.color
    if (typeof x.showReflection === 'boolean') this.params.showReflection = x.showReflection
    if (typeof x.showBaseline === 'boolean') this.params.showBaseline = x.showBaseline
    if (typeof x.flipX === 'boolean') this.params.flipX = x.flipX
    if (typeof x.flipY === 'boolean') this.params.flipY = x.flipY
    if (typeof x.hue === 'number') this.params.hue = Math.max(0, Math.min(1, x.hue))
    if (typeof x.saturation === 'number') this.params.saturation = Math.max(0, Math.min(1, x.saturation))
    if (typeof x.lightness === 'number') this.params.lightness = Math.max(0, Math.min(1, x.lightness))
    if (typeof x.opacity === 'number') this.params.opacity = Math.max(0.05, Math.min(1, x.opacity))
    if (typeof x.heightScale === 'number') this.params.heightScale = Math.max(0.2, Math.min(1.5, x.heightScale))
    if (typeof x.reflection === 'number') this.params.reflection = Math.max(0, Math.min(1, x.reflection))
    if (typeof x.glow === 'number') this.params.glow = Math.max(0, Math.min(2, x.glow))
    if (typeof x.glowSize === 'number') this.params.glowSize = Math.max(0, Math.min(2, x.glowSize))
    if (typeof x.gap === 'number') this.params.gap = Math.max(0, Math.min(0.8, x.gap))
    if (typeof x.smoothing === 'number') this.params.smoothing = Math.max(0.02, Math.min(0.6, x.smoothing))
  }

  dispose(): void {
    if (this.scene && this.group) this.scene.remove(this.group)
    this.barGeo?.dispose()
    this.mat?.dispose()
    this.matRef?.dispose()
    this.matGlow?.dispose()
    this.matRefGlow?.dispose()
    this.glowGeo?.dispose()
    this.glowMat?.map?.dispose()
    this.glowMat?.dispose()
    this.group = null
    this.bars = null
    this.barsRef = null
    this.barsGlow = null
    this.barsRefGlow = null
    this.mat = null
    this.matRef = null
    this.matGlow = null
    this.matRefGlow = null
    this.glow = null
    this.glowMat = null
    this.barGeo = null
    this.glowGeo = null
    this.scene = null
  }

  private rebuildBars(count: number): void {
    if (!this.group || !this.barGeo || !this.mat || !this.matRef) return
    if (this.bars) this.group.remove(this.bars)
    if (this.barsRef) this.group.remove(this.barsRef)
    if (this.barsGlow) this.group.remove(this.barsGlow)
    if (this.barsRefGlow) this.group.remove(this.barsRefGlow)
    // InstancedMesh doesn't own geometry, so just drop references; barGeo disposed in dispose()
    this.bars = new THREE.InstancedMesh(this.barGeo, this.mat, count)
    this.barsRef = new THREE.InstancedMesh(this.barGeo, this.matRef, count)
    this.barsGlow = new THREE.InstancedMesh(this.barGeo, this.matGlow!, count)
    this.barsRefGlow = new THREE.InstancedMesh(this.barGeo, this.matRefGlow!, count)
    this.bars.frustumCulled = false
    this.barsRef.frustumCulled = false
    this.barsGlow.frustumCulled = false
    this.barsRefGlow.frustumCulled = false
    this.group.add(this.bars)
    this.group.add(this.barsRef)
    // glow render slightly behind bars so core stays crisp
    this.group.add(this.barsGlow)
    this.group.add(this.barsRefGlow)
  }

  private createGlowTexture(): THREE.CanvasTexture {
    const w = 256
    const h = 64
    const c = document.createElement('canvas')
    c.width = w
    c.height = h
    const ctx = c.getContext('2d')
    if (!ctx) return new THREE.CanvasTexture(c)
    ctx.clearRect(0, 0, w, h)
    const grd = ctx.createLinearGradient(0, h / 2, 0, h)
    grd.addColorStop(0, 'rgba(255,255,255,0.9)')
    grd.addColorStop(0.4, 'rgba(255,255,255,0.35)')
    grd.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = grd
    ctx.fillRect(0, 0, w, h)
    const tex = new THREE.CanvasTexture(c)
    tex.needsUpdate = true
    tex.wrapS = THREE.ClampToEdgeWrapping
    tex.wrapT = THREE.ClampToEdgeWrapping
    tex.minFilter = THREE.LinearFilter
    tex.magFilter = THREE.LinearFilter
    return tex
  }
}

function parseHexColor(hex: string): THREE.Color | null {
  const s = hex.trim()
  if (!s) return null
  const c = new THREE.Color()
  try {
    c.set(s)
    return c
  } catch {
    return null
  }
}

