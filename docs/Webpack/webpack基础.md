## webpack 简介
### 什么是webpack?
&nbsp;&nbsp;webpack是一套基于NodeJS的"模块打包工具",在webpack刚推出的时候就是一个单纯的JS模块打包工具,可以将多个模块的JS文件合并打包到一个文件中但是随着时间的推移、众多开发者的追捧和众多开发者的贡献。现在webpack不仅仅能够打包JS模块, 还可以打包CSS/LESS/SCSS/图片等其它文件。
<div style='margin-top: 50px'></div>


### 为什么要分模块?
&nbsp;&nbsp;如果将所有的JS代码都写到一个文件中, 十分不利于代码的维护和复用，所以我们可以将不同的功能写到不同的模块中, 这样就提升了代码的维护性和复用性。但是当将代码写到不同模块时新的问题又出现了,如：
- 导入资源变多了, 请求次数变多了, 网页性能也就差了
- 不同功能都放到了不同模块中了, 那么如何维护模块之间的关系也变成一个难题了
```js
    <script src="./header.js"></script>
    <script src="./content.js"></script>
    <script src="./index.js"></script>
    <script src="./footer.js"></script> // 如果index.js中用到了footer,就会报错
```
<div style='margin-top: 50px'></div>


### 如何解决上述问题？
- 项目上线时将用到的所有模块都合并到一个文件中
- 在index.html中只导入主文件, 在主文件中再导入依赖模块
<div style='margin-top: 50px'></div>


### 如何通过webpack来打包JS模块
- 安装webpack
```js
npm init -y
npm install --save-dev webpack
npm install --save-dev webpack-cli
```
- 在终端中输入打包的指令
```js
npx webpack index.js
```
注意点:
index.js就是需要打包的文件,打包之后的文件会放到dist目录中, 名称叫做main.js

<div style='margin-top: 100px'></div>









## disableHostCheck
设置为 *true* 时,此选项将绕过主机检查。不建议这样做，因为不检查主机的应用容易受到 *DNS* 重新绑定攻击的攻击。但是在本地启动时可能会出现 *Invalid Host header*，例如本地 *127.0.0.1:8080* 地址映射到外网。[webpack 'Invalid Host header'](https://www.jianshu.com/p/111806476add) [devserver](https://runebook.dev/zh-CN/docs/webpack/configuration/dev-server)

```js
module.exports = {
  devServer: {
    disableHostCheck: true,
  },
}
或
npx webpack serve --disable-host-check
```
<div style='margin-top: 100px'></div>






## 动态链接库和代码分割 
### 共同点
一般都是用来将第三方模块或公共模块、不常修改的模块打包，如多页面引用的文件公用的模块不会重复并不需要重复打包，所以需要将公共模块提取出来打包。如果所有模块都放一起打包，一旦文件修改后，用户需要把所有的模块都重新下载下来，比较影响性能
<div style='margin-top: 50px'></div>

### 区别
`SplitChunksPlugin` 虽然也是将公共模块抽离，但是其每次打包的时候还是会去处理一些第三方依赖库，只是它能把第三方库文件和我们的代码分开掉，生成一个独立的 `js` 文件。但是它还是不能提高打包的速度。

`DLLPlugin` 它则是提前将公共的包构建出来，使得在 `build` 时过滤掉这些构建过的包，使得在正是构建时的速度缩短。所以其相对来说打包速度会更快。
<div style='margin-top: 50px'></div>

### 🔗相关链接
- [webpack 文件分离思想](https://monocy.site/2019/05/23/webpack-%E6%96%87%E4%BB%B6%E5%88%86%E7%A6%BB%E6%80%9D%E6%83%B3/)
- [Webpack配置全解析（优化篇）](https://zhuanlan.zhihu.com/p/176840425)

<div style='margin-top: 100px'></div>









## sourcemap
### 简介
Source map就是一个信息文件，里面储存着位置信息。也就是说，转换后的代码的每一个位置，所对应的转换前的位置。有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码。这无疑给开发者带来了很大方便。
<div style='margin-top: 50px'></div>

### 启动sourcemap
1. **生产环境**<br>
关闭默认开启的 `source map`
```js
// vue.config.js
module.exports = {
  productionSourceMap: false,  //默认是true
}
```
当 `productionSourceMap: true` 时，`vue-cli-service3` 默认选择的模式是 `source-map`。
```js
// @vue\cli-service3\lib\config\prod.js
webpackConfig
  .mode('production')
  .devtool(options.productionSourceMap ? 'source-map' : false)
```
<div style='margin-top: 30px'></div>

2. **开发环境**<br>
默认情况下，本地启动项目时已经开启source map, 而且模式为 `cheap-module-eval-source-map`
```js
// @vue\cli-service3\lib\config\dev.js
if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  webpackConfig
    .devtool('cheap-module-eval-source-map')
}
```

如果想要切换模式，开发环境可直接修改 `vue.config.js` 文件, 生产环境必须设置 `productionSourceMap: true` 时，即启动 `source map` 模式才可通过修改 `vue.config.js` 切换模式
```js
// vue.config.js
configureWebpack: config => {
  if (process.env.NODE_ENV !== 'production') {
    // 开发环境配置
    config.devtool = 'eval-source-map'
  }
}
```
也可以通过在 `build` 插件中修改，如只想开发环境生效，则修改 `webpack.dev.js`。 但是必须用
`api.configureWebpack` 代替 `api.chainWebpack`, 因为后者的配置会被 `vue-cli-service3` 默认选择的配置覆盖。[详见文档](https://zhuanlan.zhihu.com/p/362295227)。

`chainWebpack` 的底层是 `webpack-chain`，命令式 `Webpack` 配置的事实标准，提供了一套灵活的上层 `API`(函数形式) 进行 `Webpack` 配置而无需过分关注 `Webpack Config` 的规范细节。`configureWebpack` 的底层是 `webpack-merge`，能让你通过编写一个配置子集快速合并到最终的完整配置中
```js
  // APPLY_EVAL_SOURCE_MAP 为一个用户可以控制的开关
  api.configureWebpack(config => {
    const { APPLY_EVAL_SOURCE_MAP } = process.env
    if (APPLY_EVAL_SOURCE_MAP === 'true') {
      config.devtool = 'eval-source-map'
    }
  })
```

<div style='margin-top: 50px'></div>

### 指定资源地址
`source map` 方便调试的同时，也将源码暴露在控制台，可能会导致代码泄露的安全问题。如果无特殊需求，生产环境是需要关闭这个选项的，`vue-cli3` 直接配置 `productionSourceMap: false` 即可。或者不关闭但是在测试环境迁移到正式环境时删掉 `map` 文件。也可以通过服务器配置，特殊账号（调试专用）能访问到 `map` 文件，其他用户则不行，或者将 `map` 文件发至内网，此时就需要能够指定资源地址。

如果同时使用了SourceMapDevToolPlugin/EvalSourceMapDevToolPlugin，则vue.config中的devtool不生效
```js
const webpack = require('webpack')
// 关闭默认 sourceMap devtool
config.devtool(false)
// 添加 SourceMapDevTool 插件来定制路径
config.plugin('sourceMapDevTool').use(webpack.SourceMapDevToolPlugin, [{
  filename: '[file].map',
  publicPath: SOURCEMAP_PUBLIC_URL,
}])
```
修改默认 `map` 文件地址后，执行 `SOURCEMAP_PUBLIC_URL=accccc yarn build` 后，效果如下：
```js
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["lazy-about"],{"54be":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],u=n("2877"),l={},c=Object(u["a"])(l,a,s,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=acccccjs/lazy-about.4f22a312.js.map
```

<div style='margin-top: 50px'></div>

### 模式
#### 1. eval
每个模块都使用 `eval()` 执行，并且都有 `//@ sourceURL`。此选项会非常快地构建。主要缺点是，由于会映射到转换后的代码，而不是映射到原始代码（没有从 `loader` 中获取 `source map`），所以不能正确的显示行数
```js
webpackJsonp([1],[
  function(module,exports,__webpack_require__){
    eval(
      ...
      //# sourceURL=webpack:///./src/js/index.js?'
    )
  },
  function(module,exports,__webpack_require__){
    eval(
      ...
      //# sourceURL=webpack:///./src/static/css/app.less?./~/.npminstall/css-loader/0.23.1/css-loader!./~/.npminstall/postcss-loader/1.1.1/postcss-loader!./~/.npminstall/less-loader/2.2.3/less-loader'
    )
  },
  function(module,exports,__webpack_require__){
    eval(
      ...
      //# sourceURL=webpack:///./src/tmpl/appTemplate.tpl?"
    )
  },
...])
```

#### 2. source-map
整个 `source map` 作为一个单独的文件生成。它为 `bundle` 添加了一个引用注释，以便开发工具知道在哪里可以找到它。一般用于生产环境
```js
webpackJsonp([1],[
  function(e,t,i){...},
  function(e,t,i){...},
  function(e,t,i){...},
  function(e,t,i){...},
  ...
])
//# sourceMappingURL=index.js.map
```

#### 3. eval-source-map
每个模块使用 `eval()` 执行，并且 `source map` 转换为 `DataUrl` 后添加到 `eval()` 中。初始化 `source map` 时比较慢，但是会在重新构建时提供比较快的速度，并且生成实际的文件。行数能够正确映射，因为会映射到原始代码中。它会生成用于开发环境的最佳品质的 `source map`。
```js
webpackJsonp([1],[
  function(module,exports,__webpack_require__){
    eval(
      ...
      //# sourceMappingURL=data:application/json;charset=utf-8;base64,...
    )
  },
  function(module,exports,__webpack_require__){
    eval(
      ...
      //# sourceMappingURL=data:application/json;charset=utf-8;base64,...
    )
  },  
  function(module,exports,__webpack_require__){
    eval(
      ...
      //# sourceMappingURL=data:application/json;charset=utf-8;base64,...
    )
  },
  ...
]);
```

#### 4. eval-cheap-source-map
类似 `eval-source-map`，每个模块使用 `eval()` 执行。这是 "cheap(低开销)" 的 `source map`，因为它没有生成列映射(column mapping)，只是映射行数。它会**忽略源自 `loader` 的 `source map`**，并且仅显示转译后的代码，就像 `eval devtool`。


#### 5. eval-cheap-module-source-map
 类似 `eval-cheap-source-map`，并且，在这种情况下，源自 `loader` 的 `source map` 会得到更好的处理结果。然而，`loader source map` 会被简化为每行一个映射(mapping)

#### 6. inline-source-map
 `sourceMap` 作为 `DataURL` 的形式被内嵌进了 `bundle` 中，由于 `sourceMap` 的所有信息都被加到了 `bundle` 中，整个 `bundle` 文件变得硕大无比。
 ```js
 webpackJsonp([1],[
  function(e,t,i){...},
  function(e,t,i){...},
  function(e,t,i){...},
  function(e,t,i){...},
  ...
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9...
 ```
<div style='margin-top: 50px'></div>


### 🔗相关链接
- [webpack devtool模式](https://webpack.docschina.org/configuration/devtool/#qualities)
- [7种sourcemap 模式](https://juejin.cn/post/6844903450644316174)
- [你所不知道的sourcemap](https://juejin.cn/post/6844903971648372743)

<div style='margin-top: 100px'></div>






## prefetch 和 preload
### prefetch 简介
`prefetch` 表示用户在接下来的浏览中（例如在下一个页面），有可能用到对应资源，提示浏览器要在闲时获取对应资源。下载下来的资源并没有立马解析
```js
<link rel="prefetch" herf="URL">
```
<div style='margin-top: 50px'></div>

### preload 简介
`preload` 表示用户在当前的浏览中（往往是在当前页面），极有可以可能用到对应资源，提示浏览器要优先获取对应资源，资源已解析
```js
<link rel="preload" href="script.js" as="script">
```
<div style='margin-top: 50px'></div>

### webpack
可以应用于加载异步资源，在 `html` 文件中注入 `pretch` 或 `preload` , 举个例子：
```js
button.addEventListener('click', e => {
  import(/* webpackChunkName: "script" */ './script.js');
});
```
webpack.config.js配置
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'preload.html'
    }),
    new PreloadWebpackPlugin()
  ]
}
```
`HtmlWebpackPlugin` 将自动生成相应的 `html `文件，默认为 `index.html`，这里通过设置 `filename` 选项更改

`PreloadWebpackPlugin` 为 `HtmlWebpackPlugin` 的插件，默认为其动态加载资源增加链接类型为 `preload` 的 `link` 标签，其 `as` 的值可根据后缀自动判断

`PreloadWebpackPlugin` 也支持 `prefetch`，需要增加 `rel` 选项为 `prefetch`
```js
new HtmlWebpackPlugin({
  filename: 'prefetch.html'
}),
new PreloadWebpackPlugin({
  rel: 'prefetch'
})
```

如果不用 `preload-webpack-plugin`, 也可以使用魔法注释
```js
button.addEventListener('click', e => {
  import(/* webpackChunkName: "script" *//* webpackPrefetch: true */ './script.js');
});
```

<div style='margin-top: 50px'></div>

### vue-cli-service 实践
:::tip
- fileBlacklist: 添加不希望预先加载的模块
- include 或 include.type 取值: allChunks、initial（非动态模块）、asyncChunks，也可以取值数组，表示使用 preload 的chunk，如 <link rel="preload" as="script" href="home.31132ae6680e598f8879.js"> , 除此之外，还可以取值 allAssets，预加载某个类型的静态资源，如images or fonts
- excludeHtmlNames: 不预加载资源的 html 文件

:::
```js
webpackConfig
  .plugin(`html-${name}`)
    .use(HTMLPlugin, [pageHtmlOptions])

webpackConfig
  .plugin(`preload-${name}`)
    .use(PreloadPlugin, [{
      rel: 'preload',
      includeHtmlNames: [filename],
      include: {
        type: 'initial',
        entries: [name]
      },
      fileBlacklist: [/\.map$/, /hot-update\.js$/]
    }])

webpackConfig
  .plugin(`prefetch-${name}`)
    .use(PreloadPlugin, [{
      rel: 'prefetch',
      includeHtmlNames: [filename],
      include: {
        type: 'asyncChunks',
        entries: [name]
      }
    }])
```
<div style='margin-top: 50px'></div>

### 二次加载问题（待验证）
- [二次加载](https://juejin.cn/post/6844903562070196237)
- [crossorigin](https://juejin.cn/post/6969825311361859598)

<div style='margin-top: 50px'></div>

### 🔗相关链接
- [prefetch 和 preload](https://juejin.cn/post/6844904142402502669)
- [link标签的rel属性](https://zhuanlan.zhihu.com/p/150231042)
- [preload-webpack-plugin](https://www.npmjs.com/package/preload-webpack-plugin)

<div style='margin-top: 100px'></div>









## babel 对 es 模块的处理

### 背景
在企业开发中为了兼容一些低级版本的浏览器, 我们需要将 `ES678` 高级语法转换为 `ES5` 低级语法
否则在低级版本浏览器中我们的程序无法正确执行。默认情况下 `webpack` 是不会将我们的代码转换成ES5低级语法的, 如果需要转换我们需要使用 `babel` 来转换。

### es6 转 es5
```js
// 安装
npm install --save-dev babel-loader @babel/core  @babel/preset-env

// 配置
{
  test: /\.js$/,
  exclude: /node_modules/,  // 不做处理的目录
  loader: "babel-loader",
  options: {
      presets: ["@babel/preset-env"],
  },
}
```

### 引入 polyfill
#### 原因
对于没有对应关系的语法而言, 不能实现自动转换有对应关系就是指 `ES5` 中有对应的概念,  例如: 箭头函数对应普通函数, `let` 对应 `var`, 这个就叫做有对应关系。没有对应关系就是指 `E5` 中根本就没有对应的语法,  例如 `Promise`, `includes` 等方法是 `ES678` 新增的。ES5中根本就没有对应的实现, 这个时候就需要再增加一些额外配置, 让 `babel` 自己帮我们实现对应的语法

#### 方式一：@babel/presets-env
```js
// 安装
npm install --save @babel/polyfill

// 在用到不存在代码的文件中导入包
import "@babel/polyfill"

// 配置, 如果导入了 polyfill, 那么无论我们有没有用到不存在的语法都会打包到文件中,但是这样会增加打包后文件的大小, 我们希望的是只将用到的不存在语法打包到文件中, 配置 useBuiltIns
[["@babel/preset-env",{
  targets: {
    "chrome": "58",
    "ie": "10"
  },
  useBuiltIns: "usage"
}]]
```

#### 方式二：@babel/plugin-transform-runtime
直接导入 `polyfill` 的方式只适用于一般项目开发, 但是如果是在编写一些第三方模块的时候这种方式会出现一些问题, 因为这种方式是通过全局变量的方式来注入代码, 会污染全局环境。
```js
// 安装相关模块
npm install --save @babel/polyfill
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime
npm install --save @babel/runtime-corejs2

// 配置相关信息
plugins: [
  ["@babel/plugin-transform-runtime",
    {
        "absoluteRuntime": false,
        "corejs": 2, // false, 还是全局注入,还是会污染全局环境; 赋值 2 则不会污染全局环境,但需要安装 @babel/runtime-corejs2
        "helpers": true,
        "regenerator": true,
        "useESModules": false
    }
  ]
]
```

### cjs 和 es 混用导致 babel-transform-runtime 异常
`babel-preset-env` 提供了 `module` 的配置，我们可以配置 `module: false`，让 `babel` 不转换 `ESModule`(指的是 `import` 这种语法)，这样 `webpack` 中 `Tree-Shaking` 就可以正常工作。将`modules` 配置为 `false` 后会禁用模块化语句的转化，将 `Module` 的语法交给 `Webpack` 本身去处理，来避免这一问题的发生。同时，设置 `sourceType` 为 `unambiguous`, `transform-runtime` 可以自动识别模块类型，根据模块类型使用不同的“导入”, 以避免 `polyfill` 在 `commonjs` 中 `import polyfill` 模块。
```js
rules: [{
  test: /\.js$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader',
    options: {
        presets: [['@babel/preset-env', { modules: false }]],
        plugins: ['@babel/plugin-transform-runtime'],
        // babel@7新增unambiguous
        // transform-runtime可以自动识别模块类型，根据模块类型使用不同的“导入”
        sourceType: "unambiguous"
    },
  }],
}]
```
仅有 `transform-runtime`时，`transform-runtime` 往 `CommonJSModule` 中导入 `polyfill` 会使用 `require` 的方式，不会报错。但是会导致其它 `ESModule` 在 `webpack` 中的 `Tree-Shaking` 失效

### 链接
- [Tree-Shaking进阶之路](https://smilesmith.github.io/201908/TreeShaking%E6%89%93%E6%80%AA%E5%8D%87%E7%BA%A7%E4%B9%8B%E8%B7%AF.html#%E4%B8%80%E3%80%81%E4%BB%80%E4%B9%88%E6%98%AF-tree-shaking%EF%BC%9F)
- [@babel/plugin-transform-runtime 到底是什么？](https://zhuanlan.zhihu.com/p/147083132)
- [预处理器](https://cloud.tencent.com/developer/article/1675576)
- [babel](https://blog.windstone.cc/es6/babel/@babel/preset-env.html#forcealltransforms)

<div style='margin-top: 100px'></div>











## mpa 和 spa
[mpa 和 spa](https://juejin.cn/post/6844903929306693645)
<div style='margin-top: 100px'></div>









