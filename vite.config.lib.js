import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/cipsum.ts'),
      name: 'index',
      formats: ['es'],
      fileName: 'index'
    },
  },
  plugins: [dts()]
})