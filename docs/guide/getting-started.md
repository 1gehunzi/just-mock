# 快速上手

## 插件下载

:point_right: [Just Mock-v1.0.0.zip](https://video-1251432287.cos.ap-beijing.myqcloud.com/Just%20Mock-v1.0.0.zip)

::: tip 为啥不从 Chrome 网上应用店直接安装？
本人没有 visa 信用卡不能注册开发者，因此无法上传插件到 chrome 应用店
:::

后续有计划将 Just Mock 插件发布到应用商店，敬请期待

## 插件安装

这一章节会帮助你从安装到使用。

- **Step 1**: 解压 Just Mock-v1.0.0.zip 备用
- **Step 2**: 在 Chrome 扩展程序的 **开发者模式** 模式下安装插件

  浏览器地址栏输入 chrome://extensions/ ， 右上角开启模式，加载已解压的扩展程序
  <img src="/images/getting-started/1.png">

- **Step 3**: 将插件 icon 显示出来
  较新版本的 Chrome 会将较多的插件 icon 折叠起来，为了使用方便，推荐将 Just Mock 的 icon 展示出来

  <img src="/images/getting-started/2.png" width="40%" style="vertical-align: top;">
  <img src="/images/getting-started/3.png" width="40%" style="vertical-align: top;">

至此，插件安装完毕。Just Mock 接入完毕

## 插件体验

我们以 Mock https://segmentfault.com/ 线上数据为例来介绍 Just Mock 的使用。

> 别人的网站都能 Mock ， localhost 本地开发更不成问题 :upside_down_face:

- **Step 1**: 配置项目

  点击插件的 icon 唤起 Just Mock 操作面板，点击左下角 _添加项目_

- **Step 2**: 查看请求日志

  访问目标网址（https://segmentfault.com/），查看插件操作面板的请求日志

- **Step 3**: 配置规则

  点击目标请求的日志条目唤起请求的 Mock 规则配置；编辑规则表单，修改 Response 的数据保存规则

- **Step 4**: 操作界面再次请求目标 path，查看响应

<img src="https://video-1251432287.cos.ap-beijing.myqcloud.com/1.gif" width="80%" style="display: block;margin: auto;">
