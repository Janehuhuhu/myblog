### pluginAPI
***
### 简介
`Service` 插件可以修改 `webpack` 配置，创建新的 `vue-cli service` 命令或者修改已经存在的命令（如 `serve` 和 `build`）。

`Service` 插件在 `Service` 实例被创建后自动加载 - 例如，每次 `vue-cli-service` 命令在项目中被调用的时候。它位于 `CLI` 插件根目录的 `index.js` 文件。

一个 `service` 插件应该导出一个函数，这个函数接受两个参数：

一个 `PluginAPI` 实例

一个包含 `vue.config.js` 内指定的项目本地选项的对象，或者在 `package.json` 内的 `vue` 字段。
<div style='margin-top: 50px'></div>

### 常用API
#### version
加载该插件的 `@vue/cli-service` 版本
```js
api.version
```
<div style='margin-top: 30px'></div>

#### assertVersion
需要满足的 `@vue/cli-service` 的版本，入参为 `string` 或 `integer`
```js
api.assertVersion(7)
```
<div style='margin-top: 30px'></div>

#### getCwd
```js
// 用法
api.getCwd()

// 原理
getCwd () {
  return this.service.context
}
```
<div style='margin-top: 30px'></div>

#### resolve
相对于根目录的绝对路径
```js
// 用法
api.resolve('xxx')

// 原理
resolve (_path) {
  return path.resolve(this.service.context, _path)
}
```
<div style='margin-top: 30px'></div>

#### hasPlugin
是否包含某个插件
```js
// 用法
api.hasPlugin('xxx')

// 原理
hasPlugin (id) {
  if (id === 'router') id = 'vue-router'
  if (['vue-router', 'vuex'].includes(id)) {
    const pkg = this.service.pkg
    return ((pkg.dependencies && pkg.dependencies[id]) || (pkg.devDependencies && pkg.devDependencies[id]))
  }
  return this.service.plugins.some(p => matchesPluginId(id, p.id))
}
```
<div style='margin-top: 30px'></div>

#### registerCommand
注册 `cli` 命令服务，`options` 为一个包含 `vue.config.js` 内指定的项目本地选项的对象，或者在 `package.json` 内的 `vue` 字段
```js
// 用法
api.registerCommand('addPage', async args => {
  addPage(api, options)
})

// 原理
registerCommand (name, opts, fn) {
  if (typeof opts === 'function') {
    fn = opts
    opts = null
  }
  this.service.commands[name] = { fn, opts: opts || {}}
}
```
<div style='margin-top: 30px'></div>

#### chainWebpack
通过 `webpack-chain` 修改 `webpack` 配置
```js
// 用法
api.chainWebpack(config => {
  config.devtool(false)
})

// 原理
chainWebpack (fn) {
  this.service.webpackChainFns.push(fn)
}
```
<div style='margin-top: 30px'></div>

#### configureWebpack
通过 `webpack-merge` 对 `webpack` 配置进行合并
```js
// 用法
api.configureWebpack(config => {
  config.devtool = 'eval-source-map'
})

// 原理
configureWebpack (fn) {
  this.service.webpackRawConfigFns.push(fn)
}
```
<div style='margin-top: 30px'></div>

#### configureDevServer
Register a dev serve config function. It will receive the express app instance of the dev server.
<div style='margin-top: 30px'></div>

#### resolveWebpackConfig
调用之前通过 `chainWebpack` 和 `configureWebpack` 上完成的对于 `webpack` 配置的改造，并返回最终的 `webpack` 配置
<div style='margin-top: 30px'></div>

#### resolveChainableWebpackConfig
Resolve an intermediate chainable webpack config instance, which can be further tweaked before generating the final raw webpack config. You can call this multiple times to generate different branches of the base webpack config.
<div style='margin-top: 30px'></div>

#### genCacheConfig
Generate a cache identifier from a number of variables，返回 `cacheDirectory, cacheIdentifier(一个缓存标志)`
```js
// 用法
const { cacheIdentifier } = api.genCacheConfig(
  'eslint-loader',
  {
    'eslint-loader': require('eslint-loader/package.json').version,
    eslint: eslintPkg.version
  },
  [
    '.eslintrc.js',
    '.eslintrc.yaml',
    '.eslintrc.yml',
    '.eslintrc.json',
    '.eslintrc',
    '.eslintignore',
    'package.json'
  ]
)

api.chainWebpack(webpackConfig => {
  const { lintOnSave } = options
  const allWarnings = lintOnSave === true || lintOnSave === 'warning'
  const allErrors = lintOnSave === 'error'

  webpackConfig.module
    .rule('eslint')
      .pre()
      .exclude
        .add(/node_modules/)
        .add(path.dirname(require.resolve('@vue/cli-service')))
        .end()
      .test(/\.(vue|(j|t)sx?)$/)
      .use('eslint-loader')
        .loader(require.resolve('eslint-loader'))
        .options({
          extensions,
          cache: true,  // 保存检测结果到缓存中
          cacheIdentifier,  // 缓存标示
          emitWarning: allWarnings,
          // only emit errors in production mode.
          emitError: allErrors,
          eslintPath: path.dirname(
            resolveModule('eslint/package.json', cwd) ||
            resolveModule('eslint/package.json', __dirname)
          ),
          formatter: loadModule('eslint/lib/formatters/codeframe', cwd, true)
        })
  })
}

// 原理
genCacheConfig (id, partialIdentifier, configFiles) {
  const cacheDirectory = this.resolve(`node_modules/.cache/${id}`)
  const variables = {} // 一些变量，此处省略
  const cacheIdentifier = hash(variables)
  return { cacheDirectory, cacheIdentifier }
}
``` 


<div style='margin-top: 50px'></div>

### 🔗相关链接
- [pluginAPI](https://cli.vuejs.org/dev-guide/plugin-api.html#resolvechainablewebpackconfig)
- [vue analysis](https://kuangpf.com/vue-cli-analysis/cli-service/service-run.html)
- [vue cli源码探索](https://juejin.cn/post/6844904154461126670)
- [genCacheConfig](https://segmentfault.com/a/1190000016244353)
- [chainWebpack与configureWebpack](https://forum.vuejs.org/t/chainwebpack-configurewebpack/68750)
- [cacheIdentifier](https://webpack.docschina.org/loaders/babel-loader/)
- [eslint-loader](https://www.npmjs.com/package/eslint-loader)