import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/landing-page/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        subpage1: resolve(__dirname, 'slate-pitch-deck_v1.html'),
        subpage2: resolve(__dirname, 'slate-pitch-deck_v2.html'),
      }
    }
  }
})
