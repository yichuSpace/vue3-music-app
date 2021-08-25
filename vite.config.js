import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint' // 引入vite-plugin-vue
let path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8000, // 配置启用的端口号
  },
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@api': path.join(__dirname, './src/api'),
    '@utils': path.join(__dirname, './src/utils'),
    '@assets/': path.join(__dirname, './src/assets'),
    '@views': path.join(__dirname, './src/views'),
    '@components': path.join(__dirname, './src/components'),
  },
  css: {
    preprocessorOptions: {
      // 引入公用的样式
      scss: {
        additionalData: `@import "@/styles/variable.scss";@import "@/styles/mixin.scss";`,
      },
    },
  },
})
