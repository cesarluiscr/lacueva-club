import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const ts = Date.now()

export default defineConfig({
  base: '/lacueva-club/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name]-[hash]-${ts}.js`,
        chunkFileNames: `assets/[name]-[hash]-${ts}.js`,
        assetFileNames: `assets/[name]-[hash]-${ts}[extname]`
      }
    }
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})
