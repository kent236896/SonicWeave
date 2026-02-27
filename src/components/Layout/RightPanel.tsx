/**
 * RightPanel - Inspector with Effect Parameters & Audio Mapping tabs.
 */

import { useRef, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
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
  onEffectParamChange: (key: string, value: number | boolean | string) => void
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
    backgroundVideoUrl,
    backgroundVideoFit,
    setBackgroundVideoFit,
  } = useEditor()

  const handleEffectParam = (key: string, value: number | boolean | string) => {
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
            <BackgroundPanel
              hasVideo={!!backgroundVideoUrl}
              fit={backgroundVideoFit}
              onChangeFit={setBackgroundVideoFit}
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

function BackgroundPanel({
  hasVideo,
  fit,
  onChangeFit,
}: {
  hasVideo: boolean
  fit: 'cover' | 'contain'
  onChangeFit: (v: 'cover' | 'contain') => void
}) {
  return (
    <div style={{ marginTop: 16, borderTop: '1px solid var(--border)', paddingTop: 12 }}>
      <div style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 8 }}>
        Background
      </div>
      <div className="select-row">
        <label>Video Fit</label>
        <select
          disabled={!hasVideo}
          value={fit}
          onChange={(e) => onChangeFit(e.target.value as 'cover' | 'contain')}
        >
          <option value="cover">Cover (fill)</option>
          <option value="contain">Contain (no crop)</option>
        </select>
      </div>
      {!hasVideo ? (
        <div style={{ color: 'var(--text-dim)', fontSize: 11, marginTop: 6 }}>
          先导入背景视频后可调整
        </div>
      ) : null}
    </div>
  )
}

function EffectParamsPanel({
  effectId,
  params,
  onChange,
}: {
  effectId: string | null
  params: Record<string, number | boolean | string>
  onChange: (key: string, value: number | boolean | string) => void
}) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  if (!effectId) {
    return (
      <div style={{ color: 'var(--text-dim)', fontSize: 12 }}>
        Select an effect
      </div>
    )
  }

  if (effectId === 'energyField') {
    const color =
      typeof params.color === 'string' && params.color ? (params.color as string) : '#3fd2ff'
    return (
      <>
        <div style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <label style={{ color: 'var(--text-dim)', fontSize: 11 }}>Color</label>
            <span style={{ color: 'var(--text-dim)', fontSize: 11 }}>{color}</span>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 4,
                background: color,
                border: '1px solid var(--border)',
              }}
            />
            <input
              value={color}
              onChange={(e) => onChange('color', e.target.value)}
              spellCheck={false}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ borderRadius: 10, overflow: 'hidden' }}>
            <HexColorPicker color={color} onChange={(v) => onChange('color', v)} />
          </div>
        </div>

        <SliderRow
          label="Opacity"
          value={(params.opacity as number) ?? 0.95}
          min={0.05}
          max={1}
          step={0.01}
          onChange={(v) => onChange('opacity', v)}
        />
        <SliderRow
          label="Intensity"
          value={(params.intensity as number) ?? 1.1}
          min={0.1}
          max={3}
          step={0.05}
          onChange={(v) => onChange('intensity', v)}
        />
        <SliderRow
          label="Radius"
          value={(params.radius as number) ?? 0.62}
          min={0.1}
          max={1.2}
          step={0.01}
          onChange={(v) => onChange('radius', v)}
        />
        <SliderRow
          label="Thickness"
          value={(params.thickness as number) ?? 0.08}
          min={0.01}
          max={0.4}
          step={0.005}
          onChange={(v) => onChange('thickness', v)}
        />
        <SliderRow
          label="Noise"
          value={(params.noise as number) ?? 1.0}
          min={0}
          max={2}
          step={0.01}
          onChange={(v) => onChange('noise', v)}
        />
        <SliderRow
          label="Speed"
          value={(params.speed as number) ?? 0.9}
          min={0}
          max={2}
          step={0.01}
          onChange={(v) => onChange('speed', v)}
        />
      </>
    )
  }

  if (effectId === 'planeWaveLattice') {
    const color =
      typeof params.color === 'string' && params.color ? (params.color as string) : '#ff2b2b'
    return (
      <>
        <div style={{ marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <label style={{ color: 'var(--text-dim)', fontSize: 11 }}>Color</label>
            <span style={{ color: 'var(--text-dim)', fontSize: 11 }}>{color}</span>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
            <div
              style={{
                width: 20,
                height: 20,
                borderRadius: 4,
                background: color,
                border: '1px solid var(--border)',
              }}
            />
            <input
              value={color}
              onChange={(e) => onChange('color', e.target.value)}
              spellCheck={false}
              style={{ width: '100%' }}
            />
          </div>
          <div style={{ borderRadius: 10, overflow: 'hidden' }}>
            <HexColorPicker color={color} onChange={(v) => onChange('color', v)} />
          </div>
        </div>

        <SliderRow
          label="Opacity"
          value={(params.opacity as number) ?? 0.95}
          min={0.05}
          max={1}
          step={0.01}
          onChange={(v) => onChange('opacity', v)}
        />
        <SliderRow
          label="Point Size"
          value={(params.pointSize as number) ?? 0.018}
          min={0.004}
          max={0.06}
          step={0.001}
          onChange={(v) => onChange('pointSize', v)}
        />
        <SliderRow
          label="Grid"
          value={(params.grid as number) ?? 18}
          min={6}
          max={40}
          step={1}
          onChange={(v) => onChange('grid', v)}
        />
        <SliderRow
          label="Spacing"
          value={(params.spacing as number) ?? 0.22}
          min={0.08}
          max={0.55}
          step={0.01}
          onChange={(v) => onChange('spacing', v)}
        />
        <SliderRow
          label="k (Wave Number)"
          value={(params.k as number) ?? 2.8}
          min={0.2}
          max={10}
          step={0.05}
          onChange={(v) => onChange('k', v)}
        />
        <SliderRow
          label="Direction θ"
          value={(params.theta as number) ?? 0.08}
          min={0}
          max={1}
          step={0.01}
          onChange={(v) => onChange('theta', v)}
        />
        <SliderRow
          label="Direction φ"
          value={(params.phi as number) ?? 0.52}
          min={0}
          max={1}
          step={0.01}
          onChange={(v) => onChange('phi', v)}
        />
        <SliderRow
          label="ω (Speed)"
          value={(params.omega as number) ?? 2.2}
          min={0}
          max={8}
          step={0.05}
          onChange={(v) => onChange('omega', v)}
        />
        <SliderRow
          label="Sharpness"
          value={(params.sharpness as number) ?? 4.2}
          min={1}
          max={10}
          step={0.1}
          onChange={(v) => onChange('sharpness', v)}
        />
        <SliderRow
          label="Rotate Speed"
          value={(params.rotateSpeed as number) ?? 0.18}
          min={0}
          max={1.2}
          step={0.01}
          onChange={(v) => onChange('rotateSpeed', v)}
        />

        <div style={{ marginTop: 12, borderTop: '1px solid var(--border)', paddingTop: 10 }}>
          <div style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 8 }}>
            Audio Reactive (Energy)
          </div>
          <SliderRow
            label="React ω"
            value={(params.reactOmega as number) ?? 0}
            min={0}
            max={2}
            step={0.01}
            onChange={(v) => onChange('reactOmega', v)}
          />
          <SliderRow
            label="React Point Size"
            value={(params.reactPointSize as number) ?? 0}
            min={0}
            max={2}
            step={0.01}
            onChange={(v) => onChange('reactPointSize', v)}
          />
          <SliderRow
            label="React Sharpness"
            value={(params.reactSharpness as number) ?? 0}
            min={0}
            max={2}
            step={0.01}
            onChange={(v) => onChange('reactSharpness', v)}
          />
          <SliderRow
            label="React k"
            value={(params.reactK as number) ?? 0}
            min={0}
            max={2}
            step={0.01}
            onChange={(v) => onChange('reactK', v)}
          />
          <SliderRow
            label="React Rotate"
            value={(params.reactRotate as number) ?? 0}
            min={0}
            max={2}
            step={0.01}
            onChange={(v) => onChange('reactRotate', v)}
          />
        </div>
      </>
    )
  }

  if (effectId === 'particles') {
    const shape = (params.shape as number) ?? 0
    return (
      <>
        <div className="select-row">
          <label>Shape</label>
          <select
            value={String(shape)}
            onChange={(e) => onChange('shape', parseInt(e.target.value, 10))}
          >
            <option value="0">Sphere</option>
            <option value="1">Circle</option>
            <option value="2">Plane</option>
          </select>
        </div>
        {shape === 2 ? (
          <div style={{ marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <label style={{ color: 'var(--text-dim)', fontSize: 11 }}>Plane Direction</label>
              <span style={{ color: 'var(--text-dim)', fontSize: 11 }}>
                {((params.planeDir as number) ?? 0) === 0 ? 'Center = All Directions' : '8-way Flow'}
              </span>
            </div>
            <PlaneDirPad
              value={(params.planeDir as number) ?? 0}
              onChange={(v) => onChange('planeDir', v)}
            />
          </div>
        ) : null}
        {shape === 1 ? (
          <SliderRow
            label="Tilt"
            value={(params.tilt as number) ?? 0}
            min={0}
            max={1}
            step={0.01}
            onChange={(v) => onChange('tilt', v)}
          />
        ) : null}
        <div className="select-row">
          <label>Rotation</label>
          <select
            value={String((params.rotationMode as number) ?? 0)}
            onChange={(e) => onChange('rotationMode', parseInt(e.target.value, 10))}
          >
            <option value="0">Y</option>
            <option value="1">XY</option>
            <option value="2">XYZ</option>
          </select>
        </div>
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

  if (effectId === 'equalizer') {
    const color =
      typeof params.color === 'string' && params.color ? (params.color as string) : '#4fc3ff'
    return (
      <>
        <ToggleRow
          label="Flip Horizontal"
          checked={Boolean(params.flipX)}
          onChange={(v) => onChange('flipX', v)}
        />
        <ToggleRow
          label="Flip Vertical"
          checked={Boolean(params.flipY)}
          onChange={(v) => onChange('flipY', v)}
        />
        <ToggleRow
          label="Show Reflection"
          checked={Boolean((params.showReflection as boolean) ?? true)}
          onChange={(v) => onChange('showReflection', v)}
        />
        <ToggleRow
          label="Show Baseline"
          checked={Boolean((params.showBaseline as boolean) ?? true)}
          onChange={(v) => onChange('showBaseline', v)}
        />
        <div className="slider-row">
          <label>Bar Count</label>
          <input
            type="number"
            min={16}
            max={512}
            value={Math.round((params.barCount as number) ?? 128)}
            onChange={(e) => onChange('barCount', parseInt(e.target.value, 10) || 128)}
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
          <span className="slider-value">{Math.round((params.barCount as number) ?? 128)}</span>
        </div>
        <SliderRow
          label="Length"
          value={(params.length as number) ?? 0.95}
          min={0.5}
          max={2}
          step={0.01}
          onChange={(v) => onChange('length', v)}
        />
        <div style={{ marginBottom: 12 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <label style={{ color: 'var(--text-dim)', fontSize: 11 }}>Color</label>
            <input
              value={color}
              onChange={(e) => onChange('color', e.target.value)}
              style={{
                width: 90,
                padding: '4px 6px',
                background: 'var(--bg-hover)',
                border: '1px solid var(--border)',
                borderRadius: 4,
                color: 'var(--text)',
                fontSize: 11,
              }}
            />
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <div style={{ width: 160 }}>
              <HexColorPicker color={color} onChange={(c) => onChange('color', c)} />
            </div>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                border: '1px solid var(--border)',
                background: color,
              }}
              title={color}
            />
          </div>
        </div>
        <SliderRow
          label="Glow"
          value={(params.glow as number) ?? 0.9}
          min={0}
          max={2}
          step={0.01}
          onChange={(v) => onChange('glow', v)}
        />
        <SliderRow
          label="Glow Size"
          value={(params.glowSize as number) ?? 0.9}
          min={0}
          max={2}
          step={0.01}
          onChange={(v) => onChange('glowSize', v)}
        />
        <SliderRow
          label="Opacity"
          value={(params.opacity as number) ?? 0.95}
          min={0.05}
          max={1}
          step={0.01}
          onChange={(v) => onChange('opacity', v)}
        />
        <SliderRow
          label="Height"
          value={(params.heightScale as number) ?? 1}
          min={0.2}
          max={1.5}
          step={0.01}
          onChange={(v) => onChange('heightScale', v)}
        />
        <SliderRow
          label="Reflection"
          value={(params.reflection as number) ?? 0.65}
          min={0}
          max={1}
          step={0.01}
          onChange={(v) => onChange('reflection', v)}
        />
        <SliderRow
          label="Gap"
          value={(params.gap as number) ?? 0.25}
          min={0}
          max={0.8}
          step={0.01}
          onChange={(v) => onChange('gap', v)}
        />
        <SliderRow
          label="Smoothing"
          value={(params.smoothing as number) ?? 0.18}
          min={0.02}
          max={0.6}
          step={0.01}
          onChange={(v) => onChange('smoothing', v)}
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
      <SliderRow
        label="Bar Width"
        value={(params.barWidth as number) ?? 0.5}
        min={0}
        max={1}
        step={0.05}
        onChange={(v) => onChange('barWidth', v)}
      />
      </>
    )
  }

  if (effectId === 'tunnel') {
    const imgUrl = typeof params.imageUrl === 'string' ? params.imageUrl : ''
    return (
      <>
        <div className="toggle-row">
          <label>Use Image</label>
          <input
            type="checkbox"
            checked={Boolean(params.imageEnabled)}
            onChange={(e) => onChange('imageEnabled', e.target.checked)}
          />
        </div>
        <div className="select-row" style={{ gap: 8 }}>
          <button
            className="top-bar-btn"
            style={{ flex: 1 }}
            onClick={() => fileInputRef.current?.click()}
          >
            Browse Image
          </button>
          <button
            className="top-bar-btn"
            disabled={!imgUrl}
            onClick={() => onChange('imageUrl', '')}
          >
            Clear
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => {
              const f = e.target.files?.[0]
              // 允许重复选择同一文件
              e.currentTarget.value = ''
              if (!f) return
              const url = URL.createObjectURL(f)
              onChange('imageUrl', url)
              onChange('imageEnabled', true)
            }}
          />
        </div>
        <SliderRow
          label="Image Mix"
          value={(params.imageMix as number) ?? 0.6}
          min={0}
          max={1}
          step={0.01}
          onChange={(v) => onChange('imageMix', v)}
        />
        <div style={{ color: 'var(--text-dim)', fontSize: 11, marginTop: 6 }}>
          {imgUrl ? '已选择图片（仅此 WaveTunnel 图层使用）' : '未选择图片'}
        </div>
      </>
    )
  }

  return (
    <div style={{ color: 'var(--text-dim)', fontSize: 12 }}>
      No parameters for this effect
    </div>
  )
}

function PlaneDirPad({
  value,
  onChange,
}: {
  value: number
  onChange: (v: number) => void
}) {
  // 0 = center (horizontal), 1-8 = 8 directions
  const btn = (id: number, label: string) => {
    const active = value === id
    return (
      <button
        type="button"
        onClick={() => onChange(id)}
        className="top-bar-btn"
        style={{
          width: 34,
          height: 34,
          padding: 0,
          display: 'grid',
          placeItems: 'center',
          background: active ? 'var(--accent-dim)' : 'var(--bg-hover)',
          borderColor: active ? 'var(--accent)' : 'var(--border)',
          fontSize: 14,
          lineHeight: 1,
          userSelect: 'none',
        }}
        aria-pressed={active}
        aria-label={`Plane direction ${id}`}
      >
        {label}
      </button>
    )
  }

  // 3x3 grid mapping:
  // [8][1][2]
  // [7][0][3]
  // [6][5][4]
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 34px)', gap: 6 }}>
      {btn(8, '↖')}
      {btn(1, '↑')}
      {btn(2, '↗')}
      {btn(7, '←')}
      {btn(0, '•')}
      {btn(3, '→')}
      {btn(6, '↙')}
      {btn(5, '↓')}
      {btn(4, '↘')}
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
