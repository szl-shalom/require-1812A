function TodoList(obj) {
    Object.assign(this, {}, obj);
    this.init();
}


TodoList.prototype = {
    constructor: TodoList,
    init() {
        this.bindEvent();
    },
    bindEvent() {
        var that = this;
        // 键盘按下
        this.add.addEventListener("keydown", function (e) {
            // 回车
            if (e.keyCode === 13) {
                that.process.innerHTML += `
                <li>
                    <input type="checkbox">
                    <span>${that.add.value}</span>
                    <b>X</b>
                </li>
                `;
                // 清空
                that.add.value = "";
                // 计算数量
                that.computed()
            }

        })

        // 事件委托
        document.addEventListener("click", function (e) {
            var tar = e.target;
            // 删除
            if (tar.className === "del") {
                tar.parentNode.remove();
                that.computed()
            }

            // 选中
            if (tar.nodeName === "INPUT" && tar.type === "checkbox") {
                // 判断选中状态
                if (tar.checked) {
                    that.finish.appendChild(tar.parentNode)
                } else {
                    that.process.appendChild(tar.parentNode)
                }
                that.computed()
            }
        })
    },
    computed() {
        this.num1.innerHTML = this.process.children.length;
        this.num2.innerHTML = this.finish.children.length;
    }
}