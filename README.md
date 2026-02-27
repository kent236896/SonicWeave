# SonicWeave

Desktop audio-reactive visual effects editor. Tech: Electron, React, Three.js, Web Audio API.

## Run

```bash
npm install
npm run dev
```

Requires mic access for audio-reactive visuals. The demo template will animate even without mic (using fallback values).

## Build

```bash
npm run build
npm run electron
```

## Project Structure

See [ARCHITECTURE.md](./ARCHITECTURE.md) for full architecture notes.

## Demo Template

- **Low freq** → particle size
- **Mid freq** → rotation
- **High freq** → color shift (blue → magenta)
- Bloom postprocessing enabled
