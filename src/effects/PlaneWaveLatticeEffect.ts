/**
 * PlaneWaveLatticeEffect - 3D lattice points driven by plane wave.
 * Inspired by the classic "plane wave on a 3D lattice" visualization.
 */

import * as THREE from 'three'
import type { IEffect } from './types'
import type { AudioData } from '../core/types'

const VS = `
uniform float uTime;
uniform float uEnergy;
uniform vec3 uK;
uniform float uOmega;
uniform float uAmp;
uniform float uSharpness;
uniform float uPointSize;
uniform float uOpacity;

varying float vA;

void main(){
  // plane wave: u(x,t) = sin(k·x - ωt)
  float phase = dot(uK, position) - uOmega * uTime;
  float u = sin(phase);
  float a = pow(abs(u), uSharpness);
  // energy increases contrast slightly
  a *= (0.75 + uEnergy * 0.9);
  vA = clamp(a, 0.0, 1.0);

  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  // perspective correct point size
  float dist = max(0.001, -mv.z);
  gl_PointSize = uPointSize * (1.0 / dist) * 300.0;
}
`

const FS = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec3 uColor;
uniform float uOpacity;

varying float vA;

void main(){
  // soft circular sprite
  vec2 p = gl_PointCoord - vec2(0.5);
  float d = dot(p, p);
  float m = smoothstep(0.25, 0.0, d); // 0 at edge, 1 at center

  float a = vA * m * uOpacity;
  vec3 col = uColor * (0.25 + 1.35 * vA);
  gl_FragColor = vec4(col, a);
}
`

interface PlaneWaveParams {
  color?: string
  opacity?: number
  pointSize?: number
  grid?: number
  spacing?: number
  k?: number
  theta?: number // 0..1 -> 0..2π
  phi?: number // 0..1 -> -π/2..π/2
  omega?: number
  sharpness?: number
  amp?: number
  rotateSpeed?: number
  /** Audio-reactive amounts (0 = off). */
  reactOmega?: number
  reactPointSize?: number
  reactSharpness?: number
  reactK?: number
  reactRotate?: number
}

export class PlaneWaveLatticeEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private points: THREE.Points | null = null
  private geo: THREE.BufferGeometry | null = null
  private mat: THREE.ShaderMaterial | null = null
  private group: THREE.Group | null = null

  private t = 0

  private params: Required<PlaneWaveParams> = {
    color: '#ff2b2b',
    opacity: 0.95,
    pointSize: 0.018,
    grid: 18,
    spacing: 0.22,
    k: 2.8,
    theta: 0.08,
    phi: 0.52,
    omega: 2.2,
    sharpness: 4.2,
    amp: 1,
    rotateSpeed: 0.18,
    reactOmega: 0.9,
    reactPointSize: 0.9,
    reactSharpness: 0.35,
    reactK: 0.35,
    reactRotate: 0.65,
  }

  init(scene: THREE.Scene): void {
    this.scene = scene
    this.t = 0

    this.group = new THREE.Group()
    this.group.renderOrder = 20
    scene.add(this.group)

    this.build()
    this.applyParams()
  }

  update(d: AudioData, dt: number): void {
    if (!this.mat || !this.group) return
    this.t += dt
    this.mat.uniforms.uTime.value = this.t
    const energy = d.mapped.energy
    this.mat.uniforms.uEnergy.value = energy

    // Audio-reactive parameter modulation
    const omega = this.params.omega * (1 + energy * this.params.reactOmega)
    const pointSize = this.params.pointSize * (1 + energy * this.params.reactPointSize)
    const sharpness = this.params.sharpness * (1 + energy * this.params.reactSharpness)

    // k reacts a bit less; keep direction stable but change wavelength
    const kMag = this.params.k * (1 + energy * this.params.reactK)
    const dir = this.computeDir()
    this.mat.uniforms.uK.value.copy(dir.multiplyScalar(kMag))

    this.mat.uniforms.uOmega.value = clamp(omega, 0, 8)
    this.mat.uniforms.uPointSize.value = clamp(pointSize, 0.004, 0.06)
    this.mat.uniforms.uSharpness.value = clamp(sharpness, 1, 10)

    // gentle auto-rotation to match the "3D lattice" feel
    const rs = this.params.rotateSpeed * (0.35 + d.mapped.mid * 1.2) * (1 + energy * this.params.reactRotate)
    this.group.rotation.y += rs * dt
    this.group.rotation.x += rs * 0.35 * dt
  }

  setParams(p: Record<string, unknown>): void {
    const x = p as PlaneWaveParams
    const prevGrid = this.params.grid
    const prevSpacing = this.params.spacing

    if (typeof x.color === 'string') this.params.color = x.color
    if (typeof x.opacity === 'number') this.params.opacity = clamp(x.opacity, 0.05, 1)
    if (typeof x.pointSize === 'number') this.params.pointSize = clamp(x.pointSize, 0.004, 0.06)
    if (typeof x.grid === 'number') this.params.grid = Math.max(6, Math.min(40, Math.round(x.grid)))
    if (typeof x.spacing === 'number') this.params.spacing = clamp(x.spacing, 0.08, 0.55)
    if (typeof x.k === 'number') this.params.k = clamp(x.k, 0.2, 10)
    if (typeof x.theta === 'number') this.params.theta = clamp(x.theta, 0, 1)
    if (typeof x.phi === 'number') this.params.phi = clamp(x.phi, 0, 1)
    if (typeof x.omega === 'number') this.params.omega = clamp(x.omega, 0, 8)
    if (typeof x.sharpness === 'number') this.params.sharpness = clamp(x.sharpness, 1, 10)
    if (typeof x.amp === 'number') this.params.amp = clamp(x.amp, 0, 2)
    if (typeof x.rotateSpeed === 'number') this.params.rotateSpeed = clamp(x.rotateSpeed, 0, 1.2)
    if (typeof x.reactOmega === 'number') this.params.reactOmega = clamp(x.reactOmega, 0, 2)
    if (typeof x.reactPointSize === 'number') this.params.reactPointSize = clamp(x.reactPointSize, 0, 2)
    if (typeof x.reactSharpness === 'number') this.params.reactSharpness = clamp(x.reactSharpness, 0, 2)
    if (typeof x.reactK === 'number') this.params.reactK = clamp(x.reactK, 0, 2)
    if (typeof x.reactRotate === 'number') this.params.reactRotate = clamp(x.reactRotate, 0, 2)

    const needRebuild = !!this.geo && (this.params.grid !== prevGrid || this.params.spacing !== prevSpacing)
    if (needRebuild) this.build()
    this.applyParams()
  }

  dispose(): void {
    if (this.scene && this.group) this.scene.remove(this.group)
    if (this.group && this.points) this.group.remove(this.points)
    this.geo?.dispose()
    this.mat?.dispose()
    this.points = null
    this.geo = null
    this.mat = null
    this.group = null
    this.scene = null
  }

  private build(): void {
    if (!this.group) return
    if (this.points) this.group.remove(this.points)
    this.geo?.dispose()

    const n = this.params.grid
    const sp = this.params.spacing
    const half = (n - 1) * 0.5 * sp
    const count = n * n * n
    const pos = new Float32Array(count * 3)

    let k = 0
    for (let z = 0; z < n; z++) {
      for (let y = 0; y < n; y++) {
        for (let x = 0; x < n; x++) {
          pos[k++] = x * sp - half
          pos[k++] = y * sp - half
          pos[k++] = z * sp - half
        }
      }
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    geo.computeBoundingSphere()
    this.geo = geo

    if (!this.mat) {
      this.mat = new THREE.ShaderMaterial({
        vertexShader: VS,
        fragmentShader: FS,
        uniforms: {
          uTime: { value: 0 },
          uEnergy: { value: 0.4 },
          uK: { value: new THREE.Vector3(1, 0, 0) },
          uOmega: { value: this.params.omega },
          uAmp: { value: this.params.amp },
          uSharpness: { value: this.params.sharpness },
          uPointSize: { value: this.params.pointSize },
          uColor: { value: new THREE.Color(0xff2b2b) },
          uOpacity: { value: this.params.opacity },
        },
        transparent: true,
        depthWrite: false,
        depthTest: true,
        blending: THREE.AdditiveBlending,
      })
    }

    const pts = new THREE.Points(geo, this.mat)
    pts.frustumCulled = false
    this.points = pts
    this.group.add(pts)

    // keep it framed reasonably under the shared camera
    this.group.scale.setScalar(1.0)
    this.group.position.set(0, 0, 0)
    this.group.rotation.set(0.15, 0.55, 0)
  }

  private applyParams(): void {
    if (!this.mat) return
    const c = new THREE.Color()
    try {
      c.set(this.params.color)
    } catch {
      c.set('#ff2b2b')
    }

    const dir = this.computeDir()
    this.mat.uniforms.uK.value.copy(dir.multiplyScalar(this.params.k))
    this.mat.uniforms.uOmega.value = this.params.omega
    this.mat.uniforms.uAmp.value = this.params.amp
    this.mat.uniforms.uSharpness.value = this.params.sharpness
    this.mat.uniforms.uPointSize.value = this.params.pointSize
    this.mat.uniforms.uColor.value.copy(c)
    this.mat.uniforms.uOpacity.value = this.params.opacity
  }

  private computeDir(): THREE.Vector3 {
    const theta = this.params.theta * Math.PI * 2
    const phi = (this.params.phi * 2 - 1) * (Math.PI / 2) * 0.85
    return new THREE.Vector3(
      Math.cos(theta) * Math.cos(phi),
      Math.sin(phi),
      Math.sin(theta) * Math.cos(phi)
    ).normalize()
  }
}

function clamp(v: number, a: number, b: number): number {
  return Math.max(a, Math.min(b, v))
}

