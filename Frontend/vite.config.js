import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://tuf-axy1nmlw7-sudarshnas-projects.vercel.app',
        changeOrigin: true,
        secure: true,
        onError(err, req, res) {
          console.error('Proxy Error:', err);
        },
      },
    },
  },
  
});
