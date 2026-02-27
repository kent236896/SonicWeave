/**
 * FerrofluidEffect - Blob merging with smooth union, noise, audio-reactive.
 * Fragment shader. Cap 12 blobs. Resolution scaling for performance.
 */

import * as THREE from 'three'
import type { IEffect } from './types'
import type { AudioData } from '../templates/types'

const MAX_BLOBS = 12
const FULLSCREEN_GEOMETRY = new THREE.PlaneGeometry(2, 2)

const VERTEX_SHADER = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`

const FRAGMENT_SHADER = `
  precision highp float;
  uniform vec2 uResolution;
  uniform float uTime;
  uniform int uBlobCount;
  uniform float uBlobSize;
  uniform float uNoiseStrength;
  uniform float uNoiseSpeed;
  uniform float uThreshold;
  uniform float uSmoothness;
  uniform float uAudioBlobSize;
  uniform float uAudioNoiseStrength;
  uniform float uAudioHueOffset;

  varying vec2 vUv;

  // Hash for noise
  float hash(vec3 p) {
    return fract(sin(dot(p, vec3(127.1, 311.7, 74.7))) * 43758.5453);
  }
  float noise3d(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float n = mix(
      mix(mix(hash(i), hash(i + vec3(1,0,0)), f.x),
          mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
      mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
          mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z
    );
    return n;
  }

  float smin(float a, float b, float k) {
    float h = max(k - abs(a - b), 0.0) / k;
    return min(a, b) - h * h * k * 0.25;
  }

  float sdSphere(vec3 p, vec3 c, float r) {
    return length(p - c) - r;
  }

  void main() {
    vec2 uv = (vUv - 0.5) * 2.0;
    uv.x *= uResolution.x / uResolution.y;
    vec3 ro = vec3(0.0, 0.0, 2.5);
    vec3 rd = normalize(vec3(uv, -1.5));

    float size = uBlobSize * uAudioBlobSize;
    float ns = uNoiseStrength * uAudioNoiseStrength;
    float t = uTime * uNoiseSpeed;

    float d = 1e10;

    for (int i = 0; i < ${MAX_BLOBS}; i++) {
      float fi = float(i);
      float active = step(fi, float(uBlobCount) - 0.5);
      vec3 center = vec3(
        sin(t + fi * 1.2) * 0.4,
        cos(t * 0.7 + fi * 0.9) * 0.4,
        sin(t * 0.5 + fi) * 0.2
      );
      vec3 c = mix(vec3(1e4, 0.0, 0.0), center, active);
      float r = size * (0.8 + 0.4 * hash(vec3(fi, 0.1, 0.2))) * active;
      float sphereD = sdSphere(ro, c, r);
      vec3 sampleP = ro + sphereD * 0.5;
      float nv = noise3d(sampleP * 4.0 + t) * ns;
      sphereD += nv;
      d = smin(d, sphereD, uSmoothness);
    }

    float edge = smoothstep(uThreshold - 0.02, uThreshold + 0.02, d);
    vec3 col = mix(vec3(0.05, 0.08, 0.15), vec3(0.9, 0.85, 0.7), 1.0 - edge);
    float hue = 0.55 + uAudioHueOffset;
    vec3 tint = vec3(
      fract(hue) * 0.2 + 0.8,
      fract(hue + 0.33) * 0.1 + 0.9,
      fract(hue + 0.66) * 0.2 + 0.8
    );
    col *= tint;
    float alpha = 1.0 - edge;
    gl_FragColor = vec4(col, alpha);
  }
`

export interface FerrofluidParams {
  blobCount?: number
  blobSize?: number
  noiseStrength?: number
  noiseSpeed?: number
  threshold?: number
  smoothness?: number
  audioReactive?: boolean
  audioBand?: 'low' | 'mid' | 'high'
  resolutionScale?: number
}

const DEFAULT_PARAMS: Required<FerrofluidParams> = {
  blobCount: 8,
  blobSize: 0.25,
  noiseStrength: 0.08,
  noiseSpeed: 1,
  threshold: 0.02,
  smoothness: 0.15,
  audioReactive: true,
  audioBand: 'low',
  resolutionScale: 1,
}

export class FerrofluidEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private mesh: THREE.Mesh | null = null
  private material: THREE.ShaderMaterial | null = null
  private params: Required<FerrofluidParams>
  private resolution = new THREE.Vector2(1, 1)

  constructor(params: FerrofluidParams = {}) {
    this.params = { ...DEFAULT_PARAMS, ...params }
  }

  init(scene: THREE.Scene): void {
    this.scene = scene
    this.material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: {
        uResolution: { value: this.resolution },
        uTime: { value: 0 },
        uBlobCount: { value: this.params.blobCount },
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
    this.mesh = new THREE.Mesh(FULLSCREEN_GEOMETRY, this.material)
    this.mesh.frustumCulled = false
    this.mesh.renderOrder = 999
    scene.add(this.mesh)
  }

  update(audioData: AudioData, deltaTime: number): void {
    if (!this.material) return

    this.material.uniforms.uTime.value += deltaTime

    if (this.params.audioReactive) {
      const { mapped } = audioData
      const low = mapped.low
      const mid = mapped.mid
      const high = mapped.high

      this.material.uniforms.uAudioBlobSize.value = 0.7 + low * 0.6
      this.material.uniforms.uAudioNoiseStrength.value = 0.5 + mid * 1.5
      this.material.uniforms.uAudioHueOffset.value = high * 0.25
    } else {
      this.material.uniforms.uAudioBlobSize.value = 1
      this.material.uniforms.uAudioNoiseStrength.value = 1
      this.material.uniforms.uAudioHueOffset.value = 0
    }
  }

  setParams(params: Record<string, unknown>): void {
    const p = params as FerrofluidParams
    if (p.blobCount !== undefined)
      this.params.blobCount = Math.min(MAX_BLOBS, Math.max(1, p.blobCount))
    if (p.blobSize !== undefined) this.params.blobSize = p.blobSize
    if (p.noiseStrength !== undefined) this.params.noiseStrength = p.noiseStrength
    if (p.noiseSpeed !== undefined) this.params.noiseSpeed = p.noiseSpeed
    if (p.threshold !== undefined) this.params.threshold = p.threshold
    if (p.smoothness !== undefined) this.params.smoothness = p.smoothness
    if (p.audioReactive !== undefined) this.params.audioReactive = p.audioReactive
    if (p.audioBand !== undefined) this.params.audioBand = p.audioBand
    if (p.resolutionScale !== undefined)
      this.params.resolutionScale = Math.max(0.25, Math.min(1, p.resolutionScale))

    if (this.material) {
      this.material.uniforms.uBlobCount.value = this.params.blobCount
      this.material.uniforms.uBlobSize.value = this.params.blobSize
      this.material.uniforms.uNoiseStrength.value = this.params.noiseStrength
      this.material.uniforms.uNoiseSpeed.value = this.params.noiseSpeed
      this.material.uniforms.uThreshold.value = this.params.threshold
      this.material.uniforms.uSmoothness.value = this.params.smoothness
    }
  }

  setResolution(width: number, height: number): void {
    this.resolution.set(width, height)
    if (this.material) this.material.uniforms.uResolution.value.copy(this.resolution)
  }

  dispose(): void {
    if (this.scene && this.mesh) this.scene.remove(this.mesh)
    this.material?.dispose()
    this.mesh = null
    this.material = null
    this.scene = null
  }
}
