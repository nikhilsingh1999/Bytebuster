import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

import path from "path"
// import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true }), // Check TypeScript types during builds
    // tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "/src"),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
