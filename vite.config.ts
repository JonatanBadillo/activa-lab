import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/activa-lab/', // Ruta absoluta para evitar errores de navegación
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    target: 'es2015', // Máxima compatibilidad de JavaScript
    cssTarget: 'safari12', // Asegura que el CSS funcione en iPhones antiguos
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: undefined, // Evita fragmentación excesiva de archivos
      },
    },
  }
})
