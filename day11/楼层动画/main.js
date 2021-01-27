require.config({
    baseUrl: "js",
    paths: {
        d: "data",
        f: "floor",
        n: "navBar",
        V: "../lib/velocity.min"
    }
})


require(["d", "f", "n"], function (data, Floor, NarBar) {
    // 调用导航菜单
    new NarBar({
        data: data,
        ul: document.querySelector(".nav-bar ul"),
        ol: document.querySelector(".nav-bar ol"),
        box: document.querySelector(".nav-bar")
    })


    // 调用楼层
    new Floor({
        floor:document.querySelector(".floor ul"),
        fixed:document.querySelector(".fixed ul"),

    })
})