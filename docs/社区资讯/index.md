## jsome
**2021-09-06**
### 简介
美化在控制台打印的 `json`
<div style='margin-top: 30px'></div>

### 举例
```js
// 安装
yarn add jsome
yarn global add jsom

// 使用
var jsome = require('jsome')
jsome([{"id":1,"email":"Khalid@Morocco.ma","active":true},{"id":2,"email":"Someone@somewhere.com","active":false},{"id":3,"email":"chinese@bamboo.tree","active":true}])
```
效果展示：

<img src='./imgs/jsome.png' width='350px'>

<div style='margin-top: 30px'></div>

### 🔗 链接
- [jsome](https://github.com/Javascipt/Jsome)
<div style='margin-top: 50px'></div>

## parse-domain
解析一个主机名为域名、子域名、定级域名 [parse-domain](https://github.com/peerigon/parse-domain)

<div style='margin-top: 50px'></div>


## patch-package
`patch-package` 用打补丁的办法能快速修复第三方包的 *bug*, 而不用等待第三方包的修复。也可以适用于第三方包虽然修复了，但是又引入新 *bug* 的情况。[patch-package](https://www.npmjs.com/package/patch-package)

快速使用：在 *node_modules* 中修复 *bug* 后，执行 *npx patch-package xxx*, 内部通过比较修复后和源码，生成 *.patch* 文件，提交后其他开发同学即可使用修复后的第三方包 [案例](https://juejin.cn/post/6962554654643191815)