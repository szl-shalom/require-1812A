define(["V"], function (V) {
    function Ssq(opt) {
        Object.assign(this, opt);
        this.init();
    }


    Ssq.prototype = {
        constructor: Ssq,
        init() {
            // console.log(this)
            this.render(this.a, this.data);
            this.bindEvent();
        },
        render(el, arr) {
            el.innerHTML = arr.map(item => {
                return `
                     <option value="${item.name || item}">${item.name || item}</option>
                `
            }).join("")
        },
        bindEvent() {
            var aI, bI;
            this.a.onchange = () => {
                aI = this.a.selectedIndex;
                var arr = this.data[aI].city
                this.render(this.b, arr)
            }


            this.b.onchange = () => {
                bI = this.b.selectedIndex;
                var arr = this.data[aI].city[bI].area
                this.render(this.c, arr)
            }
        }
    }

    return Ssq;
})