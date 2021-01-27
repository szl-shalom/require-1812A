require(["js/filter", "js/data"], function (F, data) {
    new F({
        data: data,
        ul:document.querySelector("ul"),
        ipt:document.querySelector("input"),
    })
})