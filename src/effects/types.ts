/**
 * Effect system - init, update, setParams, dispose.
 */

import type { Scene } from 'three'
import type { PerspectiveCamera } from 'three'
import type { WebGLRenderer } from 'three'
import type { AudioData } from '../core/types'

export interface IEffect {
  init(scene: Scene): void
  update(audioData: AudioData, deltaTime: number): void
  setParams(params: Record<string, unknown>): void
  dispose(): void
  /** 可选：自定义渲染（如带 Bloom 后处理）。若存在则替代默认 renderer.render(scene, camera) */
  renderCustom?(
    renderer: WebGLRenderer,
    camera: PerspectiveCamera,
    width: number,
    height: number
  ): void
}
