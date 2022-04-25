export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "首页",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "title": "首页",
    "heroImage": "/images/logo.png",
    "actions": [
      {
        "text": "快速上手",
        "link": "/zh/guide/getting-started.html",
        "type": "primary"
      },
      {
        "text": "主题简介",
        "link": "/zh/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "为 2 而来",
        "details": "一款专为 VuePress 2 打造的全新主题，由 Vue 3 驱动，支持 Vite 。"
      },
      {
        "title": "优雅简洁",
        "details": "坚持实用至上，拒绝花里胡哨的功能堆砌，并保持 UI 的优雅简洁。"
      },
      {
        "title": "暗黑模式",
        "details": "本主题支持暗黑模式，提升了暗光环境下的文档阅读体验。"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021-present 亖混子"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 3,
      "title": "🚀 快速上手",
      "slug": "🚀-快速上手",
      "children": []
    }
  ],
  "git": {},
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
