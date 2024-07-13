import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Mengizinkan akses dari semua alamat IP lokal
    port: 5173  // Opsional, sesuaikan port jika diperlukan
  }
})
