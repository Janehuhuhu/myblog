(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{413:function(t,s,a){t.exports=a.p+"assets/img/old-request.4238f38d.png"},414:function(t,s,a){t.exports=a.p+"assets/img/new-request.e7bd645d.png"},448:function(t,s,a){"use strict";a.r(s);var n=a(45),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h2",{attrs:{id:"集群介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群介绍"}},[t._v("#")]),t._v(" 集群介绍")]),t._v(" "),n("h3",{attrs:{id:"传统web访问模型"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#传统web访问模型"}},[t._v("#")]),t._v(" 传统web访问模型")]),t._v(" "),n("img",{staticStyle:{"margin-top":"20px"},attrs:{src:a(413),width:"400px"}}),t._v(" "),n("br"),t._v(" "),n("p",[n("strong",[t._v("1. 完成一次请求的步骤")]),n("br"),t._v("\n1）用户发起请求"),n("br"),t._v("\n2）服务器接受请求"),n("br"),t._v("\n3）服务器处理请求（压力最大）"),n("br"),t._v("\n4）服务器响应请求"),n("br")]),t._v(" "),n("p",[n("strong",[t._v("2. 传统模型缺点")])]),t._v(" "),n("ul",[n("li",[t._v("单点故障")]),t._v(" "),n("li",[t._v("单台服务器资源有限（客户端则是无限的）；")]),t._v(" "),n("li",[t._v("单台服务器处理耗时长（客户等待时间过长）；")])]),t._v(" "),n("p",[n("strong",[t._v("3. 传统模型优化——单点故障解决方案")]),n("br"),t._v("\n部署一台备份服务器，宕机直接切换该方案可以有效解决服务器故障导致的单点故障，但且服务器利用率低、成本高，切换不及时，且无法解决服务器业务压力问题。\n")]),n("div",{staticStyle:{"margin-top":"50px"}}),n("p"),t._v(" "),n("h3",{attrs:{id:"集群模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#集群模式"}},[t._v("#")]),t._v(" 集群模式")]),t._v(" "),n("img",{staticStyle:{"margin-top":"20px"},attrs:{src:a(414),width:"400px"}}),t._v(" "),n("div",{staticStyle:{"margin-top":"30px"}}),t._v(" "),n("p",[t._v("​两台负载均衡主机一个为主服务器，另外一个为备用服务器，他们，正常情况下，主服务器会绑定一个虚IP（Virtual IP），"),n("code",[t._v("DNS")]),t._v("将域名解析为虚拟"),n("code",[t._v("IP")]),t._v("，客户端的请求到达负载均衡器后，由负载均衡将请求交给后端的web服务器，如果主服务器宕机，则备用服务器会自动绑定这个虚拟IP，继续进行分发工作，这一切对于用户而言是透明的")]),t._v(" "),n("p",[t._v("​"),n("strong",[t._v("优点")]),t._v("： 不需要调整"),n("code",[t._v("dns")]),t._v("服务器，因为是用过相应的软件来实现负载均衡的，并且只需要一个公网"),n("code",[t._v("IP")]),t._v("地址做为虚拟"),n("code",[t._v("IP")]),t._v("就可以了，还能做到随时扩容，如果后端的"),n("code",[t._v("web")]),t._v("服务器宕机，负载均衡器会将其从分发列表里剔除，真正的实现的网站的高度可用，因为负载均衡器有备用服务机，"),n("code",[t._v("web")]),t._v("服务器也有备用机")]),t._v(" "),n("p",[n("strong",[t._v("缺点")]),t._v("： 软件上和硬件上都可以实现负载均衡，选择的时候要慎重，硬件上的设备需要资金投入，软件上的要根据自己的需求决定，如"),n("code",[t._v("LVS")]),t._v("不能实现动静分离；"),n("code",[t._v("NGINX")]),t._v("适用范围小，只能支持http，https等少数的协议；"),n("code",[t._v("HAProxy")]),t._v("不支持"),n("code",[t._v("POT/SMTP")]),t._v("协议，多进程模式不够好等。")]),t._v(" "),n("div",{staticStyle:{"margin-top":"80px"}}),t._v(" "),n("h2",{attrs:{id:"nginx集群原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx集群原理"}},[t._v("#")]),t._v(" nginx集群原理")]),t._v(" "),n("ul",[n("li",[n("p",[t._v("在Nginx集群中Nginx扮演的角色是：分发器")])]),t._v(" "),n("li",[n("p",[t._v("任务：接受请求、分发请求、响应请求")])]),t._v(" "),n("li",[n("p",[t._v("nginx集群的实质\nnginx 默认支持分发 他有一个自带模块 叫 "),n("code",[t._v("upstream")]),t._v(" 这就是 "),n("code",[t._v("nginx")]),t._v(" 的分发模块，也就是说 "),n("code",[t._v("nginx")]),t._v(" 分发是一个组合体，虚拟主机+反向代理+upstream，在这个组合中：")]),t._v(" "),n("ul",[n("li",[t._v("虚拟主机：负责接受和响应请求。")]),t._v(" "),n("li",[t._v("反向代理：带领用户去数据服务器拿数据。")]),t._v(" "),n("li",[t._v("upstream：告诉nginx去哪个数据服务器拿数据。")])])]),t._v(" "),n("li",[n("p",[t._v("数据包走向")])])]),t._v(" "),n("p",[t._v("​ 1）用户发起请求"),n("br"),t._v("\n​ 2）虚拟主机接受用户请求"),n("br"),t._v("\n​ 3）虚拟主机去找反向代理（问反向代理去哪拿数据）"),n("br"),t._v("\n​ 4）反向代理让去找upstream"),n("br"),t._v("\n​ 5）upstream告诉一个数据服务器IP"),n("br"),t._v("\n​ 6）Nginx去找数据服务器，并发起用户的请求"),n("br"),t._v("\n​ 7）数据服务器接受请求并处理请求"),n("br"),t._v("\n​ 8）数据服务器响应请求给Nginx"),n("br"),t._v("\n​ 9）Nginx响应请求给用户\n")]),n("div",{staticStyle:{"margin-top":"80px"}}),n("p"),t._v(" "),n("h2",{attrs:{id:"nginx分发算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx分发算法"}},[t._v("#")]),t._v(" nginx分发算法")]),t._v(" "),n("h3",{attrs:{id:"介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),n("p",[t._v("如何将用户请求按照一定的规律分发给业务服务器。主要分为Nginx集群默认算法和基于请求头分发算法。")]),t._v(" "),n("h3",{attrs:{id:"nginx集群默认算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx集群默认算法"}},[t._v("#")]),t._v(" nginx集群默认算法")]),t._v(" "),n("h4",{attrs:{id:"轮询算法-默认"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#轮询算法-默认"}},[t._v("#")]),t._v(" 轮询算法(默认)")]),t._v(" "),n("p",[t._v("每个请求按时间顺序逐一分配到不同的后端服务器，如果后端服务器 "),n("code",[t._v("down")]),t._v(" 掉，能自动剔除。用于处理静态页面")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("upstream web "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".42")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".43")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_name localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("# "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("42")]),t._v("机器down时访问"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("43")]),t._v("机器\nupstream web "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".42")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".43")]),t._v(" backup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_name localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticStyle:{"margin-top":"30px"}}),t._v(" "),n("h4",{attrs:{id:"基于权重"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于权重"}},[t._v("#")]),t._v(" 基于权重")]),t._v(" "),n("p",[t._v("指定权重，数值大的服务器，获得的请求的数量越多，用于后端服务器性能不均的情况。用于处理静态页面")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("# 通过配置权重，可以让性能好的服务器承担更多的负载\nupstream web "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  # 设置权重比例"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n  server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".42")]),t._v(" weight"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".43")]),t._v(" weight"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_name localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticStyle:{"margin-top":"30px"}}),t._v(" "),n("h4",{attrs:{id:"基于ip-hash分发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于ip-hash分发"}},[t._v("#")]),t._v(" 基于ip_hash分发")]),t._v(" "),n("p",[t._v("每个请求按访问ip的hash结果分配，这样每个访客固定访问一个后端服务，好处是可以解决session的问题。可以处理动态网站。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("# ip_hash算法能够保证来自同样源地址的请求都分发到同一台主机。需要注意：ip_hash算法不支持backup、weight设置。默认权重为"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("。\nupstream web "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  ip_hash"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    # 指定ip_hash即可，默认weight权重比例"),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".42")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".43")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  listen "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_name localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticStyle:{"margin-top":"30px"}}),t._v(" "),n("h4",{attrs:{id:"基于url的hash"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于url的hash"}},[t._v("#")]),t._v(" 基于url的hash")]),t._v(" "),n("p",[t._v("按访问url的hash结果来分配请求，使每个url定向到同一个后端服务 ，后端服务器为缓存时比较有效。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("# 不同的"),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("URL")]),t._v("我去找不同的机器访问，就是把url计算出一个值然后除以机器的数量取余 ，需要安装第三方插件\nworker_processes  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nevents "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  worker_connections  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nhttp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  include       mime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  default_type  application"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("octet"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("stream"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  sendfile        on"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  keepalive_timeout  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("65")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  upstream web "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    consistent_hash $request_uri"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".42")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".43")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen       "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name  localhost"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("web"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    error_page   "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),t._v("x"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      root   html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticStyle:{"margin-top":"80px"}}),t._v(" "),n("h2",{attrs:{id:"nginx基于请求头的分发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#nginx基于请求头的分发"}},[t._v("#")]),t._v(" nginx基于请求头的分发")]),t._v(" "),n("h3",{attrs:{id:"介绍-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#介绍-2"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),n("p",[t._v("前面的分发方式都是基于一个集群分发的，nginx是一个基于7层的分发也就是可以实现基于主机头的分发，这种分发一般都是用于多集群环境中。\n")]),n("div",{staticStyle:{"margin-top":"50px"}}),n("p"),t._v(" "),n("h3",{attrs:{id:"基于请求头分发算法"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于请求头分发算法"}},[t._v("#")]),t._v(" 基于请求头分发算法")]),t._v(" "),n("h4",{attrs:{id:"基于host分发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于host分发"}},[t._v("#")]),t._v(" 基于host分发")]),t._v(" "),n("p",[t._v("基于 "),n("code",[t._v("host")]),t._v(" 分发这种分发方式适用于多集群分发。例如：一个公司有多个网站，每个网站就是一个集群。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("#nginx分发器设置\nhttp "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  upstream web1 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   # 名为web1的反向代理群组\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".42")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  upstream web2 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   # 名为web2的反向代理群组\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".43")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    # web1虚拟主机\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name www"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    # 基于域名分发必须有域名\n    location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("web1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    # web2虚拟主机\n    listen "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name www"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    # 基于域名分发必须有域名 \n    location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("web2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticStyle:{"margin-top":"30px"}}),t._v(" "),n("h4",{attrs:{id:"基于开发语言分发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于开发语言分发"}},[t._v("#")]),t._v(" 基于开发语言分发")]),t._v(" "),n("p",[t._v("这种分发方式适用于混合开发的网站，某些大型网站既有 "),n("code",[t._v("php")]),t._v(" 也有 "),n("code",[t._v("jsp")]),t._v(" ，就可以基于开发语言分发。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("http "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  upstream php "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".42")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  upstream html "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".43")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" \\"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php$ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("    # 以php结尾的\n      proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("php"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n    location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" \\"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html$ "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("   # 以html结尾的\n      proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticStyle:{"margin-top":"30px"}}),t._v(" "),n("h4",{attrs:{id:"基于浏览器分发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于浏览器分发"}},[t._v("#")]),t._v(" 基于浏览器分发")]),t._v(" "),n("p",[t._v("这种基于浏览器的分发，常应用于 "),n("code",[t._v("PC")]),t._v(" 端和移动端区分或浏览器适配。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("upstream curl "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".42")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nupstream firefox "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".43")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nupstream other "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".44")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_name www"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("other"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" $http_user_agent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" curl "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("curl"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" $http_user_agent "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" firefox "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("firefox"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("div",{staticStyle:{"margin-top":"30px"}}),t._v(" "),n("h4",{attrs:{id:"基于源ip分发"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#基于源ip分发"}},[t._v("#")]),t._v(" 基于源IP分发")]),t._v(" "),n("p",[t._v("像腾讯新闻，网易，58同城，真爱，百合，赶集，智联等等很多网站,这种网站都有一个特性，你一访问，就知道你的位置，然后根据你的位置，给你推荐或者展示相关内容。也就是说我们可以让服务器对源 "),n("code",[t._v("IP")]),t._v(" 进行判断，根据判断的结果不同，再返回不同的数据给客户端；如果判断不出来，就按照默认去处理。如果想实现基于源 "),n("code",[t._v("IP")]),t._v(" 的分发我们需要一个叫 "),n("code",[t._v("geo")]),t._v(" 的参数，这个参数可以要根据客户端 "),n("code",[t._v("ip")]),t._v(" 访问到不同的 "),n("code",[t._v("server")]),t._v("，它是通过一个叫"),n("code",[t._v("ngx_http_geo_module")]),t._v(" 模块提供的。")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("upstream bj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".42")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    # web01\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nupstream sh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".43")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      # web02\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nupstream "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  server "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".44")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      # web03\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\ngeo $geo "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("       # "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v("库\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".10")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" bj"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("    # 北京\n  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v(".20")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),t._v(" sh"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   # 上海\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nserver "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  listen  "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  server_name   www"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("web1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  location "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    proxy_pass http"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("$geo"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("server$request_uri"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("如果客户端地址是 "),n("em",[t._v("0.10")]),t._v(" 就访问北京，如果是 "),n("em",[t._v("0.20")]),t._v(" 就访问上海，如果不是 "),n("em",[t._v("0.10")]),t._v(" 也不是 "),n("em",[t._v("0.20")]),t._v(" 就按照 "),n("code",[t._v("default")]),t._v(" 处理，线上环境这里面就是个 "),n("code",[t._v("IP")]),t._v(" 库 我现在没有 "),n("code",[t._v("ip")]),t._v(" 库只能写两个 "),n("code",[t._v("IP")]),t._v(" 来代表看下后面的掩码是32表示这一个网段只有这一个 "),n("code",[t._v("IP")]),t._v(" 吧，当然你也可以换成网段。")]),t._v(" "),n("p",[n("code",[t._v("http")]),t._v(" 后面加上 "),n("code",[t._v("$request_uri")]),t._v(" 的原因就是避免客户 找你拿数据的时候一指定 "),n("code",[t._v("URI")]),t._v(" 你就无法正常代理了，目的就是保证客户在访问类似 "),n("code",[t._v("http://www.a.com/a/b/c/d.jpg")]),t._v(" 这样的网址的时候可以正常访问 也就是说当用户请求的 "),n("code",[t._v("URL")]),t._v(" 当中的 "),n("code",[t._v("URI")]),t._v(" 跟着变化的时候你的代理服务器一样可以正常工作\n")]),n("div",{staticStyle:{"margin-top":"50px"}}),n("p"),t._v(" "),n("h3",{attrs:{id:"🔗相关链接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#🔗相关链接"}},[t._v("#")]),t._v(" 🔗相关链接")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://www.zutuanxue.com/home/4/9_393",target:"_blank",rel:"noopener noreferrer"}},[t._v("组团学"),n("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);