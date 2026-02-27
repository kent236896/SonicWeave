/**
 * EditorState - Simple context for editor state.
 * No Redux.
 */

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { EffectId } from '../core/EffectManager'
import type { BandSource } from '../core/types'

export interface AudioMappingConfig {
  band: BandSource
  sensitivity: number
  smoothing: number
  min: number
  max: number
  enabled: boolean
}

export interface VisualLayer {
  id: string
  effectId: EffectId
  params: Record<string, number | boolean | string>
  visible: boolean
  /** Normalized rect in preview stage (0-1). Does not change preview window size. */
  rect: { x: number; y: number; w: number; h: number }
}

export type CanvasMode = 'portrait' | 'landscape' | 'custom'

export interface CanvasConfig {
  mode: CanvasMode
  width: number
  height: number
}

export interface EditorStateValue {
  // Audio
  audioFile: File | null
  audioName: string | null
  isPlaying: boolean

  // Images
  images: { id: string; name: string; url: string }[]
  activeImageId: string | null
  // Background video (separate from image assets)
  backgroundVideoUrl: string | null
  backgroundVideoName: string | null
  backgroundVideoFit: 'cover' | 'contain'

  // Effects / Layers
  layers: VisualLayer[]
  activeLayerId: string | null
  activeEffectId: EffectId | null
  effectParams: Record<string, number | boolean | string>

  // Audio mapping
  audioMapping: AudioMappingConfig

  // Canvas
  canvasConfig: CanvasConfig

  // Actions
  setAudioFile: (file: File | null, name: string | null) => void
  setPlaying: (v: boolean) => void

  addImage: (id: string, name: string, url: string) => void
  setActiveImage: (id: string | null) => void
  removeImage: (id: string) => void
  setBackgroundVideo: (file: File | null, name: string | null) => void
  setBackgroundVideoFit: (fit: 'cover' | 'contain') => void

  // Layers / effects
  addLayer: (effectId: EffectId, initialParams?: Record<string, number | boolean | string>) => void
  setActiveLayer: (id: string | null) => void
  moveLayer: (id: string, direction: 'up' | 'down') => void
  setLayerVisible: (id: string, visible: boolean) => void
  removeLayer: (id: string) => void
  setEffectParam: (key: string, value: number | boolean | string) => void
  setLayerRect: (id: string, rect: Partial<VisualLayer['rect']>) => void
  setLayerParam: (id: string, key: string, value: number | boolean | string) => void

  setAudioMapping: (c: Partial<AudioMappingConfig>) => void
  setCanvasConfig: (c: Partial<CanvasConfig>) => void
}

const defaultMapping: AudioMappingConfig = {
  band: 'low',
  sensitivity: 1,
  smoothing: 0.8,
  min: 0,
  max: 1,
  enabled: true,
}

const EditorContext = createContext<EditorStateValue | null>(null)

export function EditorProvider({ children }: { children: ReactNode }) {
  const [audioFile, setAudioFileState] = useState<File | null>(null)
  const [audioName, setAudioName] = useState<string | null>(null)
  const [isPlaying, setPlaying] = useState(false)
  const [images, setImages] = useState<{ id: string; name: string; url: string }[]>([])
  const [activeImageId, setActiveImageId] = useState<string | null>(null)
  const [backgroundVideoUrl, setBackgroundVideoUrl] = useState<string | null>(null)
  const [backgroundVideoName, setBackgroundVideoName] = useState<string | null>(null)
  const [backgroundVideoFit, setBackgroundVideoFit] = useState<'cover' | 'contain'>('cover')
  const [layers, setLayers] = useState<VisualLayer[]>([])
  const [activeLayerId, setActiveLayerId] = useState<string | null>(null)
  const [audioMapping, setAudioMappingState] = useState<AudioMappingConfig>(defaultMapping)
  const [canvasConfig, setCanvasConfigState] = useState<CanvasConfig>({
    mode: 'portrait',
    width: 1080,
    height: 1920,
  })

  const setAudioFile = useCallback((file: File | null, name: string | null) => {
    setAudioFileState(file)
    setAudioName(name)
  }, [])

  const addImage = useCallback((id: string, name: string, url: string) => {
    setImages((prev) => [...prev.filter((i) => i.id !== id), { id, name, url }])
  }, [])

  const setActiveImage = useCallback((id: string | null) => {
    setActiveImageId(id)
  }, [])

  const removeImage = useCallback((id: string) => {
    setImages((prev) => prev.filter((i) => i.id !== id))
    setActiveImageId((current) => (current === id ? null : current))
  }, [])

  const setBackgroundVideo = useCallback((file: File | null, name: string | null) => {
    setBackgroundVideoUrl((prev) => {
      if (prev && prev.startsWith('blob:')) {
        try {
          URL.revokeObjectURL(prev)
        } catch {
          // ignore
        }
      }
      if (!file) return null
      return URL.createObjectURL(file)
    })
    setBackgroundVideoName(file ? (name ?? file.name) : null)
  }, [])

  const setBackgroundVideoFitSafe = useCallback((fit: 'cover' | 'contain') => {
    setBackgroundVideoFit(fit)
  }, [])

  const addLayer = useCallback(
    (effectId: EffectId, initialParams: Record<string, number | boolean | string> = {}) => {
      const id = `layer-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
      // 默认图层不要铺满预览窗口：居中 + 留边距，更符合编辑器直觉
      // Equalizer 镜像频谱默认更“横向”，长度占 90%
      const w = effectId === 'equalizer' ? 0.9 : 0.8
      const h = effectId === 'equalizer' ? 0.28 : 0.8
      const x = (1 - w) / 2
      const y = (1 - h) / 2
      setLayers((prev) => [
        ...prev,
        { id, effectId, params: initialParams, visible: true, rect: { x, y, w, h } },
      ])
      setActiveLayerId(id)
    },
    []
  )

  const setActiveLayer = useCallback((id: string | null) => {
    setActiveLayerId(id)
  }, [])

  const moveLayer = useCallback((id: string, direction: 'up' | 'down') => {
    setLayers((prev) => {
      const index = prev.findIndex((l) => l.id === id)
      if (index === -1) return prev
      const targetIndex = direction === 'up' ? index - 1 : index + 1
      if (targetIndex < 0 || targetIndex >= prev.length) return prev
      const next = [...prev]
      const [layer] = next.splice(index, 1)
      next.splice(targetIndex, 0, layer)
      return next
    })
  }, [])

  const setLayerVisible = useCallback((id: string, visible: boolean) => {
    setLayers((prev) => prev.map((l) => (l.id === id ? { ...l, visible } : l)))
  }, [])

  const removeLayer = useCallback((id: string) => {
    setLayers((prev) => {
      const doomed = prev.find((l) => l.id === id)
      const url = (doomed?.params as any)?.imageUrl
      if (typeof url === 'string' && url.startsWith('blob:')) {
        try {
          URL.revokeObjectURL(url)
        } catch {
          // ignore
        }
      }
      return prev.filter((l) => l.id !== id)
    })
    setActiveLayerId((current) => (current === id ? null : current))
  }, [])

  const setEffectParam = useCallback(
    (key: string, value: number | boolean | string) => {
      setLayers((prev) =>
        prev.map((l) =>
          l.id === activeLayerId
            ? (() => {
                const prevVal = l.params[key]
                // 释放旧的 blob URL，避免内存泄漏
                if (
                  key === 'imageUrl' &&
                  typeof prevVal === 'string' &&
                  prevVal.startsWith('blob:') &&
                  prevVal !== value
                ) {
                  try {
                    URL.revokeObjectURL(prevVal)
                  } catch {
                    // ignore
                  }
                }
                return { ...l, params: { ...l.params, [key]: value } }
              })()
            : l
        )
      )
    },
    [activeLayerId]
  )

  const setLayerRect = useCallback((id: string, rect: Partial<VisualLayer['rect']>) => {
    setLayers((prev) =>
      prev.map((l) => (l.id === id ? { ...l, rect: { ...l.rect, ...rect } } : l))
    )
  }, [])

  const setLayerParam = useCallback((id: string, key: string, value: number | boolean | string) => {
    setLayers((prev) =>
      prev.map((l) => {
        if (l.id !== id) return l
        const prevVal = l.params[key]
        // 释放旧的 blob URL，避免内存泄漏（WaveTunnel 专用图片）
        if (
          key === 'imageUrl' &&
          typeof prevVal === 'string' &&
          prevVal.startsWith('blob:') &&
          prevVal !== value
        ) {
          try {
            URL.revokeObjectURL(prevVal)
          } catch {
            // ignore
          }
        }
        return { ...l, params: { ...l.params, [key]: value } }
      })
    )
  }, [])

  const setAudioMapping = useCallback((c: Partial<AudioMappingConfig>) => {
    setAudioMappingState((prev) => ({ ...prev, ...c }))
  }, [])

  const setCanvasConfig = useCallback((c: Partial<CanvasConfig>) => {
    setCanvasConfigState((prev) => ({ ...prev, ...c }))
  }, [])

  const activeLayer =
    (activeLayerId && layers.find((l) => l.id === activeLayerId)) ?? null
  const activeEffectId = activeLayer?.effectId ?? null
  const effectParams = activeLayer?.params ?? {}

  const value = useMemo<EditorStateValue>(
    () => ({
      audioFile,
      audioName,
      isPlaying,
      images,
      activeImageId,
      backgroundVideoUrl,
      backgroundVideoName,
      backgroundVideoFit,
      layers,
      activeLayerId,
      activeEffectId,
      effectParams,
      audioMapping,
      canvasConfig,
      setAudioFile,
      setPlaying,
      addImage,
      setActiveImage,
      removeImage,
      setBackgroundVideo,
      setBackgroundVideoFit: setBackgroundVideoFitSafe,
      addLayer,
      setActiveLayer,
      moveLayer,
      setLayerVisible,
      removeLayer,
      setEffectParam,
      setLayerRect,
      setLayerParam,
      setAudioMapping,
      setCanvasConfig,
    }),
    [
      audioFile,
      audioName,
      isPlaying,
      images,
      activeImageId,
      backgroundVideoUrl,
      backgroundVideoName,
      backgroundVideoFit,
      layers,
      activeLayerId,
      activeEffectId,
      effectParams,
      audioMapping,
      canvasConfig,
      setAudioFile,
      addImage,
      setActiveImage,
      removeImage,
      setBackgroundVideo,
      setBackgroundVideoFitSafe,
      addLayer,
      setActiveLayer,
      moveLayer,
      setLayerVisible,
      removeLayer,
      setEffectParam,
      setLayerRect,
      setLayerParam,
      setAudioMapping,
      setCanvasConfig,
    ]
  )

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
}

export function useEditor(): EditorStateValue {
  const ctx = useContext(EditorContext)
  if (!ctx) throw new Error('useEditor must be inside EditorProvider')
  return ctx
}
