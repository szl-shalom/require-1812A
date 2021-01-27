define(["V"], function (V) {
    function Dialog(obj) {
        Object.assign(this, {
            // 默认参数
            title: "我是默认标题",
            okValue: "确定",
            noValue: "取消"
        }, obj);
        this.init();
    }

    Dialog.prototype = {
        constructor: Dialog,
        init() {
            //1.创建弹框
            this.createDialog();
            // 2.添加事件
            this.bindEvent();
        },
        createDialog() {
            // 1-1 创建最外层盒子 dialog
            this.dialog = document.createElement("div");
            // 1-2 修改类名
            this.dialog.classList.add("dialog")
            // 1-3 修改内容
            this.dialog.innerHTML = `
                <div class="mask"></div>
                <div class="content">
                    <h2>${this.title}</h2>
                    <p>
                        <button class="ok">${this.okValue}</button>
                        <button class="no">${this.noValue}</button>
                    </p>
                </div>`
            // 1-4 添加到页面
            document.body.append(this.dialog);
            // 1-5 添加你想到的动画
            this.con = this.dialog.querySelector(".content");
            V(this.con, {
                // 动画的参数是一个数组  
                // 数组  [最终值,起始值]
                left: ["50%", "-50%"]
            })
        },
        bindEvent() {
            // 2-1 获取必要的节点 (请从dialog里面  不要从document)
            var ok = this.dialog.querySelector(".ok");
            var no = this.dialog.querySelector(".no");
            // 2-2 添加事件
            ok.onclick = () => {
                this.remove();
                // 回调函数是否存在  存在就执行
                this.callback && this.callback()
            }
            no.onclick = () => { this.remove() }
        },
        remove() {
            var that = this;
            V(this.con, {
                left: ["100%", "50%"]
            }, {
                // 动画结束函数
                complete() {
                    // 当动画执行完毕的时候，删除弹框
                    that.dialog.remove()
                },
            })
        }
    }
    return Dialog;
})