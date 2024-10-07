import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://bookipedia-90oi.onrender.com",
      "/uploads/": "https://bookipedia-90oi.onrender.com",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Splitting vendor (e.g., react) into its own chunk
          vendor: ['react', 'react-dom'],
        },
      },
    },
    // Adjust the chunk size warning limit if needed
    chunkSizeWarningLimit: 5000,  // Increase the limit (default is 500 kB)
  },
});