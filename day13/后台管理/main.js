require.config({
    baseUrl: "js",
    paths: {
        data: "data",
        sel: "sel",
        V: "../lib/velocity.min"
    }
})



require(["data", "sel"], function (data, Sel) {
    new Sel({
        data: data,
        list: document.querySelector(".list"),
        title: document.querySelector(".title"),
        content: document.querySelector(".content"),
    })
})