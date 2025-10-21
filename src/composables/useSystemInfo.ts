// src/composables/useSystemInfo.ts
import { reactive } from 'vue'

// 全局状态
const systemInfo = reactive({
  statusBarHeight: 0, // 状态栏高度
  navigationBarHeight: 0, // 导航栏高度（默认44px）
  topBarHeight: 0, // 顶部总高度（状态栏 + 导航栏）
  windowHeight: 0, // 窗口高度
  windowWidth: 0, // 窗口宽度
  safeAreaInsets: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
})

export function useSystemInfo() {
  // 获取系统信息
  const getSystemInfo = async () => {
    try {
      const info = await uni.getWindowInfo()
      systemInfo.statusBarHeight = info.statusBarHeight
      // 视口高度
      systemInfo.windowHeight = info.windowHeight
      systemInfo.windowWidth = info.windowWidth
      // 小程序获取胶囊按钮信息
      const custom = uni.getMenuButtonBoundingClientRect()

      if (custom) {
        systemInfo.navigationBarHeight
          = custom.height + (custom.top - systemInfo.statusBarHeight) * 2
      }
      else {
        systemInfo.navigationBarHeight = 44 // 默认导航栏高度
      }
      console.warn('🚀 ~ getSystemInfo ~ systemInfo:', systemInfo)
    }
    catch (error) {
      console.error('获取系统信息失败:', error)
    }
  }

  // 初始化系统信息
  const initSystemInfo = () => {
    getSystemInfo()
  }

  return {
    systemInfo,
    getSystemInfo,
    initSystemInfo,
  }
}
