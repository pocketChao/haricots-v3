/*
 * @Author: LiuZhichao
 * @Date: 2022-01-23
 * @LastEditors: LiuZhichao
 * @LastEditTime: 2022-01-25
 * @FilePath: /haricots/src/main.ts
 * @Description:
 * Copyright (c) 2022 by LiuZhichao, All Rights Reserved.
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
