define(function () {
    function Mod(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }

    Mod.prototype = {
        constructor: Mod,
        init() {
            // 1.渲染
            this.ander(this.data);
            this.bindEvent();
            this.mo();
            this.chuangjian();
        },
        ander(data) {
            this.box.innerHTML = data.map(function (item, index) {
                return `<tr>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.tel}</td>
                <td>${item.email}</td>
                <td>
                    <button class="modify">编辑</button>
                    <button class="delete" ind=${index}>删除</button>
                </td>
            </tr>`
            }).join("")
        },
        bindEvent() {
            var that = this;
            this.box.onclick = function (e) {
                var tar = e.target;
                if (tar.className === "delete") {
                    var ind = tar.getAttribute("ind");
                    that.data.splice(ind, 1);
                    that.ander(that.data)
                }
            }
        },
        mo() {
            var that = this;
            console.log(111)
            this.ptn.addEventListener(
                "input", function () {

                    var Data = that.data.filter(function (item) {
                        return item.name.includes(that.ptn.value)
                    })
                    that.ander(Data)
                }
            )
        },
        chuangjian:function(){
            this.btn.addEventListener("click",()=>{
                this.dialog.style.display="block";
            })
            this.ok.addEventListener("click",()=>{
                this.dialog.style.display="none";
                var arr=this.dialog.querySelectorAll("input")
                // 正则


                // 推入的数据
                var obj={
                    name: arr[0].value,
                    age: arr[1].value,
                    tel: arr[2].value,
                    email: arr[3].value,
                }

                // 推入
                this.data.push(obj);
                // 
                this.ander(this.data)
            })
            // 
            this.no.addEventListener("click",()=>{
                this.dialog.style.display="none";
            })
        }
    }

    return Mod;
})