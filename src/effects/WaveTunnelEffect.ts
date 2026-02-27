/**
 * WaveTunnelEffect - IEffect wrapper.
 */

import * as THREE from 'three'
import type { IEffect } from './types'
import type { AudioData } from '../core/types'

const SEG = 64
const RAD = 1.5
const VS = `varying vec2 vUv; varying float vDepth; varying vec2 vNdc;
void main(){
  vUv=uv;
  vDepth=position.z;
  vec4 clip=projectionMatrix*modelViewMatrix*vec4(position,1.0);
  vNdc=clip.xy/clip.w;
  gl_Position=clip;
}`
const FS = `uniform float uTime; uniform float uPulse; uniform float uWaveSpeed; uniform vec3 uColor1; uniform vec3 uColor2;
uniform sampler2D uImage; uniform float uUseImage; uniform float uImageMix;
uniform vec2 uImageAspect; uniform float uImageRot; uniform float uViewAspect;
varying vec2 vUv; varying float vDepth; varying vec2 vNdc;

vec2 rot2(vec2 p,float a){
  float cs=cos(a), sn=sin(a);
  return vec2(p.x*cs-p.y*sn, p.x*sn+p.y*cs);
}

vec2 coverUv(vec2 uv,float viewAsp,float imgAsp){
  vec2 p=uv-0.5;
  // Cover：让图片填满（可能裁切），保证圆内不会出现“边缘拉伸/空白”
  if(viewAsp>imgAsp){
    p.x*=viewAsp/max(imgAsp,0.0001);
  }else{
    p.y*=imgAsp/max(viewAsp,0.0001);
  }
  return p+0.5;
}

void main(){
  float r=vUv.x*6.283;float w=sin(r*8.0-uTime*uWaveSpeed*10.0)*0.5+0.5;
  vec3 col=mix(uColor1,uColor2,w)*(uPulse*w+0.5);
  if(uUseImage>0.5){
    // 使用屏幕空间 UV：让图片“刚体”旋转，不跟着隧道 UV 扭曲
    vec2 suv=vNdc*0.5+0.5;
    vec2 p=rot2(suv-0.5,uImageRot);

    // 最大化圆形裁切（内切圆），按 viewport aspect 修正得到真正的圆
    vec2 pm=p;
    pm.x*=max(uViewAspect,0.0001);
    float d=length(pm);
    float mask=1.0-smoothstep(0.5-0.003,0.5+0.003,d);

    // cover 缩放：图片不变形填充，再裁切成圆
    float imgAsp=(uImageAspect.y>0.0)?(uImageAspect.x/uImageAspect.y):1.0;
    vec2 uvImg=coverUv(p+0.5,max(uViewAspect,0.0001),imgAsp);
    vec3 img=texture2D(uImage,uvImg).rgb;
    col=mix(col,img,clamp(uImageMix,0.0,1.0)*mask);
  }
  gl_FragColor=vec4(col,(1.0-vDepth*0.5)*0.9);
}`

interface WaveTunnelParams {
  imageEnabled?: boolean
  imageMix?: number
}

export class WaveTunnelEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private mesh: THREE.Mesh | null = null
  private geometry: THREE.BufferGeometry | null = null
  private material: THREE.ShaderMaterial | null = null
  private texture: THREE.Texture | null = null
  private textureAspect = new THREE.Vector2(1, 1)
  private loader = new THREE.TextureLoader()
  private params: Required<WaveTunnelParams> = {
    imageEnabled: false,
    imageMix: 0.6,
  }

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
        uImage: { value: this.texture ?? new THREE.Texture() },
        uUseImage: { value: 0 },
        uImageMix: { value: this.params.imageMix },
        uImageAspect: { value: this.textureAspect },
        uImageRot: { value: 0 },
        uViewAspect: { value: 1 },
      },
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
    })
    this.mesh = new THREE.Mesh(this.geometry, this.material)
    scene.add(this.mesh)

    // 初始化一次参数（包括是否使用图片）
    this.applyImageParams()
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
    // 图片围绕中心刚体旋转：与隧道旋转角一致，但采样用屏幕空间 UV 不会扭曲
    this.material.uniforms.uImageRot.value = this.mesh.rotation.z
    const asp =
      d.resolution && d.resolution.height > 0
        ? d.resolution.width / d.resolution.height
        : 1
    this.material.uniforms.uViewAspect.value = asp
  }

  setParams(p: Record<string, unknown>): void {
    const x = p as WaveTunnelParams
    if (typeof x.imageEnabled === 'boolean') this.params.imageEnabled = x.imageEnabled
    if (typeof x.imageMix === 'number') this.params.imageMix = Math.max(0, Math.min(1, x.imageMix))
    this.applyImageParams()
  }

  /** Use active image as texture input (url can be blob/object URL). */
  setImage(url: string | null): void {
    if (!url) {
      this.texture?.dispose()
      this.texture = null
      if (this.material) {
        this.material.uniforms.uUseImage.value = 0
      }
      return
    }

    this.loader.load(
      url,
      (tex) => {
        // dispose old texture if any
        if (this.texture && this.texture !== tex) this.texture.dispose()
        this.texture = tex
        tex.colorSpace = THREE.SRGBColorSpace
        tex.wrapS = THREE.ClampToEdgeWrapping
        tex.wrapT = THREE.ClampToEdgeWrapping
        tex.minFilter = THREE.LinearMipmapLinearFilter
        tex.magFilter = THREE.LinearFilter
        tex.generateMipmaps = true
        tex.needsUpdate = true

        // 记录图片宽高比，供 shader 做 cover 缩放
        const img: any = (tex as any).image
        const w = typeof img?.width === 'number' ? img.width : 1
        const h = typeof img?.height === 'number' ? img.height : 1
        this.textureAspect.set(Math.max(1, w), Math.max(1, h))

        if (this.material) {
          this.material.uniforms.uImage.value = tex
          this.material.uniforms.uImageAspect.value = this.textureAspect
          this.applyImageParams()
        }
      },
      undefined,
      () => {
        // ignore load errors; keep previous texture
      }
    )
  }

  private applyImageParams(): void {
    if (!this.material) return
    this.material.uniforms.uImageMix.value = this.params.imageMix
    const canUse = this.params.imageEnabled && !!this.texture
    this.material.uniforms.uUseImage.value = canUse ? 1 : 0
    if (this.texture) {
      this.material.uniforms.uImage.value = this.texture
      this.material.uniforms.uImageAspect.value = this.textureAspect
    }
  }

  dispose(): void {
    if (this.scene && this.mesh) this.scene.remove(this.mesh)
    this.geometry?.dispose()
    this.material?.dispose()
    this.texture?.dispose()
    this.texture = null
    this.mesh = this.geometry = this.material = null
    this.scene = null
  }
}
