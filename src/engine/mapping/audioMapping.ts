/**
 * Reusable audio-reactive mapping helpers.
 * Map normalized bands (0-1) to common visual ranges.
 */

/** Map value 0-1 to range [min, max] */
export function mapToRange(value: number, min: number, max: number): number {
  return min + value * (max - min)
}

/** Clamp value to [0, 1] */
export function clamp(value: number): number {
  return Math.max(0, Math.min(1, value))
}

/** Map low/mid/high to common visual multipliers (size, speed, color) */
export function bandsToMultipliers(params: { low: number; mid: number; high: number }) {
  return {
    /** Size: 0.5–2x */
    size: mapToRange(params.low, 0.5, 2),
    /** Rotation speed: 0–0.03 */
    rotationSpeed: mapToRange(params.mid, 0, 0.03),
    /** Hue offset: 0–0.3 (for color shift) */
    hueOffset: mapToRange(params.high, 0, 0.3),
    /** Energy: 0–1 */
    energy: clamp((params.low + params.mid + params.high) / 3),
  }
}
