require.config({
    baseUrl: "js"
})


require(["data", "search"], function (data, S) {
    new S({
        data: data,
        box: document.querySelector("tbody"),
        ipt: document.querySelector("input")
    })
})