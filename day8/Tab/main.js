require.config({
    baseUrl: "js"
})



require(["tab"], function (Tab) {
    // 调用
    new Tab({
        title: document.querySelector(".title"),
        content: document.querySelector(".content"),
        // 回调函数  
        callback() {
            document.body.style.backgroundColor = "#" + Math.random().toString(16).slice(2, 8)
        }
    })

    new Tab({
        title: document.querySelector(".box2 .title"),
        content: document.querySelector(".box2 .content"),
        type: "mouseover"
    })

    new Tab({
        title: document.querySelector(".box3 .title"),
        content: document.querySelector(".box3 .content"),
        type: "mouseover",
        className: "qqq"
    })

    new Tab({
        title: document.querySelector(".box4 .title"),
        className: "qqq"
    })

})