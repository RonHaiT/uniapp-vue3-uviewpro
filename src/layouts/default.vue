<script setup lang="ts">
import { useSystemInfo } from '../composables/useSystemInfo'

const { systemInfo } = useSystemInfo()
</script>

<template>
  <view class="bg" :style="{ height: `${systemInfo.windowHeight}px` }">
    <view class="status" :style="{ height: `${systemInfo.statusBarHeight}px` }">
      {{ systemInfo.statusBarHeight }}
    </view>
    <view class="navbar" :style="{ height: `${systemInfo.navigationBarHeight}px` }">
      {{ systemInfo.navigationBarHeight }}
    </view>
    <slot />
    <MyNavbar />
  </view>
</template>

<style>
.bg{
  width: 100%;
}
.status {
  width: 100%;
  background-color: #fcfcfc;
  padding: 0 30rpx;
  box-sizing: border-box;
}

.navbar {
  width: 100%;
  background-color: red;
  color: #fff;
  padding: 0 30rpx;
  box-sizing: border-box;
}
</style>
