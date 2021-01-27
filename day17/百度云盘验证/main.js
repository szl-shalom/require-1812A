require.config({
    baseUrl: "js",
    paths: {
        data: "data",
        r: "reg",
        s: "swiper",
        t: "tab"
    }
})



require(["data", "r", "t", "s"], function (data, Reg, Tab, Swiper) {
    // 背景轮播
    new Swiper({
        data: data,
        swiper: document.querySelector(".swiper"),
        swiperImg: document.querySelector(".swiper-img"),
        swiperPage: document.querySelector(".swiper-page"),
        time: 3000,
        index: 4,
    })


    // tab模块调用
    new Tab({
        title: document.querySelector(".title"),
        content: document.querySelector(".content"),
    })

    // var reg = /^1[3-9]\d{9}$/
    // var reg1 = /^\w+@\w+\.(com|cn|net)$/
    // var reg2 = /^[\u4e00-\u9fa5]{2,6}$/




    // 正则验证模块
    new Reg({
        data: [{
            input: document.querySelector(".user"),
            reg: /^(1[3-9]\d{9})|(\w+@\w+\.(com|cn|net))|([\u4e00-\u9fa5]{2,6})$/,
        }, {
            input: document.querySelector(".pwd"),
            reg: /^\w{6,12}$/,
        }, {
            input: document.querySelector(".tel"),
            reg: /^1[3-9]\d{9}$/,
        }],
        login1: document.querySelector(".login1"),
        login2: document.querySelector(".login2"),
        user: document.querySelector(".user"),
        pwd: document.querySelector(".pwd"),
        tel: document.querySelector(".tel"),
        code: document.querySelector(".code"),
    })
})