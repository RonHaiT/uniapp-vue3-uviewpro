import type { RequestConfig, RequestInterceptor, RequestMeta, RequestOptions } from 'uview-pro'
import { useUserStore } from '@/stores/useUser'
import config from './config'
// 全局请求配置
export const httpRequestConfig: RequestConfig = {
  ...config,
}

// 全局请求/响应拦截器
export const httpInterceptor: RequestInterceptor = {
  request: (config: RequestOptions) => {
    const meta: RequestMeta = config.meta || {}
    if (meta.loading) {
      // 显示loading
    }
    const userStore = useUserStore()
    if (userStore.token) {
      config.header.Authorization = `Bearer ${userStore.token}`
    }
    return config
  },
  response: (response: any) => {
    const meta: RequestMeta = response.config?.meta || {}
    if (meta.loading) {
      // 隐藏loading
    }

    // 根据业务处理错误、例如登录失效等处理接口返回错误码
    if (response.data.code !== 200) {
      if (meta.toast) {
        // 可以弹出错误toast
      }
      throw new Error('接口返回错误码，根据业务处理，可以弹出toast')
    }
    return response.data
  },
}
