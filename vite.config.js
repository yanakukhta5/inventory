import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

export default defineConfig({
define: {
    global: {
      base: "red"
    }
},
plugins: [vue()],
resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: { 
         additionalData: '@import "@/styles/variables.scss";'
     },
    },
  },
})

