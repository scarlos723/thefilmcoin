import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// vite.config.js
import svgr from 'vite-plugin-svgr'

const path = require('path')
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/components': path.resolve(__dirname, './src/components/'),
      '@/containers': path.resolve(__dirname, './src/containers/'),
      '@/pages': path.resolve(__dirname, './src/pages/'),
      '@/styles': path.resolve(__dirname, './src/styles/'),
      '@/images': path.resolve(__dirname, './src/assets/images/'),
      '@/logos': path.resolve(__dirname, './src/assets/logos/'),
      '@/icons': path.resolve(__dirname, './src/assets/icons/'),
      '@/fonts': path.resolve(__dirname, './src/assets/fonts/'),
      '@/context': path.resolve(__dirname, './src/context/'),
      '@/routes': path.resolve(__dirname, './src/routes/'),
      '@/hooks': path.resolve(__dirname, './src/hooks/'),
      '@/services': path.resolve(__dirname, './src/services/'),
      '@/utils': path.resolve(__dirname, './src/utils/')
    }
  },
  plugins: [react(), svgr()]
})
