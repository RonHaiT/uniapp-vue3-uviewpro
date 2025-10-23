<script setup>
import { onLoad } from '@dcloudio/uni-app'
import Navbar from '@/components/navbar/index.vue'
import MyTabbar from '@/components/tabbar/index.vue'

onLoad(async (options) => {
})
</script>

<template>
  <view class="me-page">
    <Navbar />
    <view>
      我的页面
    </view>
  </view>
  <MyTabbar :current="3" />
</template>

<style lang='scss' scoped></style>
