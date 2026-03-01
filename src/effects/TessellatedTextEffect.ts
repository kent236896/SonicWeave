import * as THREE from 'three'
import { TessellateModifier } from 'three/examples/jsm/modifiers/TessellateModifier.js'
import type { AudioData } from '@/core/types'
import type { IEffect } from './types'

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v))
}

function asNumber(v: unknown, fallback: number): number {
  return typeof v === 'number' && Number.isFinite(v) ? v : fallback
}

function asString(v: unknown, fallback: string): string {
  return typeof v === 'string' ? v : fallback
}

function asBool(v: unknown, fallback: boolean): boolean {
  return typeof v === 'boolean' ? v : fallback
}

function drawTextToCanvas(p: {
  canvas: HTMLCanvasElement
  text: string
  textColor: string
  outlineColor: string
  outlineWidth: number
  bg: boolean
  bgOpacity: number
  fontScale: number
  padding: number
}): void {
  const { canvas } = p
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const w = canvas.width
  const h = canvas.height
  ctx.clearRect(0, 0, w, h)

  if (p.bg) {
    ctx.fillStyle = `rgba(0,0,0,${Math.max(0, Math.min(1, p.bgOpacity))})`
    ctx.fillRect(0, 0, w, h)
  }

  const text = (p.text || 'SonicWeave').slice(0, 64)
  const pad = Math.max(0, Math.min(200, p.padding))
  const maxW = Math.max(1, w - pad * 2)
  const maxH = Math.max(1, h - pad * 2)

  const fontFamily = 'system-ui, -apple-system, Segoe UI, sans-serif'
  let fontSize = Math.floor(maxH * 0.42 * Math.max(0.2, Math.min(3, p.fontScale)))

  // Auto-fit to width (prevents clipping for long strings)
  ctx.font = `700 ${fontSize}px ${fontFamily}`
  let measured = ctx.measureText(text).width
  if (measured > maxW) {
    const scale = maxW / measured
    fontSize = Math.max(12, Math.floor(fontSize * scale))
    ctx.font = `700 ${fontSize}px ${fontFamily}`
    measured = ctx.measureText(text).width
    if (measured > maxW) {
      // last resort: shrink a bit more
      fontSize = Math.max(10, Math.floor(fontSize * 0.95))
      ctx.font = `700 ${fontSize}px ${fontFamily}`
    }
  }
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'

  const x = w / 2
  const y = h / 2

  if (p.outlineWidth > 0) {
    ctx.lineJoin = 'round'
    ctx.miterLimit = 2
    ctx.lineWidth = Math.max(1, p.outlineWidth)
    ctx.strokeStyle = p.outlineColor || '#000000'
    ctx.strokeText(text, x, y)
  }

  ctx.fillStyle = p.textColor || '#ffffff'
  ctx.fillText(text, x, y)
}

export class TessellatedTextEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private mesh: THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial> | null = null
  private texture: THREE.CanvasTexture | null = null
  private canvas: HTMLCanvasElement | null = null
  private basePos: Float32Array | null = null
  private normals: Float32Array | null = null
  private t = 0

  private params = {
    text: 'SonicWeave',
    textColor: '#ffffff',
    outlineColor: '#000000',
    outlineWidth: 10,
    fontScale: 1.0,
    padding: 48,
    background: false,
    bgOpacity: 0.25,
    amplitude: 0.35,
    frequency: 1.4,
    speed: 1.2,
    edgeLength: 0.28,
    maxIterations: 5,
    emissive: 1.0,
  }

  init(scene: THREE.Scene): void {
    this.scene = scene
    this.t = 0

    const canvas = document.createElement('canvas')
    canvas.width = 1024
    canvas.height = 512
    this.canvas = canvas

    drawTextToCanvas({
      canvas,
      text: this.params.text,
      textColor: this.params.textColor,
      outlineColor: this.params.outlineColor,
      outlineWidth: this.params.outlineWidth,
      fontScale: this.params.fontScale,
      padding: this.params.padding,
      bg: this.params.background,
      bgOpacity: this.params.bgOpacity,
    })

    const tex = new THREE.CanvasTexture(canvas)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.anisotropy = 8
    tex.wrapS = THREE.ClampToEdgeWrapping
    tex.wrapT = THREE.ClampToEdgeWrapping
    this.texture = tex

    const plane = new THREE.PlaneGeometry(4.2, 2.1, 1, 1)
    const modifier = new TessellateModifier(this.params.edgeLength, this.params.maxIterations)
    const tess = modifier.modify(plane) as THREE.BufferGeometry
    tess.computeVertexNormals()

    const mat = new THREE.MeshStandardMaterial({
      map: tex,
      transparent: true,
      opacity: 1,
      roughness: 0.9,
      metalness: 0,
      emissive: new THREE.Color(0xffffff),
      emissiveIntensity: this.params.emissive,
      emissiveMap: tex,
    })

    const mesh = new THREE.Mesh(tess, mat)
    mesh.position.set(0, 0, 0)
    mesh.frustumCulled = false
    this.mesh = mesh

    scene.add(mesh)

    const posAttr = tess.getAttribute('position') as THREE.BufferAttribute
    const norAttr = tess.getAttribute('normal') as THREE.BufferAttribute
    this.basePos = new Float32Array(posAttr.array as Float32Array)
    this.normals = new Float32Array(norAttr.array as Float32Array)
  }

  private rebuildGeometry(): void {
    if (!this.mesh) return
    const oldGeo = this.mesh.geometry

    const plane = new THREE.PlaneGeometry(4.2, 2.1, 1, 1)
    const modifier = new TessellateModifier(this.params.edgeLength, this.params.maxIterations)
    const tess = modifier.modify(plane) as THREE.BufferGeometry
    tess.computeVertexNormals()

    this.mesh.geometry = tess
    oldGeo.dispose()

    const posAttr = tess.getAttribute('position') as THREE.BufferAttribute
    const norAttr = tess.getAttribute('normal') as THREE.BufferAttribute
    this.basePos = new Float32Array(posAttr.array as Float32Array)
    this.normals = new Float32Array(norAttr.array as Float32Array)
  }

  private redrawTexture(): void {
    if (!this.canvas || !this.texture || !this.mesh) return
    drawTextToCanvas({
      canvas: this.canvas,
      text: this.params.text,
      textColor: this.params.textColor,
      outlineColor: this.params.outlineColor,
      outlineWidth: this.params.outlineWidth,
      fontScale: this.params.fontScale,
      padding: this.params.padding,
      bg: this.params.background,
      bgOpacity: this.params.bgOpacity,
    })
    this.texture.needsUpdate = true
    this.mesh.material.emissiveIntensity = this.params.emissive
  }

  update(audioData: AudioData, deltaTime: number): void {
    if (!this.mesh || !this.basePos || !this.normals) return

    const dt = Math.max(0, deltaTime)
    this.t += dt

    const mapped = audioData.mapped
    const e = clamp01(mapped.energy)
    const low = clamp01(mapped.low)
    const mid = clamp01(mapped.mid)
    const high = clamp01(mapped.high)

    const amp = this.params.amplitude * (0.35 + e * 1.25)
    const freq = this.params.frequency * (0.7 + mid * 1.2)
    const spd = this.params.speed * (0.6 + high * 1.4)
    const wob = 0.55 + low * 1.1

    const geo = this.mesh.geometry
    const posAttr = geo.getAttribute('position') as THREE.BufferAttribute
    const arr = posAttr.array as Float32Array
    const base = this.basePos
    const nor = this.normals

    const t = this.t
    for (let i = 0; i < arr.length; i += 3) {
      const x = base[i]
      const y = base[i + 1]
      const z = base[i + 2]

      // stable pseudo-noise (cheap) + rhythmic wave
      const n1 = Math.sin(x * freq + t * spd) * Math.cos(y * (freq * 0.9) - t * (spd * 0.8))
      const n2 = Math.sin((x + y) * (freq * 0.6) + t * (spd * 1.1))
      const disp = amp * (0.55 * n1 + 0.45 * n2) * wob

      arr[i] = x + nor[i] * disp
      arr[i + 1] = y + nor[i + 1] * disp
      arr[i + 2] = z + nor[i + 2] * disp
    }
    posAttr.needsUpdate = true
  }

  setParams(params: Record<string, unknown>): void {
    const prev = { ...this.params }

    this.params.text = asString(params.text, this.params.text)
    this.params.textColor = asString(params.textColor, this.params.textColor)
    this.params.outlineColor = asString(params.outlineColor, this.params.outlineColor)
    this.params.outlineWidth = Math.max(0, Math.min(40, Math.round(asNumber(params.outlineWidth, this.params.outlineWidth))))
    this.params.fontScale = Math.max(0.2, Math.min(3.0, asNumber((params as any).fontScale, this.params.fontScale)))
    this.params.padding = Math.max(0, Math.min(200, Math.round(asNumber((params as any).padding, this.params.padding))))
    this.params.background = asBool(params.background, this.params.background)
    this.params.bgOpacity = Math.max(0, Math.min(1, asNumber(params.bgOpacity, this.params.bgOpacity)))

    this.params.amplitude = Math.max(0, Math.min(2.0, asNumber(params.amplitude, this.params.amplitude)))
    this.params.frequency = Math.max(0.1, Math.min(8.0, asNumber(params.frequency, this.params.frequency)))
    this.params.speed = Math.max(0, Math.min(6.0, asNumber(params.speed, this.params.speed)))
    this.params.emissive = Math.max(0, Math.min(4.0, asNumber(params.emissive, this.params.emissive)))

    this.params.edgeLength = Math.max(0.05, Math.min(1.2, asNumber(params.edgeLength, this.params.edgeLength)))
    this.params.maxIterations = Math.max(0, Math.min(8, Math.round(asNumber(params.maxIterations, this.params.maxIterations))))

    const needRedraw =
      prev.text !== this.params.text ||
      prev.textColor !== this.params.textColor ||
      prev.outlineColor !== this.params.outlineColor ||
      prev.outlineWidth !== this.params.outlineWidth ||
      prev.fontScale !== this.params.fontScale ||
      prev.padding !== this.params.padding ||
      prev.background !== this.params.background ||
      prev.bgOpacity !== this.params.bgOpacity ||
      prev.emissive !== this.params.emissive

    const needRebuild =
      prev.edgeLength !== this.params.edgeLength || prev.maxIterations !== this.params.maxIterations

    if (needRebuild) this.rebuildGeometry()
    if (needRedraw) this.redrawTexture()
  }

  dispose(): void {
    if (this.scene && this.mesh) this.scene.remove(this.mesh)
    if (this.mesh) {
      this.mesh.geometry.dispose()
      this.mesh.material.dispose()
    }
    if (this.texture) this.texture.dispose()
    this.mesh = null
    this.texture = null
    this.canvas = null
    this.basePos = null
    this.normals = null
    this.scene = null
  }
}

