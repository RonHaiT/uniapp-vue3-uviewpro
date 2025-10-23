<script setup>
import { onLoad } from '@dcloudio/uni-app'
import { ref, watch } from 'vue'

const props = defineProps({
  current: {
    type: Number,
    default: 0,
  },
})
const selectId = ref(0)
const list = ref([
  {
    pagePath: '/pages/home/index',
    text: '首页',
    iconPath: '/static/home.png',
    selectedIconPath: '/static/home-active.png',
    customIcon: false,
  },
  {
    pagePath: '/pages/post/index',
    text: '发布',
    iconPath: '/static/post.png',
    selectedIconPath: '/static/post-active.png',
    customIcon: false,
  },
  {
    pagePath: '/pages/me/order',
    text: '订单',
    iconPath: '/static/order.png',
    selectedIconPath: '/static/order-active.png',
    customIcon: false,

  },
  {
    pagePath: '/pages/me/index',
    text: '我的',
    iconPath: '/static/user.png',
    selectedIconPath: '/static/user-active.png',
    customIcon: false,
  },
])
function handleChange(index) {
  uni.switchTab({
    url: list.value[index].pagePath,
  })
}
watch(() => props.current, (newVal) => {
  console.log('watch', newVal)

  selectId.value = newVal
}, {
  immediate: true,
  deep: true,
})
onLoad(async (options) => {
})
</script>selectId

<template>
  <u-tabbar
    v-model="selectId" inactive-color="#bfbfbf" active-color="#E91E63" :border-top="false" :hide-tab-bar="false"
    :list="list" @change="handleChange"
  />
</template>

<style lang='scss' scoped>
.my-tabbar {
    width: 100%;
    background-color: pink;
    position: fixed;
    bottom: 0;
    left: 0;
}
</style>
