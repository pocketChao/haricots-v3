/*
 * @Author: LiuZhichao
 * @Date: 2022-01-23 10:04:21
 * @LastEditors: LiuZhichao
 * @LastEditTime: 2022-01-24 15:51:29
 * @FilePath: /haricots/vite.config.ts
 * @Description: 
 * Copyright (c) 2022 by LiuZhichao, All Rights Reserved. 
 */
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { resolve } from "path"
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src")
    }
  },
  server: {
    port: 8080,
    open: true
  }
})
