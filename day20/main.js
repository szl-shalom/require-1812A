require.config({
    baseUrl: "js",
    paths: {
        V: "../lib/velocity.min"
    }
})



require(["Dialog", "data", "Ssq"], function (Dialog, data, Ssq) {
    var btn = document.querySelector(".btn"),
        dialog = document.querySelector(".dialog");

    console.log(dialog)
    btn.onclick = () => {
        dialog.style.display = "block";
    }




    new Ssq({
        a: document.querySelector("#a"),
        b: document.querySelector("#b"),
        c: document.querySelector("#c"),
        data: data
    })


    new Dialog({
        ok: document.querySelector(".ok"),
        tel: document.querySelector(".tel"),
        user: document.querySelector(".user"),
        dialog: dialog,
        ul: document.querySelector("ul"),
        a: document.querySelector("#a"),
        b: document.querySelector("#b"),
        c: document.querySelector("#c"),
    })
})