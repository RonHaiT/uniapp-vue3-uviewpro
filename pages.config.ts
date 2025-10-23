import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [
    {
      path: 'pages/home/index',
      style: {
        navigationBarTitleText: '首页',
      },
    },
    {
      path: 'pages/post/index',
      style: {
        navigationBarTitleText: '发布首页',
      },
    },
    {
      path: 'pages/me/order',
      style: {
        navigationBarTitleText: '订单',
      },
    },
    {
      path: 'pages/me/index',
      style: {
        navigationBarTitleText: '我的',
      },
    },
    {
      path: 'pages/master/index',
      style: {
        navigationBarTitleText: '达人首页',
      },
    },
  ],
  globalStyle: {
    backgroundColor: '@bgColor',
    backgroundColorBottom: '@bgColorBottom',
    backgroundColorTop: '@bgColorTop',
    backgroundTextStyle: '@bgTxtStyle',
    navigationBarBackgroundColor: '#000000',
    navigationBarTextStyle: '@navTxtStyle',
    navigationBarTitleText: 'Vitesse-Uni',
    navigationStyle: 'custom',
  },
  tabBar: {
    custom: true,
    backgroundColor: '@tabBgColor',
    borderStyle: '@tabBorderStyle',
    color: '@tabFontColor',
    selectedColor: '@tabSelectedColor',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页',
      },
      {
        pagePath: 'pages/post/index',
        text: '发布',
      },
      {
        pagePath: 'pages/me/order',
        text: '订单',
      },
      {
        pagePath: 'pages/me/index',
        text: '我的',
      },
    ],
  },
})
