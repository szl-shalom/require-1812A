define(function () {
    function S(obj) {
        Object.assign(this, obj);
        this.init();
    }


    S.prototype = {
        constructor: S,
        init() {
            // 1.渲染
            this.render(this.a, this.data);
            // 2.绑定事件
            this.bindEvent();
        },
        /**
         * 
         * @param {NodeObject} el 是一个元素 
         * @param {Array} arr   渲染的数据
         */
        render(el, arr) {
            el.innerHTML = arr.map(item => {
                return `
                    <option>${item.name}</option>
                `
            }).join("")
        },
        bindEvent() {
            // aI 代表第一个select框的下标
            // bI 代表第二个select框的下标
            var aI, bI;
            // 给第一个下拉框添加改变事件
            this.a.addEventListener("change", () => {
                // 获取下拉框的下标
                aI = this.a.selectedIndex;
                // 根据下标获取对应的数据 （第二层数据 只需要一个下标）
                var data = this.data[aI].children;
                // 渲染 
                this.render(this.b, data)
            })

            // 给第二个下拉框添加改变事件
            this.b.addEventListener("change", () => {
                // 获取第二个框的下标
                bI = this.b.selectedIndex;
                // 根据下标获取对应的数据  （第三层数据   需要两个下标）
                var data = this.data[aI].children[bI].children;
                // 渲染
                this.render(this.c, data)
            })
        }
    }

    return S;
})