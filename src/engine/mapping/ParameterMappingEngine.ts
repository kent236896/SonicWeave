/**
 * ParameterMappingEngine - Maps audio features to visual parameters.
 * Provides normalized, optionally scaled values for template consumption.
 */

import type { FrequencyBands } from '../audio/AudioEngine'

export interface MappedParams {
  /** Low band → particle size, etc. */
  low: number
  /** Mid band → rotation, etc. */
  mid: number
  /** High band → color shift, etc. */
  high: number
  /** Optional: combined energy (0–1) */
  energy: number
}

export interface MappingConfig {
  /** Scale factors for each band (multiplier). Default 1 */
  lowScale?: number
  midScale?: number
  highScale?: number
  /** Minimum floor (avoids zero values if desired). Default 0 */
  minFloor?: number
}

const DEFAULT_MAPPING: Required<MappingConfig> = {
  lowScale: 1,
  midScale: 1,
  highScale: 1,
  minFloor: 0,
}

export class ParameterMappingEngine {
  private config: Required<MappingConfig>

  constructor(config: MappingConfig = {}) {
    this.config = { ...DEFAULT_MAPPING, ...config }
  }

  /** Map raw frequency bands to visual parameters */
  map(bands: FrequencyBands): MappedParams {
    const low = Math.max(this.config.minFloor, bands.low * this.config.lowScale)
    const mid = Math.max(this.config.minFloor, bands.mid * this.config.midScale)
    const high = Math.max(this.config.minFloor, bands.high * this.config.highScale)

    const energy = (low + mid + high) / 3

    return {
      low,
      mid,
      high,
      energy: Math.min(1, energy),
    }
  }
}
