# SonicWeave Architecture

## Overview

Production desktop audio visual editor. Electron, React, Three.js, Web Audio API.

## Folder Structure

```
src/
├── core/                      # Engine
│   ├── AudioEngine.ts         # Mic + file source, FFT, playback
│   ├── VisualEngine.ts        # Three.js scene, bloom
│   ├── ParameterMappingEngine.ts  # Bands → MappedParams (sensitivity, min/max)
│   ├── EffectManager.ts       # Single active effect, dispose on switch
│   └── types.ts               # AudioData, MappedParams
├── layers/
│   ├── ImageLayer.ts          # PNG/JPG, centered plane, scale/rotation
│   └── EffectLayer.ts         # (legacy - EffectManager used instead)
├── effects/                   # IEffect implementations
│   ├── types.ts               # IEffect
│   ├── FerrofluidEffect.ts
│   ├── ParticleBloomEffect.ts
│   ├── WaveTunnelEffect.ts
│   └── CircularSpectrumEffect.ts
├── state/
│   └── EditorState.tsx        # React context (no Redux)
├── components/
│   ├── Layout/
│   │   ├── TopBar.tsx
│   │   ├── LeftPanel.tsx      # Audio, Images, Effects
│   │   └── RightPanel.tsx     # Effect params, Audio mapping
│   └── Editor/
│       └── EditorCanvas.tsx
└── styles/
    └── layout.css
```

## UI Layout

- **Top Bar**: Title, Import Audio, Import Image, Export
- **Left Panel**: Audio (play/pause, progress), Image assets, Effects library
- **Center**: Three.js canvas (image + effect)
- **Right Panel**: Tabs – Effect Parameters, Audio Mapping

## Data Flow

```
Audio (file/mic) → AudioEngine → FFT bands
                                      ↓
            ParameterMappingEngine (sensitivity, min/max, smoothing)
                                      ↓
            MappedParams (low, mid, high, energy)
                                      ↓
            EffectManager.update(audioData)
                                      ↓
            VisualEngine.render()
```

## Effect System

- One active effect at a time
- `IEffect`: init(scene), update(audioData, dt), setParams(params), dispose()
- EffectManager disposes previous effect before setting new one

## Editor State (Context)

- audioFile, audioName, isPlaying
- images[], activeImageId
- activeEffectId, effectParams
- audioMapping (band, sensitivity, smoothing, min, max, enabled)
