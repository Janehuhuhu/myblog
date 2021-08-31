(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{371:function(t,r,s){t.exports=s.p+"assets/img/proxy1.ac7a6453.jpeg"},372:function(t,r,s){t.exports=s.p+"assets/img/proxy2.45f98723.jpeg"},373:function(t,r,s){t.exports=s.p+"assets/img/proxy-use1.fe65e637.png"},374:function(t,r,s){t.exports=s.p+"assets/img/proxy-use2.61d6577f.png"},375:function(t,r,s){t.exports=s.p+"assets/img/proxy-use3.5902b01d.png"},433:function(t,r,s){"use strict";s.r(r);var a=s(45),e=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反向代理"}},[t._v("#")]),t._v(" 反向代理")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("代理在网络中使用是比较常见的，比如我们说的最多的就是翻墙软件，比如ss、蓝灯等这些大家常用的软件，他们就是能改代理大家访问国内无法访问的一些国外网站，比如facebook、YouTube等网站。其原理也比较简单："),a("br"),t._v("\n1）用户将请求发给代理服务器"),a("br"),t._v("\n2）代理服务器代用户去访问数据"),a("br"),t._v("\n3）代理服务器将数据给用户"),a("br")]),t._v(" "),a("p",[t._v("代理服务器扮演的就是一个中间人的角色。代理分为正向代理和反向代理两种类型：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("正向代理：由于防火墙的原因，我们并不能直接访问谷歌，那么我们可以借助VPN来实现，这就是一个简单的正向代理的例子。这里你能够发现，正向代理“代理”的是客户端，而且客户端是知道目标的，而目标是不知道客户端是通过VPN访问的"),a("br"),t._v(" "),a("img",{staticStyle:{"margin-top":"20px"},attrs:{src:s(371),width:"400px"}})])]),t._v(" "),a("li",[a("p",[t._v("反向代理：当我们在外网访问百度的时候，其实会进行一个转发，代理到内网去，这就是所谓的反向代理，即反向代理“代理”的是服务器端，而且这一个过程对于客户端而言是透明的。"),a("br"),t._v(" "),a("img",{staticStyle:{"margin-top":"20px"},attrs:{src:s(372),width:"400px"}})])])]),t._v(" "),a("div",{staticStyle:{"margin-top":"50px"}}),t._v(" "),a("h3",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("堡垒机：堡垒机承担所有的外部访问，保护后端服务器的安全。因为数据都在后端服务器上，即使代理服务器被黑了，也无法获取数据资源"),a("br"),t._v(" "),a("img",{staticStyle:{"margin-top":"20px"},attrs:{src:s(373),width:"400px"}}),t._v(" "),a("br")])]),t._v(" "),a("li",[a("p",[t._v("业务发布服务器：将多个服务器通过虚拟主机的方式发布到公网，如适用于只有一个"),a("code",[t._v("IP")]),t._v("的场景"),a("br"),t._v(" "),a("img",{staticStyle:{"margin-top":"20px"},attrs:{src:s(374),width:"400px"}}),t._v(" "),a("br")])]),t._v(" "),a("li",[a("p",[t._v("缓存服务器：CDN加速，如将静态资源放在代理服务器上，动态资源通过代理服务器再去访问"),a("br"),t._v(" "),a("img",{staticStyle:{"margin-top":"20px"},attrs:{src:s(375),width:"400px"}})]),a("div",{staticStyle:{"margin-top":"60px"}}),a("p")])]),t._v(" "),a("h3",{attrs:{id:"反向代理原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#反向代理原理"}},[t._v("#")]),t._v(" 反向代理原理")]),t._v(" "),a("p",[t._v("1）客户端通过浏览器发起请求代理服务器"),a("br"),t._v("\n2）代理服务器接受请求"),a("br"),t._v("\n3）代理服务器发起请求业务服务器"),a("br"),t._v("\n4）业务服务器接受请求"),a("br"),t._v("\n5）业务服务器处理请求"),a("br"),t._v("\n6）业务服务器响应请求代理服务器"),a("br"),t._v("\n7）代理服务器响应请求客户端"),a("br"),t._v("\n8）客户端通过浏览器渲染请求并展示给用户"),a("br")]),a("div",{staticStyle:{"margin-top":"50px"}}),a("p"),t._v(" "),a("h3",{attrs:{id:"接入方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#接入方式"}},[t._v("#")]),t._v(" 接入方式")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  index index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("php index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" #定义首页索引文件的名称\n  proxy_pass http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("mysvr "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   #请求转向mysvr 定义的服务器列表\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("反向代理优化")]),t._v(" "),a("p",[t._v("proxy_set_header Host $host;   #修改请求头，添加Host字段")]),t._v(" "),a("p",[t._v("proxy_set_header X-Real-IP $remote_addr;   #修改请求头，添加X-Real-IP字段")]),t._v(" "),a("p",[t._v("proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;   #修改请求头，添加X-Forwarded-For字段")]),t._v(" "),a("p",[t._v("client_max_body_size 10m;    #允许客户端请求的最大单文件字节数")]),t._v(" "),a("p",[t._v("client_body_buffer_size 128k;  #缓冲区代理缓冲用户端请求的最大字节数，")]),t._v(" "),a("p",[t._v("proxy_connect_timeout 90;  #nginx跟后端服务器连接超时时间(代理连接超时)")]),t._v(" "),a("p",[t._v("proxy_send_timeout 90;        #后端服务器数据回传时间(代理发送超时)")]),t._v(" "),a("p",[t._v("proxy_read_timeout 90;         #连接成功后，后端服务器响应时间(代理接收超时)")]),t._v(" "),a("p",[t._v("proxy_buffer_size 4k;             #设置代理服务器（nginx）保存用户头信息的缓冲区大小")]),t._v(" "),a("p",[t._v("proxy_buffers 4 32k;               #proxy_buffers缓冲区，网页平均在32k以下的话，这样设置")]),t._v(" "),a("p",[t._v("proxy_busy_buffers_size 64k;    #高负荷下缓冲大小（proxy_buffers*2）")]),t._v(" "),a("p",[t._v("proxy_temp_file_write_size 64k;  #设定缓存文件夹大小，大于这个值，将从upstream服务器传")])]),t._v(" "),a("div",{staticStyle:{"margin-top":"50px"}}),t._v(" "),a("h3",{attrs:{id:"🔗相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#🔗相关链接"}},[t._v("#")]),t._v(" 🔗相关链接")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/34943332",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入浅出nginx"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=e.exports}}]);