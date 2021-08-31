### history 和 hash 模式
***

### 简介
`vue` 是渐进式前端开发框架，为了实现 `SPA` ，需要引入前端路由系统（`vue-router`）。前端路由的核心是：改变视图的同时不会向后端发出请求。为了达到这一目的，浏览器提供了 `hash` 和 `history` 两种模式。

`hash` 虽然出现在 `URL` 中，但不会被包含在 `http` 请求中，对后端完全没有影响，因此改变 `hash` 不会重新加载页面。

`history` 利用了 `html5 history interface` 中新增的 `pushState()` 和 `replaceState()` 方法。这两个方法应用于浏览器记录栈，在当前已有的 `back、forward、go` 基础之上，它们提供了对历史记录修改的功能。只是当它们执行修改时，虽然改变了当前的 `URL` ，但浏览器不会立即向后端发送请求。因此可以说， `hash` 模式和 `history` 模式都属于浏览器自身的属性，`vue-router` 只是利用了这两个特性（通过调用浏览器提供的接口）来实现路由。
<div style='margin-top: 50px'></div>

### 原理
#### 1. hash
`hash` 模式的原理是 `onhashchange` 事件，可以在 `window` 对象上监听这个事件。

`hash` 发生变化的 `url` 都会被浏览器记录下来，从而你会发现浏览器的前进后退都可以使用了，同时点击后退时，页面字体颜色也会发生变化。这样一来虽然没有向后端发送请求，但是页面状态和 `url` 关联在了一起，这就是前端路由
```js
window.onhashchange = function(event){
  console.log(event.oldURL, event.newURL);
  let hash = location.hash.slice(1);
  document.body.style.color = hash;
}
```
<div style='margin-top: 30px'></div>

#### 2. history
`hashchange` 只能改变 **#** 后面的代码片段，`history api （pushState、replaceState、go、back、forward）` 则给了前端完全的自由，通过在 `window` 对象上监听 `popState()` 事件
```js
pushState()、replaceState() 方法接收三个参数：stateObj、title、url。

// 设置状态
history.pushState({color: "red"}, "red", "red");

// 监听状态
window.onpopstate = function(event){
    console.log(event.state);
    if(event.state && event.state.color === "red"){
        document.body.style.color = "red";
    }
}

// 改变状态
history.back();
history.forward();
```
通过 `pushState` 把页面的状态保存在 `state` 对象中，当页面的 `url` 再变回到这个 `url` 时，可以通过 `event.state` 取到这个 `state` 对象，从而可以对页面状态进行还原，如页面滚动条的位置、阅读进度、组件的开关等

<div style='margin-top: 50px'></div>

### 🔗相关链接
- [history和hash模式的区别](https://juejin.cn/post/6844903625169502216)
- [history和hash模式详解](https://blog.csdn.net/Charissa2017/article/details/104779412)
- [replaceState和pushState的区别](https://www.jianshu.com/p/bb5f9263e169)
