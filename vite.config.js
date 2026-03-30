import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        philosophy: resolve(__dirname, 'philosophy.html'),
        collection: resolve(__dirname, 'collection.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
})
