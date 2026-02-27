/**
 * FerrofluidEffect - Blob merging, noise, audio-reactive.
 */

import * as THREE from 'three'
import type { IEffect } from './types'
import type { AudioData } from '../core/types'

const MAX_BLOBS = 12
const GEO = new THREE.PlaneGeometry(2, 2)

const VS = `varying vec2 vUv; void main() { vUv = uv; gl_Position = vec4(position, 1.0); }`

const FS = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 uResolution;
uniform float uTime;
uniform float uBlobSize;
uniform float uNoiseStrength;
uniform float uNoiseSpeed;
uniform float uThreshold;
uniform float uSmoothness;
uniform float uAudioBlobSize;
uniform float uAudioNoiseStrength;
uniform float uAudioHueOffset;

varying vec2 vUv;

float sdSphere(vec3 p, vec3 c, float r) {
  return length(p - c) - r;
}

float smin(float a, float b, float k) {
  float h = max(k - abs(a - b), 0.0) / max(k, 0.01);
  return min(a, b) - h * h * k * 0.25;
}

float hash2(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise2(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash2(i);
  float b = hash2(i + vec2(1.0, 0.0));
  float c = hash2(i + vec2(0.0, 1.0));
  float d = hash2(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

void main() {
  vec2 uv = (vUv - 0.5) * 2.0;
  float aspect = uResolution.y > 0.0 ? uResolution.x / uResolution.y : 1.0;
  uv.x *= aspect;
  vec3 ro = vec3(0.0, 0.0, 2.5);
  float sz = uBlobSize * uAudioBlobSize;
  float ns = uNoiseStrength * uAudioNoiseStrength;
  float t = uTime * uNoiseSpeed;
  float k = max(uSmoothness, 0.01);
  float d = 1000.0;
  float s0 = sdSphere(ro, vec3(sin(t)*0.4, cos(t*0.7)*0.4, 0.0), sz*0.9);
  float s1 = sdSphere(ro, vec3(cos(t*0.8)*0.35, sin(t*0.6)*0.35, 0.1), sz*0.85);
  float s2 = sdSphere(ro, vec3(sin(t+1.0)*0.3, cos(t+0.5)*0.3, -0.05), sz*0.9);
  float s3 = sdSphere(ro, vec3(cos(t*1.2+2.0)*0.35, sin(t*0.9)*0.3, 0.05), sz*0.8);
  s0 += noise2(ro.xy + s0) * ns;
  s1 += noise2(ro.xy + s1 + 10.0) * ns;
  s2 += noise2(ro.xy + s2 + 20.0) * ns;
  s3 += noise2(ro.xy + s3 + 30.0) * ns;
  d = smin(d, s0, k);
  d = smin(d, s1, k);
  d = smin(d, s2, k);
  d = smin(d, s3, k);
  float edge = smoothstep(uThreshold - 0.02, uThreshold + 0.02, d);
  vec3 col = mix(vec3(0.02, 0.05, 0.12), vec3(0.9, 0.88, 0.75), 1.0 - edge);
  float hue = 0.55 + uAudioHueOffset;
  col.r *= fract(hue) * 0.2 + 0.8;
  col.g *= fract(hue + 0.33) * 0.1 + 0.9;
  col.b *= fract(hue + 0.66) * 0.2 + 0.8;
  gl_FragColor = vec4(col, 1.0 - edge);
}
`

export interface FerrofluidParams {
  blobCount?: number
  blobSize?: number
  noiseStrength?: number
  noiseSpeed?: number
  threshold?: number
  smoothness?: number
  color?: number
  intensity?: number
  audioReactive?: boolean
}

const DEFAULTS = {
  blobCount: 8,
  blobSize: 0.25,
  noiseStrength: 0.08,
  noiseSpeed: 1,
  threshold: 0.02,
  smoothness: 0.15,
  color: 0.55,
  intensity: 1,
  audioReactive: true,
}

export class FerrofluidEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private mesh: THREE.Mesh | null = null
  private material: THREE.ShaderMaterial | null = null
  private params: typeof DEFAULTS
  private res = new THREE.Vector2(1, 1)

  constructor(p: FerrofluidParams = {}) {
    this.params = { ...DEFAULTS, ...p }
  }

  init(scene: THREE.Scene): void {
    this.scene = scene
    this.material = new THREE.ShaderMaterial({
      vertexShader: VS,
      fragmentShader: FS,
      uniforms: {
        uResolution: { value: this.res },
        uTime: { value: 0 },
        uBlobSize: { value: this.params.blobSize },
        uNoiseStrength: { value: this.params.noiseStrength },
        uNoiseSpeed: { value: this.params.noiseSpeed },
        uThreshold: { value: this.params.threshold },
        uSmoothness: { value: this.params.smoothness },
        uAudioBlobSize: { value: 1 },
        uAudioNoiseStrength: { value: 1 },
        uAudioHueOffset: { value: 0 },
      },
      depthTest: false,
      depthWrite: false,
      transparent: true,
    })
    this.mesh = new THREE.Mesh(GEO, this.material)
    this.mesh.frustumCulled = false
    this.mesh.renderOrder = 999
    scene.add(this.mesh)
  }

  update(data: AudioData, dt: number): void {
    if (!this.material) return
    this.material.uniforms.uTime.value += dt
    if (this.params.audioReactive) {
      const { mapped } = data
      this.material.uniforms.uAudioBlobSize.value = 0.7 + mapped.low * 0.6
      this.material.uniforms.uAudioNoiseStrength.value = 0.5 + mapped.mid * 1.5
      this.material.uniforms.uAudioHueOffset.value = mapped.high * 0.25
    } else {
      this.material.uniforms.uAudioBlobSize.value = 1
      this.material.uniforms.uAudioNoiseStrength.value = 1
      this.material.uniforms.uAudioHueOffset.value = 0
    }
  }

  setParams(p: Record<string, unknown>): void {
    const x = p as FerrofluidParams
    if (x.blobCount !== undefined) this.params.blobCount = Math.min(12, Math.max(1, x.blobCount))
    if (x.blobSize !== undefined) this.params.blobSize = x.blobSize
    if (x.noiseStrength !== undefined) this.params.noiseStrength = x.noiseStrength
    if (x.noiseSpeed !== undefined) this.params.noiseSpeed = x.noiseSpeed
    if (x.threshold !== undefined) this.params.threshold = x.threshold
    if (x.smoothness !== undefined) this.params.smoothness = x.smoothness
    if (x.color !== undefined) this.params.color = x.color
    if (x.intensity !== undefined) this.params.intensity = x.intensity
    if (x.audioReactive !== undefined) this.params.audioReactive = x.audioReactive

    if (this.material) {
      this.material.uniforms.uBlobSize.value = this.params.blobSize
      this.material.uniforms.uNoiseStrength.value = this.params.noiseStrength
      this.material.uniforms.uNoiseSpeed.value = this.params.noiseSpeed
      this.material.uniforms.uThreshold.value = this.params.threshold
      this.material.uniforms.uSmoothness.value = this.params.smoothness
    }
  }

  setResolution(w: number, h: number): void {
    this.res.set(w, h)
    if (this.material) this.material.uniforms.uResolution.value.copy(this.res)
  }

  getParams(): FerrofluidParams {
    return { ...this.params }
  }

  dispose(): void {
    if (this.scene && this.mesh) this.scene.remove(this.mesh)
    this.material?.dispose()
    this.mesh = null
    this.material = null
    this.scene = null
  }
}
