import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "./",
  //添加配置如下：
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }, //设置别名
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  build:{
    target: 'es2015'
  }
})
