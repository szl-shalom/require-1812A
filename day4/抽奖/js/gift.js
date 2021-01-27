define(function () {
    function Gift(obj) {
        Object.assign(this, obj);
        this.init()
    }


    Gift.prototype = {
        constrcutor: Gift,
        init() {
            this.cortDownTime();
        },
        cortDownTime() {
            var time = 3,
                that = this;
            var s1 = setInterval(function () {
                time--;
                that.h1.innerHTML = `还剩${time}秒开始抽奖`;
                if (time <= 0) {
                    clearInterval(s1);
                    that.h1.innerHTML = `开始抽奖`;
                    that.startGame();
                }
            }, 1000)
        },
        startGame() {
            var arr = ["兰博基尼", "劳斯莱斯", "肖战", "RPG"],
            that = this;

            setInterval(function () {
                var ind = Math.floor(Math.random() * arr.length);
                that.ul.innerHTML += `
                    <li>奖品：${arr[ind]}</li>
                `
            }, 3000)
        }
    }

    return Gift
})