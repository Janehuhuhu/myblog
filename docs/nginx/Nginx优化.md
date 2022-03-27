### Nginx优化
***

### 优化目的
标准情况下，软件默认的参数都是对安装软件的硬件标准来设置的，⽬前我们服务器的硬件资源远远⼤于要求的标准，所以为了让服务器性能更加出众，充分利⽤服
务器的硬件资源，我们⼀般需要优化APP的并发数来提升服务器的性能。
<div style='margin-top: 50px'></div>

### 并发优化
```js
#启动工作进程数量
worker_processes  4;

#cpu亲和力，指定进程运行的核的编号，采用掩码的方式设置编号。保证每个核上都有一个进程
worker_cpu_affinity   0001 0010 0100 1000;

#单个工作进程维护的请求队列长度
events {
  worker_connections  1024;
}
```
<div style='margin-top: 50px'></div>

### 长链接
减少服务器维护因为与客户端建立http连接产生的大量tcp三次握手四次断开的开销
```js
keepalive_timeout  0;  0代表关闭
#keepalive_timeout  100;
#keepalive_requests 8192;
```
<div style='margin-top: 50px'></div>

### 压缩
降低传输时间，增加用户体验度；降低公司带宽费用。
```js
gzip  on;
gzip_proxied any;
gzip_min_length 1k;
gzip_buffers 4 8k;
gzip_comp_level 6;
gzip_types text/plain text/css application/x-javascript application/javascript application/xml;

# 开启gzip
  gzip off;

#gzip_proxied，Nginx做为反向代理的时候启用：
	off – 关闭所有的代理结果数据压缩
	expired – 如果header中包含”Expires”头信息，启用压缩
	no-cache – 如果header中包含”Cache-Control:no-cache”头信息，启用压缩
	no-store – 如果header中包含”Cache-Control:no-store”头信息，启用压缩
	private – 如果header中包含”Cache-Control:private”头信息，启用压缩
	no_last_modified – 启用压缩，如果header中包含”Last_Modified”头信息，启用压缩
	no_etag – 启用压缩，如果header中包含“ETag”头信息，启用压缩
	auth – 启用压缩，如果header中包含“Authorization”头信息，启用压缩
	any – 无条件压缩所有结果数据

# 启用gzip压缩的最小文件，小于设置值的文件将不会压缩
  gzip_min_length 1k;

# gzip 压缩级别，1-9，数字越大压缩的越好，也越占用CPU时间，后面会有详细说明
  gzip_comp_level 1;

# 进行压缩的文件类型。javascript有多种形式。其中的值可以在 mime.types 文件中找到。
  gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png application/vnd.ms-fontobject font/ttf font/opentype font/x-woff image/svg+xml;

# 增加响应头”Vary: Accept-Encoding”，是否在http header中添加Vary: Accept-Encoding，建议开启
  gzip_vary on;

# 禁用IE 6 gzip
  gzip_disable "MSIE [1-6]\.";

# 设置压缩所需要的缓冲区大小     
  gzip_buffers 32 4k;

# 设置gzip压缩针对的HTTP协议版本
  gzip_http_version 1.0;
```

<div style='margin-top: 50px'></div>

### 静态缓存
将部分数据缓存在用户本地磁盘，用户加载时，如果本地和服务器的数据一致，则从本地加载。提升用户访问速度，提升体验度。节省公司带宽成本。
```js
#expires指令：开启缓存并指定静态缓存时间
location ~*  \.(png|gif)$ {
  expires 1h;
}
```
<div style='margin-top: 50px'></div>

### 🔗相关链接