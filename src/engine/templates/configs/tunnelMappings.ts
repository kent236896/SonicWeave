/**
 * WaveTunnelTemplate - Data-driven mapping config.
 */

import type { MappingDef } from '../../mapping/ParameterMappingSystem'

export const TUNNEL_MAPPINGS: MappingDef[] = [
  {
    source: 'low',
    target: 'pulse',
    sensitivity: 1,
    smoothing: 0.3,
    min: 0.5,
    max: 1.5,
  },
  {
    source: 'mid',
    target: 'waveSpeed',
    sensitivity: 1.2,
    smoothing: 0.4,
    min: 0.5,
    max: 2,
  },
  {
    source: 'mid',
    target: 'rotationSpeed',
    sensitivity: 0.6,
    smoothing: 0.5,
    min: 0.2,
    max: 0.5,
  },
  {
    source: 'high',
    target: 'hueOffset',
    sensitivity: 1,
    smoothing: 0.2,
    min: 0,
    max: 0.2,
  },
]
