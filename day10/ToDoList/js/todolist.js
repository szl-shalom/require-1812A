define(["formatTime", "dialog"], function (formatTime, Dialog) {
    function ToDoList(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    ToDoList.prototype = {
        constructor: ToDoList,
        init() {
            // 1.因为有数据模块  所以先行渲染。
            this.render();
            // 2.绑定事件
            this.bindEvent();
        },
        bindEvent() {
            var that = this;
            // 2-1 因为咱们有动态增删节点  所以事件的添加方式 是事件委托
            this.list.addEventListener("click", (e) => {
                // 2-2 获取事件源
                var tar = e.target;
                // 2-3 判断  完成
                if (tar.className === "done") {
                    new Dialog({
                        title: "确认要完成吗?",
                        callback() {
                            // 2-4 给父元素添加类名  
                            tar.parentNode.classList.add("active")
                        }
                    })
                }

                // 2-5 判断  删除
                if (tar.className === "del") {

                    // 2-6 调用弹框
                    new Dialog({
                        title: "确定要删除吗？",
                        callback() {
                            tar.parentNode.remove()
                        }
                    })
                }
            })


            //  键盘事件
            this.add.addEventListener("keydown", (e) => {
                // 回车按下
                if (e.keyCode === 13) {
                    // 非空验证
                    if (!this.add.value.trim()) {
                        alert("输入的内容为空！");
                        return;
                    }

                    new Dialog({
                        title: "确认要添加数据吗",
                        callback() {
                            // 添加数据
                            that.list.innerHTML += `
                                <li>
                                    <span>${that.add.value}</span>
                                    <span>${formatTime()}</span>
                                    <b class="done">完成</b>
                                    <b class="del">删除</b>
                                </li>
                                `
                        }
                    })
                }
            })
        },
        render() {
            var that = this;
            that.list.innerHTML = that.data.map(item => {
                return `
                <li>
                    <span>${item.title}</span>
                    <span>${item.time}</span>
                    <b class="done">完成</b>
                    <b class="del">删除</b>
                </li>
                `
            }).join("")
        }
    }
    return ToDoList
})