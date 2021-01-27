require.config({
    baseUrl: "js",
    paths: {
        a: "add"
    }
})

require(["a"], function (Car) {
    new Car({

    })
})