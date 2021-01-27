// 定义模块 (独立模块)
define(function () {
    function dialog(content, background, borderColor) {
        var box = document.createElement("div");
        box.innerHTML = content;
        box.style.border = `1px solid ${borderColor}`
        box.style.backgroundColor = background
        box.style.borderRadius = "10px"
        box.style.padding = "4px 10px"
        document.body.appendChild(box)
    }

    // 抛出
    return dialog
})