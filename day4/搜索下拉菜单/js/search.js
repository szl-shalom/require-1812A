define(function () {
    function Search(obj) {
        Object.assign(this, {}, obj)
        this.init()
    }


    Search.prototype = {
        constructor: Search,
        init() {
            this.bindEvent();
            this.render(this.data);
        },
        render(data) {
            this.list.innerHTML = data.map(function (item) {
                return `
                    <li>${item}</li>
                `
            }).join("")
        },
        bindEvent() {
            var that = this;
            // 键盘事件
            this.ipt.addEventListener("keydown", function (e) {
                // 下箭头事件
                if (e.keyCode === 40) {
                    // 获取当前高亮节点
                    var activeEl = document.querySelector(".active");
                    // 判断高亮是否㛮
                    if (activeEl) {
                        // 存在
                        // 去除原来的高亮
                        activeEl.classList.remove("active")
                        // 判断当前高亮的节点石是否存在下一个兄弟节点
                        if (activeEl.nextElementSibling) {
                            // 存在  就让下一个兄弟节点高亮
                            activeEl.nextElementSibling.classList.add("active")
                        } else {
                            // 不存在 直接让list 第一个子元素高亮
                            that.list.firstElementChild.classList.add("active")
                        }
                    } else {
                        // 不存在
                        // 直接让list第一个元素高亮
                        that.list.firstElementChild.classList.add("active")
                    }
                }
                if (e.keyCode === 38) {

                }
            })
            // 模糊搜索
            this.ipt.addEventListener("input", function () {
                // 调用filter方法进行过滤  
                var arr = that.data.filter(function (item) {
                    // 通过字符串方法 includes 检测  数据是否包含用户数据的数据  包含返回true 不包含返回false
                    return item.includes(that.ipt.value)
                })
                that.render(arr)
            })
            // 聚焦事件
            this.ipt.addEventListener("focus", function () {
                that.list.style.display = "block"
            })
            // 点击事件
            this.list.addEventListener("click", function (e) {
                // 获取事件源
                var tar = e.target;
                // 判断点击的是不是li
                if (tar.nodeName === "LI") {
                    // 修改内容
                    that.ipt.value = tar.innerHTML;
                    that.list.style.display = "none"
                }
            })
            // 鼠标滑过
            this.list.addEventListener("mouseover", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    // 获取原来高亮的元素
                    if (document.querySelector(".active")) {
                        // 存在就去除原来的高亮
                        document.querySelector(".active").classList.remove("active")
                    }
                    // 给当前添加高亮
                    tar.classList.add("active");
                    that.ipt.value = tar.innerHTML;
                }
            })
        }

    }
    return Search;
})