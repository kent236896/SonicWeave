/**
 * WaveTunnelTemplate - Shader-based audio-reactive tunnel.
 * Uses ParameterMappingSystem for data-driven band mapping.
 */

import * as THREE from 'three'
import type { ITemplate } from './types'
import type { AudioData } from './types'
import { ParameterMappingSystem } from '../mapping/ParameterMappingSystem'
import { TUNNEL_MAPPINGS } from './configs/tunnelMappings'

const TUNNEL_SEGMENTS = 64
const TUNNEL_RADIUS = 1.5

const VERTEX_SHADER = `
  varying vec2 vUv;
  varying float vDepth;

  void main() {
    vUv = uv;
    vDepth = position.z;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const FRAGMENT_SHADER = `
  uniform float uTime;
  uniform float uPulse;
  uniform float uWaveSpeed;
  uniform vec3 uColor1;
  uniform vec3 uColor2;

  varying vec2 vUv;
  varying float vDepth;

  void main() {
    float ring = vUv.x * 3.14159 * 2.0;
    float wave = sin(ring * 8.0 - uTime * uWaveSpeed * 10.0) * 0.5 + 0.5;
    float pulse = uPulse * wave + 0.5;
    vec3 col = mix(uColor1, uColor2, wave);
    col *= pulse;
    float alpha = (1.0 - vDepth * 0.5) * 0.9;
    gl_FragColor = vec4(col, alpha);
  }
`

export class WaveTunnelTemplate implements ITemplate {
  private scene: THREE.Scene | null = null
  private mesh: THREE.Mesh | null = null
  private geometry: THREE.BufferGeometry | null = null
  private material: THREE.ShaderMaterial | null = null
  private mappingSystem: ParameterMappingSystem

  constructor() {
    this.mappingSystem = new ParameterMappingSystem(TUNNEL_MAPPINGS)
  }

  init(scene: THREE.Scene, _audioData: AudioData): void {
    this.scene = scene
    this.mappingSystem.reset()

    const verts: number[] = []
    const uvs: number[] = []
    const segments = TUNNEL_SEGMENTS
    const rings = 32

    for (let r = 0; r <= rings; r++) {
      const z = (-r / rings) * 6
      const radius = TUNNEL_RADIUS * (1 + z * 0.1)
      for (let s = 0; s <= segments; s++) {
        const theta = (s / segments) * Math.PI * 2
        verts.push(Math.cos(theta) * radius, Math.sin(theta) * radius, z)
        uvs.push(s / segments, r / rings)
      }
    }

    const indices: number[] = []
    for (let r = 0; r < rings; r++) {
      for (let s = 0; s < segments; s++) {
        const a = r * (segments + 1) + s
        const b = a + segments + 1
        indices.push(a, b, a + 1, a + 1, b, b + 1)
      }
    }

    this.geometry = new THREE.BufferGeometry()
    this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
    this.geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
    this.geometry.setIndex(indices)
    this.geometry.computeVertexNormals()

    const c1 = new THREE.Color().setHSL(0.6, 0.8, 0.5)
    const c2 = new THREE.Color().setHSL(0.75, 0.8, 0.6)

    this.material = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms: {
        uTime: { value: 0 },
        uPulse: { value: 1 },
        uWaveSpeed: { value: 1 },
        uColor1: { value: new THREE.Vector3(c1.r, c1.g, c1.b) },
        uColor2: { value: new THREE.Vector3(c2.r, c2.g, c2.b) },
      },
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    })

    this.mesh = new THREE.Mesh(this.geometry, this.material)
    scene.add(this.mesh)
  }

  update(audioData: AudioData, deltaTime: number): void {
    if (!this.material || !this.mesh) return

    const p = this.mappingSystem.map(audioData.mapped)

    this.material.uniforms.uTime.value += deltaTime
    this.material.uniforms.uPulse.value = p.pulse ?? 1
    this.material.uniforms.uWaveSpeed.value = p.waveSpeed ?? 1
    const hue = 0.6 + (p.hueOffset ?? 0)
    const c1 = new THREE.Color().setHSL(hue, 0.8, 0.5)
    const c2 = new THREE.Color().setHSL(hue + 0.1, 0.8, 0.6)
    this.material.uniforms.uColor1.value.set(c1.r, c1.g, c1.b)
    this.material.uniforms.uColor2.value.set(c2.r, c2.g, c2.b)

    this.mesh.rotation.z += deltaTime * (p.rotationSpeed ?? 0.3)
  }

  dispose(): void {
    if (this.scene && this.mesh) {
      this.scene.remove(this.mesh)
    }
    this.geometry?.dispose()
    this.material?.dispose()
    this.mesh = null
    this.geometry = null
    this.material = null
    this.scene = null
  }
}
