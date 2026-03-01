import * as THREE from 'three'
import { ColladaLoader } from 'three/examples/jsm/loaders/ColladaLoader.js'
import type { AudioData } from '@/core/types'
import type { IEffect } from './types'

import stormtrooperDaeUrl from '@/models/Stormtrooper/stormtrooper.dae?url'
import stormtrooperDiffuseUrl from '@/models/Stormtrooper/Stormtrooper_D.jpg'

type BoneRef = {
  bone: THREE.Bone
  baseRot: THREE.Euler
}

function isFiniteNumber(v: unknown): v is number {
  return typeof v === 'number' && Number.isFinite(v)
}

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v))
}

function pickBones(bones: THREE.Bone[]): {
  hips: THREE.Bone | null
  spine: THREE.Bone | null
  head: THREE.Bone | null
  lArm: THREE.Bone | null
  rArm: THREE.Bone | null
} {
  const byScore = (keywords: string[]) => {
    let best: { b: THREE.Bone; score: number } | null = null
    for (const b of bones) {
      const name = (b.name || '').toLowerCase()
      let score = 0
      for (const k of keywords) if (name.includes(k)) score += 1
      if (score <= 0) continue
      if (!best || score > best.score) best = { b, score }
    }
    return best?.b ?? null
  }

  return {
    hips: byScore(['hip', 'pelvis', 'mixamorig:hips', 'mixamorig hips', 'hips']),
    spine: byScore(['spine', 'chest', 'mixamorig:spine', 'mixamorig spine']),
    head: byScore(['head', 'neck', 'mixamorig:head', 'mixamorig head']),
    lArm: byScore(['leftarm', 'l_arm', 'larm', 'leftshoulder', 'mixamorig:leftarm', 'mixamorig leftarm']),
    rArm: byScore(['rightarm', 'r_arm', 'rarm', 'rightshoulder', 'mixamorig:rightarm', 'mixamorig rightarm']),
  }
}

export class StormtrooperDanceEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private root: THREE.Object3D | null = null
  private ambientLight: THREE.AmbientLight | null = null
  private hemiLight: THREE.HemisphereLight | null = null
  private keyLight: THREE.DirectionalLight | null = null
  private fillLight: THREE.DirectionalLight | null = null
  private rimLight: THREE.DirectionalLight | null = null
  private mixer: THREE.AnimationMixer | null = null
  private action: THREE.AnimationAction | null = null
  private baseClip: THREE.AnimationClip | null = null
  private clipNoArms: THREE.AnimationClip | null = null
  private disposed = false

  private t = 0
  private bones: BoneRef[] = []
  private basePos = new THREE.Vector3()
  private baseRotY = 0
  private hipsBone: THREE.Bone | null = null
  private headBone: THREE.Bone | null = null
  private hipsBasePos: THREE.Vector3 | null = null
  private env = { low: 0, mid: 0, high: 0, energy: 0 }
  private prevEnergy = 0
  private beat = new BeatTracker()
  private prevSpectrum: Uint8Array | null = null

  private params = {
    scale: 1.0,
    yaw: Math.PI,
    danceStrength: 1.0,
    baseAnimSpeed: 0.9,
    reactAnimSpeed: 1.6,
    bob: 0.22,
    twist: 0.35,
    arms: 0.75,
    head: 0.35,
    // lighting tuned to match three.js example's "bright readable" look
    keyLight: 3.6,
    fillLight: 2.2,
    rimLight: 1.1,
    ambient: 0.75,
    hemisphere: 0.9,
    lockInPlace: true,
    rootBob: 0.12,
    rootSway: 0.06,
    overlay: 0.45,
    rhythm: 0.75,
    smooth: 0.25,
    beatLock: 0.9,
    forceAlternatingArms: true,
  }

  private setClip(clip: THREE.AnimationClip | null): void {
    if (!this.mixer || !this.root || !clip) return
    try {
      if (this.action) this.action.stop()
    } catch {
      // ignore
    }
    this.action = this.mixer.clipAction(clip)
    this.action.play()
  }

  private buildNoArmsClip(clip: THREE.AnimationClip): THREE.AnimationClip {
    const isArmTrack = (name: string) => {
      const n = (name || '').toLowerCase()
      const armLike =
        n.includes('arm') ||
        n.includes('shoulder') ||
        n.includes('hand') ||
        n.includes('forearm') ||
        n.includes('wrist')
      const side = n.includes('left') || n.includes('right') || n.includes('l_') || n.includes('r_')
      return armLike && side
    }
    const tracks = clip.tracks.filter((t) => !isArmTrack(t.name))
    return new THREE.AnimationClip(`${clip.name || 'dance'}_noArms`, clip.duration, tracks)
  }

  init(scene: THREE.Scene): void {
    this.scene = scene
    this.disposed = false

    // Front-focused 3-point lighting (key/fill/rim) to reveal details.
    // Note: our editor camera is at +Z looking toward origin, unlike the three.js example camera at -Z.
    // Lights must be placed on the camera-facing side (+Z) to brighten the front.
    const ambient = new THREE.AmbientLight(0xffffff, this.params.ambient)
    const hemi = new THREE.HemisphereLight(0xffffff, 0x222233, this.params.hemisphere)
    hemi.position.set(0, 5, 0)

    const key = new THREE.DirectionalLight(0xffffff, this.params.keyLight)
    key.position.set(0.5, 4.2, 8.5)
    key.target.position.set(0, 1.6, 0)
    scene.add(key.target)

    const fill = new THREE.DirectionalLight(0xffffff, this.params.fillLight)
    fill.position.set(-3.5, 2.6, 6.8)
    fill.target.position.set(0, 1.4, 0)
    scene.add(fill.target)

    const rim = new THREE.DirectionalLight(0xffffff, this.params.rimLight)
    rim.position.set(2.5, 4.0, -8.0)
    rim.target.position.set(0, 1.6, 0)
    scene.add(rim.target)

    scene.add(ambient, hemi, key, fill, rim)

    this.ambientLight = ambient
    this.hemiLight = hemi
    this.keyLight = key
    this.fillLight = fill
    this.rimLight = rim

    const manager = new THREE.LoadingManager()
    manager.setURLModifier((url) => {
      // Collada references "Stormtrooper_D.jpg" inside the DAE.
      // In Vite build the asset name is hashed, so we remap to the imported URL.
      if (typeof url === 'string' && url.toLowerCase().endsWith('stormtrooper_d.jpg')) {
        return stormtrooperDiffuseUrl
      }
      return url
    })
    const loader = new ColladaLoader(manager)

    loader.load(
      stormtrooperDaeUrl,
      (collada) => {
        if (this.disposed || !this.scene) return

        const model = collada.scene
        model.traverse((obj) => {
          const mesh = obj as THREE.Mesh
          if ((mesh as any).isMesh) {
            const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material]
            mats.forEach((m) => {
              const mat = m as any
              if (mat) {
                if ('color' in mat && mat.color && typeof mat.color.set === 'function') mat.color.set(0xffffff)
                if ('skinning' in mat) mat.skinning = true
                if ('side' in mat) mat.side = THREE.DoubleSide
                if ('vertexColors' in mat) mat.vertexColors = false
                mat.needsUpdate = true
              }
            })
            mesh.frustumCulled = false
          }
        })

        // Auto-orient + auto-place for our fixed editor camera (z=5 looking at origin).
        // We can't move the camera per-effect, so we normalize the avatar transform instead.
        model.rotation.set(0, 0, 0)
        model.position.set(0, 0, 0)
        model.scale.setScalar(1)
        model.updateMatrixWorld(true)

        const box0 = new THREE.Box3().setFromObject(model)
        const size0 = new THREE.Vector3()
        box0.getSize(size0)
        const heightAxis =
          size0.y >= size0.x && size0.y >= size0.z ? 'y' : size0.z >= size0.x ? 'z' : 'x'
        if (heightAxis === 'z') {
          // Z-up -> Y-up
          model.rotation.x -= Math.PI / 2
        } else if (heightAxis === 'x') {
          // X-up -> Y-up
          model.rotation.z += Math.PI / 2
        }
        model.updateMatrixWorld(true)

        // Scale: make character height ~4.2 world units (bigger so it fills view)
        let box = new THREE.Box3().setFromObject(model)
        const size = new THREE.Vector3()
        box.getSize(size)
        const targetH = 4.2
        const safeH = Math.max(1e-6, size.y)
        const autoScale = targetH / safeH
        const finalScale = autoScale * this.params.scale
        model.scale.setScalar(finalScale)
        model.updateMatrixWorld(true)

        // Place: center X/Z and put feet on y=0
        box = new THREE.Box3().setFromObject(model)
        const center = new THREE.Vector3()
        box.getCenter(center)
        model.position.x -= center.x
        model.position.z -= center.z
        model.updateMatrixWorld(true)

        // Our editor camera looks at origin (y=0). To keep the avatar centered in the new layer viewport,
        // align the model's bounding-box center to y=0 (instead of "feet on ground").
        box = new THREE.Box3().setFromObject(model)
        box.getCenter(center)
        model.position.y -= center.y
        model.updateMatrixWorld(true)

        // Face camera: camera is at +Z looking at origin, so yaw=PI faces +Z in most exports.
        model.rotation.y = this.params.yaw
        model.updateMatrixWorld(true)

        this.root = model
        this.scene.add(model)

        // Animations
        if (collada.animations?.length) {
          this.mixer = new THREE.AnimationMixer(model)
          this.baseClip = collada.animations[0]
          this.clipNoArms = this.buildNoArmsClip(this.baseClip)
          this.setClip(this.params.forceAlternatingArms ? this.clipNoArms : this.baseClip)
        }

        // Collect bones (best effort)
        const skinned: THREE.SkinnedMesh[] = []
        model.traverse((o) => {
          const sm = o as THREE.SkinnedMesh
          if ((sm as any).isSkinnedMesh) skinned.push(sm)
        })

        const allBones: THREE.Bone[] = []
        for (const sm of skinned) {
          const b = sm.skeleton?.bones ?? []
          for (const bone of b) allBones.push(bone)
        }

        const uniq = Array.from(new Set(allBones))
        const picked = pickBones(uniq)
        this.hipsBone = picked.hips
        this.headBone = picked.head ?? picked.spine ?? null
        const use = [picked.hips, picked.spine, picked.head, picked.lArm, picked.rArm].filter(
          (b): b is THREE.Bone => !!b
        )

        this.bones = use.map((bone) => ({
          bone,
          baseRot: bone.rotation.clone(),
        }))

        // If bone positions indicate upside-down, flip.
        if (this.hipsBone && this.headBone) {
          const hipsPos = new THREE.Vector3()
          const headPos = new THREE.Vector3()
          this.hipsBone.getWorldPosition(hipsPos)
          this.headBone.getWorldPosition(headPos)
          if (headPos.y < hipsPos.y) {
            model.rotation.x += Math.PI
            model.updateMatrixWorld(true)
            // Re-center after flip
            const b2 = new THREE.Box3().setFromObject(model)
            const c2 = new THREE.Vector3()
            b2.getCenter(c2)
            model.position.y -= c2.y
            model.updateMatrixWorld(true)
          }
        }

        // Cache base pose after all transforms
        this.baseRotY = model.rotation.y
        this.basePos.copy(model.position)
        if (this.hipsBone) {
          this.hipsBasePos = this.hipsBone.position.clone()
        }
      },
      undefined,
      () => {
        // ignore load errors (handled by absence of model)
      }
    )
  }

  update(audioData: AudioData, deltaTime: number): void {
    if (!this.root) return
    const dt = Math.max(0, deltaTime)
    this.t += dt

    const mapped = audioData.mapped
    const eRaw = clamp01(mapped.energy)
    const lowRaw = clamp01(mapped.low)
    const midRaw = clamp01(mapped.mid)
    const highRaw = clamp01(mapped.high)

    // Smooth envelopes to avoid jitter (independent from global analyser smoothing)
    const smooth = Math.max(0, Math.min(0.95, this.params.smooth))
    const k = 1 - Math.pow(1 - smooth, dt * 60)
    this.env.low += (lowRaw - this.env.low) * k
    this.env.mid += (midRaw - this.env.mid) * k
    this.env.high += (highRaw - this.env.high) * k
    this.env.energy += (eRaw - this.env.energy) * k

    const e = this.env.energy
    const low = this.env.low
    const mid = this.env.mid
    const high = this.env.high

    // Base clip + audio driven time scale
    if (this.mixer) {
      const ts = this.params.baseAnimSpeed + e * this.params.reactAnimSpeed
      this.mixer.timeScale = ts
      this.mixer.update(dt)
    }

    // Lock the avatar in place to avoid "root motion" drift + extra wobble looking like floating.
    if (this.params.lockInPlace) {
      this.root.position.x = this.basePos.x
      this.root.position.z = this.basePos.z
      this.root.rotation.y = this.baseRotY
      if (this.hipsBone && this.hipsBasePos) {
        // keep the dance, but prevent the clip from translating the character across the floor
        this.hipsBone.position.x = this.hipsBasePos.x
        this.hipsBone.position.z = this.hipsBasePos.z
      }
    }

    // Beat tracking input: spectral flux onset (more reliable than mapped.energy diff).
    // If we can't compute it (no audio / empty spectrum), we fall back to energy diff.
    const onset = (() => {
      const fd = audioData.frequencyData
      if (!fd || fd.length < 8) return null
      if (!this.prevSpectrum || this.prevSpectrum.length !== fd.length) {
        this.prevSpectrum = new Uint8Array(fd)
        return 0
      }
      let s = 0
      // step to reduce cost and emphasize broadband changes
      const step = fd.length > 512 ? 4 : fd.length > 256 ? 2 : 1
      for (let i = 0; i < fd.length; i += step) {
        const cur = fd[i] ?? 0
        const prev = this.prevSpectrum[i] ?? 0
        const d = cur - prev
        if (d > 0) s += d
        this.prevSpectrum[i] = cur
      }
      // normalize roughly to 0..1
      return s / (255 * (fd.length / step))
    })()

    const dE = Math.max(0, e - this.prevEnergy)
    this.prevEnergy = e
    const bt = this.beat.update({
      dt,
      onset: onset ?? dE,
      energy: e,
      sensitivity: this.params.rhythm,
      lock: this.params.beatLock,
    })
    const beatPhase = bt.phase
    const pulse = bt.pulse

    const s = this.params.danceStrength
    // Additive overlay on top of the clip pose (DO NOT reset to bind pose).
    // This keeps the original dance coordinated, and we only accentuate it rhythmically.
    const overlay = this.params.overlay * s

    const bob = this.params.bob * (0.18 + low * 1.1) * overlay
    const twist = this.params.twist * (0.12 + mid * 1.35) * overlay
    const arm = this.params.arms * (0.10 + mid * 1.45) * overlay
    const headAmt = this.params.head * (0.08 + high * 1.55) * overlay

    const t = this.t
    const qTmp = new THREE.Quaternion()
    const eTmp = new THREE.Euler(0, 0, 0, 'XYZ')

    for (const br of this.bones) {
      const name = (br.bone.name || '').toLowerCase()

      let rx = 0,
        ry = 0,
        rz = 0

      if (name.includes('hip') || name.includes('pelvis') || name.includes('hips')) {
        rx += (Math.sin(beatPhase) * 0.7 + Math.sin(t * 2.3) * 0.3) * bob
        ry += Math.sin(beatPhase * 0.5 + 0.4) * twist * 0.4
      } else if (name.includes('spine') || name.includes('chest')) {
        ry += Math.sin(beatPhase + 0.2) * twist * 0.7
        rz += Math.sin(beatPhase * 2 + 0.6) * bob * 0.16
      } else if (name.includes('head') || name.includes('neck')) {
        rx += (Math.sin(beatPhase * 2.0) * 0.7 + Math.sin(t * 6.5) * 0.3) * headAmt
        ry += Math.sin(beatPhase + 0.6) * headAmt * 0.25
      } else if (name.includes('left') && (name.includes('arm') || name.includes('shoulder'))) {
        // Left/right are strictly phase-opposed, removing "two left then two right" discomfort.
        const l = Math.sin(beatPhase + Math.PI / 2)
        rz += l * arm
        rx += Math.sin(beatPhase * 2 + 0.8) * arm * 0.2
      } else if (name.includes('right') && (name.includes('arm') || name.includes('shoulder'))) {
        const r = Math.sin(beatPhase + Math.PI / 2 + Math.PI)
        rz += r * arm
        rx += Math.sin(beatPhase * 2 + 0.8) * arm * 0.2
      } else {
        // very subtle to avoid ruining coordination
        ry += Math.sin(beatPhase) * twist * 0.06
      }

      // Add beat pulse accent (quick, coordinated hit)
      rx += pulse * bob * 0.35
      ry += pulse * twist * 0.22

      if (rx !== 0 || ry !== 0 || rz !== 0) {
        eTmp.set(rx, ry, rz)
        qTmp.setFromEuler(eTmp)
        br.bone.quaternion.multiply(qTmp)
      }
    }

    // Whole-body micro groove (keep very subtle)
    this.root.position.y = this.basePos.y + Math.sin(beatPhase) * bob * this.params.rootBob * 0.6
    this.root.rotation.y = this.baseRotY + Math.sin(beatPhase * 0.5) * twist * this.params.rootSway * 0.45
  }

  setParams(params: Record<string, unknown>): void {
    if (isFiniteNumber(params.scale)) this.params.scale = Math.max(0.1, Math.min(6, params.scale))
    if (isFiniteNumber((params as any).yaw)) this.params.yaw = (params as any).yaw
    if (isFiniteNumber(params.danceStrength))
      this.params.danceStrength = Math.max(0, Math.min(3, params.danceStrength))
    if (isFiniteNumber(params.baseAnimSpeed))
      this.params.baseAnimSpeed = Math.max(0, Math.min(3, params.baseAnimSpeed))
    if (isFiniteNumber(params.reactAnimSpeed))
      this.params.reactAnimSpeed = Math.max(0, Math.min(5, params.reactAnimSpeed))
    if (isFiniteNumber(params.bob)) this.params.bob = Math.max(0, Math.min(1.5, params.bob))
    if (isFiniteNumber(params.twist)) this.params.twist = Math.max(0, Math.min(1.5, params.twist))
    if (isFiniteNumber(params.arms)) this.params.arms = Math.max(0, Math.min(2.5, params.arms))
    if (isFiniteNumber(params.head)) this.params.head = Math.max(0, Math.min(2.0, params.head))
    if (isFiniteNumber((params as any).keyLight))
      this.params.keyLight = Math.max(0, Math.min(10, (params as any).keyLight))
    if (isFiniteNumber((params as any).fillLight))
      this.params.fillLight = Math.max(0, Math.min(10, (params as any).fillLight))
    if (isFiniteNumber((params as any).rimLight))
      this.params.rimLight = Math.max(0, Math.min(10, (params as any).rimLight))
    if (isFiniteNumber((params as any).ambient))
      this.params.ambient = Math.max(0, Math.min(3, (params as any).ambient))
    if (isFiniteNumber((params as any).hemisphere))
      this.params.hemisphere = Math.max(0, Math.min(3, (params as any).hemisphere))
    if (typeof (params as any).lockInPlace === 'boolean') this.params.lockInPlace = (params as any).lockInPlace
    if (isFiniteNumber((params as any).rootBob))
      this.params.rootBob = Math.max(0, Math.min(0.6, (params as any).rootBob))
    if (isFiniteNumber((params as any).rootSway))
      this.params.rootSway = Math.max(0, Math.min(0.6, (params as any).rootSway))
    if (isFiniteNumber((params as any).overlay))
      this.params.overlay = Math.max(0, Math.min(1.5, (params as any).overlay))
    if (isFiniteNumber((params as any).rhythm))
      this.params.rhythm = Math.max(0, Math.min(1.5, (params as any).rhythm))
    if (isFiniteNumber((params as any).smooth))
      this.params.smooth = Math.max(0, Math.min(0.95, (params as any).smooth))
    if (typeof (params as any).forceAlternatingArms === 'boolean')
      this.params.forceAlternatingArms = (params as any).forceAlternatingArms

    if (this.root) {
      this.root.scale.setScalar(this.params.scale)
      this.root.rotation.y = this.params.yaw
    }

    if (this.mixer && this.baseClip) {
      const next = this.params.forceAlternatingArms ? this.clipNoArms : this.baseClip
      if (next && (!this.action || (this.action.getClip && this.action.getClip() !== next))) {
        this.setClip(next)
      }
    }

    // Update light intensities live
    if (this.ambientLight) this.ambientLight.intensity = this.params.ambient
    if (this.hemiLight) this.hemiLight.intensity = this.params.hemisphere
    if (this.keyLight) this.keyLight.intensity = this.params.keyLight
    if (this.fillLight) this.fillLight.intensity = this.params.fillLight
    if (this.rimLight) this.rimLight.intensity = this.params.rimLight
  }

  dispose(): void {
    this.disposed = true
    if (this.scene && this.root) {
      this.scene.remove(this.root)
    }
    if (this.scene) {
      const rm = (o: THREE.Object3D | null) => o && this.scene?.remove(o)
      rm(this.ambientLight)
      rm(this.hemiLight)
      if (this.keyLight) {
        rm(this.keyLight)
        rm(this.keyLight.target)
      }
      if (this.fillLight) {
        rm(this.fillLight)
        rm(this.fillLight.target)
      }
      if (this.rimLight) {
        rm(this.rimLight)
        rm(this.rimLight.target)
      }
    }
    if (this.mixer && this.root) {
      this.mixer.stopAllAction()
      this.mixer.uncacheRoot(this.root)
    }
    this.mixer = null
    this.action = null
    this.baseClip = null
    this.clipNoArms = null
    this.bones = []
    this.ambientLight = null
    this.hemiLight = null
    this.keyLight = null
    this.fillLight = null
    this.rimLight = null
    this.hipsBone = null
    this.headBone = null
    this.hipsBasePos = null
    this.env = { low: 0, mid: 0, high: 0, energy: 0 }
    this.prevEnergy = 0
    this.beat = new BeatTracker()
    this.root = null
    this.scene = null
  }
}

function wrapPi(a: number): number {
  let x = a
  while (x > Math.PI) x -= Math.PI * 2
  while (x < -Math.PI) x += Math.PI * 2
  return x
}

class BeatTracker {
  bpm = 120
  phase = 0
  pulse = 0
  private tSinceBeat = 999
  private prevOnset = 0
  private onsetMean = 0
  private onsetVar = 0

  update(p: { dt: number; onset: number; energy: number; sensitivity: number; lock: number }): {
    bpm: number
    phase: number
    pulse: number
  } {
    const dt = Math.max(0, p.dt)
    const sens = Math.max(0, Math.min(1.5, p.sensitivity))
    const lock = Math.max(0, Math.min(1.5, p.lock))
    const bpmMin = 80
    const bpmMax = 170

    // continuous phase
    const omega = (Math.PI * 2 * this.bpm) / 60
    this.phase += omega * dt
    // wrap to 0..2pi
    if (this.phase > Math.PI * 2 || this.phase < 0) {
      this.phase = ((this.phase % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)
    }

    // onset envelope & adaptive threshold
    const onset = Math.max(0, p.onset)
    const env = Math.max(onset, this.prevOnset * Math.exp(-dt * (10 + sens * 8)))
    this.prevOnset = env

    const a = 1 - Math.exp(-dt * 2.0)
    const d = env - this.onsetMean
    this.onsetMean += d * a
    this.onsetVar += (d * d - this.onsetVar) * a
    const std = Math.sqrt(Math.max(1e-6, this.onsetVar))
    const thresh = this.onsetMean + std * (1.2 - sens * 0.5)

    this.tSinceBeat += dt
    const minInterval = 60 / bpmMax
    const maxInterval = 60 / bpmMin

    // Only accept beat near phase=0 so we don't "switch动作" mid-cycle.
    const phaseErr = wrapPi(this.phase)
    const beatWindow = 1.1 - lock * 0.55 // rad; higher lock => narrower window
    const gated = Math.abs(phaseErr) <= Math.max(0.25, beatWindow)
    const isBeat = env > thresh && gated && this.tSinceBeat > minInterval * 0.85
    if (isBeat) {
      const interval = Math.max(minInterval, Math.min(maxInterval, this.tSinceBeat))
      const measuredBpm = 60 / interval
      // smooth BPM (avoid jitter) and avoid sudden tempo jumps
      const alpha = 0.06 + sens * 0.03
      this.bpm = this.bpm * (1 - alpha) + measuredBpm * alpha
      this.bpm = Math.max(bpmMin, Math.min(bpmMax, this.bpm))

      // PLL: gently pull phase towards 0 (beat at phase=0) without large jumps
      const pull = 0.22 + sens * 0.08 + lock * 0.12
      const maxAdjust = 0.55 - lock * 0.25
      const adj = Math.max(-maxAdjust, Math.min(maxAdjust, phaseErr)) * pull
      this.phase -= adj
      this.phase = ((this.phase % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)

      this.tSinceBeat = 0
      this.pulse = 1
    }

    // pulse decay
    this.pulse *= Math.exp(-dt * (7 + sens * 10))

    return { bpm: this.bpm, phase: this.phase, pulse: this.pulse }
  }
}

