define(function () {
    function Filter(obj) {
        Object.assign(this, obj);
        this.init();
    }
    Filter.prototype = {
        constructor: Filter,
        init() {
            this.render(this.data);
            this.bindEvent();
        },
        render(data) {
            this.con.innerHTML = data.map(function (item) {
                return `
                <dl>
                    <dt>
                        <img src="${item.urls[0]}" alt="" class="big-img">
                    </dt>
                    <dd>
                        ${item.urls.map(function(item){
                            return `
                                <img src="${item}" class="lit-img"/>
                            `
                        }).join("")}
                    </dd>
                    <dd>
                        <p>名称：${item.name}</p>
                        <p>商品价钱：${item.price}</p>
                        <p>商品销量量：${item.sell}</p>
                        <p>商品评论数：${item.mess}</p>
                    </dd>
                </dl>
                `
            }).join("")
        },
        bindEvent() {
            this.price.onclick = () => {
                // 切换类名isFlag  本质是一个开关变量
                this.price.classList.toggle("isFlag")
                // 排序
                this.data.sort((a, b) => {
                    // 判断开关是为真  
                    // 存在类名isFlag  升序
                    // 不存在类名isFlag 降序
                    return this.price.classList.contains("isFlag") ? a.price - b.price : b.price - a.price
                })
                // 直接调用输入事件
                this.search.oninput()
            }


            // 模糊搜索
            this.search.oninput = () => {
                // 通过数组的filter方法 进行过滤
                var arr = this.data.filter((item) => {
                    // 通过字符串方法include检测是否包含
                    return item.name.includes(this.search.value)
                })
                this.render(arr)
            }


            // 鼠标滑过
            document.onmouseover = (e) => {
                var tar = e.target;
                if (tar.className === "lit-img") {
                    tar.parentNode.previousElementSibling.firstElementChild.src = tar.src;
                    tar.parentNode.querySelector(".active") && tar.parentNode.querySelector(".active").classList.remove("active")
                    tar.classList.add("active")
                }
            }
        }
    }

    return Filter;
})