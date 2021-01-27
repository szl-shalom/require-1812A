require.config({
    baseUrl: "js",
    paths: {
        data: "data",
        Swiper: "Swiper",
        Nav: "Nav",
        Sel: "Sel",
        V: "../lib/velocity.min"
    }
})



require(["data", "Swiper", "Nav", "Sel"], function (data, Swiper, Nav, Sel) {
    new Swiper({
        data: data.swiperData,
        right: document.querySelector(".right"),
        container: document.querySelector(".container"),
        page: document.querySelector(".page"),
        prev: document.querySelector(".prev"),
        next: document.querySelector(".next"),
        index: 0,
    })


    new Nav({
        data: data.navData,
        navBar: document.querySelector(".nav-bar"),
        nav: document.querySelector(".nav"),
        con: document.querySelector(".con")
    })

    new Sel({
        data: data.selData,
        ul: document.querySelector(".left ul"),
        leftCon: document.querySelector(".left-con"),
        left: document.querySelector(".left")
    })
})