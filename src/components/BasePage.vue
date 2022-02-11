<!--
 * @Author: LiuZhichao
 * @Date: 2022-01-25
 * @LastEditors: LiuZhichao
 * @LastEditTime: 2022-01-26
 * @FilePath: /haricots/src/components/BasePage.vue
 * @Description:
 * Copyright (c) 2022 by LiuZhichao, All Rights Reserved.
-->
<script setup lang="ts"></script>

<template>
  <div class="base-page"></div>
</template>

<style lang="scss" scoped>
.base-page {
  .back-btn {
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 99;
    top: 75%;
    right: 0;
    transform: translateY(-50%);
    width: 53px;
    height: 37px;
    padding-left: 10px;
    background: linear-gradient(90deg, #fe6321, #fe902e);
    border-radius: 19px 0 0 19px;
    font-size: 12px;
    font-weight: 500;
    color: #fff;

    .arrow {
      margin-right: 6px;
      width: 8px;
      height: 13px;
    }
  }
}
</style>
