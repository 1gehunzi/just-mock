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
        text: '使用指南',
        link: '/guide/',
      },
      {
        text: '赞赏',
        link: '/more',
      },
      {
        text: '插件下载',
        link: 'https://video-1251432287.cos.ap-beijing.myqcloud.com/Just%20Mock-v1.0.1.zip',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          type: 'group',
          text: '使用指南',
          link: '',
          children: ['', 'getting-started', 'features', 'path-rules', 'plan'],
        },
      ],
    },
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
