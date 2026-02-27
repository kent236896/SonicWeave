/**
 * Electron Preload Script
 * Bridge for future IPC if needed (e.g., file system, FFmpeg).
 */

import { contextBridge } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  platform: process.platform,
})
