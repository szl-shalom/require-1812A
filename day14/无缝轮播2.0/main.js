require.config({
    baseUrl: "js",
    paths: {
        V: "../lib/velocity.min"
    }
})
require(["swiper"], function (Swiper) {
    window.s = new Swiper({
        swiper: document.querySelector(".swiper"),
        container: document.querySelector(".container"),
        page: document.querySelector(".page"),
        prev: document.querySelector(".prev"),
        next: document.querySelector(".next"),
    })
})