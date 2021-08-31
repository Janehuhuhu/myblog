### sourcemap
***

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