define(function () {
    function Swiper(opt) {
        Object.assign(this, {
            index: 0,
            time: 3000,
        }, opt);
        this.init();
    }


    Swiper.prototype = {
        constructor: Swiper,
        init() {
            //  渲染分页   只渲染一次！！！！
            this.renderPage();  
            //  渲染内容
            this.renderImg();
            // 自动轮播
            this.autoplay();
        },
        renderImg() {
            // 渲染
            this.swiperImg.src = this.data[this.index]
            // 切换高亮
            this.swiperPage.querySelector(".active") && this.swiperPage.querySelector(".active").classList.remove("active")
            this.swiperPage.children[this.index].classList.add("active")
        },
        autoplay() {
            this.timer = setInterval(() => {
                this.index++;
                // 区间判断
                if (this.index > this.data.length - 1) {
                    this.index = 0;
                }
                // 渲染图片
                this.renderImg()
            }, this.time)
        },
        renderPage() {
            // 渲染分页
            this.swiperPage.innerHTML = this.data.map(item => {
                return `<li></li>`
            }).join("");
        }

    }

    return Swiper;
})