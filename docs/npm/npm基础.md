## npm install原理
[npm install原理](https://cloud.tencent.com/developer/article/1555982)
<div style='margin-top: 50px'></div>

## npm - 发包注意事项
[发包基础](https://juejin.cn/post/6844903870678695943?utm_source=weibo&utm_campaign=user%3Futm_source%3Dweibo&utm_campaign=user)、[npm version常用命令](https://blog.csdn.net/weixin_40817115/article/details/90384398)
<div style='margin-top: 50px'></div>

## 修改 registry
```js
// 设置
npm config set registry https://registry.npm.taobao.org 

// 获取
npm get registry
```
上述获取或设置的均是全局参数，如果想要修改某个仓库的：
```js
// 使用 .npmrc 文件
registry = http://registry.npm.taobao.org

// 或者
npm install PACKAGE_NAME --registry https://registry.npm.taobao.org
```
<div style='margin-top: 50px'></div>

## pnpm 和 yarn2
### 4.1 为什么会引入 pnpm 和 yarn2 的概念
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

### 4.2 常见问题
#### 4.2.1 为什么子包中 require 的寻址顺序一直是子包及父级地址而不是项目及父级地址？
因为使用了 `yarn link`，所以会顺着子包及父级向上寻址
<div style='margin-top: 30px'></div>

#### 4.2.2 为啥项目中的依赖的依赖要用 dependencies?
因为项目安装该依赖后并不会安装该依赖的 `devDependencies` 类型依赖，他是开发时依赖。所以开发 `npm` 的时候注意一些 `require` 的运行时用的包一定要装在 `dependencies` 中
<div style='margin-top: 50px'></div>

### 4.3 pnpm 知识扫盲
当你安装一个软件包，我们把它保存在你的机器上的一个全局存储目录中，然后我们创建一个硬链接而不是复制。 对于模块的每个版本，只会有一个副本保存在磁盘上。当使用 `npm` 或 `yarn` 时，如果有 *100* 个使用 `lodash` 的项目，你的磁盘上就会有有 *100* 份 `lodash` 的拷贝。`pnpm` 能帮助您节省千兆字节的磁盘空间！
- [为什么用pnpm](https://segmentfault.com/a/1190000013214927)
- [pnmp官网](https://pnpm.io/zh/motivation)

<div style='margin-top: 50px'></div>

### 4.4 yarn2知识扫盲
`yarn2` 将不再存在 `node_modules` 文件夹，所有的依赖都会被压缩成一个文件放在特定的地方
- [yarn2功能](https://zhuanlan.zhihu.com/p/107343333)
<div style='margin-top: 50px'></div>


## npmrc 生效问题
- 在终端执行 *yarn add xxx*, 读取配置优先级为项目配置、用户、全局、*npm* 本身的配置，*yarn* 和 *npm* 读取的都是 *.npmrc* 的配置

- 在子进程中，*yarn* 读取的是配置全局 *yarnrc*，项目用户配置 *npmrc、yarnrc* 均不生效。*npm* 命令读取的是 *.npmrc*, 优先级同 参考：
[npmrc配置优先级](https://yanyinhong.github.io/2017/05/01/The-priority-of-npm-config/)
[npmrc配置方式](https://juejin.cn/post/6983522411647860766)

<div style='margin-top: 50px'></div>

## 计算包体积
```js
// 终端执行以下命令，即可计算 node_modules 体积
du -hd 0 node_modules
```

## FAQ
6.1 Q: 报错 *name cannot start with an underscore; name can only contain URL-friendly characters*

A: 
- 场景：在没有通过 `npm init` 初始化目录的情况下，直接通过 `cnpm` 命令安装模块，在卸载模块时报错<br>
- 原因分析：通过 `cnpm` 命令安装模块时，会同时生成带下划线的文件（eg: _jquery@3.4.1@jquery)，不符合命名规范（根据报错提示）
- 解决方案：
  - 方案一：安装模块时用npm，非cnpm(不建议)
  - 方案二：先通过npm init初始化目录，生成包管理文件package.json，再安装模块（npm/cnpm）　
  - 方案三：安装包时后面加-D，会自动生成package.json文件
  如果无法卸载，可直接安装另一版本覆盖。
<div style='margin-top: 30px'></div>


6.2 Q: *xxxxx is not a loader (must have normal or pitch function)*<br>
  A: 某安装包版本不匹配。

<div style='margin-top: 100px'></div>