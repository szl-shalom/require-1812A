require(["js/data", "js/tab"], function (data, Tab) {
    new Tab({
        data: data,
        title: document.querySelector(".title"),
        content: document.querySelector(".content"),
    })
})