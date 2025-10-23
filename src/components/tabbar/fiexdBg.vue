<script setup>
import { onLoad } from '@dcloudio/uni-app'

onLoad(async (options) => {
})
</script>

<template>
  <view class="fiexd-bg">
    <view class="bg" />
    <view class="content">
      <slot />
    </view>
  </view>
</template>

<style lang='scss'></style>
