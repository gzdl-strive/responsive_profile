import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  // Development Server Configuration(开发服务配置)
  server: {
    port: 8889,
    open: true
  },
  resolve: {
    alias: {
      "@a": path.resolve(__dirname, "./src/assets"),
      "@d": path.resolve(__dirname, "./src/data"),
      "@s": path.resolve(__dirname, "./src/scripts"),
      "@u": path.resolve(__dirname, "./src/utils")
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