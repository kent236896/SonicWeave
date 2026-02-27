/**
 * ThreeCanvas - React wrapper for Three.js + engine pipeline.
 * Mounts canvas, engines, template switcher. Proper cleanup on template switch.
 */

import { useRef, useEffect, useState, useCallback } from 'react'
import { AudioEngine } from '@/engine/audio/AudioEngine'
import { ParameterMappingEngine } from '@/engine/mapping/ParameterMappingEngine'
import { VisualEngine } from '@/engine/visual/VisualEngine'
import { RenderLoopController } from '@/engine/render/RenderLoopController'
import { createTemplate, type TemplateId } from '@/engine/templates/TemplateRegistry'
import { TemplateSwitcher } from './TemplateSwitcher'

export function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeTemplate, setActiveTemplate] = useState<TemplateId>('particles')
  const renderLoopRef = useRef<RenderLoopController | null>(null)

  const handleSwitchTemplate = useCallback((id: TemplateId) => {
    setActiveTemplate(id)
    const template = createTemplate(id)
    renderLoopRef.current?.setTemplate(template)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const canvas = document.createElement('canvas')
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.display = 'block'
    container.appendChild(canvas)

    const width = container.clientWidth
    const height = container.clientHeight
    canvas.width = width
    canvas.height = height

    const audioEngine = new AudioEngine({
      smoothingFactor: 0.8,
      fftSize: 2048,
    })

    const mappingEngine = new ParameterMappingEngine({
      lowScale: 1.2,
      midScale: 1.0,
      highScale: 1.0,
      minFloor: 0.05,
    })

    const visualEngine = new VisualEngine({
      canvas,
      bloom: true,
      bloomStrength: 0.6,
      bloomRadius: 0.4,
    })

    const renderLoop = new RenderLoopController(
      audioEngine,
      mappingEngine,
      visualEngine
    )
    renderLoopRef.current = renderLoop

    const initialTemplate = createTemplate('particles')
    renderLoop.setTemplate(initialTemplate)

    const initAudio = async () => {
      try {
        await audioEngine.init()
        renderLoop.start()
      } catch (err) {
        console.warn('Audio init failed (mic permission?), running without audio', err)
        renderLoop.start()
      }
    }

    initAudio()

    const handleResize = () => {
      if (!container || !canvas) return
      const w = container.clientWidth
      const h = container.clientHeight
      canvas.width = w
      canvas.height = h
      visualEngine.resize(w, h)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderLoop.stop()
      renderLoop.setTemplate(null)
      renderLoopRef.current = null
      visualEngine.dispose()
      audioEngine.dispose()
      container.removeChild(canvas)
    }
  }, [])

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%', position: 'relative' }}>
      <TemplateSwitcher activeId={activeTemplate} onSwitch={handleSwitchTemplate} />
    </div>
  )
}
