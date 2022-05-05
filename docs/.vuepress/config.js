module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'Just Mock',
  description: '拦截浏览器请求，轻松模拟后端响应',

  // 主题和它的配置
  theme: 'vuepress-theme-mix',
  // base: '/fuck-mock-docs/',
  // dest: 'dist',
  themeConfig: {
    logo: '/images/logo.png',
    title: 'Just Mock', // for navbar
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '指南',
        children: []
      },
      {
        text: 'VuePress',
        link: 'https://v2.vuepress.vuejs.org/zh/',
      },
    ],
  },
  head: [
    ['script', { src: 'https://www.googletagmanager.com/gtag/js?id=G-SLY0RSGGV8', async: true }],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-SLY0RSGGV8');",
    ],
  ],
  locales: {},
};
