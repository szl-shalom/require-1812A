define(["V"], function (V) {
    function NavBar(opt) {
        window.V = V;
        Object.assign(this, opt);
        this.init();
    }


    NavBar.prototype = {
        constructor: NavBar,
        init() {
            // 1.渲染标题
            this.renderTitle();
            // 2.添加事件
            this.bindEvent();
        },
        renderTitle() {
            this.ul.innerHTML = this.data.map(item => {
                return `
                <li>
                    <span>${item.name}${item.children ? "<b>▲</b>" : ""}</span>
                </li>
                `
            }).join("");
        },
        bindEvent() {
            [...this.ul.children].forEach((item, index) => {
                item.addEventListener("mouseenter", () => {
                    this.ol.style.display = "block";
                    var b = item.querySelector("b");
                    b && V(b, {
                        rotateZ: "180deg"
                    })
                    var arr = this.data[index].children || []
                    this.ol.innerHTML = arr.map(item => {
                        return `
                                <li>${item}</li>
                            `
                    }).join("")

                })


                item.addEventListener("mouseleave", () => {
                    var b = item.querySelector("b");
                    b && V(b, {
                        rotateZ: "0deg"
                    })
                })
            })

            this.box.addEventListener("mouseleave", () => {
                this.ol.style.display = "none"
            })
        }
    }

    return NavBar
})