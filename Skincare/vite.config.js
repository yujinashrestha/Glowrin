import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: {
          fontFamily: {
            dancing: ['Dancing Script', 'cursive'],
            outfit: ['Outfit', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif'],
            satisfy: ['Satisfy', 'cursive']
          }
        }
      }
    })
  ],
})