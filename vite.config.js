import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    port: 8889,
    open: true
  },
  resolve: {
    alias: {
      "@s": path.resolve(__dirname, './src/scripts')
    }
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]"
      }
    }
  }
});