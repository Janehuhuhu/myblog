(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{440:function(t,a,s){"use strict";s.r(a);var e=s(45),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"nginx缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx缓存"}},[t._v("#")]),t._v(" Nginx缓存")]),t._v(" "),s("hr"),t._v(" "),s("h3",{attrs:{id:"开启缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开启缓存"}},[t._v("#")]),t._v(" 开启缓存")]),t._v(" "),s("ul",[s("li",[t._v("levels=1:2，缓存目录分为两级，第一级文件夹命名用一个字母，第二级文件夹用两个字母命名，最多三级。")]),t._v(" "),s("li",[t._v("keys_zone=cache0:10m，内存缓存区域10M，名字为 cache0。在共享内存中设一块存储区域来存放缓存的 "),s("code",[t._v("key")]),t._v(" 和 "),s("code",[t._v("metadata")]),t._v("，这样 "),s("code",[t._v("nginx")]),t._v(" 可以快速判断一个request 是否命中或者未命中缓存，1m 可以存储 8000 个 "),s("code",[t._v("key")]),t._v("，10m 可以存储 80000 个 "),s("code",[t._v("key")])]),t._v(" "),s("li",[t._v("inactive=1d，有效期为 1 天，如果缓存内容在一天中没人访问则被删除")]),t._v(" "),s("li",[t._v("max_size=30g，硬盘空间中的 30G 做磁盘缓存，如果不指定，会使用掉所有 "),s("code",[t._v("disk\tspace")]),t._v("，当达到配额后，会删除最少使用的 "),s("code",[t._v("cache")]),t._v(" 文件")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("在 http 配置中添加\n#设置缓存临时路径\nproxy_temp_path\t"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cache"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("proxy_temp_dir"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n#缓存路径及配置\nproxy_cache_path\t "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cache"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("proxy_dir\t levels"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\t keys_zone"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("cache0"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("m\t\ninactive"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("d\tmax_size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("g"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\t\n")])])]),s("div",{staticStyle:{"margin-top":"50px"}}),t._v(" "),s("h3",{attrs:{id:"缓存策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#缓存策略"}},[t._v("#")]),t._v(" 缓存策略")]),t._v(" "),s("p",[t._v("缓存的是 "),s("code",[t._v("http://www.ayitula.com")]),t._v(" 服务器的内容")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("proxy_pass\thttp"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("www"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ayitula"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nproxy_cache cache0"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  # 采用的缓存策略是上述的cache0\nproxy_cache_valid\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("304")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  # 请求码返回"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v("和"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("304")]),t._v("的都缓存"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("min\nproxy_cache_valid\tany\t"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  # 其他都缓存"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("min\nproxy_cache_key\t$host$uri$is_args$args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  #缓存的key值\nproxy_set_header\tHost\t$host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nproxy_set_header\t"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("For\t$remote_addr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticStyle:{"margin-top":"50px"}}),t._v(" "),s("h3",{attrs:{id:"url刷新-删除缓存"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#url刷新-删除缓存"}},[t._v("#")]),t._v(" URL刷新（删除缓存）")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("location "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),s("span",{pre:!0,attrs:{class:"token regex"}},[s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("purge(")]),s("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  allow "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  # 只能某些机器可以执行该项删除缓存操作\n  allow "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".11")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  proxy_cache_purge cache0 $host$"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("$is_args$args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   #删除cache0策略中的key值为xxx的资源\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticStyle:{"margin-top":"50px"}}),t._v(" "),s("h3",{attrs:{id:"🔗相关链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#🔗相关链接"}},[t._v("#")]),t._v(" 🔗相关链接")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://blog.csdn.net/h13140995776/article/details/101174283",target:"_blank",rel:"noopener noreferrer"}},[t._v("nginx缓存"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=r.exports}}]);