### Nginx镜像服务器
***

### 介绍
直接把静态⽂件在本地硬盘创建并读取，类似于七⽜或者⼜拍这样的镜像`CDN`功能，⾸次访问会⾃动获取源站的静态图⽚等⽂件，之后的访问就是直接从缓存服务器读取，加快了速度。
<div style='margin-top: 50px'></div>

### 应用场景
- ⼤⽂件缓存策略
- 缓存时间⻓，⼀般不会删除
<div style='margin-top: 50px'></div>

### 接入方式
```js
location / {
  root html;  #指定缓存文件的保存目录
  autoindex on;
  proxy_store on; #开启镜像服务
  proxy_store_access user:rw group:rw all:r; #缓存本地存储⽂件的权限
  proxy_temp_path /usr/local/nginx/html/temp; #本地临时缓存⽬录，用于存储下载过程。最终文件还是存储在html中的

  #判断本地⽬录中是否有⽂件，没有就去取源
  if ( !-e $request_filename ) {
    proxy_pass http://www.runoob.com;
  }
}
```

<div style='margin-top: 50px'></div>

### 🔗相关链接
- [nginx临时缓存和永久缓存](https://blog.csdn.net/xiaoxiao_yingzi/article/details/93197397?utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-5.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-5.control)