define(function () {
    function Tab(obj) {
        Object.assign(this, {
            // 默认参数
            type: "click",//事件切换类型
            className: "active",//切换的类名
        }, obj);
        console.log(this)
        this.init()
    }

    Tab.prototype = {
        constructor: Tab,
        init() {
            this.bindEvent();
        },
        bindEvent() {
            // 1.遍历白标题所有的子元素
            [...this.title.children].forEach((item, index) => {
                // 2.给每一个子元素 添加点击事件
                item.addEventListener(this.type, () => {
                    // 3-1 去除标题盒子 原来的高亮
                    var el = this.title.querySelector("." + this.className)
                    el && el.classList.remove(this.className)
                    // 3-2 给点击的元素添加高亮
                    item.classList.add(this.className)
                    // 3-3 去除内容盒子  原来高亮
                    var el1 = this.content && this.content.querySelector("." + this.className)
                    el1 && el1.classList.remove(this.className)
                    // 3-4 给对应的内容盒子 添加高亮  
                    // 啥叫对应  就是下标一一对应 
                    this.content && this.content.children[index].classList.add(this.className)
                    // 执行回调函数
                    this.callback && this.callback()
                })
            })
        }
    }
    // 抛出
    return Tab
})