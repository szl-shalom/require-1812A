define(function () {
    function Reg(opt) {
        Object.assign(this, {

        }, opt);
        this.init();
    }


    Reg.prototype = {
        constructor: Reg,
        init() {
            this.data.forEach(item => {
                item.input.onblur = () => {
                    var flag = item.reg.test(item.input.value);
                    item.input.nextElementSibling.innerHTML = flag ? "√" : 'X';
                    return flag;
                }
            })


            this.code.onblur = () => {
                return this.code.value === this.code.nextElementSibling.innerHTML
            }


            this.login1.onclick = () => {
                if (this.user.onblur() && this.pwd.onblur()) {
                    alert("登录成功")
                } else {
                    alert("存在非法输入")
                }
            }

            this.login2.onclick = () => {
                if (this.tel.onblur() && this.code.onblur()) {
                    alert("登录成功")
                } else {
                    alert("存在非法输入")
                }
            }
        },


    }

    return Reg;
})