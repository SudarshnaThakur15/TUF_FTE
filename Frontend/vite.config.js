import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {

        target: "https://tuf-os526pj7j-sudarshnas-projects.vercel.app",

       
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
