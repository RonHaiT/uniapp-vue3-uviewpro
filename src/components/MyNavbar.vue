<script setup lang="ts">
import { ref } from 'vue'

// 定义Tabbar项接口
interface TabbarItem {
  iconPath: string
  selectedIconPath: string
  text: string
  count?: number
  isDot?: boolean
  customIcon: boolean
  midButton?: boolean
}

// 定义响应式数据
const list = ref<TabbarItem[]>([
  {
    iconPath: 'home',
    selectedIconPath: 'home-fill',
    text: '首页',
    customIcon: false,
  },

  {
    iconPath: 'https://ik.imagekit.io/anyup/uview-pro/logo/default.png',
    selectedIconPath: 'https://ik.imagekit.io/anyup/uview-pro/logo/default.png',
    text: '发布',
    midButton: true,
    customIcon: false,
  },

  {
    iconPath: 'account',
    selectedIconPath: 'account-fill',
    text: '我的',

    isDot: false,
    customIcon: false,
  },
])

const current = ref<number>(0)
</script>

<template>
  <view>
    <view class="u-page">
      <!-- 所有内容的容器 -->
    </view>
    <!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
    <u-tabbar v-model="current" :list="list" :mid-button="true" />
  </view>
</template>
