---
home: true
title: 首页
heroImage: /images/logo.png
actions:
  - text: 快速上手
    link: /zh/guide/getting-started.html
    type: primary
  - text: 了解更多
    link: /zh/guide/
    type: secondary
features:
  - title: 快速上手
    details: 一款专为 VuePress 2 打造的全新主题，由 Vue 3 驱动，支持 Vite 。
  - title: 简洁轻量
    details: 本主题支持暗黑模式，提升了暗光环境下的文档阅读体验。
  - title: 随时随地
    details: 坚持实用至上，拒绝花里胡哨的功能堆砌，并保持 UI 的优雅简洁。
footer: MIT Licensed | Copyright © 2021-present 亖混子
---

### 🚀 快速上手

首先，你应该在你现有的某一 VuePress 2 项目中安装 Mix 主题：

```sh:no-line-numbers
yarn add -D vuepress-theme-mix@latest
```

接着，在 `docs/.vuepress/config.ts` 文件中指定它:

```ts{9}:no-line-numbers
// docs/.vuepress/config.ts
import { defineUserConfig } from 'vuepress'
import type { MixThemeConfig } from 'vuepress-theme-mix/lib/node'

export default defineUserConfig<MixThemeConfig>({
  // ……

  // 指定使用主题
  theme: 'vuepress-theme-mix',

  // ……
})
```

最后，你就可以按照文档所述进行内容创作了。:beers:
