### pnpm 和 yarn2
***

### 为什么会引入pnpm和yarn2的概念
项目中需要获取包版本，使用了 `node_modules`，具体如下:
```js
const cwd = './'
const pkgDir = path.join(cwd, 'node_modules/' + key)
version = sync({ cwd: pkgDir }).version
majorVersion = _.get(version, '0')
```

该种方式的问题是，获取的包版本是最外层，很可能不是实际上使用的包版本，这和 `npm` 包寻址方式不符。另外，该方式不具有扩展性，未来 `pnpm` 和 `yarn2` 中通过 `node_modules` 会拿不到实际使用的包内容

所以，优化后的方案如下：
```js
const pkg = require(key + '/package.json')
version = pkg.version
majorVersion = get(version, '0')
```
<div style='margin-top: 50px'></div>

### 常见问题
#### 1. 为什么子包中 require 的寻址顺序一直是子包及父级地址而不是项目及父级地址？
因为使用了 `yarn link`，所以会顺着子包及父级向上寻址
<div style='margin-top: 30px'></div>

#### 2. 为啥项目中的依赖的依赖要用 dependencies?
因为项目安装该依赖后并不会安装该依赖的 `devDependencies` 类型依赖，他是开发时依赖。所以开发 `npm` 的时候注意一些 `require` 的运行时用的包一定要装在 `dependencies` 中
<div style='margin-top: 50px'></div>

### pnpm 知识扫盲
当你安装一个软件包，我们把它保存在你的机器上的一个全局存储目录中，然后我们创建一个硬链接而不是复制。 对于模块的每个版本，只会有一个副本保存在磁盘上。当使用 `npm` 或 `yarn` 时，如果有 *100* 个使用 `lodash` 的项目，你的磁盘上就会有有 *100* 份 `lodash` 的拷贝。`pnpm` 能帮助您节省千兆字节的磁盘空间！
- [为什么用pnpm](https://segmentfault.com/a/1190000013214927)
- [pnmp官网](https://pnpm.io/zh/motivation)

<div style='margin-top: 50px'></div>

### yarn2知识扫盲
`yarn2` 将不再存在 `node_modules` 文件夹，所有的依赖都会被压缩成一个文件放在特定的地方
- [yarn2功能](https://zhuanlan.zhihu.com/p/107343333)