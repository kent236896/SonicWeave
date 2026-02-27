/**
 * TemplateRegistry - Factory and switcher for visual templates.
 * init/dispose are called by RenderLoopController. Cleanup on switch prevents GPU leaks.
 */

import type { ITemplate } from './types'
import { ParticleBloomTemplate } from './ParticleBloomTemplate'
import { CircularSpectrumTemplate } from './CircularSpectrumTemplate'
import { WaveTunnelTemplate } from './WaveTunnelTemplate'
import { FerrofluidTemplate } from './FerrofluidTemplate'
import { ImageEffectsTemplate } from './ImageEffectsTemplate'

export type TemplateId =
  | 'particles'
  | 'spectrum'
  | 'tunnel'
  | 'ferrofluid'
  | 'imageEffects'

export const TEMPLATE_IDS: TemplateId[] = [
  'particles',
  'spectrum',
  'tunnel',
  'ferrofluid',
  'imageEffects',
]

export const TEMPLATE_LABELS: Record<TemplateId, string> = {
  particles: 'Particle Bloom',
  spectrum: 'Circular Spectrum',
  tunnel: 'Wave Tunnel',
  ferrofluid: 'Ferrofluid',
  imageEffects: 'Image + Effects',
}

export type TemplateFactory = () => ITemplate

const TEMPLATE_FACTORIES: Record<TemplateId, TemplateFactory> = {
  particles: () => new ParticleBloomTemplate(),
  spectrum: () => new CircularSpectrumTemplate(),
  tunnel: () => new WaveTunnelTemplate(),
  ferrofluid: () => new FerrofluidTemplate(),
  imageEffects: () => new ImageEffectsTemplate(),
}

export function createTemplate(id: TemplateId): ITemplate {
  const factory = TEMPLATE_FACTORIES[id]
  if (!factory) throw new Error(`Unknown template: ${id}`)
  return factory()
}
