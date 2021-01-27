require(["js/Dialog"], function (Dialog) {
    document.onclick = function (e) {
        var tar = e.target;
        if (tar.nodeName === "BUTTON") {
            new Dialog({
                con: tar.innerHTML
            })
        }
    }
})