# 路径规则

Just Mock 通过对比请求的 url + method 与预设规则的 path rule + method 做匹配。其中 path rule 是直接利用开源库 [path-to-regexp](https://github.com/pillarjs/path-to-regexp) 实现。`pathToRegexp 对象的 exec 方法`

## 常见用法

### 精确匹配

推荐值 :star2: :star2: :star2: :star2: :star2:

精确匹配： 直接将请求的 pathname 复制使用即可。

<img src="/images/path-rule/1.png" width="40%">
<img src="/images/path-rule/2.png" width="42%">

### 带参数匹配

推荐值 :star2: :star2: :star2:

### Query 匹配

## 其他

::: tip 为什么选用 path-to-regexp 而不是正则匹配、精确匹配？
正则表达式适用范围广，但门槛高；精确匹配最简单，但不适用 Restful 接口规范。path-to-regexp 匹配最趋近于字符串，比正则语法简单比精确匹配更适用。
:::
