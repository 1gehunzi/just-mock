import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/mycode/fuck-mock-docs/node_modules/vuepress-theme-mix/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("D:/mycode/fuck-mock-docs/node_modules/vuepress-theme-mix/lib/client/layouts/Layout.vue")),
}
