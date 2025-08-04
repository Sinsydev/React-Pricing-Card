 import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/React-Pricing-Card/', // 👈 MUST match GitHub repo name exactly
  plugins: [tailwindcss(), react()],
})

