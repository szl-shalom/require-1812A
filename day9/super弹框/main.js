require(["js/bigImg"], function (B) {
    var imgs = [...document.querySelectorAll(".box img")];

    imgs.forEach((item, index) => {
        item.onclick = () => {
            new B({
                src: item.src,
                ind: index + 1,
                maxLen: item.parentNode.children.length,
                el: item,
            })
        }

    })


    var imgs1 = [...document.querySelectorAll(".box1 img")];

    imgs1.forEach((item, index) => {
        item.onclick = () => {
            new B({
                src: item.src,
                ind: index + 1,
                maxLen: item.parentNode.children.length,
                el: item,
            })
        }

    })
})