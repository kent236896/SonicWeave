/**
 * EditorCanvas - Three.js canvas with ImageLayer + EffectManager.
 */

import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { AudioEngine } from '@/core/AudioEngine'
import { VisualEngine } from '@/core/VisualEngine'
import { ParameterMappingEngine } from '@/core/ParameterMappingEngine'
import { EffectManager } from '@/core/EffectManager'
import { ImageLayer } from '@/layers/ImageLayer'
import { FerrofluidEffect } from '@/effects/FerrofluidEffect'
import { ParticleBloomEffect } from '@/effects/ParticleBloomEffect'
import { WaveTunnelEffect } from '@/effects/WaveTunnelEffect'
import { CircularSpectrumEffect } from '@/effects/CircularSpectrumEffect'
import type { VisualLayer, CanvasConfig } from '@/state/EditorState'

interface EditorCanvasProps {
  audioFile: File | null
  isPlaying: boolean
  onProgressUpdate: (progress: number, duration: number) => void
  onSeekRef: React.MutableRefObject<(t: number) => void>
  activeImageUrl: string | null
  layers: VisualLayer[]
  audioMapping: {
    band: string
    sensitivity: number
    smoothing: number
    min: number
    max: number
    enabled: boolean
  }
  canvasConfig: CanvasConfig
}

export function EditorCanvas({
  audioFile,
  isPlaying,
  onProgressUpdate,
  onSeekRef,
  activeImageUrl,
  layers,
  audioMapping,
  canvasConfig,
}: EditorCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const audioMappingRef = useRef(audioMapping)
  audioMappingRef.current = audioMapping
  const enginesRef = useRef<{
    audio: AudioEngine
    visual: VisualEngine
    mapping: ParameterMappingEngine
    effectManager: EffectManager
    imageLayer: ImageLayer
  } | null>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const canvas = document.createElement('canvas')
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.display = 'block'
    container.appendChild(canvas)
    const w = Math.max(container.clientWidth || 800, 1)
    const h = Math.max(container.clientHeight || 600, 1)
    canvas.width = w
    canvas.height = h

    const audioEngine = new AudioEngine()
    const mappingEngine = new ParameterMappingEngine()
    const visualEngine = new VisualEngine({ canvas, bloom: true })
    const effectManager = new EffectManager()
    const imageLayer = new ImageLayer()

    imageLayer.init(visualEngine.scene)
    visualEngine.scene.add(new THREE.Group())

    const visual = visualEngine
    enginesRef.current = {
      audio: audioEngine,
      visual: visualEngine,
      mapping: mappingEngine,
      effectManager,
      imageLayer,
    }

    let rafId: number

    const tick = () => {
      const engines = enginesRef.current
      if (!engines) return

      const { audio, visual: vis, mapping, effectManager } = engines
      const am = audioMappingRef.current

      mapping.setConfig({
        lowScale: am.sensitivity,
        midScale: am.sensitivity,
        highScale: am.sensitivity,
        minFloor: am.min,
        maxCeiling: am.max,
      })
      audio.setSmoothingFactor(am.smoothing)

      const bands = audio.getFrequencyBands()
      const mapped = mapping.map(bands)
      const freq = audio.getFrequencyData()
      const size = new THREE.Vector2()
      vis.getSize(size)

      const audioData = {
        mapped: am.enabled
          ? mapped
          : { low: 0.3, mid: 0.3, high: 0.3, energy: 0.3 },
        frequencyData: freq,
        binCount: audio.frequencyBinCount,
        resolution: { width: size.x, height: size.y },
      }

      effectManager.update(audioData, 1 / 60)
      vis.render()

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    const handleResize = () => {
      if (!container || !canvas) return
      const ww = container.clientWidth
      const hh = container.clientHeight
      canvas.width = ww
      canvas.height = hh
      visualEngine.resize(ww, hh)
      for (const eff of effectManager.getEffects()) {
        if ('setResolution' in eff) {
          ;(eff as FerrofluidEffect).setResolution(ww, hh)
        }
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    const ra = requestAnimationFrame(() => {
      handleResize()
    })

    return () => {
      cancelAnimationFrame(ra)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(rafId)
      effectManager.dispose()
      imageLayer.dispose()
      visualEngine.dispose()
      audioEngine.dispose()
      container.removeChild(canvas)
      enginesRef.current = null
    }
  }, [])

  useEffect(() => {
    const engines = enginesRef.current
    if (!engines) return

    const loadAudio = async () => {
      if (audioFile) {
        await engines.audio.loadFile(audioFile)
      }
    }
    loadAudio()
  }, [audioFile])

  useEffect(() => {
    const engines = enginesRef.current
    if (!engines) return

    if (isPlaying) {
      engines.audio.play()
    } else {
      engines.audio.pause()
    }
  }, [isPlaying])

  useEffect(() => {
    const engines = enginesRef.current
    if (!engines) return

    if (activeImageUrl) {
      engines.imageLayer.loadFromUrl(activeImageUrl)
    }
  }, [activeImageUrl])

  useEffect(() => {
    const engines = enginesRef.current
    if (!engines) return

    const { effectManager, visual } = engines
    const size = new THREE.Vector2()
    visual.getSize(size)
    if (size.x < 1 || size.y < 1) {
      size.set(800, 600)
    }

    const visibleLayers = layers.filter((l) => l.visible)
    if (visibleLayers.length === 0) {
      effectManager.setEffects([], visual.scene)
      return
    }

    const effects = visibleLayers.map((layer) => {
      let effect
      switch (layer.effectId) {
        case 'particles':
          effect = new ParticleBloomEffect()
          break
        case 'tunnel':
          effect = new WaveTunnelEffect()
          break
        case 'spectrum':
          effect = new CircularSpectrumEffect()
          break
        default:
          throw new Error(`Unknown effect id: ${layer.effectId}`)
      }
      effect.setParams(layer.params)
      return effect
    })

    effectManager.setEffects(effects, visual.scene)
  }, [layers])

  useEffect(() => {
    const engines = enginesRef.current
    if (!engines) return

    const interval = setInterval(() => {
      onProgressUpdate(engines.audio.currentTime, engines.audio.duration)
    }, 100)
    return () => clearInterval(interval)
  }, [onProgressUpdate])

  useEffect(() => {
    const engines = enginesRef.current
    if (!engines) return
    onSeekRef.current = (t: number) => {
      engines.audio.currentTime = t
    }
    return () => {
      onSeekRef.current = () => {}
    }
  }, [onSeekRef])

  const aspect = canvasConfig.height > 0 ? canvasConfig.width / canvasConfig.height : 1
  const maxWidth = canvasConfig.mode === 'portrait' ? canvasConfig.width : Math.min(canvasConfig.width, 1280)

  return (
    <div
      ref={containerRef}
      className="canvas-container"
      style={{ maxWidth, aspectRatio: aspect }}
    />
  )
}
