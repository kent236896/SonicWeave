/**
 * WaveTunnelEffect - IEffect wrapper.
 */

import * as THREE from 'three'
import type { IEffect } from './types'
import type { AudioData } from '../core/types'

const SEG = 64
const RAD = 1.5
const VS = `varying vec2 vUv; varying float vDepth;
void main(){vUv=uv;vDepth=position.z;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`
const FS = `uniform float uTime; uniform float uPulse; uniform float uWaveSpeed; uniform vec3 uColor1; uniform vec3 uColor2;
varying vec2 vUv; varying float vDepth;
void main(){
  float r=vUv.x*6.283;float w=sin(r*8.0-uTime*uWaveSpeed*10.0)*0.5+0.5;
  vec3 col=mix(uColor1,uColor2,w)*(uPulse*w+0.5);
  gl_FragColor=vec4(col,(1.0-vDepth*0.5)*0.9);
}`

export class WaveTunnelEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private mesh: THREE.Mesh | null = null
  private geometry: THREE.BufferGeometry | null = null
  private material: THREE.ShaderMaterial | null = null

  init(scene: THREE.Scene): void {
    this.scene = scene
    const verts: number[] = []
    const uvs: number[] = []
    for (let r = 0; r <= 32; r++) {
      const z = (-r / 32) * 6
      const rad = RAD * (1 + z * 0.1)
      for (let s = 0; s <= SEG; s++) {
        const th = (s / SEG) * Math.PI * 2
        verts.push(Math.cos(th) * rad, Math.sin(th) * rad, z)
        uvs.push(s / SEG, r / 32)
      }
    }
    const idx: number[] = []
    for (let r = 0; r < 32; r++)
      for (let s = 0; s < SEG; s++) {
        const a = r * (SEG + 1) + s
        const b = a + SEG + 1
        idx.push(a, b, a + 1, a + 1, b, b + 1)
      }
    this.geometry = new THREE.BufferGeometry()
    this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
    this.geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
    this.geometry.setIndex(idx)
    const c1 = new THREE.Color().setHSL(0.6, 0.8, 0.5)
    const c2 = new THREE.Color().setHSL(0.75, 0.8, 0.6)
    this.material = new THREE.ShaderMaterial({
      vertexShader: VS,
      fragmentShader: FS,
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

  update(d: AudioData, dt: number): void {
    if (!this.material || !this.mesh) return
    const { mapped } = d
    this.material.uniforms.uTime.value += dt
    this.material.uniforms.uPulse.value = 0.5 + mapped.low
    this.material.uniforms.uWaveSpeed.value = 0.5 + mapped.mid
    const hue = 0.6 + mapped.high * 0.2
    const c1 = new THREE.Color().setHSL(hue, 0.8, 0.5)
    const c2 = new THREE.Color().setHSL(hue + 0.1, 0.8, 0.6)
    this.material.uniforms.uColor1.value.set(c1.r, c1.g, c1.b)
    this.material.uniforms.uColor2.value.set(c2.r, c2.g, c2.b)
    this.mesh.rotation.z += dt * (0.2 + mapped.mid * 0.3)
  }

  setParams(_: Record<string, unknown>): void {}

  dispose(): void {
    if (this.scene && this.mesh) this.scene.remove(this.mesh)
    this.geometry?.dispose()
    this.material?.dispose()
    this.mesh = this.geometry = this.material = null
    this.scene = null
  }
}
