### Nginx缓存
***

### 开启缓存
- levels=1:2，缓存目录分为两级，第一级文件夹命名用一个字母，第二级文件夹用两个字母命名，最多三级。
- keys_zone=cache0:10m，内存缓存区域10M，名字为 cache0。在共享内存中设一块存储区域来存放缓存的 `key` 和 `metadata`，这样 `nginx` 可以快速判断一个request 是否命中或者未命中缓存，1m 可以存储 8000 个 `key`，10m 可以存储 80000 个 `key`
- inactive=1d，有效期为 1 天，如果缓存内容在一天中没人访问则被删除
- max_size=30g，硬盘空间中的 30G 做磁盘缓存，如果不指定，会使用掉所有 `disk	space`，当达到配额后，会删除最少使用的 `cache` 文件

```js
在 http 配置中添加
#设置缓存临时路径
proxy_temp_path	/cache/proxy_temp_dir;
#缓存路径及配置
proxy_cache_path	 /cache/proxy_dir	 levels=1:2	 keys_zone=cache0:10m	
inactive=1d	max_size=30g;	
```
<div style='margin-top: 50px'></div>


### 缓存策略
缓存的是 `http://www.ayitula.com` 服务器的内容

```js
proxy_pass	http://www.ayitula.com;
proxy_cache cache0;  # 采用的缓存策略是上述的cache0
proxy_cache_valid	200	304	30m;  # 请求码返回200和304的都缓存30min
proxy_cache_valid	any	1m;  # 其他都缓存1min
proxy_cache_key	$host$uri$is_args$args;  #缓存的key值
proxy_set_header	Host	$host;
proxy_set_header	X-Forwarded-For	$remote_addr;
```
<div style='margin-top: 50px'></div>


### URL刷新（删除缓存）
```js
location ~/purge(/.*)
{
  allow 127.0.0.1;  # 只能某些机器可以执行该项删除缓存操作
  allow 192.168.11.0/24;
  proxy_cache_purge cache0 $host$1$is_args$args;   #删除cache0策略中的key值为xxx的资源
}
```
<div style='margin-top: 50px'></div>

### 🔗相关链接
- [nginx缓存](https://blog.csdn.net/h13140995776/article/details/101174283)