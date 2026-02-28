/**
 * Electron Main Process
 * Entry point for SonicWeave desktop application.
 */

import { app, BrowserWindow, dialog, ipcMain } from 'electron'
import * as path from 'path'
import * as os from 'os'
import * as fs from 'fs/promises'
import { spawn } from 'child_process'
import ffmpegPath from 'ffmpeg-static'
import FFT from 'fft.js'

const isDev = process.env.NODE_ENV !== 'production'

// Windows 下 WebGL/ANGLE 驱动崩溃（0xC0000005）比较常见。
// 但禁用硬件加速会导致部分机器 WebGL 直接不可用（特效“完全不渲染”）。
// 默认走硬件渲染；需要更稳的“软件渲染模式”时再手动开启：
//   SONICWEAVE_SOFTWARE_RENDER=1
const useSoftwareRender = process.env.SONICWEAVE_SOFTWARE_RENDER === '1'
if (process.platform === 'win32' && useSoftwareRender) {
  try {
    app.commandLine.appendSwitch('disable-features', 'Vulkan')
    app.commandLine.appendSwitch('use-angle', 'swiftshader')
  } catch {
    // ignore
  }
}

let mainWindow: BrowserWindow | null = null

type PipeSession = {
  child: ReturnType<typeof spawn>
  closed: Promise<void>
}
const pipeSessions = new Map<string, PipeSession>()

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      sandbox: false,
    },
    titleBarStyle: 'hiddenInset',
  })

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173')
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/index.html'))
  }

  // 让“白屏崩溃”可观测：渲染进程挂掉会在这里看到原因
  mainWindow.webContents.on('render-process-gone', async (_event, details) => {
    const msg = `渲染进程崩溃：reason=${details.reason} exitCode=${details.exitCode}`
    console.error(msg)
    try {
      const logPath = path.join(app.getPath('temp') || os.tmpdir(), 'sonicweave-crash.log')
      await fs.appendFile(logPath, `${new Date().toISOString()} ${msg}\n`, 'utf8')
      await dialog.showMessageBox({
        type: 'error',
        title: 'SonicWeave 崩溃',
        message: msg,
        detail: `日志已写入：${logPath}`,
      })
    } catch (e) {
      console.error('write crash log failed', e)
    }
  })

  mainWindow.webContents.on('unresponsive', () => {
    console.error('渲染进程无响应（unresponsive）')
  })

  mainWindow.on('closed', () => {
    mainWindow = null
    app.quit()
  })
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.handle('export:showSaveDialog', async (_e, suggestedName: string) => {
  const res = await dialog.showSaveDialog({
    title: '导出视频',
    defaultPath: suggestedName,
    filters: [{ name: 'MP4 Video', extensions: ['mp4'] }],
  })
  return { canceled: res.canceled, filePath: res.filePath }
})

ipcMain.handle('export:createTempDir', async () => {
  const base = path.join(app.getPath('temp') || os.tmpdir(), 'sonicweave-export-')
  const dir = await fs.mkdtemp(base)
  return { dir }
})

ipcMain.handle('export:log', async (_e, message: string) => {
  const logPath = path.join(app.getPath('temp') || os.tmpdir(), 'sonicweave-export.log')
  const line = `${new Date().toISOString()} ${String(message ?? '').slice(0, 2000)}\n`
  await fs.appendFile(logPath, line, 'utf8')
  return { ok: true, path: logPath }
})

ipcMain.handle('export:writeFrame', async (_e, p: { dir: string; index: number; data: ArrayBuffer }) => {
  const name = `frame_${String(p.index).padStart(6, '0')}.jpg`
  const out = path.join(p.dir, name)
  const buf = Buffer.from(p.data)
  await fs.writeFile(out, buf)
})

ipcMain.handle('export:writeAudio', async (_e, p: { dir: string; name: string; data: ArrayBuffer }) => {
  const safeBase = (p.name || 'audio').replace(/[\\/:*?"<>|]/g, '_')
  const ext = path.extname(safeBase) || '.audio'
  const out = path.join(p.dir, `audio_input${ext}`)
  await fs.writeFile(out, Buffer.from(p.data))
  return { path: out }
})

ipcMain.handle(
  'export:pipeStart',
  async (
    _e,
    p: {
      outPath: string
      fps: number
      audioPath?: string | null
      encoder: 'libx264' | 'h264_nvenc' | 'h264_qsv' | 'h264_amf'
      preset?: string
      crf?: number
    }
  ) => {
    if (!ffmpegPath) throw new Error('FFmpeg 不可用（ffmpeg-static 未提供可执行文件）')
    const id = `${Date.now()}-${Math.random().toString(16).slice(2)}`
    const fps = Math.max(1, Math.floor(p.fps || 30))
    const outPath = String(p.outPath || '')
    const audioPath = p.audioPath ? String(p.audioPath) : null
    // 输入：image2pipe + mjpeg（连续 JPEG 帧）
    const args: string[] = [
      '-y',
      '-hide_banner',
      '-loglevel',
      'error',
      '-framerate',
      String(fps),
      '-f',
      'image2pipe',
      '-vcodec',
      'mjpeg',
      '-i',
      'pipe:0',
    ]
    if (audioPath) {
      args.push('-i', audioPath)
    }

    // 编码：CPU / 硬编（best-effort）
    const enc = (p.encoder || 'libx264') as 'libx264' | 'h264_nvenc' | 'h264_qsv' | 'h264_amf'
    if (enc === 'libx264') {
      const preset = String(p.preset || 'veryfast')
      const crf = Math.max(14, Math.min(28, Math.floor(Number(p.crf ?? 20))))
      args.push('-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-preset', preset, '-crf', String(crf), '-threads', '0')
    } else if (enc === 'h264_nvenc') {
      // NVENC 选项不同版本差异较大，这里用保守参数
      args.push('-c:v', 'h264_nvenc', '-preset', 'p4', '-rc', 'vbr', '-cq', '19')
    } else if (enc === 'h264_qsv') {
      args.push('-c:v', 'h264_qsv', '-global_quality', '23')
    } else if (enc === 'h264_amf') {
      args.push('-c:v', 'h264_amf', '-quality', 'speed')
    }

    if (audioPath) {
      args.push('-c:a', 'aac', '-b:a', '192k', '-shortest')
    }

    args.push(outPath)

    const child = spawn(ffmpegPath as string, args, { windowsHide: true, stdio: ['pipe', 'ignore', 'pipe'] })
    let stderr = ''
    child.stderr.on('data', (d) => {
      stderr += String(d)
      if (stderr.length > 200000) stderr = stderr.slice(-200000)
    })

    const closed = new Promise<void>((resolve, reject) => {
      child.on('error', (err) => reject(err))
      child.on('close', (code) => {
        pipeSessions.delete(id)
        if (code === 0) resolve()
        else reject(new Error(`FFmpeg 失败（code=${code}）\n${stderr}`))
      })
    })

    pipeSessions.set(id, { child, closed })
    return { id }
  }
)

ipcMain.handle('export:pipeWrite', async (_e, p: { id: string; data: ArrayBuffer }) => {
  const s = pipeSessions.get(String(p.id || ''))
  if (!s) throw new Error('FFmpeg pipe 会话不存在（可能已结束）')
  const buf = Buffer.from(p.data)
  const stdin = s.child.stdin
  if (!stdin) throw new Error('FFmpeg stdin 不可用')
  const ok = stdin.write(buf)
  if (!ok) {
    await new Promise<void>((resolve) => stdin.once('drain', () => resolve()))
  }
})

ipcMain.handle('export:pipeFinish', async (_e, p: { id: string }) => {
  const s = pipeSessions.get(String(p.id || ''))
  if (!s) return
  try {
    const stdin = s.child.stdin
    if (stdin) stdin.end()
  } catch {
    // ignore
  }
  await s.closed
})

ipcMain.handle(
  'export:analyzeAudio',
  async (_e, p: { audioPath: string; fps: number; binCount?: number }) => {
    if (!ffmpegPath) throw new Error('FFmpeg 不可用（ffmpeg-static 未提供可执行文件）')
    const audioPath = String(p.audioPath || '')
    const fps = Math.max(1, Math.floor(p.fps || 30))
    const binCount = Math.max(32, Math.min(1024, Math.floor(p.binCount || 256)))

    const sampleRate = 44100
    const fftSize = 2048
    const hop = Math.max(1, Math.round(sampleRate / fps))

    const fft = new FFT(fftSize)
    const win = new Float32Array(fftSize)
    const twoPi = Math.PI * 2
    for (let i = 0; i < fftSize; i++) win[i] = 0.5 - 0.5 * Math.cos((twoPi * i) / Math.max(1, fftSize - 1))
    const complexOut = fft.createComplexArray()
    const scratch = new Float32Array(fftSize)

    const ring = new Float32Array(fftSize)
    let ringPos = 0
    let filled = 0
    let sampleIndex = 0
    let nextFrameAt = fftSize

    const lows: number[] = []
    const mids: number[] = []
    const highs: number[] = []
    const energies: number[] = []
    const binsAll: number[] = [] // store uint8 sequentially

    let peak = 1e-6

    const nyquist = sampleRate / 2
    const binWidthHz = nyquist / (fftSize / 2)
    const lowEnd = Math.floor(250 / binWidthHz)
    const midEnd = Math.floor(4000 / binWidthHz)

    const runFFTFrame = () => {
      // ring -> scratch (time order oldest..newest) * window
      for (let i = 0; i < fftSize; i++) {
        const ri = (ringPos + i) % fftSize
        scratch[i] = ring[ri] * win[i]
      }
      fft.realTransform(complexOut, scratch)
      fft.completeSpectrum(complexOut)

      const maxBin = Math.min(binCount, Math.floor(fftSize / 2))
      let frameMax = 1e-9
      // compute magnitudes and basic bands
      let lowSum = 0
      let midSum = 0
      let highSum = 0
      let lowN = 0
      let midN = 0
      let highN = 0

      const mags = new Float32Array(maxBin)
      for (let i = 0; i < maxBin; i++) {
        const re = complexOut[2 * i] ?? 0
        const im = complexOut[2 * i + 1] ?? 0
        const mag = Math.sqrt(re * re + im * im)
        mags[i] = mag
        if (mag > frameMax) frameMax = mag
        if (i < lowEnd) {
          lowSum += mag
          lowN++
        } else if (i < midEnd) {
          midSum += mag
          midN++
        } else {
          highSum += mag
          highN++
        }
      }

      peak = Math.max(peak * 0.995, frameMax)
      const inv = 1 / peak

      const low = lowN ? Math.min(1, Math.sqrt((lowSum / lowN) * inv)) : 0
      const mid = midN ? Math.min(1, Math.sqrt((midSum / midN) * inv)) : 0
      const high = highN ? Math.min(1, Math.sqrt((highSum / highN) * inv)) : 0
      const energy = Math.min(1, (low + mid + high) / 3)

      lows.push(low)
      mids.push(mid)
      highs.push(high)
      energies.push(energy)

      for (let i = 0; i < maxBin; i++) {
        const v = Math.min(1, Math.sqrt(mags[i] * inv))
        binsAll.push(Math.max(0, Math.min(255, Math.round(v * 255))))
      }
    }

    const args = [
      '-hide_banner',
      '-loglevel',
      'error',
      '-i',
      audioPath,
      '-vn',
      '-ac',
      '1',
      '-ar',
      String(sampleRate),
      '-f',
      's16le',
      'pipe:1',
    ]

    await new Promise<void>((resolve, reject) => {
      const child = spawn(ffmpegPath as string, args, { windowsHide: true })
      let stderr = ''

      child.stderr.on('data', (d) => {
        stderr += String(d)
      })

      child.stdout.on('data', (chunk: Buffer) => {
        // chunk is bytes, interpret as int16 little endian
        const bytes = chunk.length - (chunk.length % 2)
        for (let off = 0; off < bytes; off += 2) {
          const s16 = chunk.readInt16LE(off)
          const s = s16 / 32768
          ring[ringPos] = s
          ringPos = (ringPos + 1) % fftSize
          filled = Math.min(fftSize, filled + 1)
          sampleIndex++

          if (filled >= fftSize && sampleIndex >= nextFrameAt) {
            runFFTFrame()
            nextFrameAt += hop
          }
        }
      })

      child.on('error', (err) => reject(err))
      child.on('close', (code) => {
        if (code === 0) resolve()
        else reject(new Error(`FFmpeg 解码失败（code=${code}）\n${stderr}`))
      })
    })

    const frames = lows.length
    const headerBytes = 16
    const floatsBytes = frames * 4 * 4
    const binsBytes = frames * binCount
    const totalBytes = headerBytes + floatsBytes + binsBytes
    const out = Buffer.allocUnsafe(totalBytes)

    out.writeUInt32LE(frames, 0)
    out.writeUInt32LE(binCount, 4)
    out.writeFloatLE(fps, 8)
    out.writeFloatLE(0, 12)

    let o = headerBytes
    for (let i = 0; i < frames; i++) {
      out.writeFloatLE(lows[i] ?? 0, o)
      out.writeFloatLE(mids[i] ?? 0, o + 4)
      out.writeFloatLE(highs[i] ?? 0, o + 8)
      out.writeFloatLE(energies[i] ?? 0, o + 12)
      o += 16
    }

    // binsAll is frame-major and already uint8 values
    const maxBin = binCount
    for (let i = 0; i < frames * maxBin; i++) {
      out[o + i] = binsAll[i] ?? 0
    }

    // Return ArrayBuffer slice (avoid offset issues)
    const ab = out.buffer.slice(out.byteOffset, out.byteOffset + out.byteLength)
    return { frames, binCount, fps, data: ab }
  }
)

ipcMain.handle(
  'export:runFfmpeg',
  async (_e, p: { dir: string; fps: number; outPath: string; audioPath?: string | null }) => {
    if (!ffmpegPath) throw new Error('FFmpeg 不可用（ffmpeg-static 未提供可执行文件）')
    const fps = Math.max(1, Math.floor(p.fps || 60))
    const framesGlob = path.join(p.dir, 'frame_%06d.jpg')
    const args: string[] = ['-y', '-framerate', String(fps), '-start_number', '0', '-i', framesGlob]
    if (p.audioPath) {
      args.push('-i', p.audioPath, '-c:a', 'aac', '-b:a', '192k', '-shortest')
    }
    args.push('-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-preset', 'medium', '-crf', '18', p.outPath)

    await new Promise<void>((resolve, reject) => {
      const child = spawn(ffmpegPath as string, args, { windowsHide: true })
      let stderr = ''
      child.stderr.on('data', (d) => {
        stderr += String(d)
      })
      child.on('error', (err) => reject(err))
      child.on('close', (code) => {
        if (code === 0) resolve()
        else reject(new Error(`FFmpeg 失败（code=${code}）\n${stderr}`))
      })
    })
  }
)

ipcMain.handle('export:cleanup', async (_e, p: { dir: string }) => {
  if (!p?.dir) return
  await fs.rm(p.dir, { recursive: true, force: true })
})
