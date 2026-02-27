/**
 * ParticleBloomTemplate - Data-driven mapping config.
 */

import type { MappingDef } from '../../mapping/ParameterMappingSystem'

export const PARTICLE_MAPPINGS: MappingDef[] = [
  {
    source: 'low',
    target: 'size',
    sensitivity: 1.5,
    smoothing: 0.3,
    min: 0.5,
    max: 2,
  },
  {
    source: 'mid',
    target: 'rotationSpeed',
    sensitivity: 1,
    smoothing: 0.5,
    min: 0,
    max: 0.03,
  },
  {
    source: 'high',
    target: 'hueOffset',
    sensitivity: 1,
    smoothing: 0.2,
    min: 0,
    max: 0.3,
  },
]
