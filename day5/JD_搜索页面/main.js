require(["js/data", "js/filter"], function (data, Filter) {
    new Filter({
        data: data,
        search: document.querySelector(".search"),
        con: document.querySelector(".con"),
        price: document.querySelector(".price")
    })
})

// 
// var arr = [1, 3, 7, 4, 2, 3, 5, 6];
// var res =arr.sort(function (a, b) {
//     return b.price- a.price
// })
// console.log(res)