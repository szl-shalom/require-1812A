require.config({
    baseUrl: "js", //配置基础路径 => 未来找模块（js文件)去哪里找
    paths: {
        sel: "sel",
        data: "data",
        V:"../lib/velocity.min"
    }
})




require(["sel", "data"], function (Sel, data) {
    // console.log(Sel,data)
    new Sel({
        data: data,
        wrap: document.querySelector(".wrap")
    })
})