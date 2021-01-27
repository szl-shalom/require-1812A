define(function () {
    function Search(obj) {
        Object.assign(this, obj)
        this.init()
    }
    Search.prototype = {
        constructor: Search,
        init() {
            this.render(this.data);
            this.bindEvent();
        },
        render(data) {
            var that = this;
            this.box.innerHTML = data.map(function (item) {
                var str = `
                <tr>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                    <td>${item.desc}</td>
                </tr>
                `
                if (that.ipt.value) {
                    var reg = new RegExp(that.ipt.value, "g");
                    return str.replace(reg, `<b style="color:red">${that.ipt.value}</b>`)
                } else {
                    return str;
                }
            }).join("")
        },
        bindEvent() {
            var that = this;
            this.ipt.addEventListener("input", function () {
                var arr = that.data.filter(function (item) {
                    return item.name.includes(that.ipt.value) || item.age.includes(that.ipt.value) || item.desc.includes(that.ipt.value)
                })

                that.render(arr)
            })
        }
    }
    return Search;
})