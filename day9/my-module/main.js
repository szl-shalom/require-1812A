require(["js/sanji", "js/data"], function (S, data) {
    new S({
        a: document.querySelector("#a"),
        b: document.querySelector("#b"),
        c: document.querySelector("#c"),
        data: data,
    })
})