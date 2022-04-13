### package.json
## main 和 module 字段
### main
字段指定了程序的主入口文件，使用遵循 `CommonJS` 规范的 `require('moduleName')` 就会加载 `main` 字段指定的目录下的文件。这个字段的默认值是模块根目录下面的 `index.js`，也就是说如果不指定`main` 字段，在其他模块引用此模块会默认加载根目录下的 `index.js` 文件

### module
此字段指定了使用 `ES6` 的 `module` 模块引入该模块时加载的文件路径，即使用 `import 'xx' from './xx'` 所指定的路径, [main、module、brower 优先级](https://github.com/SunshowerC/blog/issues/8)
<div style='margin-top: 50px'></div>


## peerDependencies
通常是在插件开发的场景下，你的插件需要某些依赖的支持，但是你又没必要去安装，因为插件的宿主会去安装这些依赖，你就可以用 [peerDependencies](https://arayzou.com/2016/06/23/peerDependencies%E4%BB%8B%E7%BB%8D%E5%8F%8A%E7%AE%80%E6%9E%90/) 去声明一下需要依赖的插件和版本，如果出问题 `npm` 就会有警告来提醒使用者去解决版本冲突问题。<br>

在 `npm2` 中，`PackageA` 包中 `peerDependencies` 所指定的依赖会随着 `npm install PackageA` 一起被强制安装，所以不需要在宿主环境的 `package.json` 文件中指定对 `PackageA` 中`peerDependencies` 内容的依赖 。<br>

`npm3` 中不会再要求 `peerDependencies` 所指定的依赖包被强制安装，相反 `npm3` 会在安装结束后检查本次安装是否正确，如果不正确会给用户打印警告提示。[参考](https://www.cnblogs.com/wonyun/p/9692476.html)<br>

注意点：`peerDependencies` 并不会帮你安装依赖，只是使用宿主环境的依赖，如果 `npm3` 版本不合适，只会 `warning`
<div style='margin-top: 50px'></div>


## resolutions
`yarn` 通过识别 `package.json` 中的 `resolutions` 字段，来强制指定子依赖的版本。如你可能会依赖一个不经常更新的软件包,而这个软件包依赖于另一个有重要升级的软件包，在这种情况下,如果你的直接依赖所指定的版本范围没有涵盖新的子依赖版本,你就只能等待作者。[详情说明](https://runebook.dev/zh-CN/docs/yarn/selective-version-resolutions)

```js
{
  "name": "project",
  "version": "1.0.0",
  "dependencies": {
    "left-pad": "1.0.0",
    "c": "file:../c-1",
    "d2": "file:../d2-1"
  },
  "resolutions": {
    "d2/left-pad": "1.1.1",
    "c/**/left-pad": "^1.1.2"
  }
}
```
