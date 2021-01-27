define(["V"], function (V) {
    function Swiper(opt) {
        Object.assign(this, {
            index: 0,//默认下标
        }, opt);

        this.init();
    }

    Swiper.prototype = {
        constructot: Swiper,
        init() {
            // 初始化设置
            this.set();
            // 绑定事件
            this.bindEvent()
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
                // 判断越界
                if (this.index === this.maxIndex) {
                    // 越界就归0
                    this.index = 0
                    this.container.style.left = 0;
                }
                // 调用核心函数   下标 + 1
                this.change(this.index + 1)
            })

            this.prev.addEventListener("click", () => {
                if (this.index === 0) {
                    this.index = this.maxIndex
                    this.container.style.left = -this.index * this.swiper.offsetWidth + "px";
                }

                this.change(this.index - 1)
            })

            this.swiper.addEventListener("mouseenter", () => {
                clearInterval(this.timer);
                // this.prev.style.display = "block"
                V(this.prev,{
                    left:["0px","-200px"]
                })

                V(this.next,{
                    right:["0px","-200px"]
                })
                // this.next.style.display = "block"
            })

            this.swiper.addEventListener("mouseleave", () => {
                this.autoplay();
                // this.prev.style.display = "none"
                // this.next.style.display = "none"

                V(this.prev,{
                    left:["-200px","0px"]
                })

                V(this.next,{
                    right:["-200px","0px"]
                })
            });

            [...this.page.children].forEach((item,i)=>{
                item.addEventListener("click",()=>{
                    this.change(i)
                })
            })
        },
        set() {
            // 默认位置
            this.container.style.left = -this.index * this.swiper.offsetWidth + "px"
            // 默认高亮
            this.page.children[this.index].classList.add("active")
            // 克隆节点
            this.container.appendChild(this.container.firstElementChild.cloneNode(true))
            // 计算最大下标
            this.maxIndex = this.container.children.length - 1;
        },
        change(i) {
            // 去除原来的高亮
            this.page.children[this.index === this.maxIndex ? 0 : this.index].classList.remove("active");
            // 修改下标
            this.index = i;
            // 添加高亮
            this.page.children[this.index === this.maxIndex ? 0 : this.index].classList.add("active")
            // 添加动画
            V(this.container, { left: -this.index * this.swiper.offsetWidth }, 1000)
        }
    }

    return Swiper;
})