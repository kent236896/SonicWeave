/**
 * SonicWeave - Production audio visual editor.
 */

import { useCallback, useRef, useState } from 'react'
import { EditorProvider, useEditor } from '@/state/EditorState'
import { TopBar } from '@/components/Layout/TopBar'
import { LeftPanel } from '@/components/Layout/LeftPanel'
import { RightPanel } from '@/components/Layout/RightPanel'
import { EditorCanvas, type EditorCanvasExportApi } from '@/components/Editor/EditorCanvas'
import type { EffectId } from '@/core/EffectManager'
import { ExportModal } from '@/components/Export/ExportModal'
const DEFAULT_EXPORT_FPS = 30

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v))
}

function avgRange(data: Uint8Array, start: number, end: number): number {
  if (start >= end) return 0
  let s = 0
  for (let i = start; i < end; i++) s += data[i]
  return s / (end - start)
}

function computeBandsFromFrequencyData(
  freq: Uint8Array,
  sampleRate: number,
  lowCutoff = 250,
  midCutoff = 4000
): { low: number; mid: number; high: number } {
  const binCount = freq.length
  if (!binCount) return { low: 0, mid: 0, high: 0 }
  const nyquist = sampleRate / 2
  const binWidth = nyquist / binCount
  const lowEnd = Math.floor(lowCutoff / binWidth)
  const midEnd = Math.floor(midCutoff / binWidth)
  const low = avgRange(freq, 0, Math.max(0, Math.min(binCount, lowEnd)))
  const mid = avgRange(freq, Math.max(0, Math.min(binCount, lowEnd)), Math.max(0, Math.min(binCount, midEnd)))
  const high = avgRange(freq, Math.max(0, Math.min(binCount, midEnd)), binCount)
  return { low: low / 255, mid: mid / 255, high: high / 255 }
}

function computeBandsFromBinsForExport(
  freq: Uint8Array,
  opts: { sampleRate: number; fftSize: number; gain?: number; lowCutoff?: number; midCutoff?: number }
): { low: number; mid: number; high: number } {
  const binCount = freq.length
  if (!binCount) return { low: 0, mid: 0, high: 0 }

  // 注意：freq 不是 analyser 的 frequencyBinCount，而是从主进程 FFT(fftSize=2048) 取前 N 个 bins。
  // 这里必须用 fftSize 来推 binWidth，否则会把 cutoff 映射错，导致 low/mid/high 长期接近 0。
  const lowCutoff = opts.lowCutoff ?? 250
  const midCutoff = opts.midCutoff ?? 4000
  const binWidth = opts.sampleRate / Math.max(1, opts.fftSize) // = sampleRate / fftSize

  const lowEnd = Math.max(1, Math.min(binCount, Math.floor(lowCutoff / binWidth)))
  const midEnd = Math.max(lowEnd + 1, Math.min(binCount, Math.floor(midCutoff / binWidth)))

  const low = avgRange(freq, 0, lowEnd) / 255
  const mid = avgRange(freq, lowEnd, midEnd) / 255
  const high = avgRange(freq, midEnd, binCount) / 255

  const gain = typeof opts.gain === 'number' && Number.isFinite(opts.gain) ? opts.gain : 2.2
  const clamp = (v: number) => Math.max(0, Math.min(1, v))
  return { low: clamp(low * gain), mid: clamp(mid * gain), high: clamp(high * gain) }
}

async function canvasToJpegBlob(canvas: HTMLCanvasElement, quality = 0.92): Promise<Blob> {
  return await new Promise((resolve, reject) => {
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error('canvas.toBlob failed'))),
      'image/jpeg',
      Math.max(0.1, Math.min(1, quality))
    )
  })
}

async function ensureVideoReady(video: HTMLVideoElement): Promise<void> {
  if (Number.isFinite(video.duration) && video.duration > 0) return
  await new Promise<void>((resolve, reject) => {
    const onReady = () => {
      cleanup()
      resolve()
    }
    const onErr = () => {
      cleanup()
      reject(new Error('video load failed'))
    }
    const cleanup = () => {
      video.removeEventListener('loadedmetadata', onReady)
      video.removeEventListener('canplay', onReady)
      video.removeEventListener('error', onErr)
    }
    video.addEventListener('loadedmetadata', onReady, { once: true })
    video.addEventListener('canplay', onReady, { once: true })
    video.addEventListener('error', onErr, { once: true })
  })
}

async function seekVideo(video: HTMLVideoElement, t: number): Promise<void> {
  const target = Math.max(0, t)
  if (Math.abs((video.currentTime ?? 0) - target) < 0.0005) return
  await new Promise<void>((resolve, reject) => {
    const onSeeked = () => {
      cleanup()
      resolve()
    }
    const onErr = () => {
      cleanup()
      reject(new Error('video seek failed'))
    }
    const cleanup = () => {
      video.removeEventListener('seeked', onSeeked)
      video.removeEventListener('error', onErr)
    }
    video.addEventListener('seeked', onSeeked, { once: true })
    video.addEventListener('error', onErr, { once: true })
    try {
      video.currentTime = target
    } catch (e) {
      cleanup()
      reject(e instanceof Error ? e : new Error('video.currentTime set failed'))
    }
  })
}

function drawCoverContain(
  srcW: number,
  srcH: number,
  dstW: number,
  dstH: number,
  fit: 'cover' | 'contain'
): { dx: number; dy: number; dw: number; dh: number } {
  const sAspect = srcW / Math.max(1, srcH)
  const dAspect = dstW / Math.max(1, dstH)
  let dw = dstW
  let dh = dstH
  if (fit === 'cover') {
    if (sAspect > dAspect) {
      dh = dstH
      dw = dh * sAspect
    } else {
      dw = dstW
      dh = dw / sAspect
    }
  } else {
    if (sAspect > dAspect) {
      dw = dstW
      dh = dw / sAspect
    } else {
      dh = dstH
      dw = dh * sAspect
    }
  }
  const dx = (dstW - dw) / 2
  const dy = (dstH - dh) / 2
  return { dx, dy, dw, dh }
}

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
  const exportApiRef = useRef<EditorCanvasExportApi | null>(null)

  const [exportOpen, setExportOpen] = useState(false)
  const [exporting, setExporting] = useState(false)
  const [exportPct, setExportPct] = useState(0)
  const [exportMsg, setExportMsg] = useState<string | null>(null)

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
          color: '#00ff00',
          opacity: 0.95,
          pointSize: 0.018,
          grid: 18,
          spacing: 0.22,
          shape: 'circle',
          waveType: 'spherical',
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
      } else if (id === 'stormtrooperDance') {
        addLayer('stormtrooperDance', {
          scale: 1.0,
          yaw: Math.PI,
          danceStrength: 1.0,
          baseAnimSpeed: 0.9,
          reactAnimSpeed: 1.6,
          bob: 0.22,
          twist: 0.35,
          arms: 0.75,
          head: 0.35,
          keyLight: 3.6,
          fillLight: 2.2,
          rimLight: 1.1,
          ambient: 0.75,
          hemisphere: 0.9,
          lockInPlace: true,
          overlay: 0.45,
          rhythm: 0.75,
          beatLock: 0.9,
          smooth: 0.25,
          rootBob: 0.12,
          rootSway: 0.06,
          forceAlternatingArms: true,
        })
      } else if (id === 'tessellatedText') {
        addLayer('tessellatedText', {
          text: 'SonicWeave',
          textColor: '#ffffff',
          outlineColor: '#000000',
          outlineWidth: 10,
          fontScale: 1.0,
          padding: 48,
          background: false,
          bgOpacity: 0.25,
          amplitude: 0.35,
          frequency: 1.4,
          speed: 1.2,
          edgeLength: 0.28,
          maxIterations: 5,
          emissive: 1.0,
        })
      } else if (id === 'css3dSprites') {
        addLayer('css3dSprites', {
          color: '#4488ff',
          opacity: 0.95,
          size: 0.12,
          layout: 'plane',
          transitionDuration: 2,
          pulseSpeed: 0.002,
          pulseAmount: 0.3,
          reactScale: 1.2,
          reactRotation: 0.8,
          reactPulse: 1.0,
          reactHue: 0.3,
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

  const handleExportClick = useCallback(() => {
    if (!window.electronAPI?.export) {
      alert(
        '当前是浏览器环境，无法导出。\n\n请用桌面窗口导出：运行 `npm run dev` 后，在弹出的 SonicWeave（Electron）窗口里点 Export，不要在浏览器打开 localhost:5173 来操作。'
      )
      return
    }
    setExportOpen(true)
  }, [])

  const handleExport = useCallback(
    async (
      size: { width: number; height: number },
      options: { encoder: 'libx264' | 'h264_nvenc' | 'h264_qsv' | 'h264_amf'; preset: string; crf: number }
    ) => {
      if (exporting) return
      const api = exportApiRef.current
      if (!api) {
        alert('导出失败：画布尚未就绪')
        return
      }

      const maxSide = Math.max(size.width, size.height)
      if (maxSide > 1920) {
        const ok = confirm(
          `你选择的尺寸是 ${size.width}×${size.height}。\n\n超过 1920 的导出在部分 Windows/GPU 环境下可能触发崩溃或非常慢，建议先用 1920×1080 验证流程。\n\n仍然继续导出吗？`
        )
        if (!ok) return
      }
      const electron = (window as any).electronAPI as
        | {
            export?: {
              showSaveDialog: (suggestedName: string) => Promise<{ canceled: boolean; filePath?: string }>
              createTempDir: () => Promise<{ dir: string }>
              writeFrame: (p: { dir: string; index: number; data: ArrayBuffer }) => Promise<void>
              writeAudio: (p: { dir: string; name: string; data: ArrayBuffer }) => Promise<{ path: string }>
              analyzeAudio: (p: {
                audioPath: string
                fps: number
                binCount?: number
              }) => Promise<{ frames: number; binCount: number; fps: number; data: ArrayBuffer }>
              pipeStart: (p: {
                outPath: string
                fps: number
                audioPath?: string | null
                encoder: 'libx264' | 'h264_nvenc' | 'h264_qsv' | 'h264_amf'
                preset?: string
                crf?: number
              }) => Promise<{ id: string }>
              pipeWrite: (p: { id: string; data: ArrayBuffer }) => Promise<void>
              pipeFinish: (p: { id: string }) => Promise<void>
              runFfmpeg: (p: { dir: string; fps: number; outPath: string; audioPath?: string | null }) => Promise<void>
              cleanup: (p: { dir: string }) => Promise<void>
              log: (message: string) => Promise<{ ok: true; path: string }>
            }
          }
        | undefined

      if (!electron?.export) {
        alert('导出失败：当前运行环境不支持（缺少 Electron IPC）')
        return
      }

      setExporting(true)
      setExportPct(0)
      setExportMsg('准备导出…')
      setExportOpen(true)

      let tempDir: string | null = null
      let restore: (() => void) | null = null
      let ok = false
      let pipeId: string | null = null

      try {
        await electron.export.log('export: start')
        const suggestedName = `SonicWeave_${size.width}x${size.height}.mp4`
        const save = await electron.export.showSaveDialog(suggestedName)
        if (save.canceled || !save.filePath) {
          await electron.export.log('export: canceled in save dialog')
          setExportMsg(null)
          setExporting(false)
          return
        }
        await electron.export.log(`export: savePath chosen`)

        const { dir } = await electron.export.createTempDir()
        tempDir = dir
        await electron.export.log(`export: tempDir=${dir}`)

        setExportMsg('初始化渲染器…')
        restore = api.beginExport({ width: size.width, height: size.height, pixelRatio: 1 })
        await electron.export.log(`export: beginExport ok (${size.width}x${size.height})`)

        // 2D 合成画布：背景视频/参考图 + WebGL 画面
        const composite = document.createElement('canvas')
        composite.width = size.width
        composite.height = size.height
        const ctx = composite.getContext('2d')
        if (!ctx) throw new Error('无法创建 2D 画布上下文')

        // 可选：背景视频（best-effort，逐帧 seek 会比较慢）
        let exportVideo: HTMLVideoElement | null = null
        if (backgroundVideoUrl) {
          await electron.export.log('export: load background video')
          exportVideo = document.createElement('video')
          exportVideo.muted = true
          exportVideo.playsInline = true
          exportVideo.preload = 'auto'
          exportVideo.src = backgroundVideoUrl
          await ensureVideoReady(exportVideo)
          await electron.export.log('export: background video ready')
        }

        // 可选：参考图（导出时叠加到画面上，和预览一致）
        let exportImg: HTMLImageElement | null = null
        if (activeImageUrl) {
          await electron.export.log('export: load overlay image')
          exportImg = new Image()
          exportImg.src = activeImageUrl
          await new Promise<void>((resolve, reject) => {
            exportImg!.onload = () => resolve()
            exportImg!.onerror = () => reject(new Error('image load failed'))
          })
          await electron.export.log('export: overlay image ready')
        }

        // 音频：写入 FFmpeg 合成音轨 + 由主进程用 FFmpeg 解码并分析（避免渲染进程 decodeAudioData 崩溃）
        let audioPath: string | null = null
        let analysisDuration = 10
        let freqData = new Uint8Array(256)
        let analysis: {
          frames: number
          binCount: number
          fps: number
          bands: Float32Array
          bins: Uint8Array
        } | null = null

        if (audioFile) {
          setExportMsg('解析音频…')
          await electron.export.log('export: read audio file')
          const buf = await audioFile.arrayBuffer()
          // 写入原始音频给 FFmpeg（直接复用源文件编码）
          const audioRes = await electron.export.writeAudio({
            dir,
            name: audioFile.name || 'audio',
            data: buf,
          })
          audioPath = audioRes.path
          await electron.export.log('export: audio written to temp')

          await electron.export.log('export: analyze audio in main process')
          const res = await electron.export.analyzeAudio({
            audioPath: audioRes.path,
            fps: DEFAULT_EXPORT_FPS,
            binCount: 256,
          })
          // 解析二进制格式：
          const dv = new DataView(res.data)
          const frames = dv.getUint32(0, true)
          const binCount = dv.getUint32(4, true)
          const fps = dv.getFloat32(8, true)
          const headerBytes = 16
          const bandsBytes = frames * 4 * 4
          const bands = new Float32Array(res.data, headerBytes, frames * 4)
          const bins = new Uint8Array(res.data, headerBytes + bandsBytes, frames * binCount)
          analysis = { frames, binCount, fps, bands, bins }
          analysisDuration = Math.max(0.01, frames / Math.max(1, fps))
          freqData = new Uint8Array(binCount)
          await electron.export.log(`export: analyze ok frames=${frames} binCount=${binCount} fps=${fps}`)
        }

        const fps = DEFAULT_EXPORT_FPS
        const totalFrames = analysis?.frames ?? Math.max(1, Math.ceil(analysisDuration * fps))

        setExportMsg(`导出中… 0 / ${totalFrames}`)
        await electron.export.log(`export: frames=${totalFrames} fps=${fps}`)

        setExportMsg('启动编码器（FFmpeg）…')
        await electron.export.log(`export: pipe start encoder=${options.encoder}`)
        const pipe = await electron.export.pipeStart({
          outPath: save.filePath,
          fps,
          audioPath,
          encoder: options.encoder,
          preset: options.preset,
          crf: options.crf,
        })
        pipeId = pipe.id

        const renderWebgl = () => api.renderExportFrame

        const webglCanvas = api.getCanvas()

        const fakeBands = { low: 0.3, mid: 0.3, high: 0.3 }
        await electron.export.log(`export: render loop start (audio=${!!analysis})`)
        for (let i = 0; i < totalFrames; i++) {
          const t = Math.min(i / fps, Math.max(0, analysisDuration - 1 / fps))

          let bands = fakeBands
          if (analysis) {
            const start = i * analysis.binCount
            const end = start + analysis.binCount
            freqData = analysis.bins.subarray(start, end)
            // 用频谱 bins 重新计算 bands，避免主进程 bands 过小导致“完全不动”
            bands = computeBandsFromBinsForExport(freqData, { sampleRate: 44100, fftSize: 2048, gain: 2.2 })
            if (i === 0) {
              await electron.export.log(
                `export: bands0 low=${bands.low.toFixed(3)} mid=${bands.mid.toFixed(3)} high=${bands.high.toFixed(3)}`
              )
            }
          } else {
            // 无音频：固定值 + 空频谱
            freqData = new Uint8Array(256)
          }

          renderWebgl()({
            width: size.width,
            height: size.height,
            virtualWidth: size.width,
            virtualHeight: size.height,
            bands,
            frequencyData: freqData,
            dt: 1 / fps,
          })

          // 合成：清屏 -> 背景视频 -> 参考图 -> WebGL
          ctx.clearRect(0, 0, size.width, size.height)

          if (exportVideo) {
            const vd = Number.isFinite(exportVideo.duration) && exportVideo.duration > 0 ? exportVideo.duration : 0
            let vt = vd > 0 ? t % vd : t
            if (vd > 0 && vt > vd - 0.05) vt = vd - 0.05
            await seekVideo(exportVideo, vt)
            const rect = drawCoverContain(
              exportVideo.videoWidth || size.width,
              exportVideo.videoHeight || size.height,
              size.width,
              size.height,
              backgroundVideoFit
            )
            ctx.drawImage(exportVideo, rect.dx, rect.dy, rect.dw, rect.dh)
          }

          if (exportImg) {
            ctx.save()
            ctx.globalAlpha = 0.35
            const rect = drawCoverContain(exportImg.naturalWidth, exportImg.naturalHeight, size.width, size.height, 'cover')
            ctx.drawImage(exportImg, rect.dx, rect.dy, rect.dw, rect.dh)
            ctx.restore()
          }

          ctx.drawImage(webglCanvas, 0, 0, size.width, size.height)

          const jpg = await canvasToJpegBlob(composite, 0.88)
          await electron.export.pipeWrite({ id: pipeId!, data: await jpg.arrayBuffer() })

          const pct = (i + 1) / totalFrames
          setExportPct(pct)
          if (i % 10 === 0 || i === totalFrames - 1) {
            setExportMsg(`导出中… ${i + 1} / ${totalFrames}`)
          }
          if (i % 30 === 0) await electron.export.log(`export: frame ${i + 1}/${totalFrames}`)

          // 让 UI 有机会喘口气，避免长时间占满主线程
          if (i % 5 === 0) await new Promise((r) => setTimeout(r, 0))
        }

        setExportMsg('收尾编码…')
        await electron.export.log('export: pipe finish')
        await electron.export.pipeFinish({ id: pipeId })
        await electron.export.log('export: pipe done')

        setExportMsg('完成')
        setExportPct(1)
        ok = true
      } catch (e) {
        console.error(e)
        try {
          await electron.export.log(`export: error ${e instanceof Error ? e.stack ?? e.message : String(e)}`)
        } catch {
          // ignore
        }
        alert(`导出失败：${e instanceof Error ? e.message : String(e)}`)
      } finally {
        try {
          restore?.()
        } catch {
          // ignore
        }
        if (pipeId) {
          try {
            await (window as any).electronAPI?.export?.pipeFinish?.({ id: pipeId })
          } catch {
            // ignore
          }
        }
        if (tempDir) {
          try {
            const electron = (window as any).electronAPI as any
            await electron?.export?.cleanup?.({ dir: tempDir })
          } catch {
            // ignore
          }
        }
        setExporting(false)
        if (!ok) setExportMsg(null)
      }
    },
    [activeImageUrl, audioFile, backgroundVideoFit, backgroundVideoUrl, exporting]
  )

  return (
    <>
      <TopBar
        onImportAudio={handleImportAudio}
        onImportImage={handleImportImage}
        onImportBackgroundVideo={handleImportBackgroundVideo}
        onExport={handleExportClick}
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
          onExportRef={exportApiRef}
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

      <ExportModal
        open={exportOpen}
        exporting={exporting}
        progress={exportPct}
        message={exportMsg}
        defaultSize={{ width: canvasConfig.width, height: canvasConfig.height }}
        onCancel={() => {
          if (!exporting) setExportOpen(false)
        }}
        onConfirm={(s, o) => void handleExport(s, o)}
      />
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
