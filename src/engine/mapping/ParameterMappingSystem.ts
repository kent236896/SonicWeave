/**
 * ParameterMappingSystem - Data-driven band-to-visual mapping.
 * Supports multiple mappings per template with sensitivity, smoothing, min/max clamp.
 * Internal engine logic only. No UI.
 */

import type { MappedParams } from './ParameterMappingEngine'

/** Audio band source */
export type BandSource = 'low' | 'mid' | 'high' | 'energy'

/** Single mapping: one band → one visual property */
export interface MappingDef {
  /** Source band */
  source: BandSource
  /** Output property name (e.g. size, rotationSpeed) */
  target: string
  /** Sensitivity multiplier. Default 1 */
  sensitivity?: number
  /** Smoothing 0-1. Higher = slower response. Default 0 */
  smoothing?: number
  /** Clamp minimum. Default 0 */
  min?: number
  /** Clamp maximum. Default 1 */
  max?: number
}

/** Output: named visual parameters */
export type MappedOutput = Record<string, number>

const DEFAULT_DEF: Required<MappingDef> = {
  source: 'low',
  target: '',
  sensitivity: 1,
  smoothing: 0,
  min: 0,
  max: 1,
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value))
}

export class ParameterMappingSystem {
  private defs: Array<Required<MappingDef>>
  private smoothed: MappedOutput = {}

  constructor(config: MappingDef[]) {
    this.defs = config.map((d) => ({ ...DEFAULT_DEF, ...d, target: d.target }))
  }

  /** Map bands to visual params. Per-mapping smoothing applied. */
  map(bands: MappedParams): MappedOutput {
    const out: MappedOutput = {}
    for (const d of this.defs) {
      const raw = bands[d.source] ?? 0
      const scaled = raw * d.sensitivity
      const clamped = clamp(scaled, d.min, d.max)
      const prev = this.smoothed[d.target] ?? clamped
      const factor = 1 - d.smoothing
      const next = prev + (clamped - prev) * factor
      this.smoothed[d.target] = next
      out[d.target] = next
    }
    return out
  }

  /** Reset smoothed state (e.g. when switching templates) */
  reset(): void {
    this.smoothed = {}
  }
}
