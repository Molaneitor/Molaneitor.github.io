import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base '/' porque el sitio se despliega como página de usuario (molaneitor.github.io)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
})
