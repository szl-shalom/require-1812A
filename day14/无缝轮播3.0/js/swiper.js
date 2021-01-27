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
            this.maxIndex = this.container.children.length - 1;
            this.autoplay();
        },
        autoplay() {
            this.timer = setInterval(() => {
                if(this.index === this.maxIndex){
                    this.index = 0;
                    this.container.style.left = 0;
                }
                this.page.children[this.index === this.maxIndex?0:this.index].classList.remove("active")
                this.index++;
                this.page.children[this.index === this.maxIndex?0:this.index].classList.add("active")
                V(this.container,{ left:-this.index * this.swiper.offsetWidth })
            }, 3000)
        },


    }

    return Swiper;
})