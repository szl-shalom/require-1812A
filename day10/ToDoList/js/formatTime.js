define(function () {
    function time(t) {
        // 设置默认值
        var t = t || new Date();

        return `${t.getFullYear()}年${t.getMonth() + 1}月${t.getDate()}日${t.getHours()}小时${t.getMinutes()}分钟${t.getSeconds()}秒星期四`
    }



    return time
})