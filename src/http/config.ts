function setConfig() {
  return {
    baseUrl: 'https://api.example.com',
    meta: {
      toast: true, // 全局开启错误toast，默认为false关闭
      loading: true, // 全局开启loading，默认为false关闭
      originalData: true, // 是否在拦截器中返回服务端的原始数据，默认为true返回的是原始数据
    },
    header: {
      'content-type': 'application/json',
    },
  }
}
const config = setConfig()
export default config
