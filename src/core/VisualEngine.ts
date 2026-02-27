/**
 * VisualEngine - Three.js scene manager.
 */

import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

export interface VisualEngineConfig {
  canvas: HTMLCanvasElement
  pixelRatio?: number
  bloom?: boolean
  bloomStrength?: number
  bloomRadius?: number
}

export class VisualEngine {
  readonly scene: THREE.Scene
  readonly camera: THREE.PerspectiveCamera
  readonly renderer: THREE.WebGLRenderer
  private composer: EffectComposer | null = null
  private bloomPass: UnrealBloomPass | null = null

  constructor(config: VisualEngineConfig) {
    const { canvas, pixelRatio = window.devicePixelRatio, bloom = true } = config
    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(
      60,
      canvas.width / canvas.height,
      0.1,
      1000
    )
    this.camera.position.z = 5

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
    })
    this.renderer.setPixelRatio(pixelRatio)
    this.renderer.setSize(canvas.width, canvas.height)
    this.renderer.setClearColor(0x0a0a0f, 1)
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1
    this.renderer.outputColorSpace = THREE.SRGBColorSpace

    if (bloom) {
      this.composer = new EffectComposer(this.renderer)
      this.composer.addPass(new RenderPass(this.scene, this.camera))
      this.bloomPass = new UnrealBloomPass(
        new THREE.Vector2(canvas.width, canvas.height),
        config.bloomStrength ?? 0.5,
        config.bloomRadius ?? 0.4,
        0.85
      )
      this.composer.addPass(this.bloomPass)
    }
  }

  resize(width: number, height: number): void {
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height)
    if (this.composer) {
      this.composer.setSize(width, height)
      this.composer.setPixelRatio(window.devicePixelRatio)
    }
    if (this.bloomPass) this.bloomPass.resolution.set(width, height)
  }

  getSize(target: THREE.Vector2): THREE.Vector2 {
    return this.renderer.getSize(target)
  }

  render(): void {
    this.composer ? this.composer.render() : this.renderer.render(this.scene, this.camera)
  }

  dispose(): void {
    this.scene.traverse((obj) => {
      const m = obj as THREE.Mesh
      if (m.geometry) m.geometry.dispose()
      if (m.material) {
        const mats = Array.isArray(m.material) ? m.material : [m.material]
        mats.forEach((mat) => mat.dispose())
      }
    })
    this.renderer.dispose()
  }
}
