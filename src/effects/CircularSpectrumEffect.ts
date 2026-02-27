/**
 * CircularSpectrumEffect - IEffect wrapper.
 */

import * as THREE from 'three'
import type { IEffect } from './types'
import type { AudioData } from '../core/types'

const N = 128
const BASE_HEIGHT = 0.08

interface SpectrumParams {
  tilt?: number // 0 = 正圆, 1 = 近似横线
  style?: number // 0 = 柱状, 1 = Ferrofluid 风格
  radius?: number // 圆环缩放
  barMode?: number // 0 = 垂直, 1 = 向外发射
  heightScale?: number // 柱子高度整体缩放
}

export class CircularSpectrumEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private group: THREE.Group | null = null
  private bars: THREE.Mesh[] = []
  private geometries: THREE.BoxGeometry[] = []
  private material: THREE.MeshBasicMaterial | null = null
  private heights = new Float32Array(N)
  private params: Required<SpectrumParams> = {
    tilt: 0,
    style: 0,
    radius: 0.7,
    barMode: 1,
    heightScale: 0.7,
  }
  private angles: number[] = []
  private radialDirs: THREE.Vector3[] = []

  init(scene: THREE.Scene): void {
    this.scene = scene
    this.group = new THREE.Group()
    this.group.renderOrder = 10
    this.material = new THREE.MeshBasicMaterial({
      color: 0x00aaff,
      transparent: true,
      opacity: 1,
    })
    for (let i = 0; i < N; i++) {
      const geo = new THREE.BoxGeometry(0.02, BASE_HEIGHT, 0.02)
      this.geometries.push(geo)
      const m = new THREE.Mesh(geo, this.material)
      const a = (i / N) * Math.PI * 2
      this.angles[i] = a
      this.radialDirs[i] = new THREE.Vector3(Math.cos(a), 0, Math.sin(a)).normalize()
      m.position.set(Math.cos(a) * 2, BASE_HEIGHT / 2, Math.sin(a) * 2)
      m.rotation.y = -a
      this.group.add(m)
      this.bars.push(m)
    }
    scene.add(this.group)
  }

  update(d: AudioData, _dt: number): void {
    if (!this.group) return
    const { frequencyData, binCount, mapped } = d
    const per = Math.max(1, Math.floor(binCount / N))
    for (let i = 0; i < N; i++) {
      let s = 0
      const st = i * per
      const en = Math.min(st + per, binCount)
      for (let j = st; j < en; j++) s += frequencyData[j] ?? 0
      const raw = en > st && binCount > 0 ? s / (en - st) / 255 : 0.3
      const boosted = Math.min(1, raw * 3) // 频段能量扩大三倍
      const t = boosted * (0.5 + mapped.energy)
      this.heights[i] += (t - this.heights[i]) * 0.15
    }
    const hue = 0.55 + mapped.high * 0.2
    this.material?.color.copy(new THREE.Color().setHSL(hue, 0.8, 0.6))
    const sc = 0.9 + mapped.low * 0.8
    const energyFactor = 0.8 + mapped.energy * 3
    const heightScale = this.params.heightScale
    const useRadial = this.params.barMode >= 0.5

    // 视锥几何，用于限制最大高度/长度（基于当前画布分辨率）
    const cameraZ = 5
    const fovRad = (60 * Math.PI) / 180
    const halfHeight = cameraZ * Math.tan(fovRad / 2)
    const aspect =
      d.resolution && d.resolution.height > 0
        ? d.resolution.width / d.resolution.height
        : 1
    const halfWidth = halfHeight * aspect

    const baseMaxVertical = halfHeight * 0.95
    // 为了避免 radius 影响最大高度，用常量半径估算圆心位置
    const circleRadiusWorld = 2
    const baseMaxRadial = Math.max(0.2, halfWidth * 0.95 - circleRadiusWorld)

    const maxVertical = baseMaxVertical * heightScale
    const maxRadial = baseMaxRadial * heightScale

    for (let i = 0; i < N; i++) {
      // 将频谱能量压缩到 0-1 区间，再乘以当前能量因子（整体放大约 5 倍）
      const power = Math.min(1, this.heights[i] * 2 * energyFactor * sc * 5)
      let h = Math.max(0.04, power)

      const bar = this.bars[i]
      if (!bar) continue

      if (useRadial) {
        // 向外发射：长度限制为中心到宽度一半的距离（乘以高度比例）
        h = Math.min(maxRadial, power * maxRadial)
        const dir = this.radialDirs[i]
        const start = dir.clone().multiplyScalar(circleRadiusWorld)
        const mid = start.clone().addScaledVector(dir, h / 2)
        bar.position.copy(mid)
        bar.scale.y = h / BASE_HEIGHT
      } else {
        // 垂直向上：高度限制为画布可见高度的 95%（乘以高度比例）
        h = Math.min(maxVertical, power * maxVertical)
        bar.scale.y = h / BASE_HEIGHT
        bar.position.y = h / 2
      }
    }
    // Tilt: 0 = 横线, 1 = 正圆
    const tiltAngle = (1 - this.params.tilt) * (Math.PI / 2)
    this.group.rotation.x = tiltAngle

    const r = this.params.radius
    this.group.scale.set(r, r, r)

    const useFerro = this.params.style >= 0.5
    if (this.material) {
      this.material.blending = useFerro ? THREE.AdditiveBlending : THREE.NormalBlending
    }

    // 圆本身不随音乐旋转，只由 tilt / radius 控制形态
    this.group.rotation.y = 0
  }

  setParams(p: Record<string, unknown>): void {
    const x = p as SpectrumParams
    if (typeof x.tilt === 'number') {
      this.params.tilt = Math.max(0, Math.min(1, x.tilt))
    }
    if (typeof x.style === 'number') {
      this.params.style = Math.max(0, Math.min(1, x.style))
    }
    if (typeof x.radius === 'number') {
      this.params.radius = Math.max(0.3, Math.min(2, x.radius))
    }
    if (typeof x.barMode === 'number') {
      this.params.barMode = Math.max(0, Math.min(1, x.barMode))
    }
    if (typeof x.heightScale === 'number') {
      this.params.heightScale = Math.max(0.2, Math.min(1, x.heightScale))
    }
  }

  dispose(): void {
    if (this.scene && this.group) this.scene.remove(this.group)
    this.geometries.forEach((g) => g.dispose())
    this.geometries = []
    this.material?.dispose()
    this.bars = []
    this.group = null
    this.material = null
    this.scene = null
  }
}
