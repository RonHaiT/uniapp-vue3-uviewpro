<script setup lang="ts">
import { ref } from 'vue'

definePage({
  type: 'home',
})

// 定义轮播图项接口
interface SwiperItem {
  image: string
  title: string
}

// 定义响应式数据
const list = ref<SwiperItem[]>([
  {
    image: 'https://iph.href.lu/300x200',
    title: '昨夜星辰昨夜风，画楼西畔桂堂东',
  },
  {
    image: 'https://iph.href.lu/300x200',
    title: '身无彩凤双飞翼，心有灵犀一点通',
  },
  {
    image: 'https://iph.href.lu/300x200',
    title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳',
  },
])
</script>

<template>
  <view>
    <view class="wrap">
      <u-swiper :list="list" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
.wrap {
  padding: 30rpx;
}
</style>
