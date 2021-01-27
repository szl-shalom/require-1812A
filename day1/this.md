# 什么是this ? 
- 执行期上下文环境
# this指向
- 全局环境
- - 指向 window
- 局部环境(函数内部)
- - 指向函数的调用者
- 注意：使用new 调用的函数 this指向 实例化对象

# 修改 this 指向
```javascript
        function fn(a, b, c) {
            console.log(this, a, b, c)
        }

        // call  第一项 是this指向  从第二项起  分别对应函数的形参  会立即执行
        fn.call({}, 1, 2, 3)

        // apply  第一项 是this指向  第二项是一个数组  数组的每一项分别对应函数的形参  会立即执行
        fn.apply({}, [1, 2, 3])

        // bind   第一项 是this指向  从第二项起  分别对应函数的形参  不会立即执行 
        //  返回修改this指向之后的函数 执行需要再一次调用
        fn.bind("abc", 1, 2, 3)()

```
