/**
 * SonicWeave - Production audio visual editor.
 */

import { useCallback, useRef, useState } from 'react'
import { EditorProvider, useEditor } from '@/state/EditorState'
import { TopBar } from '@/components/Layout/TopBar'
import { LeftPanel } from '@/components/Layout/LeftPanel'
import { RightPanel } from '@/components/Layout/RightPanel'
import { EditorCanvas } from '@/components/Editor/EditorCanvas'
import type { EffectId } from '@/core/EffectManager'

function EditorContent() {
  const {
    audioFile,
    isPlaying,
    images,
    activeImageId,
    backgroundVideoUrl,
    backgroundVideoFit,
    activeEffectId,
    layers,
    activeLayerId,
    effectParams,
    audioMapping,
    setAudioFile,
    setPlaying,
    addImage,
    setActiveImage,
    addLayer,
    setEffectParam,
    setLayerRect,
    setAudioMapping,
    canvasConfig,
  } = useEditor()

  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const seekRef = useRef<(t: number) => void>(() => {})

  const activeImage = images.find((i) => i.id === activeImageId)
  const activeImageUrl = activeImage?.url ?? null

  const handleImportBackgroundVideo = useCallback((_file: File) => {
    // 背景视频已由 TopBar 内部写入 EditorState（setBackgroundVideo）
  }, [])

  const handleImportAudio = useCallback(
    async (file: File) => {
      setAudioFile(file, file.name)
      setPlaying(false)
    },
    [setAudioFile, setPlaying]
  )

  const handleImportImage = useCallback(
    (file: File) => {
      const id = `img-${Date.now()}`
      const url = URL.createObjectURL(file)
      addImage(id, file.name, url)
      setActiveImage(id)
    },
    [addImage, setActiveImage]
  )

  const handlePlayPause = useCallback(() => {
    setPlaying(!isPlaying)
  }, [isPlaying, setPlaying])

  const handleSeek = useCallback((t: number) => {
    setProgress(t)
    seekRef.current?.(t)
  }, [])

  const handleSetActiveImage = useCallback(
    (url: string) => {
      const img = images.find((i) => i.url === url)
      if (img) setActiveImage(img.id)
    },
    [images, setActiveImage]
  )

  const handleSelectEffect = useCallback(
    (id: EffectId) => {
      if (id === 'energyField') {
        addLayer('energyField', {
          color: '#3fd2ff',
          opacity: 0.95,
          intensity: 1.1,
          radius: 0.62,
          thickness: 0.08,
          noise: 1.0,
          speed: 0.9,
        })
      } else if (id === 'planeWaveLattice') {
        addLayer('planeWaveLattice', {
          color: '#ff2b2b',
          opacity: 0.95,
          pointSize: 0.018,
          grid: 18,
          spacing: 0.22,
          k: 2.8,
          theta: 0.08,
          phi: 0.52,
          omega: 2.2,
          sharpness: 4.2,
          amp: 1,
          rotateSpeed: 0.18,
          reactOmega: 0.9,
          reactPointSize: 0.9,
          reactSharpness: 0.35,
          reactK: 0.35,
          reactRotate: 0.65,
        })
      } else if (id === 'particles') {
        addLayer('particles', {
          baseSize: 0.04,
          rotationSpeed: 2,
          maxGroups: 20,
          hue: 0.55,
          opacity: 0.8,
          shape: 0,
          tilt: 0,
          rotationMode: 0,
          planeDir: 0,
        })
      } else if (id === 'equalizer') {
        addLayer('equalizer', {
          barCount: 128,
          length: 0.95,
          color: '#4fc3ff',
          showReflection: true,
          showBaseline: true,
          flipX: false,
          flipY: false,
          hue: 0.55,
          saturation: 0.85,
          lightness: 0.65,
          opacity: 0.95,
          heightScale: 1,
          reflection: 0.65,
          glow: 0.9,
          glowSize: 0.9,
          gap: 0.25,
          smoothing: 0.18,
        })
      } else if (id === 'spectrum') {
        addLayer('spectrum', {
          tilt: 0,
          style: 0,
          radius: 0.7,
          barMode: 1,
          heightScale: 0.7,
          barWidth: 0.5,
        })
      } else if (id === 'tunnel') {
        addLayer('tunnel', {
          imageEnabled: false,
          imageMix: 0.6,
        })
      } else {
        addLayer(id)
      }
    },
    [addLayer]
  )

  const handleEffectParamChange = useCallback(
    (key: string, value: number | boolean | string) => {
      setEffectParam(key, value)
    },
    [setEffectParam]
  )

  const handleAudioMappingChange = useCallback(
    (
      k: keyof import('@/state/EditorState').AudioMappingConfig,
      v: number | boolean
    ) => {
      setAudioMapping({ [k]: v })
    },
    [setAudioMapping]
  )

  const setProgressDuration = useCallback((p: number, d: number) => {
    setProgress(p)
    setDuration(d)
  }, [])

  return (
    <>
      <TopBar
        onImportAudio={handleImportAudio}
        onImportImage={handleImportImage}
        onImportBackgroundVideo={handleImportBackgroundVideo}
      />
      <div className="main-layout">
        <LeftPanel
        onPlayPause={handlePlayPause}
        onSeek={handleSeek}
        progress={progress}
        duration={duration}
        onSetActiveImage={(url) => {
          const img = images.find((i) => i.url === url)
          if (img) setActiveImage(img.id)
        }}
        onSelectEffect={handleSelectEffect}
      />

      <main className="center-panel">
        <EditorCanvas
          audioFile={audioFile}
          isPlaying={isPlaying}
          onProgressUpdate={setProgressDuration}
          onSeekRef={seekRef}
          activeImageUrl={activeImageUrl}
          backgroundVideoUrl={backgroundVideoUrl}
          backgroundVideoFit={backgroundVideoFit}
          layers={layers}
          activeLayerId={activeLayerId}
          onLayerRectChange={setLayerRect}
          audioMapping={audioMapping}
          canvasConfig={canvasConfig}
        />
      </main>

        <RightPanel
          onEffectParamChange={handleEffectParamChange}
          onAudioMappingChange={handleAudioMappingChange}
        />
      </div>
    </>
  )
}

export default function App() {
  return (
    <EditorProvider>
      <EditorContent />
    </EditorProvider>
  )
}
