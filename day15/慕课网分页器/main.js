require.config({
    baseUrl: "js"
})



require(["data", "page"], function (data, Page) {
    new Page({
        content: document.querySelector(".content"),
        list: document.querySelector(".list"),
        code: document.querySelector(".code"),
        footer: document.querySelector(".footer"),
        first: document.querySelector(".first"),
        prev: document.querySelector(".prev"),
        end: document.querySelector(".end"),
        next: document.querySelector(".next"),
        data: data, //大数据
        index: 62, //当前下标
        pageSize: 16, //每页个数
    })
})