define(["V"], function (V) {
    function Tab(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }


    Tab.prototype = {
        constructor: Tab,
        init() {
            // console.log(this)
            this.render();
            this.bindEvent();
        },
        bindEvent() {
            this.slide.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    // 高亮
                    this.slide.querySelector(".active") && this.slide.querySelector(".active").classList.remove("active")
                    tar.classList.add("active")
                    // 动画
                    V(tar, "scroll", { container: this.slide.parentNode })
                    var ind = tar.getAttribute("ind")
                    V(this.content.children[ind], "scroll", { container: this.content.parentNode })
                }
            })
        },
        render() {
            this.slide.innerHTML = this.data.map((item,index) => {
                return `
                    <li ind=${index}>${item.title}</li>
                `
            }).join("");

            this.content.innerHTML = this.data.map((item) => {
                return `
                <li>
                    <h2>${item.title}</h2>
                    ${item.children.map(item => {
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
                }).join("")}
                </li>
                `
            }).join("")
        }

    }

    return Tab;
})