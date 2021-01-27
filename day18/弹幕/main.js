require.config({
    baseUrl: "js",
    paths: {
        V: "../lib/velocity.min"
    }
})




require(["mess"], function (Mess) {
    new Mess({
        data: ["哈哈，真好看", "这个片子不错", "一般般，的小孩子看的"],
        content: document.querySelector(".content"),
        ipt: document.querySelector(".ipt"),
        right: document.querySelector(".right")
    })
})