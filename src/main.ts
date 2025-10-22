import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'
import uViewPro, { httpPlugin } from 'uview-pro'
import { createSSRApp } from 'vue'
import { httpInterceptor, httpRequestConfig } from '@/http/request'
import App from './App.vue'
import 'uno.css'

export function createApp() {
  const app = createSSRApp(App)
  const pinia = createPinia()
  pinia.use(createPersistedState())
  app.use(pinia)
  app.use(uViewPro)
  // 注册http插件
  app.use(httpPlugin, {
    interceptor: httpInterceptor,
    requestConfig: httpRequestConfig,
  })

  return {
    app,
  }
}
