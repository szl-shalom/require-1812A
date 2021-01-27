define(function () {
    function Sanji(obj) {
        // 合拼参数
        // 语法：从第二个参数往后，都和第一个参数进行合并
        //  第一个参数不存在的属性就是添加，存在就是覆盖
        Object.assign(this, {}, obj);

        this.init(); //初始化
    }


    Sanji.prototype = {
        constructor: Sanji,
        init() {
            this.render(this.pro, this.data);
            this.change();
        },
        render(el, data) {
            el.innerHTML = `<option>请选择</option>` + data.map(function (item) {
                return `
                    <option>${item.name}</option>
                `
            }).join("")
        },
        change() {
            var indPro, indCity, that = this;
            this.pro.addEventListener("change", function () {
                // 语法:  select.selectedIndex
                indPro = this.selectedIndex - 1;
                // 渲染城市
                that.render(that.city, that.data[indPro].children)
            })


            this.city.addEventListener("change", function () {
                // 语法:  select.selectedIndex
                indCity = this.selectedIndex - 1;
                // 渲染城市
                that.render(that.area, that.data[indPro].children[indCity].children)
            })
        }
    }


    // 抛出
    return Sanji;

})