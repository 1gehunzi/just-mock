# 功能概述

Just Mock 功能精简，仅包括项目管理、规则管理、日志查看 3 种操作类型。两个核心概念拦截&穿透。

**拦截** ：浏览器请求被 Just Mock 插件处理并返回数据。请求不会打到后端服务，不污染数据。

**穿透**：浏览器请求正常请求后端服务，Just Mock 插件不做任何处理。

<img src="/images/features/1.png" width="80%">

## 项目操作

Just Mock 的项目可以理解为规则集。当同时负责多个项目时可以考虑创建多个规则集既项目。Just Mock 同一时刻仅对一个域名生效。项目可以进行增加、删除、编辑、开启/关闭操作。

开启/关闭（右上角的 switch 开关）: 个别场景我们需要对比 Mock 和真实数据的界面功能。通过将当前生效的项目关闭可以让 Just Mock 只记录浏览器请求记录不做数据拦截响应。

::: danger 慎重删除项目
:construction: 删除项目后其下的所有规则会被清空
:::

## 规则操作

规则是 Just Mock 对浏览器请求做拦截还是穿透的依据。新增规则具有两个入口：1. 项目下的新增规则；2. 点击日志操作区的日志列表。推荐通过日志来直接创建规则表单带有请求和响应数据操作快捷。

规则的核心要素有 Path Rule、Method、Response、Code、Delay、SwitchOn。

**Path Rule**：基于 [path-to-regexp](https://github.com/pillarjs/path-to-regexp) 实现，判断请求是否被拦截。[Path Rule](/guide/path-rules)

**Method**：对应 Http 请求的 Method，也是判断请求是否被拦截的条件之一。

**Response**：用户自定义输入接口响应数据的操作区，JSON Editor 输入的数据后续会做响应返回浏览器

**Code**： 对应 Http 响应状态码，通过设置不同状态码可以模拟接口 404、503、401 等异常情况

**Delay**： 设置超时时间既被拦截的接口多少 ms 后被响应、常用于测试 loading 效果测试

**SwitchOn**： 规则的开关，用于快速控制接口是否被拦截

<img src="/images/features/3.png" width="80%">

## 日志操作

### 日志查看

### 日志清空
