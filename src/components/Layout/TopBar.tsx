/**
 * TopBar - App title, Import Audio, Import Image, Export.
 */

import { useRef } from 'react'
import { useEditor } from '@/state/EditorState'

interface TopBarProps {
  onImportAudio: (file: File) => void
  onImportImage: (file: File) => void
  onImportBackgroundVideo: (file: File) => void
  onExport: () => void
}

export function TopBar({ onImportAudio, onImportImage, onImportBackgroundVideo, onExport }: TopBarProps) {
  const { setAudioFile, setPlaying, setBackgroundVideo, setCanvasConfig } = useEditor()
  const audioInputRef = useRef<HTMLInputElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)
  const videoInputRef = useRef<HTMLInputElement>(null)
  const canExport = typeof window !== 'undefined' && !!window.electronAPI?.export

  const handleAudioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('audio/')) {
      setAudioFile(file, file.name)
      setPlaying(false)
      onImportAudio(file)
    }
    e.target.value = ''
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && /^image\/(jpeg|jpg|png)/.test(file.type)) {
      onImportImage(file)
    }
    e.target.value = ''
  }

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('video/')) {
      setBackgroundVideo(file, file.name)
      onImportBackgroundVideo(file)

      // 读取视频元数据，按比例缩放可视化视图尺寸（canvasConfig）
      // 目标：长边不超过 1920（避免 4K 之类导致性能/内存压力）
      const tmpUrl = URL.createObjectURL(file)
      const v = document.createElement('video')
      v.preload = 'metadata'
      v.muted = true
      v.playsInline = true
      v.src = tmpUrl
      const cleanup = () => {
        try {
          URL.revokeObjectURL(tmpUrl)
        } catch {
          // ignore
        }
      }
      v.onloadedmetadata = () => {
        const vw = v.videoWidth || 0
        const vh = v.videoHeight || 0
        cleanup()
        if (vw > 0 && vh > 0) {
          const maxSide = 1920
          const scale = Math.min(1, maxSide / Math.max(vw, vh))
          const w = Math.max(320, Math.min(3840, Math.round(vw * scale)))
          const h = Math.max(320, Math.min(3840, Math.round(vh * scale)))
          setCanvasConfig({ mode: 'custom', width: w, height: h })
        }
      }
      v.onerror = () => {
        cleanup()
      }
    }
    e.target.value = ''
  }

  return (
    <header className="top-bar">
      <span className="top-bar-title">SonicWeave</span>
      <input
        ref={audioInputRef}
        type="file"
        accept="audio/*"
        onChange={handleAudioChange}
        style={{ display: 'none' }}
      />
      <input
        ref={imageInputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <input
        ref={videoInputRef}
        type="file"
        accept="video/*"
        onChange={handleVideoChange}
        style={{ display: 'none' }}
      />
      <button
        className="top-bar-btn"
        onClick={() => audioInputRef.current?.click()}
      >
        Import Audio
      </button>
      <button
        className="top-bar-btn"
        onClick={() => imageInputRef.current?.click()}
      >
        Import Image
      </button>
      <button
        className="top-bar-btn"
        onClick={() => videoInputRef.current?.click()}
      >
        Background Video
      </button>
      <button
        className={`top-bar-btn ${canExport ? '' : 'sw-btn-disabled'}`}
        onClick={onExport}
        aria-disabled={!canExport}
        title={!canExport ? '请在桌面应用（Electron 窗口）中导出' : '导出视频'}
      >
        Export
      </button>
    </header>
  )
}
