### 常用 nginx 命令(mac系统)
***

### 💡 常用命令

1. 启动 nginx 
```js
sudo nginx
```
<br>

2. 重启 nginx 
```js
sudo nginx -s reload
```
<br>

3. 停止 nginx 
```js
sudo nginx -s stop
```
<br>

4. 检查 nginx 配置语法
<br>
在启动 Nginx 服务之前，可以检查它的配置语法是否正确。尤其是当你修改或添加配置时很有用。命令如下：

```js
sudo nginx -t 
```

输出结果如下，即为配置正常

```js
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok 
nginx: configuration file /etc/nginx/nginx.conf test is successful 
```
<div style='margin-top: 50px'></div>


### 🔗 相关链接
- [10个常用nginx指令](http://www.fly63.com/article/detial/6544)
- [mac系统下常用nginx指令](https://www.jianshu.com/p/05900b778395)