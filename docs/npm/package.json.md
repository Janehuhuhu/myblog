### package.json
***

#### main 和 module 字段
##### 1. main
字段指定了程序的主入口文件，使用遵循 `CommonJS` 规范的 `require('moduleName')` 就会加载 `main` 字段指定的目录下的文件。这个字段的默认值是模块根目录下面的 `index.js`，也就是说如果不指定`main` 字段，在其他模块引用此模块会默认加载根目录下的 `index.js` 文件

##### 2. module
此字段指定了使用 `ES6` 的 `module` 模块引入该模块时加载的文件路径，即使用 `import 'xx' from './xx'` 所指定的路径, [main、module、brower 优先级](https://github.com/SunshowerC/blog/issues/8)
