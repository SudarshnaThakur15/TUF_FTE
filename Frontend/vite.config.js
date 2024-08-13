import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
<<<<<<< HEAD
        target: "http://localhost:5500",
=======
        target: "https://banner-tuf.onrender.com",
>>>>>>> f7cb5718e35d352dd05ba90b82444da49b3ebd6a
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
