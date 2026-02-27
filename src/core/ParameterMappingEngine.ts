/**
 * ParameterMappingEngine - Map audio bands to visual params.
 */

import type { FrequencyBands } from './AudioEngine'
import type { MappedParams } from './types'

export interface MappingConfig {
  lowScale?: number
  midScale?: number
  highScale?: number
  minFloor?: number
  maxCeiling?: number
}

const DEFAULTS = { lowScale: 1, midScale: 1, highScale: 1, minFloor: 0, maxCeiling: 1 }

export class ParameterMappingEngine {
  private config: Required<MappingConfig>

  constructor(config: MappingConfig = {}) {
    this.config = { ...DEFAULTS, ...config }
  }

  setConfig(config: MappingConfig): void {
    Object.assign(this.config, config)
  }

  map(bands: FrequencyBands): MappedParams {
    const { minFloor, maxCeiling, lowScale, midScale, highScale } = this.config
    const clamp = (v: number) => Math.max(minFloor, Math.min(maxCeiling, v))
    const low = clamp(bands.low * lowScale)
    const mid = clamp(bands.mid * midScale)
    const high = clamp(bands.high * highScale)
    return {
      low,
      mid,
      high,
      energy: Math.min(1, (low + mid + high) / 3),
    }
  }
}
