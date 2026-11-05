
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  base: '/Nour-Academy-P2/',

  plugins: [tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        secretaria: fileURLToPath(new URL('./secretaria.html', import.meta.url))
      }
    }
  }
})
