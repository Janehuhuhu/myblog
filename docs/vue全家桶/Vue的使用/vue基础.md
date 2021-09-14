## process.argv
命令行 **node '/Users/jane/Desktop/test-01/sourcemap-hj0/a.js' --a b c**
```js
// 执行
console.log(process.argv)

// 结果
[
  '/Users/jane/.nvm/versions/node/v14.17.4/bin/node',
  '/Users/jane/Desktop/test-01/sourcemap-hj0/a.js',
  '--a',
  'b',
  'c'
]
```

使用 *minimist* 格式化参数
```js
// 执行
console.log(minimist(process.argv))

// 结果
{
  _: [
    '/Users/jane/.nvm/versions/node/v14.17.4/bin/node',
    '/Users/jane/Desktop/test-01/sourcemap-hj0/a.js',
    'c'
  ],
  a: 'b'
}
```
<div style='margin-top: 100px'></div>










## 可复用和组合
### VCA
#### 简介
将同一个逻辑关注点相关代码收集在一起，对于组织大型项目代码会非常友好。通过 `VCA` 这种方式可以进行代码的复用 [VCA扫盲](https://juejin.cn/post/6850418114111537159)
<div style='margin-top: 30px'></div>

#### 用法
可以看到，写出来的就像一个函数似的，然后在组件中调用
```js
// src/composables/useUserRepositories.js
import { fetchUserRepositories } from '@/api/repositories'
import { ref, onMounted, watch } from 'vue'

export default function useUserRepositories(user) {
  const repositories = ref([])
  const getUserRepositories = async () => {
    repositories.value = await fetchUserRepositories(user.value)
  }

  onMounted(getUserRepositories)
  watch(user, getUserRepositories)

  return {
    repositories,
    getUserRepositories
  }
}
```
```js
// src/components/UserRepositories.vue
import { toRefs } from 'vue'
import useUserRepositories from '@/composables/useUserRepositories'
import useRepositoryNameSearch from '@/composables/useRepositoryNameSearch'
import useRepositoryFilters from '@/composables/useRepositoryFilters'

export default {
  components: { RepositoriesFilters, RepositoriesSortBy, RepositoriesList },
  props: {
    user: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const { user } = toRefs(props)

    const { repositories, getUserRepositories } = useUserRepositories(user)

    const {
      searchQuery,
      repositoriesMatchingSearchQuery
    } = useRepositoryNameSearch(repositories)

    const {
      filters,
      updateFilters,
      filteredRepositories
    } = useRepositoryFilters(repositoriesMatchingSearchQuery)

    return {
      // 因为我们并不关心未经过滤的仓库
      // 我们可以在 `repositories` 名称下暴露过滤后的结果
      repositories: filteredRepositories,
      getUserRepositories,
      searchQuery,
      filters,
      updateFilters
    }
  }
}
```
<div style='margin-top: 50px'></div>



### 函数式组件
#### 简介
函数式组件是自身没有任何状态的组件的另一种形式。它们在渲染过程中不会创建组件实例，并跳过常规的组件生命周期。可以把函数式组件想像成组件里的一个函数，入参是渲染上下文(render context)，返回值是渲染好的 `HTML`[函数式组件扫盲](https://v3.cn.vuejs.org/guide/render-function.html#%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BB%84%E4%BB%B6)
<div style='margin-top: 30px'></div>

#### 用法
[其他用法](https://v3.cn.vuejs.org/guide/migration/functional-components.html#%E6%A6%82%E8%A7%88)
```js
// Vue 2 函数式组件示例 xxx.js
export default {
  functional: true,
  props: ['level'],
  methods: {
  }
  render(h, { props, data, children }) {
    return h(`h${props.level}`, data, children)
  }
}
```
举个例子
```js
// app.vue
<template>
  <FunctionalButton @click="log">
    Click me
  </FunctionalButton>
</template>
```
```js
// FunctionalButton.js
export default {
  functional: true,
  render(createElement, { props, listeners, children }) {
    return createElement(
      'button',
      {
        attrs: props,
        on: {
          click: listeners.click
        }
      },
      children
    );
  }
};
```
<div style='margin-top: 50px'></div>



### 渲染函数 & JSX
#### 简介
用 `js` 的方式来渲染 `html` 文件，[详情](https://v3.cn.vuejs.org/guide/render-function.html#dom-%E6%A0%91)
<div style='margin-top: 30px'></div>

#### 用法
```js
// 模版文件
<anchored-heading :level="1"> <span>Hello</span> world! </anchored-heading>
```
```js
h(
  'anchored-heading',
  {
    level: 1
  },
  {
    default: () => [h('span', 'Hello'), ' world!']
  }
)
```
上述模板如此简单的情况下，渲染函数写起来比较痛苦，期望能有更接近模版的渲染写法
```js
import AnchoredHeading from './AnchoredHeading.vue'

const app = createApp({
  render() {
    return (
      <AnchoredHeading level={1}>
        <span>Hello</span> world!
      </AnchoredHeading>
    )
  }
})
app.mount('#demo')
```
<div style='margin-top: 50px'></div>



### mixin
#### 简介
`Mixin` 提供了一种非常灵活的方式，来分发 `Vue` 组件中的可复用功能。一个 `mixin` 对象可以包含任意组件选项。当组件使用 `mixin` 对象时，所有 `mixin` 对象的选项将被“混合”进入该组件本身的选项。[详情](https://v3.cn.vuejs.org/guide/mixins.html#%E5%9F%BA%E7%A1%80)
<div style='margin-top: 30px'></div>

#### 用法
```js
// define a mixin object
const myMixin = {
  created() {
    this.hello()
  },
  methods: {
    hello() {
      console.log('hello from mixin!')
    }
  }
}

// define an app that uses this mixin
const app = Vue.createApp({
  mixins: [myMixin]
})

app.mount('#mixins-basic') // => "hello from mixin!"
```
<div style='margin-top: 30px'></div>

#### 问题
- 渲染上下文中暴露的 `property` 来源不清晰。例如在阅读一个运用了多个 `mixin` 的模板时，很难看出某个 `property` 是从哪一个 `mixin` 中注入的。
- 命名空间冲突：`Mixin` 之间的 `property` 和方法可能有冲突，同时高阶组件也可能和预期的 `prop` 有命名冲突。
<div style='margin-top: 50px'></div>


### vue-hooks
#### 简介
`Hooks` 实现了 `mixins` 的功能，但避免了 `mixins` 带来的两个主要问题：
- 允许相互传递状态
- 明确指出逻辑来自哪里
- 避免产生冲突
<br>感觉和`VCA` 的目标是一样的，像是一个试验性的方案，没有找到这两个直接的概念区别，暂时理解为 `VCA`，
<div style='margin-top: 30px'></div>

#### 用法
[用法示例](https://juejin.cn/post/6844903784598994952)

<div style='margin-top: 100px'></div>










## 组件库
### 简介
组件库本质上是一种 `npm` 包，针对可复用的组件做的一种打包工作
<div style='margin-top: 50px'></div>

### 开发
#### webpack 入口文件
1. 对于多 `package` 模式（src/packages），这是整体的入口文件
```js
import Index from './packages/demo/index.js'
const components = [Index]
const install = function(Vue) {
  components.forEach(item => {
    if (item.install) {
      Vue.use(item)
    } else if (item.name) {
      Vue.component(item.name, item)
    }
  })
}

// 自动安装 方便打包成压缩文件, 用<script scr=''></script>的方式引用
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
// 注意这种导出方式，后面会说到
export default {
  install,
  Index,
}
```

2. 单个 `pacakge` 打包入口文件：
```js
import MyComponent1 from './index.vue'

/* istanbul ignore next */
MyComponent1.install = function(Vue) {
  Vue.component(MyComponent1.name, MyComponent1)
}
export default MyComponent1
```
<div style='margin-top: 50px'></div>

### 引入方式
#### 按需引入单个包
```js
import MyCompList from '@nibfe/pattern-select/build/es/packages/parttern-list/index.js’. 
Vue.use(MyCompList)
```

#### 引入全部包
这种引入方式一定要保证在 1 中的入口文件中包含要引入的组件，如 `Index`
```js
import MyComp from '@nibfe/pattern-select'
Vue.use(MyComp)
```

#### 按需引入
**1中export default** 的导出方式不能用 {} 的方式引入，必须用 `export` 的方式导出才能用 {} 导入
```js
import { MyComp } from '@nibfe/pattern-select'
Vue.use(MyComp)
```

如果想要用 {} 按需引入的方式，那就必须要引入 `babel-plugin-import`
```js
module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'import',
      {
        libraryName: '@nibfe/vault',
        customStyleName(name) {
          return `@nibfe/vault/build/styles/${name}.css`
        },
        customName(name) {
          return `@nibfe/vault/build/es/${name}/${name}.js`
        },
      },
    ],
  ],
}
```
<div style='margin-top: 50px'></div>

### 组件库打包
打包工具用的是 `rollup`。打包方法 `CJS, AMD, UMD 和 ESM`, 其中 `AMD` 说的异步是下载时不会阻塞其他进程，就像是 `script` 中的 `async`。具体详细看👇下面链接
<div style='margin-top: 50px'></div>

### 引入第三方库
需要注意的是，如果想要按需引入，必须打包的结果中有按单包打包的，也有整体打包的结果。这就是为什么 `packages` 目录外有 `index.js` 入口文件，子目录中也有入口文件的原因。那么该如何引入第三方库呢，如果是局部引入，在 `packages` 子包的 `.vue` 中引入即可。
```js
// src/packages/xx/index.vue
import '@ss/mtd-vue/lib/theme2/index.css'

// 按需引入
import a from '../build/es/packages/demo/index.js'
```

如果是全局引入，必须在全局的打包入口文件中（src/index.js）中引入，打包出的结果也只能全局引入，不能按需引入，因为在按需打包的文件中不会包含全局的文件。注意：`entry/main` 中是测试文件，方便本地测试组件库的，不会写入到最后的打包结果中
```js
// src/index.js
import '@ss/mtd-vue/lib/theme2/index.css'

// 打包结果引入，全局引入
import a from '../build/es/index.es'
Vue.use(a)
```
为了防止第三方库二次打包（原包打包过一次），需要在组件库打包的时候排除掉
```js
// vue.config.js
pluginOptions: {
  romeLibrary: {
    rollupOptions: {
      external: [/@ss\/mtd-vue/, /@nibfe\/dz-form/], // 此处举例,其中/@gfe/,/@hfe/是通过正则的方式匹配，'@/lib/axios'字符串方式是匹配同名第三方包
    },
  },
},
```
<div style='margin-top: 50px'></div>

### 🔗相关链接
- [babel-plugin-import](https://www.npmjs.com/package/babel-plugin-import)
- [手把手教你开发组件](https://juejin.cn/post/6844903459536240648)
- [简单实现 babel-plugin-import](https://juejin.cn/post/6905708824703795214)
- [CJS, AMD, UMD 和 ESM](https://juejin.cn/post/6935973925004247077)
- [AMD、CJS](http://www.360doc.com/content/19/0519/15/13328254_836725029.shtml)
- [webpack和rollup](https://juejin.cn/post/6844903735236247565)
- [rollup](https://www.rollupjs.com/)
- [rollup配置文件](https://blog.cjw.design/blog/old/rollup#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E9%80%89%E9%A1%B9%E8%AF%A6%E8%A7%A3)

<div style='margin-top: 100px'></div>











## GeneratorAPI 
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

<div style='margin-top: 100px'></div>













## history 和 hash 模式
### 简介
`vue` 是渐进式前端开发框架，为了实现 `SPA` ，需要引入前端路由系统（`vue-router`）。前端路由的核心是：改变视图的同时不会向后端发出请求。为了达到这一目的，浏览器提供了 `hash` 和 `history` 两种模式。

`hash` 虽然出现在 `URL` 中，但不会被包含在 `http` 请求中，对后端完全没有影响，因此改变 `hash` 不会重新加载页面。

`history` 利用了 `html5 history interface` 中新增的 `pushState()` 和 `replaceState()` 方法。这两个方法应用于浏览器记录栈，在当前已有的 `back、forward、go` 基础之上，它们提供了对历史记录修改的功能。只是当它们执行修改时，虽然改变了当前的 `URL` ，但浏览器不会立即向后端发送请求。因此可以说， `hash` 模式和 `history` 模式都属于浏览器自身的属性，`vue-router` 只是利用了这两个特性（通过调用浏览器提供的接口）来实现路由。
<div style='margin-top: 50px'></div>

### 原理
#### 1. hash
`hash` 模式的原理是 `onhashchange` 事件，可以在 `window` 对象上监听这个事件。

`hash` 发生变化的 `url` 都会被浏览器记录下来，从而你会发现浏览器的前进后退都可以使用了，同时点击后退时，页面字体颜色也会发生变化。这样一来虽然没有向后端发送请求，但是页面状态和 `url` 关联在了一起，这就是前端路由
```js
window.onhashchange = function(event){
  console.log(event.oldURL, event.newURL);
  let hash = location.hash.slice(1);
  document.body.style.color = hash;
}
```
<div style='margin-top: 30px'></div>

#### 2. history
`hashchange` 只能改变 **#** 后面的代码片段，`history api （pushState、replaceState、go、back、forward）` 则给了前端完全的自由，通过在 `window` 对象上监听 `popState()` 事件
```js
pushState()、replaceState() 方法接收三个参数：stateObj、title、url。

// 设置状态
history.pushState({color: "red"}, "red", "red");

// 监听状态
window.onpopstate = function(event){
    console.log(event.state);
    if(event.state && event.state.color === "red"){
        document.body.style.color = "red";
    }
}

// 改变状态
history.back();
history.forward();
```
通过 `pushState` 把页面的状态保存在 `state` 对象中，当页面的 `url` 再变回到这个 `url` 时，可以通过 `event.state` 取到这个 `state` 对象，从而可以对页面状态进行还原，如页面滚动条的位置、阅读进度、组件的开关等

<div style='margin-top: 50px'></div>

### 🔗相关链接
- [history和hash模式的区别](https://juejin.cn/post/6844903625169502216)
- [history和hash模式详解](https://blog.csdn.net/Charissa2017/article/details/104779412)
- [replaceState和pushState的区别](https://www.jianshu.com/p/bb5f9263e169)

<div style='margin-top: 100px'></div>











## browser，module，main 字段
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

<div style='margin-top: 100px'></div>














## pluginAPI
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

<div style='margin-top: 100px'></div>













## loadmodule
*loadmodule* 可以直接获取到项目中的依赖版本，如果直接用 *require* 获取的是依赖中的子依赖
```js
const { loadModule } = require('@vue/cli-shared-utils')
const pkg = loadModule(`${name}/package.json`, cwd, true) || {}
```
<div style='margin-top: 100px'></div>
