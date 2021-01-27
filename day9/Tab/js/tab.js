define(function () {
    function Tab(opt) {
        Object.assign(this, {
            index: 0,//默认下标  
        }, opt);
        this.init();
    }
    Tab.prototype = {
        constructor: Tab,
        init() {
            // 渲染标题
            this.renderTitle();
            // 渲染内容盒子
            this.renderContent();
            // 绑定事件
            this.bindEvent();
        },
        renderTitle() {
            this.title.innerHTML = this.data.map((item, ind) => {
                return `
                    <span class="${ind === this.index ? "active" : ""}">${item.title}</span>
                `
            }).join("")
        },
        renderContent() {
            // 根据下标进行渲染  this.index
            this.content.innerHTML = this.data[this.index].children.map(item => {
                return `
                <dl>
                    <dd><img src="${item.url}" alt=""></dd>
                    <dt>
                       ${item.name}
                    </dt>
                </dl>
                `
            }).join("")
        },
        bindEvent() {
            [...this.title.children].forEach((item, ind) => {
                item.onclick = () => {
                    this.title.querySelector(".active").classList.remove("active");
                    item.classList.add("active");
                    // 修改下标
                    this.index = ind;
                    // 重新渲染
                    this.renderContent()
                }
            })
        }
    }

    return Tab;
})