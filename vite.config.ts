import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/frontcloudcamp-test-assignment/", // For local development only. Use "build-gh-pages" for gh-pages deployment.
})
