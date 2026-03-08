import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/', // set VITE_BASE_PATH=/your-repo/ when deploying to GitHub Pages under a repo subpath
  logLevel: 'error', // Suppress warnings, only show errors
  plugins: [
    react(),
  ]
});