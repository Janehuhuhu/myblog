### browser，module，main 字段
***

### 简介
前端开发中使用到 `npm` 包那可算是家常便饭，而使用到 `npm` 包总免不了接触到 `package.json` 包配置文件。

那么这里就有一个问题，当我们在不同环境下 `import` 一个 `npm` 包时，到底加载的是 `npm` 包的哪个文件？

老司机们很快地给出答案：`main` 字段中指定的文件。

然而我们清楚 `npm` 包其实又分为：只允许在客户端使用的，只允许造服务端使用的，浏览器/服务端都可以使用。
如果我们需要开发一个 `npm` 包同时兼容支持 `web` 端 和 `server` 端，需要在不同环境下加载 `npm` 包不同的入口文件，显然一个 `main` 字段已经不能够满足我们的需求，这就衍生出来了 `module` 与 `browser` 字段。

本文就来说下 这几个字段的使用场景，以及同时存在这几个字段时，他们之间的优先级。
<div style='margin-top: 50px'></div>

### 🔗相关链接
- [package.json 中 你还不清楚的 browser，module，main 字段优先级 #8
](https://github.com/SunshowerC/blog/issues/8)