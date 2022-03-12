import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from "path";

const _resolve = (dir) => path.resolve(__dirname, dir);

export default defineConfig({
  resolve: {
    alias: {
      "@": _resolve("./src"),
      "@components": _resolve("./src/components"),
      "@services": _resolve("./src/services"),
      "@views": _resolve("./src/services"),
      "@assets": _resolve("./src/assets"),
      "@tools": _resolve("./src/tools"),
    },
  },
  server: {
    port: 3000,
    open: true,
    proxy: {
      "/dev": "http://127.0.0.1:3000/",
      "/api": {
        target: "http://127.0.0.1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  clearScreen: false,
  plugins: [vue()]
})

