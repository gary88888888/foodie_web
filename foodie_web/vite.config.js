import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0',
    // port: 8080,      
    open: true,
    // proxy: {
    //   "/neimenmenhuan": {  //服务器接口路径地址，根据路径设置
    //     target: "http://114.32.9.225:8080",  //你的服务器地址
    //     changeOrigin: true,  // 允许跨域
    //     rewrite: (path) => path.replace(/^\/neimenmenhuan/), // 重写路径把路径变成空字符，（我理解的意思是：baseURL: '/neimenmenhuan/' 配置了，子接口 url: 'neimenmenhuan/settings/qx/user' 也可以正常访问，但是理解的很粗略，希望得到一个透彻的答案；
    //   },
    // },
  }
})
