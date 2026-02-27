/**
 * RightPanel - Inspector with Effect Parameters & Audio Mapping tabs.
 */

import { useState } from 'react'
import { useEditor } from '@/state/EditorState'
import type { BandSource } from '@/core/types'

const BANDS: { value: BandSource; label: string }[] = [
  { value: 'low', label: 'Low' },
  { value: 'mid', label: 'Mid' },
  { value: 'high', label: 'High' },
]

export function RightPanel({
  onEffectParamChange,
  onAudioMappingChange,
}: {
  onEffectParamChange: (key: string, value: number | boolean) => void
  onAudioMappingChange: (k: keyof import('@/state/EditorState').AudioMappingConfig, v: number | boolean) => void
}) {
  const [tab, setTab] = useState<'effect' | 'mapping'>('effect')
  const {
    activeEffectId,
    effectParams,
    audioMapping,
    setEffectParam,
    setAudioMapping,
    canvasConfig,
    setCanvasConfig,
  } = useEditor()

  const handleEffectParam = (key: string, value: number | boolean) => {
    setEffectParam(key, value)
    onEffectParamChange(key, value)
  }

  const handleAudioMapping = (
    k: keyof typeof audioMapping,
    v: number | boolean
  ) => {
    setAudioMapping({ [k]: v })
    onAudioMappingChange(k, v)
  }

  return (
    <aside className="right-panel">
      <div className="inspector-tabs">
        <button
          className={`inspector-tab ${tab === 'effect' ? 'active' : ''}`}
          onClick={() => setTab('effect')}
        >
          Effect Parameters
        </button>
        <button
          className={`inspector-tab ${tab === 'mapping' ? 'active' : ''}`}
          onClick={() => setTab('mapping')}
        >
          Audio Mapping
        </button>
      </div>

      <div className="inspector-content">
        {tab === 'effect' && (
          <EffectParamsPanel
            effectId={activeEffectId}
            params={effectParams}
            onChange={handleEffectParam}
          />
        )}
        {tab === 'mapping' && (
          <>
            <AudioMappingPanel
              mapping={audioMapping}
              onChange={handleAudioMapping}
            />
            <CanvasConfigPanel
              config={canvasConfig}
              onChange={setCanvasConfig}
            />
          </>
        )}
      </div>
    </aside>
  )
}

function EffectParamsPanel({
  effectId,
  params,
  onChange,
}: {
  effectId: string | null
  params: Record<string, number | boolean>
  onChange: (key: string, value: number | boolean) => void
}) {
  if (!effectId) {
    return (
      <div style={{ color: 'var(--text-dim)', fontSize: 12 }}>
        Select an effect
      </div>
    )
  }

  if (effectId === 'particles') {
    return (
      <>
        <SliderRow
          label="Particle Size"
          value={(params.baseSize as number) ?? 0.02}
          min={0.01}
          max={0.16}
          step={0.002}
          onChange={(v) => onChange('baseSize', v)}
        />
        <SliderRow
          label="Rotation Speed"
          value={(params.rotationSpeed as number) ?? 1}
          min={0}
          max={6}
          step={0.1}
          onChange={(v) => onChange('rotationSpeed', v)}
        />
        <SliderRow
          label="Max Particle Groups"
          value={(params.maxGroups as number) ?? 10}
          min={1}
          max={20}
          step={1}
          onChange={(v) => onChange('maxGroups', v)}
        />
        <SliderRow
          label="Hue"
          value={(params.hue as number) ?? 0.55}
          min={0}
          max={1}
          step={0.01}
          onChange={(v) => onChange('hue', v)}
        />
        <SliderRow
          label="Opacity"
          value={(params.opacity as number) ?? 0.8}
          min={0.2}
          max={1}
          step={0.05}
          onChange={(v) => onChange('opacity', v)}
        />
      </>
    )
  }

  if (effectId === 'spectrum') {
    return (
      <>
        <div className="select-row">
          <label>Style</label>
          <select
            value={((params.style as number) ?? 0) >= 0.5 ? 'ferro' : 'bars'}
            onChange={(e) =>
              onChange('style', e.target.value === 'ferro' ? 1 : 0)
            }
          >
            <option value="bars">Bars</option>
            <option value="ferro">Ferrofluid</option>
          </select>
        </div>
        <div className="select-row">
          <label>Bars Direction</label>
          <select
            value={((params.barMode as number) ?? 0) >= 0.5 ? 'vertical' : 'radial'}
            onChange={(e) =>
              onChange('barMode', e.target.value === 'vertical' ? 1 : 0)
            }
          >
            <option value="radial">Radial Outward</option>
            <option value="vertical">Vertical</option>
          </select>
        </div>
        <SliderRow
          label="Tilt"
          value={(params.tilt as number) ?? 0}
          min={0}
          max={1}
          step={0.01}
          onChange={(v) => onChange('tilt', v)}
        />
        <SliderRow
          label="Radius"
          value={(params.radius as number) ?? 0.7}
          min={0.3}
          max={2}
          step={0.05}
          onChange={(v) => onChange('radius', v)}
        />
        <SliderRow
          label="Height"
          value={(params.heightScale as number) ?? 0.7}
          min={0.2}
          max={1}
          step={0.05}
          onChange={(v) => onChange('heightScale', v)}
        />
      </>
    )
  }

  return (
    <div style={{ color: 'var(--text-dim)', fontSize: 12 }}>
      No parameters for this effect
    </div>
  )
}

function AudioMappingPanel({
  mapping,
  onChange,
}: {
  mapping: import('@/state/EditorState').AudioMappingConfig
  onChange: (k: keyof import('@/state/EditorState').AudioMappingConfig, v: number | boolean) => void
}) {
  return (
    <>
      <div className="toggle-row">
        <label>Audio Reactive</label>
        <input
          type="checkbox"
          checked={mapping.enabled}
          onChange={(e) => onChange('enabled', e.target.checked)}
        />
      </div>
      <div className="select-row">
        <label>Audio Band</label>
        <select
          value={mapping.band}
          onChange={(e) => onChange('band', e.target.value as BandSource)}
        >
          {BANDS.map((b) => (
            <option key={b.value} value={b.value}>
              {b.label}
            </option>
          ))}
        </select>
      </div>
      <SliderRow
        label="Sensitivity"
        value={mapping.sensitivity}
        min={0.1}
        max={3}
        step={0.1}
        onChange={(v) => onChange('sensitivity', v)}
      />
      <SliderRow
        label="Smoothing"
        value={mapping.smoothing}
        min={0}
        max={1}
        step={0.05}
        onChange={(v) => onChange('smoothing', v)}
      />
      <SliderRow
        label="Min"
        value={mapping.min}
        min={0}
        max={1}
        step={0.05}
        onChange={(v) => onChange('min', v)}
      />
      <SliderRow
        label="Max"
        value={mapping.max}
        min={0}
        max={2}
        step={0.05}
        onChange={(v) => onChange('max', v)}
      />
    </>
  )
}

function CanvasConfigPanel({
  config,
  onChange,
}: {
  config: import('@/state/EditorState').CanvasConfig
  onChange: (c: Partial<import('@/state/EditorState').CanvasConfig>) => void
}) {
  const { mode, width, height } = config

  const applyPreset = (preset: 'portrait' | 'landscape') => {
    if (preset === 'portrait') {
      onChange({ mode: 'portrait', width: 1080, height: 1920 })
    } else {
      onChange({ mode: 'landscape', width: 1920, height: 1080 })
    }
  }

  const handleCustomSize = (key: 'width' | 'height', value: number) => {
    const v = Number.isFinite(value) ? Math.max(320, Math.min(3840, value)) : 1080
    onChange({ mode: 'custom', [key]: v })
  }

  return (
    <div style={{ marginTop: 16, borderTop: '1px solid var(--border)', paddingTop: 12 }}>
      <div style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 8 }}>
        Canvas
      </div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
        <button
          className="top-bar-btn"
          style={{
            flex: 1,
            padding: '4px 6px',
            fontSize: 11,
            background: mode === 'portrait' ? 'var(--accent-dim)' : 'var(--bg-hover)',
          }}
          onClick={() => applyPreset('portrait')}
        >
          Portrait 1080×1920
        </button>
        <button
          className="top-bar-btn"
          style={{
            flex: 1,
            padding: '4px 6px',
            fontSize: 11,
            background: mode === 'landscape' ? 'var(--accent-dim)' : 'var(--bg-hover)',
          }}
          onClick={() => applyPreset('landscape')}
        >
          Landscape 1920×1080
        </button>
      </div>
      <div style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 4 }}>
        Custom
      </div>
      <div style={{ display: 'flex', gap: 6 }}>
        <div style={{ flex: 1 }}>
          <input
            type="number"
            min={320}
            max={3840}
            value={width}
            onChange={(e) => handleCustomSize('width', parseInt(e.target.value, 10))}
            style={{
              width: '100%',
              padding: '4px 6px',
              background: 'var(--bg-hover)',
              border: '1px solid var(--border)',
              borderRadius: 4,
              color: 'var(--text)',
              fontSize: 11,
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <input
            type="number"
            min={320}
            max={3840}
            value={height}
            onChange={(e) => handleCustomSize('height', parseInt(e.target.value, 10))}
            style={{
              width: '100%',
              padding: '4px 6px',
              background: 'var(--bg-hover)',
              border: '1px solid var(--border)',
              borderRadius: 4,
              color: 'var(--text)',
              fontSize: 11,
            }}
          />
        </div>
      </div>
    </div>
  )
}

function SliderRow({
  label,
  value,
  min,
  max,
  step = 0.01,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step?: number
  onChange: (v: number) => void
}) {
  return (
    <div className="slider-row">
      <label>{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
      <span className="slider-value">{value.toFixed(2)}</span>
    </div>
  )
}

function ToggleRow({
  label,
  checked,
  onChange,
}: {
  label: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <div className="toggle-row">
      <label>{label}</label>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </div>
  )
}
