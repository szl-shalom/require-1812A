define([], function () {
    function Dialog(opt) {
        Object.assign(this, opt);
        this.init();
    }


    Dialog.prototype = {
        constructor: Dialog,
        init() {


            this.ok.onclick = () => {
                var flag = /^1[3-9]\d{9}$/.test(this.tel.value);

                if (!flag) {
                    alert("手机号格式不正确")
                    this.tel.focus()
                    return;
                }


                if (!this.user.value) {
                    alert("用户名不可以为空")
                    return;
                }


                this.dialog.style.display = "none";

                this.ul.innerHTML += `
                <li>
                    <p>收货人：${this.user.value}</p>
                    <p>地区：${this.a.value + this.b.value + this.c.value}</p>
                    <p>手机号：${this.tel.value}</p>
                </li>
                `
            }
        }
    }

    return Dialog;
})