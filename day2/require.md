# 传统开发问题
- 全局作用域污染，变量冲突。
- JS引入顺序依赖问题。
- 不好维护，更新。
# 为什么要使用模块化
- 解决传统开发问题

# 社区规范
- AMD规范    依赖前置    该规范代表  require.js
- CMD规范    依赖后置    该规范代码  sea.js
- CommonJS规范   =>  nodeJS


# 使用require
- - 第一步：引入require 设置 入口文件data-main
```javascript
    <script src="./lib/require.js" data-main="入口文件"></script>
```

- - 第二步：在入口文件里面去引入其他模块（js文件）
```javascript
    require(["模块路径1", "模块路径2",...], function (a,b,...) {
        // 其中函数形参a 接受模块路径1对应的JS文件抛出的值
        //     函数形参b  接受模块路径2对应的JS文件抛出的值
        // 也就是说 函数的形参和数组的每一项是一一对应的关系
        
    })
```
- - 第三步：定义模块
```javascript
    define([],function(){
        // 逻辑代码



        // 抛出
        return 值
    })
```