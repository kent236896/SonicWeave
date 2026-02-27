/**
 * CircularSpectrumTemplate - Data-driven mapping config.
 */

import type { MappingDef } from '../../mapping/ParameterMappingSystem'

export const SPECTRUM_MAPPINGS: MappingDef[] = [
  {
    source: 'low',
    target: 'scale',
    sensitivity: 1,
    smoothing: 0.4,
    min: 0.7,
    max: 1.3,
  },
  {
    source: 'mid',
    target: 'rotationSpeed',
    sensitivity: 1,
    smoothing: 0.5,
    min: 0,
    max: 0.02,
  },
  {
    source: 'high',
    target: 'hueOffset',
    sensitivity: 1,
    smoothing: 0.2,
    min: 0,
    max: 0.2,
  },
  {
    source: 'energy',
    target: 'energyScale',
    sensitivity: 1,
    smoothing: 0.3,
    min: 0.5,
    max: 1.5,
  },
]
