/**
 * EditorCanvas - Three.js canvas with ImageLayer + EffectManager.
 */

import { useRef, useEffect, useMemo, useState, useCallback } from 'react'
import { Rnd } from 'react-rnd'
import * as THREE from 'three'
import { AudioEngine } from '@/core/AudioEngine'
import { VisualEngine } from '@/core/VisualEngine'
import { ParameterMappingEngine } from '@/core/ParameterMappingEngine'
import { EffectManager } from '@/core/EffectManager'
import { FerrofluidEffect } from '@/effects/FerrofluidEffect'
import { ParticleBloomEffect } from '@/effects/ParticleBloomEffect'
import { WaveTunnelEffect } from '@/effects/WaveTunnelEffect'
import { CircularSpectrumEffect } from '@/effects/CircularSpectrumEffect'
import { EqualizerMirrorEffect } from '@/effects/EqualizerMirrorEffect'
import { EnergyFieldEffect } from '@/effects/EnergyFieldEffect'
import { PlaneWaveLatticeEffect } from '@/effects/PlaneWaveLatticeEffect'
import { useEditor } from '@/state/EditorState'
import type { VisualLayer, CanvasConfig } from '@/state/EditorState'
import type { IEffect } from '@/effects/types'

interface EditorCanvasProps {
  audioFile: File | null
  isPlaying: boolean
  onProgressUpdate: (progress: number, duration: number) => void
  onSeekRef: React.MutableRefObject<(t: number) => void>
  activeImageUrl: string | null
  backgroundVideoUrl: string | null
  backgroundVideoFit: 'cover' | 'contain'
  layers: VisualLayer[]
  activeLayerId: string | null
  onLayerRectChange: (id: string, rect: Partial<VisualLayer['rect']>) => void
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
  backgroundVideoUrl,
  backgroundVideoFit,
  layers,
  activeLayerId,
  onLayerRectChange,
  audioMapping,
  canvasConfig,
}: EditorCanvasProps) {
  const { setLayerParam, setActiveLayer } = useEditor()
  const containerRef = useRef<HTMLDivElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const bgVideoRef = useRef<HTMLVideoElement>(null)
  const [hostSize, setHostSize] = useState<{ w: number; h: number }>({ w: 800, h: 600 })
  const [stageSize, setStageSize] = useState<{ w: number; h: number }>({ w: 800, h: 600 })
  const stageSizeRef = useRef(stageSize)
  stageSizeRef.current = stageSize
  const [draftRects, setDraftRects] = useState<Record<string, VisualLayer['rect']>>({})
  const [selectionVisible, setSelectionVisible] = useState(true)
  const draftRectsRef = useRef<Record<string, VisualLayer['rect']>>({})
  const interactingLayerIdRef = useRef<string | null>(null)
  const audioMappingRef = useRef(audioMapping)
  audioMappingRef.current = audioMapping
  const enginesRef = useRef<{
    audio: AudioEngine
    mapping: ParameterMappingEngine
    visual: VisualEngine
    canvas: HTMLCanvasElement
  } | null>(null)

  type LayerEngine = {
    scene: THREE.Scene
    effectManager: EffectManager
    effect: IEffect
    effectId: VisualLayer['effectId']
  }
  const layerEnginesRef = useRef<Map<string, LayerEngine>>(new Map())

  const visibleLayers = useMemo(() => layers.filter((l) => l.visible), [layers])
  const visibleLayersRef = useRef<VisualLayer[]>(visibleLayers)
  visibleLayersRef.current = visibleLayers

  const virtualStage = useMemo(
    () => ({ w: Math.max(1, canvasConfig.width), h: Math.max(1, canvasConfig.height) }),
    [canvasConfig.height, canvasConfig.width]
  )
  const virtualStageRef = useRef(virtualStage)
  virtualStageRef.current = virtualStage

  const createEffect = useCallback((effectId: VisualLayer['effectId']): IEffect => {
    switch (effectId) {
      case 'particles':
        return new ParticleBloomEffect()
      case 'tunnel':
        return new WaveTunnelEffect()
      case 'spectrum':
        return new CircularSpectrumEffect()
      case 'equalizer':
        return new EqualizerMirrorEffect()
      case 'energyField':
        return new EnergyFieldEffect()
      case 'planeWaveLattice':
        return new PlaneWaveLatticeEffect()
      default:
        throw new Error(`Unknown effect id: ${effectId}`)
    }
  }, [])

  const syncVideoToAudio = useCallback((audioTime: number, force = false) => {
    const v = bgVideoRef.current
    if (!v) return
    if (!v.src) return
    const vd = Number.isFinite(v.duration) && v.duration > 0 ? v.duration : 0
    let target = vd > 0 ? audioTime % vd : audioTime
    // 避免在循环边界（0 / vd）附近来回抖动
    if (vd > 0 && target > vd - 0.05) target = vd - 0.05
    const cur = Number.isFinite(v.currentTime) ? v.currentTime : 0
    const diff = Math.abs(cur - target)
    if (force || diff > 0.12) {
      try {
        v.currentTime = Math.max(0, target)
      } catch {
        // ignore
      }
    }
  }, [])

  // 点击舞台外（黑色空白/面板）时隐藏蓝框；点击舞台内再显示
  useEffect(() => {
    const onDown = (e: PointerEvent) => {
      const stage = stageRef.current
      if (!stage) return
      const t = e.target as Node | null
      const inStage = !!t && stage.contains(t)
      setSelectionVisible(inStage)
    }
    window.addEventListener('pointerdown', onDown, true)
    return () => window.removeEventListener('pointerdown', onDown, true)
  }, [])

  // 当从左侧 Layers 列表切换选中图层时（activeLayerId 变化），强制显示蓝框
  useEffect(() => {
    if (activeLayerId) setSelectionVisible(true)
  }, [activeLayerId])

  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const canvas = document.createElement('canvas')
    canvas.style.position = 'absolute'
    canvas.style.inset = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.display = 'block'
    canvas.style.pointerEvents = 'none'
    // 让主渲染 canvas 永远在图层框下面，避免边框被覆盖“消失”
    canvas.style.zIndex = '1'
    stage.appendChild(canvas)

    const w = Math.max(stage.clientWidth || 800, 1)
    const h = Math.max(stage.clientHeight || 600, 1)
    canvas.width = w
    canvas.height = h

    const audioEngine = new AudioEngine()
    const mappingEngine = new ParameterMappingEngine()
    // 单一 WebGL 上下文：禁用后处理，使用 viewport/scissor 分层渲染，避免多层导致崩溃
    const visualEngine = new VisualEngine({
      canvas,
      transparent: true,
      bloom: false,
      fxaa: false,
      pixelRatio: Math.min(1.5, window.devicePixelRatio || 1),
    })
    visualEngine.renderer.autoClear = false

    enginesRef.current = {
      audio: audioEngine,
      mapping: mappingEngine,
      visual: visualEngine,
      canvas,
    }

    let rafId: number
    let lastVideoSyncMs = 0

    const tick = () => {
      const engines = enginesRef.current
      if (!engines) return

      const { audio, mapping, visual } = engines
      const am = audioMappingRef.current
      const stagePx = stageSizeRef.current
      const layersToRender = visibleLayersRef.current
      const vstage = virtualStageRef.current

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
      const baseMapped = am.enabled
        ? mapped
        : { low: 0.3, mid: 0.3, high: 0.3, energy: 0.3 }

      // 背景视频与音频时间轴同步：
      // - 仅在播放时做低频校正，暂停时不动，避免跳帧
      const v = bgVideoRef.current
      if (v && backgroundVideoUrl && isPlaying) {
        const now = performance.now()
        if (now - lastVideoSyncMs > 250) {
          syncVideoToAudio(audio.currentTime, false)
          lastVideoSyncMs = now
        }
      }

      const renderer = visual.renderer
      const camera = visual.camera
      // Three.js 的 setViewport / setScissor 接收 CSS 像素，内部会自动乘以 pixelRatio。
      // 不要自己乘 pr，否则 Three.js 会再乘一次（pr² 倍），导致视口超出画布、内容偏移到右上角。
      const stageW = stagePx.w
      const stageH = stagePx.h

      // 清屏为透明，让棋盘格/底图能透出
      renderer.setScissorTest(false)
      renderer.setViewport(0, 0, stageW, stageH)
      renderer.setClearColor(0x000000, 0)
      renderer.clear(true, true, true)

      // 按层渲染到不同 viewport/scissor：单一 WebGL 上下文，不会因多层崩溃
      const layerEngines = layerEnginesRef.current
      for (let idx = 0; idx < layersToRender.length; idx++) {
        const layer = layersToRender[idx]
        const le = layerEngines.get(layer.id)
        if (!le) continue

        const rect = draftRectsRef.current[layer.id] ?? layer.rect
        const x = rect.x * stageW
        const yTop = rect.y * stageH
        const wPx = Math.max(1, rect.w * stageW)
        const hPx = Math.max(1, rect.h * stageH)
        const y = stageH - yTop - hPx

        // viewport 允许超出画布（负坐标/超大尺寸），用 scissor 做与舞台的交集裁剪
        const sx = Math.max(0, x)
        const sy = Math.max(0, y)
        const sw = Math.min(stageW, x + wPx) - sx
        const sh = Math.min(stageH, y + hPx) - sy
        if (sw <= 0 || sh <= 0) continue

        renderer.setScissorTest(true)
        renderer.setViewport(x, y, wPx, hPx)
        renderer.setScissor(sx, sy, sw, sh)
        renderer.clearDepth()

        // 相机按图层 viewport 的宽高比更新，避免形变/偏移
        camera.aspect = wPx / hPx
        // 图层内容旋转（不改变图层框）
        const vr = (layer.params as any)?.viewRotation
        const rot = typeof vr === 'number' ? vr : 0
        camera.rotation.set(0, 0, rot)
        camera.updateProjectionMatrix()
        camera.updateMatrixWorld()

        // 传入“用户可视化尺寸”对应的分辨率给效果做 aspect/能量映射
        const vw = Math.max(1, vstage.w * rect.w)
        const vh = Math.max(1, vstage.h * rect.h)
        const audioData = {
          mapped: baseMapped,
          frequencyData: freq,
          binCount: audio.frequencyBinCount,
          resolution: { width: vw, height: vh },
        }
        le.effectManager.update(audioData, 1 / 60)
        renderer.render(le.scene, camera)
      }

      renderer.setScissorTest(false)
      // 恢复相机旋转，避免影响后续帧/图层
      camera.rotation.set(0, 0, 0)
      camera.updateMatrixWorld()

      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(rafId)
      // dispose layers
      for (const [, le] of layerEnginesRef.current) {
        le.effectManager.dispose()
      }
      layerEnginesRef.current.clear()
      visualEngine.dispose()
      audioEngine.dispose()
      enginesRef.current = null
      stage.removeChild(canvas)
    }
  }, [])

  // 舞台尺寸变化时，更新单一 canvas 与 renderer 尺寸（不会创建新 WebGL context）
  useEffect(() => {
    const engines = enginesRef.current
    if (!engines) return
    const { canvas, visual } = engines
    canvas.width = Math.max(1, Math.floor(stageSize.w))
    canvas.height = Math.max(1, Math.floor(stageSize.h))
    visual.resize(canvas.width, canvas.height)
  }, [stageSize.h, stageSize.w])

  useEffect(() => {
    const engines = enginesRef.current
    if (!engines) return

    const loadAudio = async () => {
      if (audioFile) {
        await engines.audio.loadFile(audioFile)
        // 新音频载入后，将背景视频归零并暂停（播放由 isPlaying 控制）
        const v = bgVideoRef.current
        if (v) {
          try {
            v.pause()
            v.currentTime = 0
          } catch {
            // ignore
          }
        }
      }
    }
    loadAudio()
  }, [audioFile])

  useEffect(() => {
    const engines = enginesRef.current
    if (!engines) return

    if (isPlaying) {
      engines.audio.play()
      // 与音频一起播放背景视频
      syncVideoToAudio(engines.audio.currentTime, true)
      void bgVideoRef.current?.play().catch(() => {})
    } else {
      engines.audio.pause()
      bgVideoRef.current?.pause()
    }
  }, [isPlaying, syncVideoToAudio])

  // 背景视频更换时，重置到当前音频时间（或 0）
  useEffect(() => {
    const engines = enginesRef.current
    const v = bgVideoRef.current
    if (!v) return
    const t = engines?.audio?.currentTime ?? 0
    syncVideoToAudio(t, true)
    if (isPlaying) {
      void v.play().catch(() => {})
    } else {
      v.pause()
    }
  }, [backgroundVideoUrl, isPlaying, syncVideoToAudio])

  // 监听父容器（center-panel）可用尺寸，用于计算保持长宽比的画布大小
  useEffect(() => {
    const parent = containerRef.current?.parentElement
    if (!parent) return
    const update = () =>
      setHostSize({ w: Math.max(1, parent.clientWidth), h: Math.max(1, parent.clientHeight) })
    const ro = new ResizeObserver(update)
    ro.observe(parent)
    update()
    return () => ro.disconnect()
  }, [])

  // 跟踪预览窗口真实像素尺寸（用于拖拽/缩放的像素到归一化换算）
  useEffect(() => {
    const stage = stageRef.current
    if (!stage) return
    const ro = new ResizeObserver(() => {
      const r = stage.getBoundingClientRect()
      setStageSize({ w: Math.max(1, r.width), h: Math.max(1, r.height) })
    })
    ro.observe(stage)
    const r = stage.getBoundingClientRect()
    setStageSize({ w: Math.max(1, r.width), h: Math.max(1, r.height) })
    return () => ro.disconnect()
  }, [])

  const clampRect = useCallback((rect: VisualLayer['rect']): VisualLayer['rect'] => {
    const minW = 0.05
    const minH = 0.05
    // 允许图层宽高超过可视化视图（>1），但给一个合理上限避免无限大
    const maxW = 4
    const maxH = 4
    const w = Math.max(minW, Math.min(maxW, rect.w))
    const h = Math.max(minH, Math.min(maxH, rect.h))

    // 允许负坐标：图层可超出舞台，至少保证留一小部分可见便于拖回
    const minVisible = 0.03
    const minX = -w + minVisible
    const maxX = 1 - minVisible
    const minY = -h + minVisible
    const maxY = 1 - minVisible
    const x = Math.max(minX, Math.min(maxX, rect.x))
    const y = Math.max(minY, Math.min(maxY, rect.y))
    return { x, y, w, h }
  }, [])

  const setDraftRect = useCallback((id: string, rect: VisualLayer['rect'] | null) => {
    setDraftRects((prev) => {
      const next = { ...prev }
      if (rect) next[id] = rect
      else delete next[id]
      draftRectsRef.current = next
      return next
    })
  }, [])

  const getRect = useCallback(
    (layer: VisualLayer) => draftRectsRef.current[layer.id] ?? layer.rect,
    []
  )

  // 同步/创建 layer 引擎（scene + effect），并清理被删除的 layer
  useEffect(() => {
    const map = layerEnginesRef.current
    const keep = new Set(visibleLayers.map((l) => l.id))
    for (const [id, le] of map) {
      if (!keep.has(id)) {
        le.effectManager.dispose()
        map.delete(id)
      }
    }

    for (const layer of visibleLayers) {
      const existing = map.get(layer.id)
      if (!existing || existing.effectId !== layer.effectId) {
        if (existing) existing.effectManager.dispose()
        const scene = new THREE.Scene()
        const effectManager = new EffectManager()
        const effect = createEffect(layer.effectId)
        effect.setParams(layer.params)
        if ('setImage' in effect && typeof (effect as any).setImage === 'function') {
          const url = (layer.params as any)?.imageUrl
          ;(effect as any).setImage(typeof url === 'string' && url.length ? url : null)
        }
        effectManager.setEffects([effect], scene)
        map.set(layer.id, { scene, effectManager, effect, effectId: layer.effectId })
      } else {
        existing.effect.setParams(layer.params)
        if ('setImage' in existing.effect && typeof (existing.effect as any).setImage === 'function') {
          const url = (layer.params as any)?.imageUrl
          ;(existing.effect as any).setImage(typeof url === 'string' && url.length ? url : null)
        }
      }

      // 同步分辨率参数（给需要的 effect），使用用户可视化尺寸
      const le = map.get(layer.id)
      if (le) {
        const rect = layer.rect
        const vw = Math.max(1, virtualStage.w * rect.w)
        const vh = Math.max(1, virtualStage.h * rect.h)
        for (const eff of le.effectManager.getEffects()) {
          if ('setResolution' in eff) {
            ;(eff as FerrofluidEffect).setResolution(vw, vh)
          }
        }
      }
    }
  }, [createEffect, virtualStage.h, virtualStage.w, visibleLayers])

  // WaveTunnel 的图片由图层参数 imageUrl 控制，不再跟随导入素材库的 activeImageUrl

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
      // seek 时同步视频时间
      syncVideoToAudio(t, true)
      if (isPlaying) {
        void bgVideoRef.current?.play().catch(() => {})
      }
    }
    return () => {
      onSeekRef.current = () => {}
    }
  }, [isPlaying, onSeekRef, syncVideoToAudio])

  // 根据用户设置的 canvas 尺寸和父容器可用空间，计算保持长宽比的精确像素大小
  const fittedSize = useMemo(() => {
    const cw = Math.max(1, canvasConfig.width)
    const ch = Math.max(1, canvasConfig.height)
    const aspect = cw / ch
    const avail = hostSize
    let w = avail.w
    let h = w / aspect
    if (h > avail.h) {
      h = avail.h
      w = h * aspect
    }
    return { w: Math.max(1, Math.floor(w)), h: Math.max(1, Math.floor(h)) }
  }, [canvasConfig.width, canvasConfig.height, hostSize])

  const commitRect = useCallback(
    (id: string, rect: VisualLayer['rect']) => {
      onLayerRectChange(id, rect)
      setDraftRect(id, null)
    },
    [onLayerRectChange, setDraftRect]
  )

  return (
    <div
      ref={containerRef}
      className="canvas-container"
      style={{ width: fittedSize.w, height: fittedSize.h }}
    >
      <div
        ref={stageRef}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderRadius: 10,
          border: '1px solid var(--border)',
          // 舞台背景保持透明（可选棋盘格，方便看透明叠加）
          backgroundColor: 'transparent',
          backgroundImage:
            'linear-gradient(45deg, rgba(255,255,255,0.06) 25%, transparent 25%),' +
            'linear-gradient(-45deg, rgba(255,255,255,0.06) 25%, transparent 25%),' +
            'linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.06) 75%),' +
            'linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.06) 75%)',
          backgroundSize: '16px 16px',
          backgroundPosition: '0 0, 0 8px, 8px -8px, -8px 0px',
        }}
      >
        {backgroundVideoUrl ? (
          <video
            ref={bgVideoRef}
            src={backgroundVideoUrl}
            muted
            playsInline
            preload="auto"
            onCanPlay={(e) => {
              const v = e.currentTarget
              // 导入后不要自动播放；是否播放由 isPlaying 决定
              const engines = enginesRef.current
              const t = engines?.audio?.currentTime ?? 0
              syncVideoToAudio(t, true)
              if (isPlaying) {
                void v.play().catch(() => {})
              } else {
                v.pause()
              }
            }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: backgroundVideoFit,
              pointerEvents: 'none',
              zIndex: 0,
              // 提示浏览器走更稳定的合成路径，减少模糊/抖动
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
          />
        ) : null}
        {activeImageUrl ? (
          <img
            src={activeImageUrl}
            alt=""
            draggable={false}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.35,
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />
        ) : null}

        {visibleLayers.map((layer, idx) => {
          const rect = getRect(layer)
          const isActive = selectionVisible && layer.id === activeLayerId
          const xPx = rect.x * stageSize.w
          const yPx = rect.y * stageSize.h
          const wPx = rect.w * stageSize.w
          const hPx = rect.h * stageSize.h

          return (
            <Rnd
              key={layer.id}
              position={{ x: xPx, y: yPx }}
              size={{ width: wPx, height: hPx }}
              enableResizing={{
                top: false,
                right: false,
                bottom: false,
                left: false,
                topRight: false,
                bottomRight: true,
                bottomLeft: false,
                topLeft: false,
              }}
              resizeHandleStyles={{
                bottomRight: {
                  width: 14,
                  height: 14,
                  right: 0,
                  bottom: 0,
                  background: isActive ? 'rgba(58, 143, 255, 0.9)' : 'rgba(255,255,255,0.15)',
                  borderRadius: 2,
                },
              }}
              style={{
                zIndex: 10 + idx,
                border: isActive ? '1px solid var(--accent)' : '1px solid transparent',
                boxSizing: 'border-box',
              }}
              // 点击/拖拽图层时将其设为 active（支持多个同类效果图层之间切换）
              onMouseDown={() => {
                setActiveLayer(layer.id)
                setSelectionVisible(true)
              }}
              onDragStart={() => {
                setActiveLayer(layer.id)
                setSelectionVisible(true)
                interactingLayerIdRef.current = layer.id
                setDraftRect(layer.id, layer.rect)
              }}
              onDrag={(_e, d) => {
                const cur = draftRectsRef.current[layer.id] ?? layer.rect
                const next = clampRect({
                  ...cur,
                  x: d.x / stageSize.w,
                  y: d.y / stageSize.h,
                })
                setDraftRect(layer.id, next)
              }}
              onDragStop={(_e, d) => {
                const cur = draftRectsRef.current[layer.id] ?? layer.rect
                const next = clampRect({
                  ...cur,
                  x: d.x / stageSize.w,
                  y: d.y / stageSize.h,
                })
                interactingLayerIdRef.current = null
                commitRect(layer.id, next)
              }}
              onResizeStart={() => {
                setActiveLayer(layer.id)
                setSelectionVisible(true)
                interactingLayerIdRef.current = layer.id
                setDraftRect(layer.id, layer.rect)
              }}
              onResize={(_e, _dir, ref, _delta, pos) => {
                const next = clampRect({
                  x: pos.x / stageSize.w,
                  y: pos.y / stageSize.h,
                  w: ref.offsetWidth / stageSize.w,
                  h: ref.offsetHeight / stageSize.h,
                })
                setDraftRect(layer.id, next)
              }}
              onResizeStop={(_e, _dir, ref, _delta, pos) => {
                const next = clampRect({
                  x: pos.x / stageSize.w,
                  y: pos.y / stageSize.h,
                  w: ref.offsetWidth / stageSize.w,
                  h: ref.offsetHeight / stageSize.h,
                })
                interactingLayerIdRef.current = null
                commitRect(layer.id, next)
              }}
            >
              <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                {/* 旋转按钮：顺时针 90° */}
                <button
                  type="button"
                  className="top-bar-btn"
                  onClick={(e) => {
                    e.stopPropagation()
                    const cur = (layer.params as any)?.viewRotation
                    const curNum = typeof cur === 'number' ? cur : 0
                    const next = curNum + Math.PI / 2
                    setLayerParam(layer.id, 'viewRotation', next)
                  }}
                  style={{
                    position: 'absolute',
                    top: 6,
                    right: 6,
                    padding: '2px 6px',
                    fontSize: 12,
                    lineHeight: 1.2,
                    opacity: 0.9,
                  }}
                  title="Rotate 90°"
                >
                  ⟳
                </button>
              </div>
            </Rnd>
          )
        })}
      </div>
    </div>
  )
}
