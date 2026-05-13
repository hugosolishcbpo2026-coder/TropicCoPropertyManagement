import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// IMPORTANT: For GitHub Pages, set `base` to "/<your-repo-name>/"
// Example: base: '/tropic-co-property-management/'
// If deploying to a custom domain or user/organization root site, use '/'
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          motion: ['framer-motion', 'gsap', 'lenis'],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
})
