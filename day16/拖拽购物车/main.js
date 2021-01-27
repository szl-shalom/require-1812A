require(["js/DragCar"], function (DragCar) {
    new DragCar({
        ul: document.querySelector("ul"),
        right: document.querySelector(".right"),
        tbody: document.querySelector("tbody"),
        h2: document.querySelector("h2"),
    })
})