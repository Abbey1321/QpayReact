import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// vite.config.js
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/wallet': {
        target: 'http://64.227.189.27', // note: http, not https
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

