import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // 用户信息
  const userInfo = ref<UserInfo>({
    id: '',
    name: '',
    avatar: '',
    email: '',
    phone: '',
  })

  // 用户token
  const token = ref<string>('')

  // 是否已登录
  const isLoggedIn = ref<boolean>(false)

  // 设置用户信息
  const setUserInfo = (info: Partial<UserInfo>) => {
    Object.assign(userInfo.value, info)
  }

  // 设置token
  const setToken = (newToken: string) => {
    token.value = newToken
    isLoggedIn.value = !!newToken
  }

  // 清除用户信息
  const clearUserInfo = () => {
    userInfo.value = {
      id: '',
      name: '',
      avatar: '',
      email: '',
      phone: '',
    }
    token.value = ''
    isLoggedIn.value = false
  }

  // 登录
  const login = (loginData: { token: string, userInfo: UserInfo }) => {
    setToken(loginData.token)
    setUserInfo(loginData.userInfo)
  }

  // 登出
  const logout = () => {
    clearUserInfo()
  }

  return {
    userInfo,
    token,
    isLoggedIn,
    setUserInfo,
    setToken,
    clearUserInfo,
    login,
    logout,
  }
}, {
  persist: {
    key: 'user-store', // 存储的 key
    storage: {
      getItem: (key: string) => uni.getStorageSync(key),
      setItem: (key: string, value: string) => uni.setStorageSync(key, value),
    },
    // 可以选择性持久化某些字段
    // paths: ['userInfo', 'token'] // 只持久化这些字段
  },
})
