require(["js/Big"], function (Big) {
    new Big({
        // 放大镜区域  包装者
        bigGlass: document.querySelector(".big-glass"),
        // 左侧小图片
        smallImg: document.querySelector(".small-img"),
        // 右侧大图片
        bigImg: document.querySelector(".big-img"),
        // 遮罩层
        mask: document.querySelector(".mask"),
        // 左盒子
        leftBox: document.querySelector(".left-box"),
        // 右盒子
        rightBox: document.querySelector(".right-box"),
        // 小图片盒子
        container: document.querySelector(".container"),
    })
})