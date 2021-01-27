require.config({
    baseUrl: "js",
})




require(["data", "mod"], function (data, Mod) {
    new Mod({
        data: data,
        box: document.querySelector("tbody"),
        ptn:document.querySelector(".ptn"),
        btn:document.querySelector(".btn"),
        dialog:document.querySelector(".dialog"),
        ok:document.querySelector(".ok"),
        no:document.querySelector(".no"),
        
    })
})
