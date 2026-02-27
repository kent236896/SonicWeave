/**
 * TopBar - App title, Import Audio, Import Image, Export.
 */

import { useRef } from 'react'
import { useEditor } from '@/state/EditorState'

interface TopBarProps {
  onImportAudio: (file: File) => void
  onImportImage: (file: File) => void
}

export function TopBar({ onImportAudio, onImportImage }: TopBarProps) {
  const { setAudioFile, setPlaying } = useEditor()
  const audioInputRef = useRef<HTMLInputElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)

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

  const handleExport = () => {
    // Placeholder - no timeline/export yet
    console.log('Export (placeholder)')
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
      <button className="top-bar-btn" onClick={handleExport}>
        Export
      </button>
    </header>
  )
}
