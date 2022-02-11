/*
 * @Author: LiuZhichao
 * @Date: 2022-01-23 10:04:21
 * @LastEditors: LiuZhichao
 * @LastEditTime: 2022-01-28
 * @FilePath: /haricots/vite.config.ts
 * @Description:
 * Copyright (c) 2022 by LiuZhichao, All Rights Reserved.
 */

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    styleImport({
      resolves: [VantResolve()]
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 8080,
    open: true
  }
})
