### babel 对 es 模块的处理
***

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