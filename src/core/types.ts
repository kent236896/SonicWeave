/**
 * Core types - shared across engine.
 */

import type { FrequencyBands } from './AudioEngine'
import type { AudioFeatures } from './AudioFeatureEngine'

export interface MappedParams {
  low: number
  mid: number
  high: number
  energy: number
}

export interface AudioData {
  mapped: MappedParams
  frequencyData: Uint8Array
  binCount: number
  features?: AudioFeatures
  resolution?: { width: number; height: number }
}

export type BandSource = 'low' | 'mid' | 'high' | 'energy'
export type { FrequencyBands }
