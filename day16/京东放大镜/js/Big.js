define(function () {
    function Big(opt) {
        Object.assign(this, {}, opt);
        this.init()
    }

    Big.prototype = {
        constructor: Big,
        init() {
            this.bindEvent();
        },
        bindEvent() {
            // 鼠标进入事件
            this.leftBox.addEventListener("mouseenter", () => {
                this.mask.style.display = "block";
                this.rightBox.style.display = "block";
                this.bigImg.src = this.smallImg.src;
            })
            // 鼠标离开
            this.leftBox.addEventListener("mouseleave", () => {
                this.mask.style.display = "none";
                this.rightBox.style.display = "none";
            })

            // 鼠标移动
            this.leftBox.addEventListener("mousemove", e => {
                // 
                var x = e.pageX - this.bigGlass.offsetLeft - this.mask.offsetWidth / 2,
                    y = e.pageY - this.bigGlass.offsetTop - this.mask.offsetHeight / 2;
                // 区间判断
                if (x < 0) x = 0
                if (y < 0) y = 0
                if (x > this.leftBox.offsetWidth - this.mask.offsetWidth) x = this.leftBox.offsetWidth - this.mask.offsetWidth
                if (y > this.leftBox.offsetHeight - this.mask.offsetHeight) y = this.leftBox.offsetHeight - this.mask.offsetHeight
                // 设置位置  遮罩层
                this.mask.style.left = x + "px";
                this.mask.style.top = y + "px";
                // 设置位置  右盒子图片
                this.bigImg.style.marginLeft = -x * 5 + "px";
                this.bigImg.style.marginTop = -y * 5 + "px";
            })

            this.container.addEventListener("mouseover", e => {
                var tar = e.target;
                if (tar.nodeName === "IMG") {
                    this.smallImg.src = tar.src;
                }
            })
        }
    }

    return Big
})