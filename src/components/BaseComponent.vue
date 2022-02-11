<!--
 * @Author: LiuZhichao
 * @Date: 2022-01-27
 * @LastEditors: LiuZhichao
 * @LastEditTime: 2022-01-27
 * @FilePath: /haricots/src/components/BaseComponent.vue
 * @Description:
 * Copyright (c) 2022 by LiuZhichao, All Rights Reserved.
-->
<template>
  <div @click="onClick"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const a = ref(1)
interface Props {
  foo?: string
  bar?: string[]
}
const props = withDefaults(defineProps<Props>(), {
  foo: 'hello',
  bar: () => ['one', 'two']
})
console.log(a)
console.log(props.bar)

const emit = defineEmits<{
  (e_name: string, e_id: number): void
}>()

const onClick = () => {
  emit('emitName', 123)
}
</script>

<style lang="scss" scoped></style>
