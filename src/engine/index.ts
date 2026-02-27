/**
 * SonicWeave Engine - Public API
 *
 * Architecture:
 *   AudioEngine      → FFT + bands + smoothing
 *   ParameterMappingEngine → map bands → visual params
 *   VisualEngine     → Three.js scene + bloom
 *   RenderLoopController → RAF loop, drives pipeline
 *   Template         → isolated visual logic (update/dispose)
 */

export { AudioEngine } from './audio/AudioEngine'
export type { FrequencyBands, AudioEngineConfig } from './audio/AudioEngine'

export { ParameterMappingEngine } from './mapping/ParameterMappingEngine'
export type { MappedParams, MappingConfig } from './mapping/ParameterMappingEngine'

export { VisualEngine } from './visual/VisualEngine'
export type { VisualEngineConfig } from './visual/VisualEngine'

export { RenderLoopController } from './render/RenderLoopController'

export type { ITemplate, AudioData } from './templates/types'
export type { AudioData } from './templates/types'
export { ParticleBloomTemplate } from './templates/ParticleBloomTemplate'
export { CircularSpectrumTemplate } from './templates/CircularSpectrumTemplate'
export { WaveTunnelTemplate } from './templates/WaveTunnelTemplate'
export { FerrofluidTemplate } from './templates/FerrofluidTemplate'
export { ImageEffectsTemplate } from './templates/ImageEffectsTemplate'
export { createTemplate, TEMPLATE_IDS, TEMPLATE_LABELS } from './templates/TemplateRegistry'
export type { TemplateId } from './templates/TemplateRegistry'

export { ImageLayer } from './layers/ImageLayer'
export type { ImageLayerParams } from './layers/ImageLayer'

export { EffectLayer } from './effects/EffectLayer'
export { FerrofluidEffect } from './effects/FerrofluidEffect'
export type { IEffect } from './effects/types'
export type { FerrofluidParams } from './effects/FerrofluidEffect'

export { mapToRange, bandsToMultipliers } from './mapping/audioMapping'

export { ParameterMappingSystem } from './mapping/ParameterMappingSystem'
export type {
  MappingDef,
  BandSource,
  MappedOutput,
} from './mapping/ParameterMappingSystem'
