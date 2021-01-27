define(function () {
    function Car(opt) {
        Object.assign(this, opt);
        this.init();
    }
    Car.prototype = {
        constructor: Car,
        init() {
            this.render();
            this.del();
            this.computed();
        },
        render() {
            this.tbody.innerHTML = this.data.map((item) => {
                return `<tr>
                <td><input type="checkbox" class="check-one"></td>
                <td>
                    <div class="color">商品</div>
                    <p>${item.name}</p>
                </td>
                <td>
                    ${item.price}
                </td>
                <td>
                    <button class="prev">-</button>
                    <input type="text" value="${item.count}" class="count">
                    <button class="next">+</button>
                </td>
                <td class="price">
                    ${item.count*item.price}
                </td>
                <td>
                    <b class="del">删除</b>
                </td>
            </tr>`
            }).join("")
        },
        computed() {
            var price = 0,
                count = 0;

            [...this.tbody.querySelectorAll(".check-one:checked")].forEach(item => {
                count += +item.parentNode.parentNode.querySelector(".count").value
                price += +item.parentNode.parentNode.querySelector(".price").innerHTML
            })
            this.tatal.innerHTML = `
                <span>总价：${price}</span>
                <span>数量：${count}</span>
                <button>清空购物车</button>
            `

        },

        del() {
            document.addEventListener("click", (e) => {
                var tar = e.target;
                if (tar.className === "del") {
                    tar.parentNode.parentNode.remove();
                }
                if (tar.className === "next") {
                    // 根据节点关系
                    tar.previousElementSibling.value++;
                    // 金额 = 数量 * 单价
                    tar.parentNode.nextElementSibling.innerHTML = tar.previousElementSibling.value * tar.parentNode.previousElementSibling.innerHTML;
                }

                if (tar.className === "prev") {
                    // 根据节点关系
                    tar.nextElementSibling.value--;
                    // 金额 = 数量 * 单价
                    tar.parentNode.nextElementSibling.innerHTML = tar.nextElementSibling.value * tar.parentNode.previousElementSibling.innerHTML;
                }
                // 全选
                if (tar.className === "check-all") {
                    [...this.tbody.querySelectorAll(".check-one")].forEach(item => {
                        item.checked = tar.checked
                    })
                }

                // 反选
                if (tar.className === "check-one") {
                    // 方式1
                    // var flag = [...this.tbody.querySelectorAll(".check-one")].some(item => {
                    //     return item.checked;
                    // })
                    // document.querySelector(".check-all").checked = flag;
                    // 方式二
                    var flag = [...this.tbody.querySelectorAll(".check-one:checked")].length
                    document.querySelector(".check-all").checked = flag;
                }

                this.computed();

            });

        }
    }
    return Car
})