require(["js/data", "js/search"], function (data, Search) {
    new Search({
        ipt: document.querySelector(".ipt"),
        data: data,
        list:document.querySelector(".list")
    })
})