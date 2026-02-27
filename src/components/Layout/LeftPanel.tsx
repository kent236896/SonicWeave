/**
 * LeftPanel - Audio, Images, Effects Library.
 */

import { useEditor } from '@/state/EditorState'
import type { EffectId } from '@/core/EffectManager'

const EFFECT_LABELS: Record<EffectId, string> = {
  particles: 'Particle Bloom',
  spectrum: 'Circular Spectrum',
  tunnel: 'Wave Tunnel',
}

export function LeftPanel({
  onPlayPause,
  onSeek,
  progress,
  duration,
  onSetActiveImage,
  onSelectEffect,
}: {
  onPlayPause: () => void
  onSeek: (t: number) => void
  progress: number
  duration: number
  onSetActiveImage: (url: string) => void
  onSelectEffect: (id: EffectId) => void
}) {
  const {
    audioFile,
    audioName,
    isPlaying,
    images,
    activeImageId,
    activeEffectId,
    layers,
    activeLayerId,
    setActiveLayer,
    moveLayer,
    setLayerVisible,
    removeLayer,
    setPlaying,
  } = useEditor()

  const handlePlayPause = () => {
    setPlaying(!isPlaying)
    onPlayPause()
  }

  return (
    <aside className="left-panel">
      <div className="panel-section">
        <div className="panel-section-title">Audio</div>
        {audioFile ? (
          <>
            <div
              className="panel-item active"
              style={{ cursor: 'default', marginBottom: 8 }}
            >
              {audioName ?? 'Audio'}
            </div>
            <button
              className="top-bar-btn"
              style={{ width: '100%', marginBottom: 8 }}
              onClick={handlePlayPause}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            <div style={{ marginBottom: 4 }}>
              <input
                type="range"
                min={0}
                max={duration || 1}
                value={progress}
                onChange={(e) => onSeek(parseFloat(e.target.value))}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ fontSize: 10, color: 'var(--text-dim)' }}>
              {formatTime(progress)} / {formatTime(duration)}
            </div>
          </>
        ) : (
          <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>
            No audio loaded
          </div>
        )}
      </div>

      <div className="panel-section">
        <div className="panel-section-title">Image Assets</div>
        {images.length === 0 ? (
          <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>
            No images
          </div>
        ) : (
          images.map((img) => (
            <div
              key={img.id}
              className={`panel-item ${img.id === activeImageId ? 'active' : ''}`}
              onClick={() => onSetActiveImage(img.url)}
            >
              {img.name}
            </div>
          ))
        )}
      </div>

      <div className="panel-section" style={{ flex: 1, overflow: 'auto' }}>
        <div className="panel-section-title">Effects Library</div>
        {(['particles', 'spectrum', 'tunnel'] as EffectId[]).map(
          (id) => (
            <div
              key={id}
              className={`panel-item ${id === activeEffectId ? 'active' : ''}`}
              onClick={() => onSelectEffect(id)}
            >
              {EFFECT_LABELS[id]}
            </div>
          )
        )}
      </div>

      <div className="panel-section" style={{ flex: 1, overflow: 'auto' }}>
        <div className="panel-section-title">Layers</div>
        {layers.length === 0 ? (
          <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>
            No layers. Click an effect to add one.
          </div>
        ) : (
          layers.map((layer, index) => (
            <div
              key={layer.id}
              className={`panel-item ${layer.id === activeLayerId ? 'active' : ''}`}
              style={{ display: 'flex', alignItems: 'center', gap: 6 }}
              onClick={() => setActiveLayer(layer.id)}
            >
              <span style={{ flex: 1 }}>
                {index + 1}. {EFFECT_LABELS[layer.effectId]}
              </span>
              <button
                className="top-bar-btn"
                style={{ padding: '2px 4px', fontSize: 10 }}
                disabled={index === 0}
                onClick={(e) => {
                  e.stopPropagation()
                  moveLayer(layer.id, 'up')
                }}
              >
                Up
              </button>
              <button
                className="top-bar-btn"
                style={{ padding: '2px 4px', fontSize: 10 }}
                disabled={index === layers.length - 1}
                onClick={(e) => {
                  e.stopPropagation()
                  moveLayer(layer.id, 'down')
                }}
              >
                Down
              </button>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  fontSize: 10,
                  color: 'var(--text-dim)',
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="checkbox"
                  checked={layer.visible}
                  onChange={(e) => setLayerVisible(layer.id, e.target.checked)}
                  style={{ width: 12, height: 12 }}
                />
                Vis
              </label>
              <button
                className="top-bar-btn"
                style={{ padding: '2px 4px', fontSize: 10 }}
                onClick={(e) => {
                  e.stopPropagation()
                  removeLayer(layer.id)
                }}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </aside>
  )
}

function formatTime(s: number): string {
  if (!Number.isFinite(s) || s < 0) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}
