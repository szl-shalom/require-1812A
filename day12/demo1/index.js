const lis = [...document.querySelectorAll("li")];

const d = drag();

lis.forEach(item => {
    d(item);
    item.setAttribute("x", item.offsetLeft);
    item.setAttribute("y", item.offsetTop)

});




function drag() {
    let flag = false, pos = {}, dragEl = null,
        pos1 = {};
    document.addEventListener("mousemove", e => {
        if (flag) {
            console.log(e.pageX, pos.x, pos1.x)
            dragEl.style.left = e.pageX - pos.x - dragEl.getAttribute("x") + "px";
            console.log(11)
        }
    })



    document.addEventListener("mouseup", e => {
        flag = false
    })

    return function (el) {
        el.addEventListener("mousedown", e => {
            dragEl = el;
            flag = true;
            pos = {
                x: e.offsetX,
                y: e.offsetY
            }
        })
    }
}