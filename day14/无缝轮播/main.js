require.config({
    baseUrl: "js",
    paths: {
        swiper: "swiper",
        V: "../lib/velocity.min"
    }
})



require(["swiper"], function (Swiper) {
    window.s = new Swiper({
        index: 0,
        container: document.querySelector(".container"),
        swiper: document.querySelector(".swiper"),
        prev: document.querySelector(".prev"),
        next: document.querySelector(".next"),
        page: document.querySelector(".page")
    })
})