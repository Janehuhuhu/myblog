## charles
`mac` 环境
### 🍳 简介
`Charles` 是在 `Mac` 下常用的网络封包截取工具，在做移动开发时，我们为了调试与服务器端的网络通讯协议，常常需要截取网络封包来分析。

`Charles` 通过将自己设置成系统的网络访问代理服务器，使得所有的网络访问请求都通过它来完成，从而实现了网络封包的截取和分析。

除了在做移动开发中调试端口外，`Charles` 也可以用于分析第三方应用的通讯协议。配合 `Charles` 的 `SSL` 功能，`Charles` 还可以分析 `Https` 协议。

<div style='margin-top: 50px'></div>

### 安装
#### 1. 下载
[Charles官网](www.charlesproxy.com)下载安装包，下载成功后根据指示安装即可
<img src='./imgs/install.jpeg' width='350px'>

#### 2. 激活
::: tip
Charles激活码：
- Registered Name: https://zhile.io
- License Key: 48891cf209c6d32bf4
:::
打开 `Charles`，`help→Registered to`，输入账号和 `key` 提交破解成功就可以正常使用啦！

<img src='./imgs/motivate.jpeg' width='500px'>
<div style='margin-top: 50px'></div>

### HTTPS 代理设置
#### 1. 安装证书
`Help -> SSL Proxying -> Install Charles Root Certificate` -> 输入系统的帐号密码，即可在钥匙串中看到添加好的证书

<img src='./imgs/install-certificate.jpeg' width='500px'>
<div style='margin-top: 30px'></div>

#### 2. 信任证书
Mac本顶栏 前往 -> 实用工具 -> 打开钥匙串访问 -> 找到该证书 -> 双击或右键「显示简介」-> 点开「信任」-> 选择「始终信任」

<img src='./imgs/trust.jpeg' width='500px'>
<div style='margin-top: 30px'></div>

#### 3. 允许 SSL proxying
`Charles` 默认并不抓取 `HTTPS` 网络通讯的数据，若想拦截所有 `HTTPS` 网络请求，需要进行设置：
- 方法一： 在请求上右击选择 `Enable SSL proxying`

<img src='./imgs/enable-ssl.jpeg' width='300px'>

- 方法二：`Charles -> Proxy -> SSL Proxying Settings -> SSL Proxying`「添加对应的域名和端口号，为方便也可端口号直接添加通配符 *

<img src='./imgs/enable-ssl2.png' width='400px'>
<div style='margin-top: 50px'></div>

### Map Remote 功能
在 `Charles` 的菜单中，选择 `“Tools”–>“Map Remote”` 即可进入到相应功能的设置页面

<img src='./imgs/map-remote.png' width='400px'>

对于 `Map Remote` 功能，我们需要分别填写网络重定向的源地址和目的地址，对于不需要限制的条件，可以留空。下图是一个示例，我将所有 `https://e.dianping.com/college/index.html` (原资源地址)的请求重定向到了 `https://e.dianping.com/rome-canary/nibfe/migrate-node-merchant-college-app-web/index.html`（灰度固定路径地址）

<img src='./imgs/map-url.png' width='400px'>

<div style='margin-top: 50px'></div>

### 常见问题
#### 1. 报错SSL Proxying not enabled for this host:enable in Proxy Setting,SSL locations
未设置要抓包 `https` 域名, [详情](https://www.cnblogs.com/cynthia-wuqian/p/8327939.html)

<div style='margin-top: 50px'></div>

### 🔗 相关链接
- [charles安装](https://juejin.cn/post/6844903733478817800)
- [charles使用详细教程](https://juejin.cn/post/6844903665304600589)
- [charles功能介绍](https://www.jianshu.com/p/fea896b0dee3)
- [charles使用教程](https://zhuanlan.zhihu.com/p/140942687)
- [markdown](http://tseven.top/2017/markdown/)