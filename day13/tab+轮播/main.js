require.config({
    baseUrl: "js"
})

// 引入模块


require(["data", "swiper"], function (data, Swiper) {
    new Swiper({
        data: data,
        index: 1,//当前显示的图片 
        img: document.querySelector(".img"),
        right: document.querySelector(".right"),
        left: document.querySelector(".left"),
        ul: document.querySelector("ul")
    })
})