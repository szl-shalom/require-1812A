require.config({
    baseUrl: "js",
    paths: {
        s: "sel",
        V:"../lib/velocity.min"
    }
})



require(["s"], function (S) {
    new S({
        ul: document.querySelector("ul")
    })
})