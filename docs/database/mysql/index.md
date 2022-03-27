## mysql 基础

## 常用命令
#### 1.修改列类型
```js
// 公式
ALTER TABLE 表名 MODIFY COLUMN 列名 类型;

// 操作单列
ALTER TABLE changelog MODIFY COLUMN removed LONGTEXT;

// 操作多列
ALTER TABLE changelog MODIFY COLUMN removed LONGTEXT, MODIFY COLUMN fixed LONGTEXT;
```
<div style='margin-top: 30px'></div>

#### 2.添加列
```js
// 公式
ALTER TABLE 表名 ADD COLUMN 列名 类型;

// 操作单列
ALTER TABLE changelog ADD COLUMN created_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);

// 操作多列
ALTER TABLE changelog ADD COLUMN created_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), ADD COLUMN updated_at datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6);
```
<div style='margin-top: 100px'></div>








