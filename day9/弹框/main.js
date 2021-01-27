require.config({
    baseUrl: "js",
    paths: {
        V: "../lib/velocity.min"
    }
})


require(["dialog"], function (Dialog) {
    var btns = document.querySelectorAll("button");

    btns[0].onclick = function () {
        new Dialog({})
    }

    btns[1].onclick = function () {
        new Dialog({
            title: "今天天气不错",
            okValue: "不错",
            noValue: "不填好"
        })
    }


    btns[2].onclick = function () {
        new Dialog({
            title: "哈哈哈哈,三级联动做出来了?",
            okValue: "出来了",
            noValue: "抹油",
            // 回调函数  
            callback() {
                console.log("您点击了确定")
            }
        })
    }


    document.onclick = function (e) {
        var tar = e.target;

        if (tar.className === "del") {
            new Dialog({
                title: "确定要删除该数据吗?",
                // 回调函数  
                callback() {
                    // 删除父元素
                    tar.parentNode.remove();
                }
            })
        }
    }
})