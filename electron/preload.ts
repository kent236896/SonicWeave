/**
 * Electron Preload Script
 * Bridge for future IPC if needed (e.g., file system, FFmpeg).
 */

import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
  export: {
    showSaveDialog: (suggestedName: string) => ipcRenderer.invoke('export:showSaveDialog', suggestedName),
    createTempDir: () => ipcRenderer.invoke('export:createTempDir'),
    writeFrame: (p: { dir: string; index: number; data: ArrayBuffer }) => ipcRenderer.invoke('export:writeFrame', p),
    writeAudio: (p: { dir: string; name: string; data: ArrayBuffer }) => ipcRenderer.invoke('export:writeAudio', p),
    analyzeAudio: (p: { audioPath: string; fps: number; binCount?: number }) =>
      ipcRenderer.invoke('export:analyzeAudio', p),
    pipeStart: (p: {
      outPath: string
      fps: number
      audioPath?: string | null
      encoder: 'libx264' | 'h264_nvenc' | 'h264_qsv' | 'h264_amf'
      preset?: string
      crf?: number
    }) => ipcRenderer.invoke('export:pipeStart', p),
    pipeWrite: (p: { id: string; data: ArrayBuffer }) => ipcRenderer.invoke('export:pipeWrite', p),
    pipeFinish: (p: { id: string }) => ipcRenderer.invoke('export:pipeFinish', p),
    runFfmpeg: (p: { dir: string; fps: number; outPath: string; audioPath?: string | null }) =>
      ipcRenderer.invoke('export:runFfmpeg', p),
    cleanup: (p: { dir: string }) => ipcRenderer.invoke('export:cleanup', p),
    log: (message: string) => ipcRenderer.invoke('export:log', message),
  },
})
