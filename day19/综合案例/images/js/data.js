function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var arr = ["javascript入门教程", "C++免费课程", "PS你不知道的课程", "VSCode编辑器教程"]
var id = 0;
define(function () {
    var data = [];
    for (var i = 1; i < 1000; i++) {
        data.push({
            url: `images/${random(1,5)}.png`,
            title: arr[random(0, 3)],
            count: random(1000, 100000),
            id: ++id,
        })
    }

    return data;

})