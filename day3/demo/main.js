// 配置
require.config({
    // 配置基础查询路径
    baseUrl: "js",
    // 配置别名  为了使用方便
    paths: {
        1: "1/3/123/qwe/yyy/1",
        add: "add",
        sanji: "sanji",
        data: "data",
    },
    // 垫片
    // 配置非AMD规范的模块
    shim: {

    }
})


// 要求引入 js文件下面的 sanji.js
require(["sanji", "data"], function (S, data) {
    new S({
        pro: document.querySelector("#province"),
        city: document.querySelector("#city"),
        area: document.querySelector("#area"),
        data: data
    })
})