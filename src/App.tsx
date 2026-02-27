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
    activeEffectId,
    layers,
    effectParams,
    audioMapping,
    setAudioFile,
    setPlaying,
    addImage,
    setActiveImage,
    addLayer,
    setEffectParam,
    setAudioMapping,
    canvasConfig,
  } = useEditor()

  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const seekRef = useRef<(t: number) => void>(() => {})

  const activeImage = images.find((i) => i.id === activeImageId)
  const activeImageUrl = activeImage?.url ?? null

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
      if (id === 'particles') {
        addLayer('particles', {
          baseSize: 0.04,
          rotationSpeed: 2,
          maxGroups: 20,
          hue: 0.55,
          opacity: 0.8,
        })
      } else if (id === 'spectrum') {
        addLayer('spectrum', {
          tilt: 0,
          style: 0,
          radius: 0.7,
          barMode: 1,
          heightScale: 0.7,
        })
      } else {
        addLayer(id)
      }
    },
    [addLayer]
  )

  const handleEffectParamChange = useCallback(
    (key: string, value: number | boolean) => {
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
      <TopBar onImportAudio={handleImportAudio} onImportImage={handleImportImage} />
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
          layers={layers}
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
