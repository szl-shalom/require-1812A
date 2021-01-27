require.config({
    baseUrl: "js",
})



require(["car", "data"], (Car, data) => {
    new Car({
        data: data,
        tbody: document.querySelector("tbody"),
        tatal:document.querySelector(".tatal")
    })
})