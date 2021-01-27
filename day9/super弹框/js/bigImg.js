define(function () {
    function BigImg(opt) {
        Object.assign(this, opt);
        this.init()
    }
    BigImg.prototype = {
        constructor: BigImg,
        init() {
            // 1.创建弹框
            this.createDialog()
            // 2.绑定事件
            this.bindEvent();
        },
        createDialog() {
            this.dialog = document.createElement("div");
            this.dialog.classList.add("dialog");
            this.dialog.innerHTML = `
            <div class="content">
                <img src="${this.src}" alt="">
                <div class="left">&lt;</div>
                <div class="right">&gt;</div>
                <b class="close">X</b>
                <p class="bottom">${this.ind}/${this.maxLen}</p>
            </div>
                `;
            document.body.append(this.dialog);
        },
        bindEvent() {
            var close = this.dialog.querySelector(".close"),
                left = this.dialog.querySelector(".left"),
                right = this.dialog.querySelector(".right"),
                img = this.dialog.querySelector("img"),
                p = document.querySelector("p");

            // 删除事件
            close.onclick = () => {
                this.dialog.remove()
            }

            left.onclick = () => {
                if (this.el.previousElementSibling) {
                    img.src = this.el.previousElementSibling.src;
                    this.el = this.el.previousElementSibling;
                    this.ind--;
                    p.innerHTML = `${this.ind}/${this.maxLen}`
                }else{
                    alert("已经是第一张图片了，没有上一些张了！！")
                }

            }

            right.onclick = () => {
                if (this.el.nextElementSibling) {
                    img.src = this.el.nextElementSibling.src;
                    this.el = this.el.nextElementSibling;
                    this.ind++;
                    p.innerHTML = `${this.ind}/${this.maxLen}`
                }else{
                    alert("已经是最后图片了，没有下一些张了！！")
                }

            }
        }
    }

    return BigImg;
})