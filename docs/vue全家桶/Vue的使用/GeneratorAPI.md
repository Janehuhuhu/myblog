### GeneratorAPI 
***

### 简介
插件的 `Generator` 部分通常在你想要为项目扩展包依赖，创建新的文件或者编辑已经存在的文件时需要。

在 `CLI` 插件内部，`generator` 应该放在 `generator.js` 或者 `generator/index.js` 文件中。它将在以下两个场景被调用：

项目初始创建期间，`CLI` 插件被作为项目创建 `preset` 的一部分被安装时。

当插件在项目创建完成和通过 `vue add` 或者 `vue invoke` 单独调用被安装时。

一个 `generator` 应该导出一个接收三个参数的函数：

一个 `GeneratorAPI` 实例；

插件的 `generator` 选项。这些选项在项目创建，或者从 `~/.vuerc `载入预设时被解析。例如：如果保存的 `~/.vuerc` 像这样：
```js
{
  "presets" : {
    "foo": {
      "plugins": {
        "@vue/cli-plugin-foo": { "option": "bar" }
      }
    }
  }
}
```
如果用户使用 `preset foo` 创建了一个项目，那么 `@vue/cli-plugin-foo` 的 `generator` 就会收到 `{ option: 'bar' }`作为第二个参数。
<div style='margin-top: 50px'></div>

### 常用 API
#### cliVersion
The version string for the global @vue/cli version that is invoking the plugin.
<div style='margin-top: 30px'></div>

#### assertCliVersion
{integer | string} range - a semver range that @vue/cli needs to satisfy
<div style='margin-top: 30px'></div>

#### cliServiceVersion
The version string for the project local @vue/cli-service version that is invoking the plugin.
<div style='margin-top: 30px'></div>

#### assertCliServiceVersion
{integer | string} range - a semver range that @vue/cli-service needs to satisfy
<div style='margin-top: 30px'></div>

#### resolve
Resolve a path for the current project
<div style='margin-top: 30px'></div>

#### hasPlugin
 Check if the project has a plugin with given id. If version range is given, then the plugin version should satisfy it, 第二个参数可以输入版本号
<div style='margin-top: 30px'></div>

#### extendPackage
拓展 `package.json` 配置
```js
api.extendPackage({
  scripts: {
    'serve': 'vue-cli-service serve',
    'build': 'vue-cli-service build'
  },
  dependencies: {
    'vue': '^2.5.17'
  },
}
```
<div style='margin-top: 30px'></div>

#### render
利用 `ejs` 渲染模板文件
```js
api.render('./template', {
  doesCompile: api.hasPlugin('babel') || api.hasPlugin('typescript')
})
```
<div style='margin-top: 30px'></div>

#### postProcessFiles
`push` 一个文件中间件，它将在所有普通中间件都执行完成后再执行
```js
// 用法
api.postProcessFiles(files => {})

// 原理
// postProcessFilesCbs 是在所有普通文件在内存中渲染成字符串完成之后要执行的遍历回调
postProcessFiles (cb) {
  this.generator.postProcessFilesCbs.push(cb)
}
```
<div style='margin-top: 30px'></div>

#### onCreateComplete
内存中保存的文件字符串全部被写入文件后的回调函数
```js
api.onCreateComplete(() => {})
```
<div style='margin-top: 30px'></div>

#### exitLog
当 `generator` 退出的时候输出的信息

`{('log'|'info'|'done'|'warn'|'error')} [type='log'] - type of the message`
```js
api.exitLog('为了更好的开发，请在本地 /etc/hosts 中配置 local.sankuai.com 指向 127.0.0.1', 'info')
```
<div style='margin-top: 30px'></div>

#### genJSConfig
将 `json` 文件生成为 `js` 配置文件
```js
const { utilsFactory } = require('@nibfe/vue-cli-shared-utils')
const utils = utilsFactory(api)
const eslintRcTargetPath = api.resolve('.eslintrc.js')
if (!isVueCli3) {
  await utils.generateFile(eslintRcTargetPath, api.genJSConfig(eslintConfig))
}
```
<div style='margin-top: 30px'></div>

#### makeJSOnlyValue
Turns a string expression into executable JS for .js config files
```js
eslintConfig = {
  // cache origin eslintConfig
  ...JSON.parse(JSON.stringify(api.generator.pkg.eslintConfig || {})),
  rules: {
    ...((api.generator.pkg.eslintConfig && api.generator.pkg.eslintConfig.rules) || {}),
    'no-console': api.makeJSOnlyValue(
      `process.env.NODE_ENV === 'production' ? 'error' : 'off'`,
    ),
    'no-debugger': api.makeJSOnlyValue(
      `process.env.NODE_ENV === 'production' ? 'error' : 'off'`,
    ),
  },
}
```
<div style='margin-top: 30px'></div>

#### injectImports
向文件当中注入 `import` 语法的方法
```js
api.injectImports(api.entryFile, `import '@/plugins/axios'`)
```
<div style='margin-top: 30px'></div>

#### injectRootOptions
向 `Vue` 根实例中添加选项
```js
api.injectRootOptions(api.entryFile, `store`)
```
<div style='margin-top: 30px'></div>

#### entryFile
Get the entry file taking into account typescript, 如 {('src/main.ts'|'src/main.js')}
```js
api.entryFile
```
<div style='margin-top: 30px'></div>

#### invoking
Checks if the plugin is being invoked
```js
api.invoking
```

#### addConfigTransform
插件通过 `GeneratorAPI` 暴露的 `addConfigTransform` 方法添加如何提取配置文件, 一般用于从 `package.json` 中提取配置到如 `vue.config.js` 此类的专用文件中
::: tip
- {string} key - config key in package.json
- {object} options - options
- {object} options.file - file descriptor. Used to search for existing file. Each key is a file type (possible values: ['js', 'json', 'yaml', 'lines']). The value is a list of filenames
:::
```js
api.addConfigTransform('fooConfig', {
  file: {
    json: ['foo.config.json'] // 提取到该配置文件中
  }
})
```
<div style='margin-top: 50px'></div>

### 🔗相关链接
- [generatorAPI](https://cli.vuejs.org/dev-guide/generator-api.html#injectimports)
- [vue analysis](https://kuangpf.com/vue-cli-analysis/create/generator.html)
- [postProcessFiles](https://juejin.cn/post/6844904154461126670)
- [vue cli源码探索](https://juejin.cn/post/6844904154461126670)