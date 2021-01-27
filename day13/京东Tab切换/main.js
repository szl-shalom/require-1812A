require.config({
    baseUrl: "js",
    paths: {
        V: "../lib/velocity.min"
    }
})



require(["data", "jd_tab"], function (data, Tab) {
    new Tab({
        data: data,
        slide:document.querySelector(".slide ul"),
        content:document.querySelector(".content ul"),
    })
})