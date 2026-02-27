/**
 * VisualEngine - Three.js scene manager.
 */

import * as THREE from 'three'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js'
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

export interface VisualEngineConfig {
  canvas: HTMLCanvasElement
  pixelRatio?: number
  /** Enable FXAA postprocessing. Default true */
  fxaa?: boolean
  bloom?: boolean
  bloomStrength?: number
  bloomRadius?: number
  /** If true, canvas supports alpha and clears with transparent background */
  transparent?: boolean
}

export class VisualEngine {
  readonly scene: THREE.Scene
  readonly camera: THREE.PerspectiveCamera
  readonly renderer: THREE.WebGLRenderer
  private composer: EffectComposer | null = null
  private bloomPass: UnrealBloomPass | null = null
  private fxaaPass: ShaderPass | null = null

  constructor(config: VisualEngineConfig) {
    const devicePR = window.devicePixelRatio || 1
    // 轻量级超采样：提高一点内部分辨率，减弱几何边缘锯齿
    const defaultPR = Math.min(2, devicePR * 1.5)
    const { canvas, pixelRatio = defaultPR, fxaa = true, bloom = true, transparent = false } = config
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
      alpha: transparent,
      powerPreference: 'high-performance',
    })
    this.renderer.setPixelRatio(pixelRatio)
    // 不要让 three.js 覆盖 canvas 的 CSS 尺寸（会导致图层看起来“超出蓝框/不居中”）
    this.renderer.setSize(canvas.width, canvas.height, false)
    this.renderer.setClearColor(0x0a0a0f, transparent ? 0 : 1)
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1
    this.renderer.outputColorSpace = THREE.SRGBColorSpace

    // 后处理管线：RenderPass -> (可选) FXAA -> (可选) Bloom
    // 多图层合成/viewport 渲染时可能会禁用后处理以提升稳定性与性能。
    if (fxaa || bloom) {
      this.composer = new EffectComposer(this.renderer)
      const renderPass = new RenderPass(this.scene, this.camera)
      this.composer.addPass(renderPass)

      if (fxaa) {
        this.fxaaPass = new ShaderPass(FXAAShader)
        // 关键：FXAA 默认会把 alpha 写成 1，透明 canvas 会变“黑底”。
        // 这里强制保留输入贴图的 alpha，这样棋盘格/底图还能透出来。
        if (typeof this.fxaaPass.material.fragmentShader === 'string') {
          this.fxaaPass.material.fragmentShader = this.fxaaPass.material.fragmentShader.replace(
            /gl_FragColor\s*=\s*vec4\s*\(\s*([^,]+)\s*,\s*1\.0\s*\)\s*;/,
            'gl_FragColor = vec4($1, texture2D(tDiffuse, vUv).a);'
          )
          this.fxaaPass.material.needsUpdate = true
        }
        const pr = this.renderer.getPixelRatio()
        this.fxaaPass.material.uniforms['resolution'].value.set(
          1 / (canvas.width * pr),
          1 / (canvas.height * pr)
        )
        this.composer.addPass(this.fxaaPass)
      }

      if (bloom) {
        this.bloomPass = new UnrealBloomPass(
          new THREE.Vector2(canvas.width, canvas.height),
          config.bloomStrength ?? 0.5,
          config.bloomRadius ?? 0.4,
          0.85
        )
        this.composer.addPass(this.bloomPass)
      }
    }
  }

  resize(width: number, height: number): void {
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize(width, height, false)
    if (this.composer) {
      this.composer.setSize(width, height)
      // 保持后处理与 renderer 像素比一致
      this.composer.setPixelRatio(this.renderer.getPixelRatio())
      if (this.fxaaPass) {
        const pr = this.renderer.getPixelRatio()
        this.fxaaPass.material.uniforms['resolution'].value.set(
          1 / (width * pr),
          1 / (height * pr)
        )
      }
      if (this.bloomPass) this.bloomPass.resolution.set(width, height)
    }
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
