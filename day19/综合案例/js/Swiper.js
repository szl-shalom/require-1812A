define(["V"], function (V) {
    function Swiper(opt) {
        Object.assign(this, opt);
        this.init();
    }


    Swiper.prototype = {
        constructor: Swiper,
        init() {
            this.render();
            this.bindEvent();
            this.autoplay();
        },
        autoplay() {
            this.timer = setInterval(() => {
                this.next.click();
            }, 3000)
        },
        render() {
            this.container.innerHTML = this.data.map(item => {
                return `
                    <img src="${item}">
                `
            }).join("")

            this.page.innerHTML = this.data.map((item, i) => {
                return `
                    <li class="${i === this.index ? "active":"" }"></li>
                `
            }).join("");

            // 克隆
            this.container.appendChild(this.container.firstElementChild.cloneNode(1));
            // 计算最大下标
            this.maxIndex = this.container.children.length - 1;
        },
        bindEvent() {
            this.next.addEventListener("click", () => {
                if (this.index === this.maxIndex) {
                    this.index = 0;
                    this.container.style.left = 0;
                }

                this.change(this.index + 1)
            })


            this.prev.addEventListener("click", () => {
                if (this.index === 0) {
                    this.index = this.maxIndex;
                    this.container.style.left = -this.index * 880 + "px";
                }

                this.change(this.index - 1)
            });

            [...this.page.children].forEach((item, index) => {
                item.addEventListener("click", () => {
                    this.change(index)
                })
            })


            this.right.addEventListener("mouseenter", () => {
                clearInterval(this.timer)
            })

            this.right.addEventListener("mouseleave", () => {
                this.autoplay();
            })
        },
        change(i) {
            this.page.children[this.index === this.maxIndex ? 0 : this.index].classList.remove("active")
            this.index = i;
            this.page.children[this.index === this.maxIndex ? 0 : this.index].classList.add("active")
            V(this.container, {
                left: -this.index * 880
            })
        }
    }


    return Swiper;
})