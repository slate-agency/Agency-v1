import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/landing-page/',
  // That's it. No rollupOptions needed.
  // index.html at root = Vite entry point (automatic)
  // public/ files = copied as-is to dist (automatic)
})
