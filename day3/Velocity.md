# Velocity动画

## 默认参数
```javascript
    V(element,{
        width: "500px",        // 动画属性 宽度到 "500px" 的动画
    }, {
        /* Velocity 动画配置项的默认值 */
        duration: 400,         // 动画执行时间
        easing: "swing",       // 缓动效果
        queue: "",             // 队列
        begin: undefined,      // 动画开始时的回调函数
        progress: undefined,   // 动画执行中的回调函数（该函数会随着动画执行被不断触发）
        complete: undefined,   // 动画结束时的回调函数
        display: undefined,    // 动画结束时设置元素的 css display 属性
        visibility: undefined, // 动画结束时设置元素的 css visibility 属性
        loop: false,           // 循环
        delay: false,          // 延迟
        mobileHA: true         // 移动端硬件加速（默认开启）
    });
```

## 链式动画
```javascript
    V(element,{width:500}); //先将宽度设置成为500px
    V(element,{height:500});//再将高度设置成为500px
```

## Map动画属性
```javascript
    V(element,{
        width:[500,200] //宽度初始值为200 
    })
```

## 弹簧
```javascript
    V(element,{
        width:200
    },[200,10])  //第一个参数拉力  第二个参数摩擦系数
```
## 关键字动画
```javascript
    V(element,"pause") //暂停动画
    V(element,"resume") // 继续动画
    V(element,"finish") // 完成动画
    V(element,"stop")// 终止动画
    V(element,"reverse") //恢复上一个动画
    V(element,"slideUp") // 收起
    V(element,"slideDown") // 下拉
    V(element,"fadeIn") //淡入
    V(element,"fadeOut") //淡出
```

## easing动画效果
```javascript
    V(element,{
        width:[500,200]
    },{
        easing:"swing",// 摇摆
        easing:"linear",// 线性
        easing:"spring",// 弹性
        // css缓动关键字
        easing:"ease", // 动画以低速开始，然后加快，在结束前变慢。
        easing:"ease-in", // 动画以低速开始。
        easing:"ease-out", // 动画以低速结束。
        easing:"ease-in-out", // 动画以低速开始和结束。
    })
```

## 并发执行多个动画
```javascript
       V(document.querySelector("div"), {
            width: 500
        }, 2000)

        V(document.querySelector("div"), {
            height: 500
        }, {
            queue: "a", //并发执行
            duration: 2000
        })

        V(document.querySelector("div"), {
            "border-radius":"50%"
        }, {
            queue: "b", //并发执行
            duration: 2000,
        })

```

## scroll 滚动
```javascript
    /* 让 $("#container") 元素的内容滚动到内部子元素 $("#element3") 所在的位置. */
    $(element,"scroll", { container: $("#container") });

    /* 滚动到相对 $element 向下偏移250px的地方 */
    V(element,"scroll", { duration: 750, offset: 250 })
    /* 再滚动到相对 $element 向上偏移50px的地方 */
    V(element,"scroll", { duration: 750, offset: -50 });

```

## 关于tranform动画
```javascript
    V(element,{
        /* translate */ 偏移量
        translateX: 20,     // 等同于"20px"
        translateY: "1.5em",
        translateZ: "20px", // IE10+

        /* scale */ 缩放比例
        scale: 0.5, 
        scaleX: 0.5,
        scaleY: 0.5,

        /* rotate */ 旋转角度
        rotate: 45,       // 等同于"45deg"
        rotateX: "45deg", // IE10+
        rotateY: "45deg", // IE10+
        rotateZ: "45deg",

        /* skew */ 倾斜角度
        skewX: "30deg",
        skewY: "30deg",
    })


```
