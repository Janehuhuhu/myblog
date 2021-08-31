### prefetch 和 preload
***

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

### 🔗相关链接
- [prefetch 和 preload](https://juejin.cn/post/6844904142402502669)
- [link标签的rel属性](https://zhuanlan.zhihu.com/p/150231042)
- [preload-webpack-plugin](https://www.npmjs.com/package/preload-webpack-plugin)