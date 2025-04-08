import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Explicit base path
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    manifest: true // Generates asset manifest
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000', // Local backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});