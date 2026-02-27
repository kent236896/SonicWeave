/**
 * ImageLayer - Load and render PNG/JPG as centered plane.
 * Supports scaling and rotation. Clean separation from effects.
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

  /** Load image from URL (PNG/JPG). Returns true on success. */
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
          this.updatePlaneTransform()
          resolve(true)
        },
        undefined,
        () => resolve(false)
      )
    })
  }

  /** Load image from File/Blob */
  async loadFromBlob(blob: Blob): Promise<boolean> {
    const url = URL.createObjectURL(blob)
    try {
      const ok = await this.loadFromUrl(url)
      return ok
    } finally {
      URL.revokeObjectURL(url)
    }
  }

  setParams(params: ImageLayerParams): void {
    if (params.scale !== undefined) this.scale = params.scale
    if (params.rotation !== undefined) this.rotationZ = params.rotation
    this.updatePlaneTransform()
  }

  private updatePlaneTransform(): void {
    if (!this.plane) return
    const s = this.scale
    this.plane.scale.set(s * this.aspect, s, 1)
    this.plane.rotation.z = this.rotationZ
  }

  /** Add plane to scene. Call after loadFromUrl/loadFromBlob. */
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
    this.updatePlaneTransform()
    scene.add(this.plane)
  }

  update(): void {
    // No per-frame logic. Params set via setParams.
  }

  dispose(): void {
    if (this.scene && this.plane) this.scene.remove(this.plane)
    this.geometry?.dispose()
    this.material?.dispose()
    this.texture?.dispose()
    this.plane = null
    this.geometry = null
    this.material = null
    this.texture = null
    this.scene = null
  }

  get hasImage(): boolean {
    return this.texture !== null
  }
}
