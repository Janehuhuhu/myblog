### commit id 丢失的场景
### 1. git reset —hard xx
如果已经被 `push` 到远程仓库，`git reset —hard xx` 后再强推出去，那就看不到 `commit id`了
<div style='margin-top: 50px'></div>

### 2. 删除分支
删除分支会丢失所有的 `commit id`， 但是如果该分支 *A* 合并到了其他分支上 *B* ，删除 *A* 分支，依然可以在 *B* 分支上看到 *A* 的提交记录
<div style='margin-top: 50px'></div>

### 3. git commit —amend
执行该命令修改上一次提交的 *msg*, 然后再执行强推
<div style='margin-top: 50px'></div>

### 4. git rebase -i xxx
多个 `commit` 合并成一个
<div style='margin-top: 50px'></div>

### 🔗 相关链接2
- [git amend](https://zhuanlan.zhihu.com/p/100243017)
- [git rebase -i](https://blog.51cto.com/u_15230485/2821427)