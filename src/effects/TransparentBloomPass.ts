/**
 * TransparentBloomPass - 基于 UnrealBloomPass，blend 时使用 luminance 作为 alpha，
 * 使暗部透明，保留背景透明。
 */

import * as THREE from 'three'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js'

const TransparentBlendShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D tDiffuse;
    varying vec2 vUv;
    void main() {
      vec4 texel = texture2D(tDiffuse, vUv);
      float lum = dot(texel.rgb, vec3(0.299, 0.587, 0.114));
      gl_FragColor = vec4(texel.rgb, lum);
    }
  `,
}

export class TransparentBloomPass extends UnrealBloomPass {
  constructor(
    resolution: THREE.Vector2,
    strength: number,
    radius: number,
    threshold: number
  ) {
    super(resolution, strength, radius, threshold)
    const blendMat = new THREE.ShaderMaterial({
      uniforms: { tDiffuse: { value: null as THREE.Texture | null } },
      vertexShader: TransparentBlendShader.vertexShader,
      fragmentShader: TransparentBlendShader.fragmentShader,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
      transparent: true,
    })
    ;(this as any).blendMaterial = blendMat
    ;(this as any).copyUniforms = blendMat.uniforms
  }
}
