/// <reference types="vite/client" />

declare global {
  interface Window {
    electronAPI?: {
      platform: string
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
  }
}

export {}
