define(function () {
    function Tab(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }


    Tab.prototype = {
        constructor: Tab,
        init() {
            this.bindEvent();
        },
        bindEvent() {
            var that = this;
            [...this.title.children].forEach((item, index) => {
                item.addEventListener("click", () => {
                    // 移除标题高亮
                    this.title.querySelector(".active") && this.title.querySelector(".active").classList.remove("active");
                    // 移除内容高亮
                    this.content.querySelector(".active") && this.content.querySelector(".active").classList.remove("active");
                    // 标题高亮添加
                    item.classList.add("active");
                    // 内容高亮添加
                    this.content.children[index].classList.add("active")
                })
            })
        }
    }

    return Tab;
})