define(["V"], function (V) {
    function Sel(obj) {
        Object.assign(this, obj);
        this.init()
    }


    Sel.prototype = {
        constructor: Sel,
        init() {
            [...this.ul.children].forEach(function (item) {
                item.onclick = function () {
                    var ol = item.children[1];
                    if (ol.style.display === "block") {
                        V(ol, "slideUp")
                    } else {
                        V(ol, "slideDown")
                    }

                }
            })
        }
    }
    return Sel;
})