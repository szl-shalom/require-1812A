define([], function () {
    function Swiper(opt) {
        Object.assign(this, {}, opt);
        this.init();
    }


    Swiper.prototype = {
        constructor: Swiper,
        init() {
            this.render();
            this.click()
        },
        render() {
            var that = this;
            this.img.src = this.data[this.index];
            this.ul.querySelector(".active") &&  this.ul.querySelector(".active").classList.remove("active")
            this.ul.children[this.index].classList.add("active");
        },
        click(){
            
            this.right.onclick=()=>{
                this.index++
                
                if(this.index>this.data.length-1){
                    this.index=0
                }
                this.render();
            }
            this.left.onclick=()=>{
                this.index--
                
                if(this.index<0){
                    this.index=this.data.length-1;
                }
                this.render();
            }
        }
    }

    return Swiper;
})