import { useEffect, useMemo, useState } from 'react'

export function ExportModal({
  open,
  exporting,
  progress,
  message,
  defaultSize,
  onCancel,
  onConfirm,
}: {
  open: boolean
  exporting: boolean
  progress: number
  message: string | null
  defaultSize: { width: number; height: number }
  onCancel: () => void
  onConfirm: (
    size: { width: number; height: number },
    options: { encoder: 'libx264' | 'h264_nvenc' | 'h264_qsv' | 'h264_amf'; preset: string; crf: number }
  ) => void
}) {
  const presets = useMemo(
    () => [
      { label: `当前画布（${defaultSize.width}×${defaultSize.height}）`, w: defaultSize.width, h: defaultSize.height },
      { label: '1280×720 (720p)', w: 1280, h: 720 },
      { label: '1920×1080 (1080p)', w: 1920, h: 1080 },
      { label: '1080×1920 (竖屏)', w: 1080, h: 1920 },
      { label: '3840×2160 (4K)', w: 3840, h: 2160 },
    ],
    [defaultSize.height, defaultSize.width]
  )

  const [mode, setMode] = useState<'preset' | 'custom'>('preset')
  const [presetIdx, setPresetIdx] = useState(0)
  const [w, setW] = useState(defaultSize.width)
  const [h, setH] = useState(defaultSize.height)
  const [encoder, setEncoder] = useState<'libx264' | 'h264_nvenc' | 'h264_qsv' | 'h264_amf'>('libx264')
  const [speedPreset, setSpeedPreset] = useState<'ultrafast' | 'veryfast' | 'faster' | 'medium'>('veryfast')
  const [crf, setCrf] = useState(20)

  useEffect(() => {
    if (!open) return
    setMode('preset')
    setPresetIdx(0)
    setW(defaultSize.width)
    setH(defaultSize.height)
    setEncoder('libx264')
    setSpeedPreset('veryfast')
    setCrf(20)
  }, [defaultSize.height, defaultSize.width, open])

  if (!open) return null

  const chosen =
    mode === 'preset'
      ? { width: presets[Math.max(0, Math.min(presets.length - 1, presetIdx))].w, height: presets[Math.max(0, Math.min(presets.length - 1, presetIdx))].h }
      : { width: Math.max(16, Math.floor(w)), height: Math.max(16, Math.floor(h)) }

  return (
    <div className="sw-modal-overlay" role="dialog" aria-modal="true">
      <div className="sw-modal">
        <div className="sw-modal-title">导出视频（离线渲染）</div>

        <div className="sw-modal-section">
          <div className="sw-modal-row">
            <label className="sw-radio">
              <input
                type="radio"
                checked={mode === 'preset'}
                onChange={() => setMode('preset')}
                disabled={exporting}
              />
              预设尺寸
            </label>
          </div>
          <select
            className="sw-input"
            value={presetIdx}
            onChange={(e) => setPresetIdx(Number(e.target.value))}
            disabled={exporting || mode !== 'preset'}
          >
            {presets.map((p, idx) => (
              <option key={p.label} value={idx}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        <div className="sw-modal-section">
          <div className="sw-modal-row">
            <label className="sw-radio">
              <input
                type="radio"
                checked={mode === 'custom'}
                onChange={() => setMode('custom')}
                disabled={exporting}
              />
              自定义尺寸
            </label>
          </div>
          <div className="sw-grid2">
            <div>
              <div className="sw-label">宽度</div>
              <input
                className="sw-input"
                type="number"
                value={w}
                min={16}
                max={7680}
                onChange={(e) => setW(Number(e.target.value))}
                disabled={exporting || mode !== 'custom'}
              />
            </div>
            <div>
              <div className="sw-label">高度</div>
              <input
                className="sw-input"
                type="number"
                value={h}
                min={16}
                max={7680}
                onChange={(e) => setH(Number(e.target.value))}
                disabled={exporting || mode !== 'custom'}
              />
            </div>
          </div>
        </div>

        <div className="sw-modal-section">
          <div className="sw-label">编码器</div>
          <select className="sw-input" value={encoder} onChange={(e) => setEncoder(e.target.value as any)} disabled={exporting}>
            <option value="libx264">CPU（H.264 / libx264）</option>
            <option value="h264_nvenc">NVIDIA（NVENC）</option>
            <option value="h264_qsv">Intel（QSV）</option>
            <option value="h264_amf">AMD（AMF）</option>
          </select>
          <div className="sw-help">硬件编码取决于你的 FFmpeg/驱动是否支持；失败会提示错误。</div>
        </div>

        <div className="sw-modal-section">
          <div className="sw-grid2">
            <div>
              <div className="sw-label">速度（preset）</div>
              <select
                className="sw-input"
                value={speedPreset}
                onChange={(e) => setSpeedPreset(e.target.value as any)}
                disabled={exporting || encoder !== 'libx264'}
              >
                <option value="ultrafast">ultrafast（最快）</option>
                <option value="veryfast">veryfast（推荐）</option>
                <option value="faster">faster</option>
                <option value="medium">medium（更慢更小）</option>
              </select>
            </div>
            <div>
              <div className="sw-label">质量（CRF）</div>
              <input
                className="sw-input"
                type="number"
                min={14}
                max={28}
                value={crf}
                onChange={(e) => setCrf(Number(e.target.value))}
                disabled={exporting || encoder !== 'libx264'}
              />
            </div>
          </div>
          <div className="sw-help">只有 CPU（libx264）使用 preset/CRF；硬件编码使用各自默认参数。</div>
        </div>

        {exporting ? (
          <div className="sw-modal-section">
            <div className="sw-progress">
              <div className="sw-progress-bar" style={{ width: `${Math.round(progress * 100)}%` }} />
            </div>
            <div className="sw-help">{message ?? '导出中…'}</div>
          </div>
        ) : (
          <div className="sw-help">将离线逐帧渲染，并通过管道直接交给 FFmpeg 编码（不写图片序列）。</div>
        )}

        <div className="sw-modal-actions">
          <button className="top-bar-btn" onClick={onCancel} disabled={exporting}>
            取消
          </button>
          <button
            className="top-bar-btn"
            onClick={() =>
              onConfirm(chosen, {
                encoder,
                preset: speedPreset,
                crf: Math.max(14, Math.min(28, Math.floor(crf))),
              })
            }
            disabled={exporting || chosen.width <= 0 || chosen.height <= 0}
          >
            开始导出
          </button>
        </div>
      </div>
    </div>
  )
}

