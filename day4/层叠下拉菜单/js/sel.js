define(["V"], function (V) {
    function Sel(obj) {
        Object.assign(this, {}, obj);
        this.init();
    }

    Sel.prototype = {
        constructor: Sel,
        init() {
            this.render();
            this.bindEvent(); //绑定事件
        },
        render() {
            console.log(this.data)
            this.wrap.innerHTML = this.data.map(function (item) {
                return `
                <ul>
                <li>
                    <span>+</span>
                    <b>${item.name}</b>
                    <ul class="active">
                       ${item.city.map(function(item){
                           return `
                           <li>
                                <span>+</span>
                                <b>${item.name}</b>
                                <ul class="active">
                                    ${item.area.map(function(item){
                                        return `
                                        <li>
                                            <b>${item}</b>
                                        </li>
                                        `
                                    }).join("")}
                                </ul>
                            </li>
                           `
                       }).join("")}
                    </ul>
                </li>
            </ul>
                `
            }).join("")
        },
        bindEvent() {
            this.wrap.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    // 获取动画的元素 ：注意 需要根据节点关系找
                    var ul = tar.nextElementSibling.nextElementSibling
                    if (ul.style.display === "block") {
                        tar.innerHTML = "+"
                        V(ul, "slideUp", 1000);
                    } else {
                        tar.innerHTML = "-"
                        V(ul, "slideDown", 1000);
                    }
                }

                if (tar.nodeName === "B") {
                    // 获取动画的元素 ：注意 需要根据节点关系找
                    var ul = tar.nextElementSibling;
                    if (ul.style.display === "block") {
                        tar.previousElementSibling.innerHTML = "+"
                        V(ul, "slideUp", 1000);
                    } else {
                        tar.previousElementSibling.innerHTML = "-"
                        V(ul, "slideDown", 1000);
                    }
                }

                if (tar.nodeName === "LI") {
                    // 获取动画的元素 ：注意 需要根据节点关系找
                    var ul = tar.lastElementChild;
                    if (ul.style.display === "block") {
                        tar.firstElementChild.innerHTML = "+"
                        V(ul, "slideUp", 1000);
                    } else {
                        tar.firstElementChild.innerHTML = "-"
                        V(ul, "slideDown", 1000);
                    }
                }
            })
        }
    }

    return Sel
})