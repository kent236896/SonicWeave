"use strict";
/**
 * Electron Preload Script
 * Bridge for future IPC if needed (e.g., file system, FFmpeg).
 */
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('electronAPI', {
    platform: process.platform,
});
