function DragCar(opt) {
    Object.assign(this, opt);
    this.init();
}

DragCar.prototype = {
    constructor: DragCar,
    init() {
        // 绑定事件
        this.bindEvent();
        console.log(1)
    },
    bindEvent() {
        // 拖拽事件
        this.drag();
        // 购物车+-事件
        this.tbody.addEventListener("click", (e) => {
            var tar = e.target;
            if (tar.innerHTML === "-") {
                tar.nextElementSibling.innerHTML--;

                if(tar.nextElementSibling.innerHTML<=0){
                    tar.parentNode.parentNode.remove();
                }
            }
            if (tar.innerHTML === "+") {
                tar.previousElementSibling.innerHTML++;

            }
            this.computed()
        })
    },
    drag() {
        var isDrag = false,
            pos = {};
        this.ul.addEventListener("mousedown", e => {
            var tar = e.target;
            if (tar.nodeName === "LI") {
                isDrag = true;
                // 克隆一个节点
                this.dragCloneEl = tar.cloneNode(true);
                // 开启定位
                this.dragCloneEl.style.position = "absolute";
                // 保存保存颜色
                // getComputedStyle  获取该元素的所有的样式集合
                this.dragCloneEl.style.backgroundColor = getComputedStyle(tar).backgroundColor;
                // 添加到页面
                document.body.append(this.dragCloneEl);
                // 保存鼠标点击元素的位置
                pos = {
                    x: e.offsetX,
                    y: e.offsetY,
                }
            }
        })

        document.addEventListener("mousemove", e => {
            if (isDrag) {
                this.dragCloneEl.style.left = e.pageX - pos.x + "px";
                this.dragCloneEl.style.top = e.pageY - pos.y + "px";
            }
        })

        document.addEventListener("mouseup", e => {
            if (isDrag) {
                isDrag = false;


                // 判断是否进入区间
                // element.getBoundingClientRect()   返回一个对象  对象包含该元素距离视口的上下左右位置
                var obj = this.right.getBoundingClientRect()
                if (e.pageX > obj.left) {
                    // 进入目标区域
                    this.enterTarget();
                }
                this.dragCloneEl && this.dragCloneEl.remove();
            }

        })
    },
    enterTarget() {
        var flag = true;
        // 去重复  其实就是判断是否存在
        [...this.tbody.children].forEach((item, index) => {
            console.log(item)
            if (item.children[0].innerHTML == this.dragCloneEl.children[0].innerHTML) {
                flag = false;
                item.querySelector("span").innerHTML++;
            }
        })

        if (flag) {
            this.tbody.innerHTML += `
            <tr>
                <th>${this.dragCloneEl.children[0].innerHTML}</th>
                <th>${this.dragCloneEl.children[1].innerHTML}</th>
                <th>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </th>
            </tr>
            `
        }

        this.computed();

    },
    computed() {
        var price = 0;
        // 累加
        [...this.tbody.children].forEach(item => {
            price += item.children[1].innerHTML * item.querySelector("span").innerHTML

        })

        this.h2.innerHTML = price;
    }
}


define(function () {
    return DragCar;
})