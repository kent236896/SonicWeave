/**
 * OceanEffect - 律动立方体。仅保留正方体，随音乐律动。
 */

import * as THREE from 'three'
import type { IEffect } from './types'
import type { AudioData } from '../core/types'

interface OceanParams {
  boxColor?: string
  boxSize?: number
  reactBox?: number
}

function clamp(v: number, a: number, b: number): number {
  return Math.max(a, Math.min(b, v))
}

export class OceanEffect implements IEffect {
  private scene: THREE.Scene | null = null
  private boxMesh: THREE.Mesh | null = null
  private t = 0
  private smoothEnergy = 0.3
  private smoothLow = 0.3

  private params: Required<OceanParams> = {
    boxColor: '#a0b8d0',
    boxSize: 0.4,
    reactBox: 1.2,
  }

  init(scene: THREE.Scene): void {
    this.scene = scene

    const boxGeo = new THREE.BoxGeometry(1, 1, 1)
    const boxMat = new THREE.MeshStandardMaterial({
      color: this.params.boxColor,
      roughness: 0.25,
      metalness: 0.2,
      emissive: this.params.boxColor,
      emissiveIntensity: 0.25,
    })
    this.boxMesh = new THREE.Mesh(boxGeo, boxMat)
    this.boxMesh.scale.setScalar(this.params.boxSize)
    this.boxMesh.position.set(0, this.params.boxSize * 0.6, 0)
    scene.add(this.boxMesh)

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.4)
    dirLight.position.set(2, 3, 2)
    scene.add(dirLight)
    const ambLight = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambLight)
  }

  update(d: AudioData, dt: number): void {
    if (!this.boxMesh) return

    const { low, energy } = d.mapped
    this.t += dt

    const a = 1 - Math.exp(-dt / 0.03)
    this.smoothEnergy += (energy - this.smoothEnergy) * a
    this.smoothLow += (low - this.smoothLow) * a

    const boxBob = this.params.boxSize * 0.6 + this.smoothEnergy * this.params.reactBox * 0.5
    const boxY = this.params.boxSize * 0.5 + boxBob * Math.sin(this.t * (2 + this.smoothEnergy * 2) + this.smoothLow * 4)
    this.boxMesh.position.y = boxY
    this.boxMesh.rotation.x = this.t * (0.5 + this.smoothEnergy * 1.0) + this.smoothLow * 0.6
    this.boxMesh.rotation.z = this.t * (0.51 + this.smoothEnergy * 0.9) + this.smoothLow * 0.5

    if (this.boxMesh.material instanceof THREE.MeshStandardMaterial) {
      this.boxMesh.material.color.set(this.params.boxColor)
      this.boxMesh.material.emissive.set(this.params.boxColor)
    }
  }

  setParams(p: Record<string, unknown>): void {
    const x = p as OceanParams
    if (typeof x.boxColor === 'string') this.params.boxColor = x.boxColor
    if (typeof x.boxSize === 'number') this.params.boxSize = clamp(x.boxSize, 0.1, 1.5)
    if (typeof x.reactBox === 'number') this.params.reactBox = clamp(x.reactBox, 0, 2)

    if (this.boxMesh && this.boxMesh.material instanceof THREE.MeshStandardMaterial) {
      this.boxMesh.scale.setScalar(this.params.boxSize)
      this.boxMesh.material.color.set(this.params.boxColor)
      this.boxMesh.material.emissive.set(this.params.boxColor)
    }
  }

  dispose(): void {
    if (this.scene && this.boxMesh) this.scene.remove(this.boxMesh)
    this.boxMesh?.geometry?.dispose()
    ;(this.boxMesh?.material as THREE.Material)?.dispose()
    this.boxMesh = null
    this.scene = null
  }
}
