require.config({
    baseUrl: "js",
    paths: {
        data: "data",
        dialog: "dialog",
        formatTime: "formatTime",
        todolist: "todolist",
    }
})



require(["data", "todolist"], function (data, ToDoList) {
    new ToDoList({
        data: data,
        list: document.querySelector(".list"),
        add: document.querySelector(".add")
    })
})