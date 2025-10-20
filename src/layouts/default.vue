<template>
  <view class="px-10 py-20 text-center">
    <u-tabs :list="list" :is-scroll="false" :current="current" @change="change"></u-tabs>
    <slot />
    <app-footer />
    <view class="mx-auto mt-5 text-center text-sm opacity-25">
      [Default Layout]
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref } from 'vue'

// 定义Tab项接口
interface TabItem {
  name: string
  count?: number
}

// 定义响应式数据
const list = ref<TabItem[]>([
  {
    name: '待收货'
  }, {
    name: '待付款'
  }, {
    name: '待评价',
    count: 5
  }
])

const current = ref<number>(0)

// 定义change事件回调函数
const change = (index: number) => {
  current.value = index
}
</script>
