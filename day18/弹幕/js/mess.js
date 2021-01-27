define(["V"], function (V) {
    function Mess(opt) {
        Object.assign(this, {
            index: 0,
        }, opt);
        this.init()
    }


    Mess.prototype = {
        constructor: Mess,
        init() {
            // 循环
            this.data.forEach(item => {
                // 创建节点
                this.createSpan(item);
            });
            // 绑定事件
            this.bindEvent();
        },
        bindEvent() {
            // 鼠标按下
            this.ipt.addEventListener("keydown", e => {
                // 回车
                if (e.keyCode === 13) {
                    // 调用创建函数
                    this.createSpan(this.ipt.value)
                }
            });
            // 遍历
            [...this.right.children].forEach((item, index) => {
                // 绑定点击事件
                item.onclick = () => {
                    // 修改下标
                    this.index = index;
                    // 切换高亮
                    this.right.querySelector(".active") && this.right.querySelector(".active").classList.remove("active")
                    item.classList.add("active");
                }
            })

            // 时间委托 鼠标滑过
            this.content.addEventListener("mouseover", e => {
                // 事件源
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    V(tar, "pause")
                }


                if (tar.nodeName === "B") {
                    V(tar.parentNode, "pause")
                }
            })

            this.content.addEventListener("mouseout", e => {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    V(tar, "resume")
                }


                if (tar.nodeName === "B") {
                    V(tar.parentNode, "resume")
                }
            })


            this.content.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    // 点赞+1
                    tar.children[0].innerHTML++;
                }
            })
        },

        // 创建弹幕
        createSpan(item) {
            var span = document.createElement("span");
            // 修改内容
            // 调用正则替换函数   过滤敏感词汇
            span.innerHTML = this.regReplace(item) + "<b></b>";
            this.content.appendChild(span);
            // 调用设置位置
            this.setPosition(span);
        },
        // 设置位置
        setPosition(span) {
            var y = this.content.offsetHeight - span.offsetHeight
            span.style.position = "absolute";
            span.style.left = "100%";

            // 下标 === 0  全屏幕
            if (this.index === 0) {
                span.style.top = this.random(0, y) + "px";
            } else {
                // 下标不是 =  
                // 公式推理:  1 =>  0 / 3 * y  ----------  1 / 3 * y 
                // 公式推理:  2 =>  1 / 3 * y  ----------  2 / 3 * y 
                // 公式推理:  3 =>  2 / 3 * y  ----------  3 / 3 * y 

                var x1 = (this.index - 1) / 3 * y
                var x2 = this.index / 3 * y
                span.style.top = this.random(x1, x2) + "px";
            }

            // 字体不换行
            span.style.whiteSpace = "nowrap";
            span.style.fontSize = this.random(12, 20) + "px";
            span.style.color = "#" + Math.random().toString(16).slice(2, 8)
            // 调用动画
            this.run(span)
        },
        // 动画函数
        run(span) {
            V(span, {
                // 左边距:取决于盒子自身的长度.
                left: -span.offsetWidth
            }, {
                // 动画时长
                duration: this.random(1000, 5000),
                // 动画完成函数
                complete() {
                    span.remove()
                }
            })
        },
        // 过滤函数
        regReplace(con) {
            // 过滤词汇库
            var arr = ["SB", "你妈死了", "垃圾", "NMSL", "nmzl"];
            //  声明正则过滤器
            var reg = new RegExp(arr.join("|"), "gi");
            // 字符串替换并返回结果  将匹配到的内容替换伟 ** 
            return con.replace(reg, "**")
        },
        random(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min)
        }
    }

    return Mess
})