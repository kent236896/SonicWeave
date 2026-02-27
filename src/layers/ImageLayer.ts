/**
 * ImageLayer - Load PNG/JPG as centered plane.
 */

import * as THREE from 'three'

export interface ImageLayerParams {
  scale?: number
  rotation?: number
}

export class ImageLayer {
  private scene: THREE.Scene | null = null
  private plane: THREE.Mesh | null = null
  private geometry: THREE.PlaneGeometry | null = null
  private material: THREE.MeshBasicMaterial | null = null
  private texture: THREE.Texture | null = null
  private scale = 1
  private rotationZ = 0
  private aspect = 1

  async loadFromUrl(url: string): Promise<boolean> {
    return new Promise((resolve) => {
      const loader = new THREE.TextureLoader()
      loader.load(
        url,
        (tex) => {
          this.texture?.dispose()
          this.texture = tex
          this.texture.colorSpace = THREE.SRGBColorSpace
          this.aspect = (tex.image?.width ?? 1) / (tex.image?.height ?? 1)
          if (this.material) this.material.map = tex
          this.updateTransform()
          resolve(true)
        },
        undefined,
        () => resolve(false)
      )
    })
  }

  async loadFromBlob(blob: Blob): Promise<boolean> {
    const url = URL.createObjectURL(blob)
    try {
      return await this.loadFromUrl(url)
    } finally {
      URL.revokeObjectURL(url)
    }
  }

  setParams(p: ImageLayerParams): void {
    if (p.scale !== undefined) this.scale = p.scale
    if (p.rotation !== undefined) this.rotationZ = p.rotation
    this.updateTransform()
  }

  private updateTransform(): void {
    if (!this.plane) return
    this.plane.scale.set(this.scale * this.aspect, this.scale, 1)
    this.plane.rotation.z = this.rotationZ
  }

  init(scene: THREE.Scene): void {
    this.scene = scene
    this.geometry = new THREE.PlaneGeometry(1, 1)
    this.material = new THREE.MeshBasicMaterial({
      map: this.texture ?? undefined,
      color: 0x111111,
      transparent: true,
      opacity: this.texture ? 1 : 0.5,
      side: THREE.DoubleSide,
    })
    this.plane = new THREE.Mesh(this.geometry, this.material)
    this.plane.position.set(0, 0, -1)
    this.updateTransform()
    scene.add(this.plane)
  }

  dispose(): void {
    if (this.scene && this.plane) this.scene.remove(this.plane)
    this.geometry?.dispose()
    this.material?.dispose()
    this.texture?.dispose()
    this.plane = this.geometry = this.material = this.texture = null
    this.scene = null
  }

  get hasImage(): boolean {
    return this.texture !== null
  }
}
