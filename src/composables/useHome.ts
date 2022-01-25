/*
 * @Author: LiuZhichao
 * @Date: 2022-01-25 09:55:49
 * @LastEditors: LiuZhichao
 * @LastEditTime: 2022-01-25 14:02:05
 * @FilePath: /haricots/src/composables/useHome.ts
 * @Description:
 * Copyright (c) 2022 by LiuZhichao, All Rights Reserved.
 */
import { ref } from 'vue'

export default function usHome() {
  const num = ref(1)
  return num
}
