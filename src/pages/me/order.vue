<script setup>
import { ref } from 'vue'
import Navbar from '@/components/navbar/index.vue'
import MyTabbar from '@/components/tabbar/index.vue'

const currentTab = ref(3)
</script>

<template>
  <view class="orders-page">
    <Navbar />
    <u-sticky bg-color="transparent">
      <view class="orders-header">
        <view class="tab" :class="{ active: currentTab === 0 }" @click="currentTab = 0">
          我发布的
        </view>
        <view class="tab" :class="{ active: currentTab === 1 }" @click="currentTab = 1">
          我接的
        </view>
      </view>
    </u-sticky>
    <MyTabbar :current="2" />
  </view>
</template>
