define(function () {
    function Page(opt) {
        Object.assign(this, {}, opt);
        this.init()
    }

    Page.prototype = {
        constructor: Page,
        init() {
            // 初始化
            this.change();
            // 绑定事件
            this.bindEvent();
        },
        bindEvent() {
            // 事件委托
            this.footer.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    this.index = tar.innerHTML - 1;
                    this.change();
                } else {
                    switch (tar.className) {
                        case "first":
                            this.index = 0;
                            this.change();
                            break
                        case "next":
                            this.index++;
                            this.change();
                            break
                        case "prev":
                            this.index--;
                            this.change();
                            break
                        case "end":
                            this.index = this.maxSize - 1;
                            this.change();
                            break
                    }
                }
            })
        },
        render(arr) {
            // 渲染内容
            this.content.innerHTML = arr.map(item => {
                return `
                <dl>
                    <dt>
                        <img src="${item.url}" alt="">
                    </dt>
                    <dd>
                        <p>${item.title}</p>
                        <p>0基础---${item.count}人报名了</p>
                        <p>免费课程</p>
                    </dd>
                </dl>
                `
            }).join("")


            // 渲染页码
            this.renderPage();


            // 渲染当前页和最大页码
            this.code.innerHTML = `${this.index + 1}/${this.maxSize}`

            // 禁用
            this.first.disabled = this.index === 0
            this.prev.disabled = this.index === 0

            this.next.disabled = this.index === this.maxSize - 1
            this.end.disabled = this.index === this.maxSize - 1
        },
        change() {
            // 求截取的数据
            var arr = this.data.slice(this.index * this.pageSize, this.index * this.pageSize + this.pageSize);
            // 求页码
            this.maxSize = Math.ceil(this.data.length / this.pageSize)
            // 渲染
            this.render(arr);
        },
        //  封装 分页 显示7条函数
        renderPage() {
            var str = ""
            //  下标 0 1 2
            if (this.index < 3) {
                for (var i = 1; i <= 7; i++) {
                    str += `<li class="${i === this.index + 1 ? "active":""}">${i}</li>`
                }
                // 下标  倒数第一  第二 第三 
            } else if (this.index > this.maxSize - 4) {
                for (var i = this.maxSize - 6; i <= this.maxSize; i++) {
                    str += `<li class="${i === this.index + 1 ? "active":""}">${i}</li>`
                }
                // 中间
            } else {
                str = `
                    <li>${this.index -2}</li>
                    <li>${this.index -1 }</li>
                    <li>${this.index}</li>
                    <li class="active">${this.index + 1}</li>
                    <li>${this.index + 2}</li>
                    <li>${this.index + 3}</li>
                    <li>${this.index + 4}</li>
                
                `

            }
            this.list.innerHTML = str;
        }

    }

    return Page;
})