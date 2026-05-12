import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// For GitHub Pages: if deploying to https://USER.github.io/REPO/,
// set base to '/REPO/'. Using './' makes it work from any subdir.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 4096,
  },
})
