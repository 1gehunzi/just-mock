# 介绍

Just Mock 是一个专门面向 Web 项目的 Mock 工具。你可以使用 Just Mock 来模拟后端响应（用于前后端联调、QA 测试、PM 验收、线上问题还原等场景），仅需安装浏览器插件即可满足 90% 的 Mock 需要。

Just Mock 诞生的初衷是为了解决前端 Mock 老大难问题。

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

### [Apifox](https://www.apifox.cn/)

Apifox 集 API 文档、API 调试、API Mock、API 自动化测试等功能于一身，本地安装应用。目前社区较为推荐功能大而全，但对于前端角色而言 API Mock 足以， Just Mock 更轻量。

### [ajax-interceptor](https://github.com/YGYOOO/ajax-interceptor)

ajax-interceptor 一个可以修改 Ajax 请求返回结果的 Chrome 插件，可用于调试/排查页面上的问题。Just Mock 的灵感来源于此，相比 ajax-interceptor 而言增加更丰富、快捷的操作同时保证拦截请求不透传到后端不污染数据。

### [YApi](https://github.com/YMFE/yapi)

YApi 是高效、易用、功能强大的 api 管理平台本地搭建服务，旨在为开发、产品、测试人员提供更优雅的接口管理服务，也提供 Mock 附属功能。
