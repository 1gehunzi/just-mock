# 介绍

Just Mock 是一个专门面向 Web 项目的 Mock 工具。你可以使用 Just Mock 来模拟后端响应（用于前后端联调、QA 测试、PM 验收、线上问题还原等场景），仅需安装浏览器插件即可满足 90% 的 Mock 需要。

Just Mock 诞生的初衷是为了解决前端 `造数` 老大难问题。

<!-- ## Features

- 项目管理
- 规则管理
- 日志管理 -->

## 它是如何工作的？

Just Mock 的工作原理是操作浏览器的 Ajax Hooks，原生支持 XHR 和 fetch。通过捕获 Ajax 的 Request 和 Response 两个钩子实现数据 Mock。

Request Hook: 让 Ajax 请求的 Path 、 Method 和预设规则的 Path 、Method 做对比。若符合规则拦截请求直接返回规则中的响应数据。若不符合继续请求后端接口，同时将请求日志输出在面板上方便使用者配置规则。

Response Hook: 获取后端接口的真实响应数据方便用户通过已有接口做数据改造快速 Mock。

Ajax Hook 基于开源代码库 [ajax-hook](https://github.com/wendux/ajax-hook) 和 [fetch-interceptor](https://github.com/itsfadnis/fetch-interceptor) 实现。规则匹配主要基于 [path-to-regexp](https://github.com/pillarjs/path-to-regexp) 实现。

## 为什么不是 ...?

### Mock.js

http://mockjs.com/

### Apifox

https://www.apifox.cn/

### ajax-interceptor

https://github.com/YGYOOO/ajax-interceptor

### yapi

https://github.com/YMFE/yapi
