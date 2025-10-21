import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages'

export default defineUniPages({
  pages: [{
    path: 'pages/home',
    type: 'home', // 指定为首页
  }, {
    path: 'pages/add',
    type: 'page',
  }, {
    path: 'pages/me',
    type: 'page',
  }],
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
    backgroundColor: '@tabBgColor',
    borderStyle: '@tabBorderStyle',
    color: '@tabFontColor',
    selectedColor: '@tabSelectedColor',
    list: [
      {
        pagePath: 'pages/home',

        text: '首页',
      },
      {
        pagePath: 'pages/add',

        text: '发布',
      },
      {
        pagePath: 'pages/me',
        text: '我的',

      },
    ],
  },
})
