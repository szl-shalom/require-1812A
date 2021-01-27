define(function () {
    function Dialog(obj) {
        Object.assign(this, {}, obj)
        this.init()
    }

    Dialog.prototype = {
        constructor: Dialog,
        init() {
            var dialog = document.createElement("div");
            dialog.classList.add("dialog");
            dialog.innerHTML = `
                <div class="content">
                    <h2>
                        ${this.con}
                        <b>X</b>
                    </h2>
                    <b class="ok">确定</b>
                    <b class="no">取消</b>
                </div>
        `
            document.body.appendChild(dialog);

            var ok = document.querySelector(".ok");
            var no = document.querySelector(".no");
            ok.onclick = function () {
                dialog.remove()
            }
            no.onclick = function () {
                dialog.remove()
            }
        }
    }


    return Dialog;
})