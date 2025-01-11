import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    watch: {
      usePolling: true,
    },
    host: true, // Here
    strictPort: true,
    port: 8081,
  },

  build: {
    outDir: './dist',
    emptyOutDir: true,
    sourcemap: true,
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
})
