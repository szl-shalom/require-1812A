define(["V"], function (V) {
    function Floor(opt) {
        Object.assign(this, opt);
        this.init();
    }


    Floor.prototype = {
        constructor: Floor,
        init() {
            // 1.添加事件
            this.bindEvent()
        },
        bindEvent() {
            // 获取每一个楼层距离顶部的位置
            var arr = [...this.floor.children].map(item => {
                return item.offsetTop
            });
            // console.log(arr);


            // 遍历导航
            [...this.fixed.children].forEach((item, index) => {
                // 点击事件
                item.onclick = () => {
                    // 找元素
                    var el = this.floor.children[index]
                    // 动画
                    V(el, "scroll", 5000)
                }
            })

            // 页面滚动事件
            document.addEventListener("scroll", () => {
                // 获取滚动的距离
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.scorllTop;
                console.log(scrollTop)
                // 判断滚动条滚动的距离和楼层元素距离顶部的关系
                arr.forEach((item, index) => {
                    if (scrollTop >= item) {
                        this.fixed.querySelector(".active")&& this.fixed.querySelector(".active").classList.remove("active")
                        this.fixed.children[index].classList.add("active")
                    }   
                })
            })
        }

    }

    return Floor
})