declare global {
  interface UserInfo {
    id: string
    name: string
    avatar: string
    email: string
    phone: string
  }

  // 登录请求参数
  interface LoginParams {
    username: string
    password: string
  }

  // 登录响应数据
  interface LoginResponse {
    token: string
    userInfo: UserInfo
  }
}

export { }
