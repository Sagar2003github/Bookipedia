import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "http://localhost:5000",
      "/uploads/": "http://localhost:5000",
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