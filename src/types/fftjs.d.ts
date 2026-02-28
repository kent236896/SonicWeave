declare module 'fft.js' {
  export default class FFT {
    constructor(size: number)
    createComplexArray(): number[]
    realTransform(out: number[], data: number[] | Float32Array | Float64Array): void
    completeSpectrum(out: number[]): void
  }
}

