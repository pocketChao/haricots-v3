/*
 * @Author: LiuZhichao
 * @Date: 2022-01-25 16:33:54
 * @LastEditors: LiuZhichao
 * @LastEditTime: 2022-01-25
 * @FilePath: /haricots/src/store/index.ts
 * @Description: pinia store
 * Copyright (c) 2022 by LiuZhichao, All Rights Reserved.
 */
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      name: 'haricots'
    }
  },
  actions: {
    changeName(name: string) {
      this.name = name
    }
  }
})
