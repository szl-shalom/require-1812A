define(function () {
    function Filter(obj) {
        Object.assign(this, obj);
        this.init();
    }

    Filter.prototype = {
        constructor: Filter,
        init() {
            // 渲染
            this.render(this.data)
            //绑定事件
            this.bindEvent();
        },
        bindEvent() {
            // 输入事件
            this.ipt.addEventListener("input", () => {
                // 模糊搜索
                var arr = this.data.filter((item) => {
                    return item.name.includes(this.ipt.value)
                })
                this.render(arr)
            })
        },
        render(data) {
            var that = this;
            this.ul.innerHTML = data.map(function (item) {
                return `
                <li>
                    <b>姓名：${item.name}</b>
                    <b>年龄：${item.age}</b>
                    <b>介绍：${item.desc}</b>
                </li>
                `
            }).join("")
        }
    }

    return Filter;
})