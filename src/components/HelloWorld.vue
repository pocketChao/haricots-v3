<!--
 * @Author: LiuZhichao
 * @Date: 2022-01-25 09:55:49
 * @LastEditors: LiuZhichao
 * @LastEditTime: 2022-01-26
 * @FilePath: /haricots/src/components/HelloWorld.vue
 * @Description:
 * Copyright (c) 2022 by LiuZhichao, All Rights Reserved.
-->
<script setup lang="ts">
import { ref } from 'vue'
import useHome from '@/composables/useHome'
import { storeToRefs } from 'pinia'
import { useMainStore } from '@/store'

defineProps<{ msg: string }>()

const num = useHome()
console.log(num.value)
const count = ref(0)
const store = useMainStore()
console.log('store.name before', store.name)
const { name } = storeToRefs(store)
name.value = '你好'
console.log('after name', name.value, store.name)
store.changeName('呵呵')
console.log()
store.$reset()
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    See
    <code>README.md</code> for more information.
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"
      >Vite Docs</a
    >
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style lang="scss" scoped>
a {
  color: #42b983;
}

label {
  margin: 0;
  font-weight: bold;
}

.container {
  .sub {
    font-size: 20;
    color: red;
  }
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

<style lang="scss" module>
.hello-box {
  padding: 10px;
  background: red;
}
</style>
