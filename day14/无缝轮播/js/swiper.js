define(["V"], function (V) {
    function Swiper(opt) {
        Object.assign(this, {
            index: 0,
        }, opt);
        this.init();
    }


    Swiper.prototype = {
        constructor: Swiper,
        init() {
            // 克隆图片
            var el = this.container.firstElementChild.cloneNode(true)
            this.container.appendChild(el);
            // 计算最大下标
            this.maxIndex = this.container.children.length - 1;
            // 绑定事件
            this.bindEvent();
            // 自动轮播
            this.autoplay();
        },
        autoplay() {
            this.timer = setInterval(() => {
                this.next.click();
            }, 3000)
        },
        bindEvent() {
            // 右按钮点击事件
            this.next.addEventListener("click", () => {
                // 判断  下标是否等于最大下标
                if (this.index === this.maxIndex) {
                    // 下标归0
                    this.index = 0;
                    // 左边距归0 
                    // 这个过程没有动画
                    this.container.style.left = 0;
                }
                // 调用核心运动函数 下标 + 1  
                // 注意：这里千万不要 this.index++   一定不要这样  
                this.change(++this.index)
            })


            this.prev.addEventListener("click", () => {
                if (this.index === 0) {
                    this.index = this.maxIndex;
                    this.container.style.left = - this.index * this.swiper.offsetWidth + "px";
                }

                this.change(this.index - 1)
            })
        },
        // 核心函数    运动函数
        // 该函数接受一个下标   
        change(i) {
            // 去除原来的高亮
            this.page.children[this.index === this.maxIndex ? 0 : this.index].classList.remove("active")
            // 修改下标
            this.index = i;
            // 添加高亮
            this.page.children[this.index === this.maxIndex ? 0 : this.index].classList.add("active")
            // 动画
            V(this.container, { left: - this.index * this.swiper.offsetWidth }, 2000)
        }

    }

    return Swiper;
})