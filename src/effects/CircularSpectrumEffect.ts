/**
 * CircularSpectrumEffect - IEffect wrapper.
 */

import * as THREE from 'three'
import type { IEffect } from './types'
import type { AudioData } from '../core/types'

const N = 128
const BASE_HEIGHT = 0.08

interface SpectrumParams {
  color?: string
  tilt?: number // 0 = 正圆, 1 = 近似横线
  style?: number // 0 = 柱状, 1 = Ferrofluid 风格
  radius?: number // 圆环缩放
  barMode?: number // 0 = 垂直, 1 = 向外发射
  heightScale?: number // 柱子高度整体缩放
  barWidth?: number // 柱子粗细，0-1
}

export class CircularSpectrumEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private group: THREE.Group | null = null
  private bars: THREE.Mesh[] = []
  private geometries: THREE.BoxGeometry[] = []
  private material: THREE.MeshBasicMaterial | null = null
  private heights = new Float32Array(N)
  // 按条记录长期平均能量，用于“均衡”不同频段的活跃度
  private bandMeans = new Float32Array(N)
  private params: Required<SpectrumParams> = {
    color: '#00aaff',
    tilt: 0,
    style: 0,
    radius: 0.7,
    barMode: 1,
    heightScale: 0.7,
    barWidth: 0.5,
  }
  private angles: number[] = []
  private radialDirs: THREE.Vector3[] = []

  init(scene: THREE.Scene): void {
    this.scene = scene
    this.group = new THREE.Group()
    this.group.renderOrder = 10
    this.material = new THREE.MeshBasicMaterial({
      color: this.params.color,
      transparent: true,
      opacity: 1,
      depthTest: true,
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
      // 初始平均值给一个很小的正数，避免后面除以 0
      this.bandMeans[i] = 0.05
    }
    scene.add(this.group)
  }

  update(d: AudioData, _dt: number): void {
    if (!this.group) return
    const { frequencyData, binCount, mapped, features } = d

    // Prefer shared, equalized log bands when available (more "full" coverage).
    const fb = features?.bands
    if (fb && fb.length > 0) {
      const bn = fb.length
      for (let i = 0; i < N; i++) {
        const bi = Math.max(0, Math.min(bn - 1, Math.floor((i / N) * bn)))
        const v = fb[bi] ?? 0
        const t = Math.pow(Math.min(1, v), 0.9) * (0.35 + mapped.energy * 0.65)
        this.heights[i] += (t - this.heights[i]) * 0.12
      }
    } else {
    const step = binCount > 0 ? binCount / N : 1
    const rawTargets = new Float32Array(N)
    for (let i = 0; i < N; i++) {
      let s = 0
      const st = Math.floor(i * step)
      const en = Math.floor((i + 1) * step)
      const range = en - st
      if (range > 0) {
        for (let j = st; j < en; j++) s += frequencyData[j] ?? 0
        rawTargets[i] = s / range / 255
      } else {
        rawTargets[i] = 0
      }
      // 更新长期平均能量，用于后面的“频段均衡”
      const mean = this.bandMeans[i]
      const alpha = 0.01
      this.bandMeans[i] = mean + (rawTargets[i] - mean) * alpha
    }
    // 先按条做“频段均衡”：当前值 / 长期均值，长期偏弱的频段会被相对放大
    const equalized = new Float32Array(N)
    const eps = 1e-3
    for (let i = 0; i < N; i++) {
      const mean = Math.max(eps, this.bandMeans[i])
      equalized[i] = rawTargets[i] / mean
    }
    // 再将本帧能量映射到动态区间：相对 min/max 归一化，避免某些频段一直很高很突兀
    let minV = equalized[0]
    let maxV = equalized[0]
    for (let i = 1; i < N; i++) {
      const v = equalized[i]
      if (v < minV) minV = v
      if (v > maxV) maxV = v
    }
    const span = maxV - minV
    // 幂次压缩高值，让条高分布更均匀，不会总有几条顶满
    const power = 0.75
    const noVariation = span < 1e-6
    for (let i = 0; i < N; i++) {
      const normalized = noVariation
        ? 0
        : (equalized[i] - minV) / span
      const compressed = Math.pow(Math.min(1, normalized), power)
      // 无变化时目标接近 0，条会自然回落
      const t = noVariation ? 0.05 : compressed * (0.4 + mapped.energy * 0.6)
      this.heights[i] += (t - this.heights[i]) * 0.1
    }
    }
    this.material?.color.set(this.params.color)
    const sc = 0.9 + mapped.low * 0.8
    const energyFactor = 0.8 + mapped.energy * 3
    const heightScale = this.params.heightScale
    const useRadial = this.params.barMode >= 0.5
    const r = this.params.radius
    const barWidthNorm = this.params.barWidth
    // 将 0-1 的 barWidth 映射到世界空间宽度范围；
    // 最大值为当前基础宽度（0.02）的 9 倍，以获得更粗的条形效果。
    const minBarWidth = 0.008
    const maxBarWidth = 0.18
    const barWidthWorldTarget = minBarWidth + (maxBarWidth - minBarWidth) * barWidthNorm

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
    // 用“世界空间半径 = 本地半径(2) * r”估算圆心位置，radius 变大会自动收紧可用长度
    const baseRadiusLocal = 2
    const circleRadiusWorld = baseRadiusLocal * r
    const baseMaxRadial = Math.max(0.2, halfWidth * 0.95 - circleRadiusWorld)

    const maxVertical = baseMaxVertical * heightScale
    const maxRadial = baseMaxRadial * heightScale

    // 根据圆周长度限制最大可见宽度，保证柱子之间始终留有间隙
    const angleStep = (Math.PI * 2) / N
    const arcPerBar = circleRadiusWorld * angleStep
    const maxWidthBySpacing = Math.max(0, arcPerBar * 0.7) // 预留约 30% 作为缝隙
    const barWidthWorld = Math.min(barWidthWorldTarget, maxWidthBySpacing || barWidthWorldTarget)

    for (let i = 0; i < N; i++) {
      // 将频谱能量压缩到 0-1 区间，再乘以当前能量因子。
      // 使用二次曲线压缩中等能量，只让非常高的峰值接近 1。
      const rawPower = this.heights[i] * 1.3 * energyFactor * sc
      const clamped = Math.min(1, rawPower)
      const power = clamped * clamped
      let h = Math.max(0.04, power)

      const bar = this.bars[i]
      if (!bar) continue

      // 根据当前配置缩放柱子宽度（x/z 方向），同时受圆周长度限制，确保条之间有间隙
      bar.scale.x = barWidthWorld / 0.02
      bar.scale.z = barWidthWorld / 0.02

      if (useRadial) {
        // 向外发射：长度限制为中心到宽度一半的距离（乘以高度比例）
        h = Math.min(maxRadial, power * maxRadial)
        const dir = this.radialDirs[i]
        const start = dir.clone().multiplyScalar(baseRadiusLocal)
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
    if (typeof x.color === 'string') {
      this.params.color = x.color
      this.material?.color.set(x.color)
    }
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
    if (typeof x.barWidth === 'number') {
      this.params.barWidth = Math.max(0, Math.min(1, x.barWidth))
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
