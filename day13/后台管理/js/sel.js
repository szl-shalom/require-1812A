define(["V"], function (V) {
    function Sel(opt) {
        Object.assign(this, {
            arr: [],
        }, opt);
        this.init();
    }


    Sel.prototype = {
        constructor: Sel,
        init() {
            this.render();
            this.bindEvent();
        },
        render() {
            this.list.innerHTML = this.data.map(item => {
                return `
                <li>
                    <span>
                        ${item.name}
                        <b>></b>
                    </span>
                    <ol>
                       ${item.children.map(item => {
                    return `
                            <li class="item">${item.name}</li>
                            `
                }).join("")}
                    </ol>
                </li>
                    `
            }).join("")
        },
        renderTitle() {
            this.title.innerHTML = this.arr.map((item, index) => {
                return `
                <span>
                    ${item}
                    <b ind="${index}" class="del">X</b>
                </span>
                    `
            }).join("")
        },
        bindEvent() {


            this.list.addEventListener("click", e => {
                var tar = e.target;
                // 下拉
                if (tar.nodeName === "SPAN") {
                    var ol = tar.nextElementSibling;
                    var b = tar.querySelector("b");
                    if (ol.style.display === "block") {
                        V(ol, "slideUp")
                        V(b, { rotateZ: 0 })
                    } else {
                        V(ol, "slideDown")
                        V(b, { rotateZ: "90deg" })
                    }
                }
                // tab切换
                if (tar.classList.contains("item")) {
                    // 左侧高亮切换
                    this.list.querySelector(".active") && this.list.querySelector(".active").classList.remove("active")
                    tar.classList.add("active");
                    // 点击左侧有顶部出现对应的内容
                    var flag = this.arr.includes(tar.innerHTML);
                    if (flag) {

                    } else {
                        this.arr.push(tar.innerHTML);
                        this.renderTitle()
                    }
                    this.content.innerHTML = tar.innerHTML
                    console.log(this.arr)
                }
            })



            this.title.addEventListener("click", e => {
                var tar = e.target;
                if (tar.className === "del") {
                    var ind = tar.getAttribute("ind");
                    this.arr.splice(ind, 1);
                    this.renderTitle()

                }
                if(tar.nodeName === "SPAN"){
                    this.title.querySelector(".active") && this.title.querySelector(".active").classList.remove("active")
                    tar.classList.add("active")
                    // 文本节点取值
                    this.content.innerHTML = tar.firstChild.nodeValue;
                    console.log(this.arr)
                }
            })
        }
    }


    return Sel;
})