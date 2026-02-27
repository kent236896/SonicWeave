/**
 * EnergyFieldEffect - Blue energy ring / field (shader).
 */

import * as THREE from 'three'
import type { IEffect } from './types'
import type { AudioData } from '../core/types'

const GEO = new THREE.PlaneGeometry(2, 2)

const VS = `varying vec2 vUv;
void main(){
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`

const FS = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 uResolution;
uniform float uTime;
uniform float uEnergy;
uniform vec3 uColor;
uniform float uOpacity;
uniform float uIntensity;
uniform float uRadius;
uniform float uThickness;
uniform float uNoise;
uniform float uSpeed;

varying vec2 vUv;

float hash21(vec2 p){
  p = fract(p*vec2(123.34, 456.21));
  p += dot(p, p+45.32);
  return fract(p.x*p.y);
}

float noise2(vec2 p){
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  vec2 u = f*f*(3.0-2.0*f);
  return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
}

float fbm(vec2 p){
  float v = 0.0;
  float a = 0.5;
  for(int i=0;i<5;i++){
    v += a * noise2(p);
    p *= 2.02;
    a *= 0.5;
  }
  return v;
}

float noise3(vec3 p){
  return (noise2(p.xy) + noise2(p.yz) + noise2(p.zx)) / 3.0;
}

float fbm3(vec3 p){
  float v = 0.0;
  float a = 0.55;
  for(int i=0;i<4;i++){
    v += a * noise3(p);
    p *= 2.02;
    a *= 0.5;
  }
  return v;
}

void main(){
  // centered coordinates
  vec2 uv = vUv - 0.5;
  float aspect = uResolution.y > 0.0 ? uResolution.x / uResolution.y : 1.0;
  uv.x *= aspect;

  float r = length(uv);
  float ang = atan(uv.y, uv.x);

  float t = uTime * (0.55 + uSpeed);
  float aa = fwidth(r) * 1.35 + 0.001;

  // Seamless angular domain: use unit circle instead of raw angle for noise inputs
  vec2 ca = vec2(cos(ang), sin(ang));

  float radius = uRadius;
  float thick = uThickness * (0.8 + uEnergy * 0.9);

  // Flow field around the ring (pseudo-3D fbm, seam-free)
  vec3 fp = vec3(ca * 1.35, r * 2.2);
  float flow1 = fbm3(fp * 2.2 + vec3(0.0, t * 0.35, -t * 0.22)) * 2.0 - 1.0;
  float flow2 = fbm3(fp * 4.4 + vec3(t * 0.28, 0.0, t * 0.18)) * 2.0 - 1.0;
  float warp = (flow1 * 0.9 + flow2 * 0.55) * uNoise * 0.055;

  // Thickness variation along the ring (membrane look)
  float thickV = thick * (0.65 + 0.55 * (fbm3(vec3(ca * 2.1, t * 0.12)) * 0.9 + 0.1));

  // Base ring mask (thin film)
  float d = abs(r - (radius + warp));
  float ring = smoothstep(thickV + aa, thickV - aa, d);

  // Edge glow emphasis (brighter at membrane edge)
  float edge = smoothstep(thickV * 0.95, thickV * 0.15, d);
  edge = pow(edge, 1.35);

  // Filament ridges that run along the membrane
  float ridgeN = fbm3(vec3(ca * 7.2, (r - radius) * 18.0 + t * 0.55));
  float ridges = smoothstep(0.58, 0.9, ridgeN);
  ridges = pow(ridges, 3.2) * ring * edge;

  // Outer wisps / smoke-like trails
  float outerD = max(0.0, r - (radius + thick * 0.72));
  float outerGlow = exp(-outerD * outerD * 75.0);
  float wispN = fbm3(vec3(ca * 3.8 + vec2(flow2, flow1) * 0.35, t * 0.25));
  float wisps = outerGlow * pow(wispN, 2.2) * (0.55 + uEnergy * 0.75);

  // Subtle inner glow (keep center mostly transparent)
  float innerD = max(0.0, (radius - thick * 0.65) - r);
  float innerGlow = exp(-innerD * innerD * 120.0) * 0.28;

  // Energy pulse
  float pulse = 0.55 + uEnergy * 1.05;

  vec3 baseCol = uColor;
  vec3 hotCol = mix(uColor, vec3(0.18, 0.72, 1.0), 0.55);

  // Color: deep -> hot edge, plus filament highlights
  vec3 col = baseCol * (0.12 + 0.32 * pulse);
  col += hotCol * (edge * (0.85 + 0.9 * pulse));
  col += hotCol * (ridges * (1.6 + 1.4 * uEnergy));
  col += baseCol * (wisps * 0.95 + innerGlow * 0.25);
  col *= uIntensity;

  float a = (ring * 0.75 + edge * 0.25 + ridges * 0.65 + wisps * 0.55 + innerGlow * 0.18) * uOpacity;
  gl_FragColor = vec4(col, clamp(a, 0.0, 1.0));
}
`

interface EnergyParams {
  color?: string // hex
  opacity?: number // 0-1
  intensity?: number // 0-3
  radius?: number // 0.1-1.2
  thickness?: number // 0.01-0.4
  noise?: number // 0-2
  speed?: number // 0-2
}

export class EnergyFieldEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private mesh: THREE.Mesh | null = null
  private material: THREE.ShaderMaterial | null = null
  private params: Required<EnergyParams> = {
    color: '#3fd2ff',
    opacity: 0.95,
    intensity: 1.1,
    radius: 0.62,
    thickness: 0.08,
    noise: 1.0,
    speed: 0.9,
  }

  init(scene: THREE.Scene): void {
    this.scene = scene
    this.material = new THREE.ShaderMaterial({
      vertexShader: VS,
      fragmentShader: FS,
      uniforms: {
        uResolution: { value: new THREE.Vector2(1, 1) },
        uTime: { value: 0 },
        uEnergy: { value: 0.4 },
        uColor: { value: new THREE.Vector3(0.25, 0.8, 1.0) },
        uOpacity: { value: this.params.opacity },
        uIntensity: { value: this.params.intensity },
        uRadius: { value: this.params.radius },
        uThickness: { value: this.params.thickness },
        uNoise: { value: this.params.noise },
        uSpeed: { value: this.params.speed },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.AdditiveBlending,
    })
    this.mesh = new THREE.Mesh(GEO, this.material)
    this.mesh.frustumCulled = false
    this.mesh.renderOrder = 20
    scene.add(this.mesh)
    this.applyParams()
  }

  update(d: AudioData, dt: number): void {
    if (!this.material) return
    this.material.uniforms.uTime.value += dt
    this.material.uniforms.uEnergy.value = d.mapped.energy
    this.material.uniforms.uResolution.value.set(
      d.resolution?.width ?? 1,
      d.resolution?.height ?? 1
    )
  }

  setParams(p: Record<string, unknown>): void {
    const x = p as EnergyParams
    if (typeof x.color === 'string') this.params.color = x.color
    if (typeof x.opacity === 'number') this.params.opacity = Math.max(0.05, Math.min(1, x.opacity))
    if (typeof x.intensity === 'number') this.params.intensity = Math.max(0.1, Math.min(3, x.intensity))
    if (typeof x.radius === 'number') this.params.radius = Math.max(0.1, Math.min(1.2, x.radius))
    if (typeof x.thickness === 'number') this.params.thickness = Math.max(0.01, Math.min(0.4, x.thickness))
    if (typeof x.noise === 'number') this.params.noise = Math.max(0, Math.min(2, x.noise))
    if (typeof x.speed === 'number') this.params.speed = Math.max(0, Math.min(2, x.speed))
    this.applyParams()
  }

  dispose(): void {
    if (this.scene && this.mesh) this.scene.remove(this.mesh)
    this.material?.dispose()
    this.mesh = null
    this.material = null
    this.scene = null
  }

  private applyParams(): void {
    if (!this.material) return
    const c = new THREE.Color()
    try {
      c.set(this.params.color)
    } catch {
      c.set('#3fd2ff')
    }
    this.material.uniforms.uColor.value.set(c.r, c.g, c.b)
    this.material.uniforms.uOpacity.value = this.params.opacity
    this.material.uniforms.uIntensity.value = this.params.intensity
    this.material.uniforms.uRadius.value = this.params.radius
    this.material.uniforms.uThickness.value = this.params.thickness
    this.material.uniforms.uNoise.value = this.params.noise
    this.material.uniforms.uSpeed.value = this.params.speed
  }
}

