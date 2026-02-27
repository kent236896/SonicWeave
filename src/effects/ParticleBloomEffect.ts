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

function createStreakTexture(): THREE.CanvasTexture {
  const w = 256
  const h = 8
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')
  if (!ctx) return new THREE.CanvasTexture(canvas)
  ctx.clearRect(0, 0, w, h)

  // Horizontal alpha ramp: tail -> head (0..1)
  const grd = ctx.createLinearGradient(0, 0, w, 0)
  grd.addColorStop(0.0, 'rgba(255,255,255,0)')
  grd.addColorStop(0.15, 'rgba(255,255,255,0.15)')
  grd.addColorStop(0.6, 'rgba(255,255,255,0.65)')
  grd.addColorStop(1.0, 'rgba(255,255,255,1)')
  ctx.fillStyle = grd
  ctx.fillRect(0, 0, w, h)

  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  tex.wrapS = THREE.ClampToEdgeWrapping
  tex.wrapT = THREE.ClampToEdgeWrapping
  tex.minFilter = THREE.LinearFilter
  tex.magFilter = THREE.LinearFilter
  return tex
}

interface ParticleParams {
  baseSize?: number
  rotationSpeed?: number
  maxGroups?: number
  hue?: number
  opacity?: number
  /** 0 = sphere, 1 = circle, 2 = plane */
  shape?: number
  /** Only for circle (shape=1). 0 = face camera (circle), 1 = edge (line) */
  tilt?: number
  /** Rotation mode: 0 = Y, 1 = XY, 2 = XYZ */
  rotationMode?: number
  /** Plane flow direction: 0 = all directions, 1-8 = 8-way (like a D-pad) */
  planeDir?: number
}

export class ParticleBloomEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private groups: THREE.Points[] = []
  private streakMeshes: THREE.Mesh[] = []
  private geometries: THREE.BufferGeometry[] = []
  private streakGeometries: THREE.BufferGeometry[] = []
  private material: THREE.PointsMaterial | null = null
  private streakMaterial: THREE.MeshBasicMaterial | null = null
  private params: Required<ParticleParams> = {
    baseSize: 0.04,
    rotationSpeed: 2,
    maxGroups: 20,
    hue: 0.55,
    opacity: 0.8,
    shape: 0,
    tilt: 0,
    rotationMode: 0,
    planeDir: 0,
  }
  private rotationY = 0
  private rotationX = 0
  private rotationZ = 0
  private velocities: Float32Array[] = []
  private streakPositions: Float32Array[] = []

  init(scene: THREE.Scene): void {
    this.scene = scene
    this.rotationY = 0
    this.rotationX = 0
    this.rotationZ = 0
    this.velocities = []
    this.streakPositions = []
    this.streakMeshes = []
    this.streakGeometries = []
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
    this.streakMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      map: createStreakTexture(),
    })

    for (let g = 0; g < GROUP_COUNT; g++) {
      const pos = this.createPositionsForGroup(g)
      const vel = this.createVelocitiesForGroup(g)
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
      const points = new THREE.Points(geo, this.material)
      this.groups.push(points)
      this.geometries.push(geo)
      this.velocities.push(vel)
      scene.add(points)

      // Streak mesh (solid meteor trail). Only visible in plane flow mode.
      const vCount = GROUP_SIZE * 4
      const positions = new Float32Array(vCount * 3)
      const uvs = new Float32Array(vCount * 2)
      const indices = new Uint32Array(GROUP_SIZE * 6)
      for (let i = 0; i < GROUP_SIZE; i++) {
        const vi = i * 4
        // u: 0 = tail, 1 = head
        uvs[(vi + 0) * 2] = 0
        uvs[(vi + 0) * 2 + 1] = 0
        uvs[(vi + 1) * 2] = 0
        uvs[(vi + 1) * 2 + 1] = 1
        uvs[(vi + 2) * 2] = 1
        uvs[(vi + 2) * 2 + 1] = 0
        uvs[(vi + 3) * 2] = 1
        uvs[(vi + 3) * 2 + 1] = 1
        const ii = i * 6
        indices[ii + 0] = vi + 0
        indices[ii + 1] = vi + 2
        indices[ii + 2] = vi + 1
        indices[ii + 3] = vi + 2
        indices[ii + 4] = vi + 3
        indices[ii + 5] = vi + 1
      }
      const sgeo = new THREE.BufferGeometry()
      sgeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      sgeo.setAttribute('uv', new THREE.BufferAttribute(uvs, 2))
      sgeo.setIndex(new THREE.BufferAttribute(indices, 1))
      const mesh = new THREE.Mesh(sgeo, this.streakMaterial)
      mesh.visible = false
      this.streakPositions.push(positions)
      this.streakGeometries.push(sgeo)
      this.streakMeshes.push(mesh)
      scene.add(mesh)
    }
  }

  private createPositionsForGroup(groupIndex: number): Float32Array {
    const pos = new Float32Array(GROUP_SIZE * 3)
    const shape = this.params.shape
    // common radius / bounds
    const rMax = 3.5

    for (let i = 0; i < GROUP_SIZE; i++) {
      if (shape === 0) {
        // Sphere volume fill (no hollow center)
        const r = rMax * Math.pow(Math.random(), 1 / 3)
        const th = Math.random() * Math.PI * 2
        const ph = Math.acos(2 * Math.random() - 1)
        pos[i * 3] = r * Math.sin(ph) * Math.cos(th)
        pos[i * 3 + 1] = r * Math.cos(ph)
        pos[i * 3 + 2] = r * Math.sin(ph) * Math.sin(th)
      } else if (shape === 1) {
        // Disk fill in XZ plane (no hollow center)
        const r = rMax * Math.sqrt(Math.random())
        const th = Math.random() * Math.PI * 2
        pos[i * 3] = Math.cos(th) * r
        pos[i * 3 + 1] = (Math.random() - 0.5) * 0.15
        pos[i * 3 + 2] = Math.sin(th) * r
      } else {
        // Plane (flow): distribute in a box across screen plane (XY)
        pos[i * 3] = (Math.random() * 2 - 1) * rMax
        pos[i * 3 + 1] = (Math.random() * 2 - 1) * rMax
        pos[i * 3 + 2] = (Math.random() * 2 - 1) * 0.15
      }
    }
    return pos
  }

  private createVelocitiesForGroup(groupIndex: number): Float32Array {
    const vel = new Float32Array(GROUP_SIZE * 3)
    if (this.params.shape !== 2) return vel

    const d = ParticleBloomEffect.dirFromPad(this.params.planeDir)
    const baseAngle = Math.atan2(d.y, d.x)

    for (let i = 0; i < GROUP_SIZE; i++) {
      let a: number
      if (this.params.planeDir === 0) {
        // all directions
        a = Math.random() * Math.PI * 2
      } else {
        // small spread around the selected direction
        a = baseAngle + (Math.random() * 2 - 1) * 0.25
      }
      const sp = 0.8 + Math.random() * 0.6
      vel[i * 3] = Math.cos(a) * sp
      vel[i * 3 + 1] = Math.sin(a) * sp
      vel[i * 3 + 2] = (Math.random() * 2 - 1) * 0.05
    }
    return vel
  }

  private static dirFromPad(planeDir: number): { x: number; y: number } {
    // 3x3 mapping:
    // [8][1][2]
    // [7][0][3]
    // [6][5][4]
    const dirs: Array<[number, number]> = [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
      [-1, -1],
      [-1, 0],
      [-1, 1],
    ]
    const d = dirs[Math.max(0, Math.min(8, Math.round(planeDir)))]
    const len = Math.hypot(d[0], d[1]) || 1
    return { x: d[0] / len, y: d[1] / len }
  }

  update(d: AudioData, dt: number): void {
    if (!this.material || !this.groups.length) return
    const { mapped } = d
    const low = mapped.low
    const mid = mapped.mid
    const high = mapped.high
    const energy = mapped.energy

    this.material.size = this.params.baseSize * (0.3 + energy * 2)
    const hue = this.params.hue + high * 0.3
    this.material.color.copy(new THREE.Color().setHSL(hue, 0.7, 0.6))
    this.material.opacity = this.params.opacity
    if (this.streakMaterial) {
      this.streakMaterial.opacity = Math.min(1, 0.18 + energy * 0.55) * this.params.opacity
      this.streakMaterial.color.copy(new THREE.Color().setHSL(hue, 0.8, 0.65))
    }

    const maxGroups = Math.min(GROUP_COUNT, Math.max(1, Math.round(this.params.maxGroups)))
    const visibleGroups = Math.max(1, Math.floor(1 + high * (maxGroups - 1)))
    for (let i = 0; i < GROUP_COUNT; i++) {
      this.groups[i].visible = i < visibleGroups
    }

    if (this.params.shape === 2) {
      // Plane = flow: particles fly along selected direction
      const speed = (0.4 + energy * 2.2) * this.params.rotationSpeed * 0.55
      const bound = 3.8
      for (let g = 0; g < GROUP_COUNT; g++) {
        if (!this.groups[g]?.visible) {
          if (this.streakMeshes[g]) this.streakMeshes[g].visible = false
          continue
        }
        const geo = this.geometries[g]
        const attr = geo.getAttribute('position') as THREE.BufferAttribute | undefined
        if (!attr) continue
        const arr = attr.array as Float32Array
        const vel = this.velocities[g] ?? new Float32Array(0)
        const sarr = this.streakPositions[g]
        for (let i = 0; i < GROUP_SIZE; i++) {
          const k = i * 3
          arr[k] += (vel[k] ?? 0) * speed * dt
          arr[k + 1] += (vel[k + 1] ?? 0) * speed * dt
          arr[k + 2] += (vel[k + 2] ?? 0) * speed * dt

          // wrap
          if (arr[k] > bound) arr[k] = -bound
          else if (arr[k] < -bound) arr[k] = bound
          if (arr[k + 1] > bound) arr[k + 1] = -bound
          else if (arr[k + 1] < -bound) arr[k + 1] = bound

          // Solid streak quad behind head
          const vx = vel[k] ?? 0
          const vy = vel[k + 1] ?? 0
          const vz = vel[k + 2] ?? 0
          const inv = 1 / (Math.hypot(vx, vy, vz) + 1e-6)
          const dx = vx * inv
          const dy = vy * inv
          const dz = vz * inv
          // perpendicular (in XY plane) so the streak faces the camera reasonably
          const px = -dy
          const py = dx
          const pinv = 1 / (Math.hypot(px, py) + 1e-6)
          const nx = px * pinv
          const ny = py * pinv

          const len = 0.35 + energy * 1.1
          const halfW = 0.02 + energy * 0.035
          const hx = arr[k]
          const hy = arr[k + 1]
          const hz = arr[k + 2]
          const tx = hx - dx * len
          const ty = hy - dy * len
          const tz = hz - dz * len

          const vi = i * 4
          // tail - normal
          set3(sarr, (vi + 0) * 3, tx - nx * halfW, ty - ny * halfW, tz)
          // tail + normal
          set3(sarr, (vi + 1) * 3, tx + nx * halfW, ty + ny * halfW, tz)
          // head - normal
          set3(sarr, (vi + 2) * 3, hx - nx * halfW, hy - ny * halfW, hz)
          // head + normal
          set3(sarr, (vi + 3) * 3, hx + nx * halfW, hy + ny * halfW, hz)
        }
        attr.needsUpdate = true
        this.groups[g].rotation.set(0, 0, 0)
        const sgeo = this.streakGeometries[g]
        const sposAttr = sgeo.getAttribute('position') as THREE.BufferAttribute
        sposAttr.needsUpdate = true
        if (this.streakMeshes[g]) this.streakMeshes[g].visible = true
      }
      return
    }

    // Sphere/Circle = rotation
    // Hide streaks when not in plane flow mode
    this.streakMeshes.forEach((m) => (m.visible = false))
    const rm = this.params.rotationMode
    this.rotationY += mid * this.params.rotationSpeed * 0.03 * 60 * dt
    if (rm >= 1) this.rotationX += mid * this.params.rotationSpeed * 0.018 * 60 * dt
    if (rm >= 2) this.rotationZ += mid * this.params.rotationSpeed * 0.012 * 60 * dt
    const baseTilt =
      this.params.shape === 1 ? (1 - this.params.tilt) * (Math.PI / 2) : 0
    this.groups.forEach((g) => {
      g.rotation.y = this.rotationY
      g.rotation.x = baseTilt + (rm >= 1 ? this.rotationX : 0)
      g.rotation.z = rm >= 2 ? this.rotationZ : 0
    })
  }

  setParams(p: Record<string, unknown>): void {
    const x = p as ParticleParams
    const prevShape = this.params.shape
    const prevPlaneDir = this.params.planeDir
    if (typeof x.baseSize === 'number') this.params.baseSize = Math.max(0.01, Math.min(0.16, x.baseSize))
    if (typeof x.rotationSpeed === 'number') this.params.rotationSpeed = Math.max(0, Math.min(6, x.rotationSpeed))
    if (typeof x.maxGroups === 'number') this.params.maxGroups = Math.max(1, Math.min(20, Math.round(x.maxGroups)))
    if (typeof x.hue === 'number') this.params.hue = Math.max(0, Math.min(1, x.hue))
    if (typeof x.opacity === 'number') this.params.opacity = Math.max(0.2, Math.min(1, x.opacity))
    if (typeof x.shape === 'number') this.params.shape = Math.max(0, Math.min(2, Math.round(x.shape)))
    if (typeof x.tilt === 'number') this.params.tilt = Math.max(0, Math.min(1, x.tilt))
    if (typeof x.rotationMode === 'number') this.params.rotationMode = Math.max(0, Math.min(2, Math.round(x.rotationMode)))
    if (typeof x.planeDir === 'number') this.params.planeDir = Math.max(0, Math.min(8, Math.round(x.planeDir)))

    const needRebuild =
      this.geometries.length > 0 &&
      (this.params.shape !== prevShape || (this.params.shape === 2 && this.params.planeDir !== prevPlaneDir))

    if (needRebuild) {
      for (let g = 0; g < this.geometries.length; g++) {
        const geo = this.geometries[g]
        const attr = geo.getAttribute('position') as THREE.BufferAttribute | undefined
        if (!attr) continue
        const next = this.createPositionsForGroup(g)
        attr.array.set(next)
        attr.needsUpdate = true
      }
      // rebuild velocities for flow mode
      this.velocities = []
      for (let g = 0; g < GROUP_COUNT; g++) {
        this.velocities.push(this.createVelocitiesForGroup(g))
      }
    }
  }

  dispose(): void {
    if (this.scene) {
      this.groups.forEach((g) => this.scene!.remove(g))
      this.streakMeshes.forEach((m) => this.scene!.remove(m))
    }
    this.geometries.forEach((geo) => geo.dispose())
    this.streakGeometries.forEach((geo) => geo.dispose())
    this.material?.dispose()
    this.streakMaterial?.dispose()
    this.groups = []
    this.streakMeshes = []
    this.geometries = []
    this.streakGeometries = []
    this.velocities = []
    this.streakPositions = []
    this.material = null
    this.streakMaterial = null
    this.scene = null
  }
}

function set3(arr: Float32Array, i: number, x: number, y: number, z: number) {
  arr[i] = x
  arr[i + 1] = y
  arr[i + 2] = z
}
