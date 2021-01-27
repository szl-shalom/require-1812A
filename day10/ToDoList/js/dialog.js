define(function () {
    function Dialog(opt) {
        Object.assign(this, {
            title: "默认标题"
        }, opt);
        this.init();
    }


    Dialog.prototype = {
        constructor: Dialog,
        init() {
            this.createDialog();
        },
        createDialog() {
            this.dialog = document.createElement("div");
            this.dialog.style = `position:fixed;left:0;top:0;width:100%;height:100%;background-color:rgba(0,0,0,.6)`
            this.dialog.innerHTML = `
                <div style="position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);background-color:#fff;padding:20px;">
                    <h1>${this.title}</h1>
                    <div>
                        <button class="ok">确定</button>
                        <button class="no">取消</button>
                    </div>
                </div>
            `
            document.body.append(this.dialog)

            var ok = this.dialog.querySelector(".ok"),
                no = this.dialog.querySelector(".no");


            ok.onclick = () => {
                this.dialog.remove();
                this.callback && this.callback()
            }

            no.onclick = () => {
                this.dialog.remove();
            }

        }
    }

    return Dialog;
})