define(["V"], function (V) {
    function Nav(opt) {
        Object.assign(this, opt);
        this.init();
    }


    Nav.prototype = {
        constructor: Nav,
        init() {
            this.renderTitle();
            this.bindEvent();
        },
        renderTitle() {
            this.ul.innerHTML = this.data.map((item, index) => {
                return `
                <li ind=${index}>
                    <span>${item.title}<b>&gt;</b> </span>
                </li>
                `
            }).join("")
        },
        bindEvent() {
            this.left.addEventListener("mouseover", e => {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    this.leftCon.style.display = "block"
                    tar.classList.add("active")
                    var ind = tar.getAttribute("ind");
                    this.leftCon.innerHTML = this.data[ind].children.map(item => {
                        return `
                        <dl>
                            <dt>
                                <img src="${item.url}" alt="">
                            </dt>
                            <dd>
                                ${item.title}
                            </dd>
                        </dl>
                        `
                    }).join("")

                }

            })

            this.left.addEventListener("mouseout", e => {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    tar.classList.remove("active")
                }

            })


            this.left.addEventListener("mouseleave", () => {
                this.leftCon.style.display = "none"

            })
        }

    }


    return Nav;
})