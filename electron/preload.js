"use strict";
/**
 * Electron Preload Script
 * Bridge for future IPC if needed (e.g., file system, FFmpeg).
 */
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.contextBridge.exposeInMainWorld('electronAPI', {
    platform: process.platform,
    export: {
        showSaveDialog: (suggestedName) => electron_1.ipcRenderer.invoke('export:showSaveDialog', suggestedName),
        createTempDir: () => electron_1.ipcRenderer.invoke('export:createTempDir'),
        writeFrame: (p) => electron_1.ipcRenderer.invoke('export:writeFrame', p),
        writeAudio: (p) => electron_1.ipcRenderer.invoke('export:writeAudio', p),
        analyzeAudio: (p) => electron_1.ipcRenderer.invoke('export:analyzeAudio', p),
        pipeStart: (p) => electron_1.ipcRenderer.invoke('export:pipeStart', p),
        pipeWrite: (p) => electron_1.ipcRenderer.invoke('export:pipeWrite', p),
        pipeFinish: (p) => electron_1.ipcRenderer.invoke('export:pipeFinish', p),
        runFfmpeg: (p) => electron_1.ipcRenderer.invoke('export:runFfmpeg', p),
        cleanup: (p) => electron_1.ipcRenderer.invoke('export:cleanup', p),
        log: (message) => electron_1.ipcRenderer.invoke('export:log', message),
    },
});
