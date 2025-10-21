<script setup lang="ts">
import { useSystemInfo } from './composables/useSystemInfo'
// 获取系统信息管理
const { initSystemInfo } = useSystemInfo()

onLaunch(() => {
  console.warn('App Launch')
  // 初始化系统信息
  initSystemInfo()
})

onShow(() => {
  console.warn('App Show')
})

onHide(() => {
  console.warn('App Hide')
})
</script>

<style lang="scss">
// npm 方式
@import "uview-pro/index.scss";
</style>
