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
            this.navBar.innerHTML = this.data.map((item, index) => {
                return `
                 <li ind=${index}>${item.title}</li>
                `
            }).join("")
        },
        bindEvent() {
            this.nav.addEventListener("mouseover", e => {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    if (this.con.style.display !== "block") {
                        V(this.con, "slideDown", 2000);

                    }
                    tar.classList.add("active")
                    var ind = tar.getAttribute("ind");
                    this.con.innerHTML = this.data[ind].children.map(item => {
                        return `
                        <dl>
                            <dt>
                                <img src="${item.url}" alt="">
                            </dt>
                            <dd>
                                ${item.title}
                            </dd>
                            <dd>
                                ${item.price}$
                            </dd>
                        </dl>
                        `
                    }).join("")

                }

            })

            this.nav.addEventListener("mouseout", e => {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    tar.classList.remove("active")
                }

            })


            this.nav.addEventListener("mouseleave", () => {
                // this.con.style.display = "none"
                V(this.con, "slideUp", 2000)

            })
        }

    }


    return Nav;
})