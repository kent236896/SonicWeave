/**
 * BloomSpheresEffect - 随音乐律动点亮的小球，带 Bloom 光晕。
 * 基于 webgl_postprocessing_unreal_bloom_selective 思路。
 */

import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { TransparentBloomPass } from './TransparentBloomPass'
import type { IEffect } from './types'
import type { AudioData } from '../core/types'

interface BloomSpheresParams {
  imageUrl?: string
  backgroundBrightness?: number
  randomSeed?: number
  gridSize?: number
  sphereSize?: number
  bloomStrength?: number
  bloomRadius?: number
  bloomThreshold?: number
  reactSensitivity?: number
}

function clamp(v: number, a: number, b: number): number {
  return Math.max(a, Math.min(b, v))
}

export class BloomSpheresEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private group: THREE.Group | null = null
  private backgroundMesh: THREE.Mesh | null = null
  private backgroundTexture: THREE.Texture | null = null
  private readonly loader = new THREE.TextureLoader()
  private spheres: THREE.Mesh[] = []
  private composer: EffectComposer | null = null
  private bloomPass: TransparentBloomPass | null = null
  private lastWidth = 0
  private lastHeight = 0
  private smoothEnergy = 0.2
  /** 每个小球的点亮阈值 [0,1]，energy 超过阈值则点亮 */
  private litThresholds: number[] = []
  /** 每个小球的速度 */
  private velocities: THREE.Vector3[] = []

  private params: Required<BloomSpheresParams> = {
    imageUrl: '',
    backgroundBrightness: 0.6,
    randomSeed: 0,
    gridSize: 5,
    sphereSize: 0.12,
    bloomStrength: 1.2,
    bloomRadius: 0.4,
    bloomThreshold: 0.3,
    reactSensitivity: 1.5,
  }

  init(scene: THREE.Scene): void {
    this.scene = scene
    this.scene.background = null
    this.group = new THREE.Group()
    scene.add(this.group)

    const bgGeo = new THREE.PlaneGeometry(12, 12)
    const bgMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1,
      depthWrite: true,
    })
    this.backgroundMesh = new THREE.Mesh(bgGeo, bgMat)
    this.backgroundMesh.position.z = -3
    this.backgroundMesh.renderOrder = -1
    scene.add(this.backgroundMesh)

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.6)
    dirLight.position.set(2, 2, 2)
    scene.add(dirLight)
    const ambLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambLight)

    this.rebuildSpheres()
    this.updateBackgroundImage()
  }

  setImage(url: string | null): void {
    this.params.imageUrl = url ?? ''
    this.updateBackgroundImage()
  }

  private updateBackgroundImage(): void {
    const url = this.params.imageUrl
    if (!this.backgroundMesh) return

    if (!url) {
      this.backgroundTexture?.dispose()
      this.backgroundTexture = null
      ;(this.backgroundMesh.material as THREE.MeshBasicMaterial).map = null
      ;(this.backgroundMesh.material as THREE.MeshBasicMaterial).color.setScalar(1)
      this.backgroundMesh.visible = false
      return
    }

    this.loader.load(
      url,
      (tex) => {
        this.backgroundTexture?.dispose()
        this.backgroundTexture = tex
        tex.colorSpace = THREE.SRGBColorSpace
        tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping
        tex.minFilter = THREE.LinearMipmapLinearFilter
        tex.magFilter = THREE.LinearFilter
        if (this.backgroundMesh) {
          const mat = this.backgroundMesh.material as THREE.MeshBasicMaterial
          mat.map = tex
          mat.color.setScalar(this.params.backgroundBrightness)
          this.backgroundMesh.visible = true
        }
      },
      undefined,
      () => {}
    )
  }

  private randomColor(): string {
    const h = Math.random() * 360
    const s = 60 + Math.random() * 40
    const l = 50 + Math.random() * 30
    return `hsl(${h}, ${s}%, ${l}%)`
  }

  private rebuildSpheres(): void {
    if (!this.group) return
    for (const s of this.spheres) {
      s.geometry.dispose()
      ;(s.material as THREE.Material).dispose()
      this.group.remove(s)
    }
    this.spheres = []
    this.litThresholds = []
    this.velocities = []

    const n = Math.max(2, Math.min(8, Math.round(this.params.gridSize)))
    const total = n * n
    const geo = new THREE.SphereGeometry(this.params.sphereSize, 24, 24)
    const spread = 0.9

    for (let i = 0; i < total; i++) {
      const color = this.randomColor()
      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.3,
        metalness: 0.1,
        emissive: color,
        emissiveIntensity: 0,
      })
      const mesh = new THREE.Mesh(geo.clone(), mat)
      mesh.position.set(
        (Math.random() - 0.5) * 2 * spread,
        (Math.random() - 0.5) * 2 * spread,
        (Math.random() - 0.5) * spread
      )
      this.group.add(mesh)
      this.spheres.push(mesh)
      this.litThresholds.push(Math.random())
      this.velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5)
        )
      )
    }
    geo.dispose()
  }

  update(d: AudioData, dt: number): void {
    if (!this.spheres.length) return

    const energy = d.mapped.energy
    const a = 1 - Math.exp(-dt / 0.04)
    this.smoothEnergy += (energy - this.smoothEnergy) * a
    const sens = this.params.reactSensitivity
    const drive = Math.min(1, this.smoothEnergy * sens)
    const moveSpeed = 0.4 + drive * 1.2
    const bounds = 1.2

    for (let i = 0; i < this.spheres.length; i++) {
      const mesh = this.spheres[i]
      const mat = mesh.material as THREE.MeshStandardMaterial
      const threshold = this.litThresholds[i]
      mat.emissiveIntensity = drive > threshold ? 1 : 0

      const vel = this.velocities[i]
      mesh.position.x += vel.x * dt * moveSpeed
      mesh.position.y += vel.y * dt * moveSpeed
      mesh.position.z += vel.z * dt * moveSpeed
      if (mesh.position.x < -bounds || mesh.position.x > bounds) vel.x *= -1
      if (mesh.position.y < -bounds || mesh.position.y > bounds) vel.y *= -1
      if (mesh.position.z < -bounds || mesh.position.z > bounds) vel.z *= -1
    }
  }

  setParams(p: Record<string, unknown>): void {
    const x = p as BloomSpheresParams
    let rebuild = false
    if (typeof x.imageUrl === 'string') {
      this.params.imageUrl = x.imageUrl
      this.updateBackgroundImage()
    }
    if (typeof x.backgroundBrightness === 'number') {
      this.params.backgroundBrightness = clamp(x.backgroundBrightness, 0.2, 1)
      if (this.backgroundMesh?.visible) {
        ;(this.backgroundMesh.material as THREE.MeshBasicMaterial).color.setScalar(
          this.params.backgroundBrightness
        )
      }
    }
    if (typeof x.randomSeed === 'number') {
      this.params.randomSeed = x.randomSeed
      rebuild = true
    }
    if (typeof x.gridSize === 'number') {
      this.params.gridSize = clamp(x.gridSize, 2, 8)
      rebuild = true
    }
    if (typeof x.sphereSize === 'number') {
      this.params.sphereSize = clamp(x.sphereSize, 0.05, 0.3)
      rebuild = true
    }
    if (typeof x.bloomStrength === 'number') this.params.bloomStrength = clamp(x.bloomStrength, 0.2, 3)
    if (typeof x.bloomRadius === 'number') this.params.bloomRadius = clamp(x.bloomRadius, 0.1, 1)
    if (typeof x.bloomThreshold === 'number') this.params.bloomThreshold = clamp(x.bloomThreshold, 0, 1)
    if (typeof x.reactSensitivity === 'number') this.params.reactSensitivity = clamp(x.reactSensitivity, 0.2, 4)
    if (rebuild) this.rebuildSpheres()
  }

  /** 自定义渲染：带 Bloom 后处理，背景透明 */
  renderCustom(
    renderer: THREE.WebGLRenderer,
    camera: THREE.PerspectiveCamera,
    width: number,
    height: number
  ): void {
    if (!this.scene) return

    const prevClear = renderer.getClearColor(new THREE.Color())
    const prevAlpha = renderer.getClearAlpha()
    renderer.setClearColor(0x000000, 0)

    if (!this.composer || this.lastWidth !== width || this.lastHeight !== height) {
      this.composer?.dispose()
      this.composer = new EffectComposer(renderer)
      this.composer.setSize(width, height)
      this.composer.setPixelRatio(1)
      this.composer.addPass(new RenderPass(this.scene, camera))
      this.bloomPass = new TransparentBloomPass(
        new THREE.Vector2(width, height),
        this.params.bloomStrength,
        this.params.bloomRadius,
        this.params.bloomThreshold
      )
      this.composer.addPass(this.bloomPass)
      this.lastWidth = width
      this.lastHeight = height
    }

    if (this.bloomPass) {
      this.bloomPass.strength = this.params.bloomStrength
      this.bloomPass.radius = this.params.bloomRadius
      this.bloomPass.threshold = this.params.bloomThreshold
    }

    this.composer.render()
    renderer.setClearColor(prevClear, prevAlpha)
  }

  dispose(): void {
    this.composer?.dispose()
    this.composer = null
    this.bloomPass = null
    this.velocities = []
    this.backgroundTexture?.dispose()
    this.backgroundTexture = null
    if (this.backgroundMesh) {
      this.backgroundMesh.geometry.dispose()
      ;(this.backgroundMesh.material as THREE.Material).dispose()
      this.scene?.remove(this.backgroundMesh)
      this.backgroundMesh = null
    }
    if (this.group) {
      for (const s of this.spheres) {
        s.geometry.dispose()
        ;(s.material as THREE.Material).dispose()
      }
      this.spheres = []
      this.scene?.remove(this.group)
    }
    this.group = null
    this.scene = null
  }
}
