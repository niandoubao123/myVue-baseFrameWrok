<template>
    <div>
        <!-- <van-swipe class="my-swipe" @change="onChange" indicator-color="white">
        <van-swipe-item>
            <img src="../../assets/img/guide/shu2.jpg" alt="">
            <div v-show="bool[0]">
            <h1 class="animated fadeInUpBig">演绎欧式浪漫风情··</h1>
            <h2 class="animated fadeInUpBig deyay-0.5s">欧式风格魅力在于现代于形</h2>
            </div>
        </van-swipe-item>
        <van-swipe-item>
           
            <img src="../../assets/img/guide/shu4.jpg" alt="">
             <div v-show="bool[1]">
            <h1 class="animated fadeInUpBig ">顶尖技术摄影师</h1>
            <h2 class="animated fadeInUpBig deyay-0.5s">WEDDING</h2>
            </div>
        </van-swipe-item>
        <van-swipe-item>
            <img src="../../assets/img/guide/shu3.jpg" alt="">
            <div v-show="bool[2]">
            <h1 class="animated fadeInUpBig ">豆包婚礼策划</h1>
            <h2 class="animated fadeInUpBig deyay-0.5s"></h2>
            <van-button class="animated fadeInUpBig deyay-1s" type="warning" @click="enter">开启浪漫</van-button>
            </div>
        </van-swipe-item>
        </van-swipe> -->
         
        <!-- Swiper -->
        <div class="swiper-container containerguidepage">
            <div class="swiper-wrapper">
            <div class="swiper-slide aaa">
                <div v-show="flag">
                    <h1 class="animated fadeInUpBig delay-2s">演绎欧式浪漫风情··</h1>
                    <h2 class="animated fadeInUpBig delay-1.5s">欧式风格魅力在于现代于形</h2>
                </div>
            </div>
            <div class="swiper-slide bbb">
                <div v-show="flag">
                    <h1 class="animated fadeInUpBig delay-2s">顶尖技术摄影师</h1>
                    <h2 class="animated fadeInUpBig delay-1.5s">WEDDING</h2>
                </div>
            </div>
            <div class="swiper-slide ccc">
                <div v-show="flag">
                    <h1 class="animated fadeInUpBig delay-2s">豆包婚礼策划</h1>
                    <h2 class="animated fadeInUpBig delay-1.5s"></h2>
                    <van-button class="animated fadeInUpBig delay-2s" plain hairline type="primary" size="small" to="/home/recommend">开启浪漫</van-button>
                </div>
            </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination paginationguidepage"></div>
        </div>
    </div>
</template>

<script>
      import Swiper from "swiper";
    export default {
        data(){
            return {
                flag:true
            }
        },
        created(){
            this.$store.state.vanTabbar = false;
        },
        mounted(){
            let _this = this;
            new Swiper('.containerguidepage', {
                pagination: {
                    el: '.paginationguidepage',
                },
                on: {
                    touchStart: function(){
                        console.log(this.activeIndex);  
                    },
                    // 轮播图切换前效果
                    slideChangeTransitionStart:function(){
                        _this.flag = false; //隐藏
                    },
                    // 轮播图切换后效果
                    slideChangeTransitionEnd: function(){
                        // _this.flag[this.activeIndex] = true; //显示
                        _this.flag = true;
                    },
                },
            });
        },
        // 生命周期钩子，最后销毁函数
        destroyed() {
            // 当组件被销毁时候，修改导航数据
            this.$store.state.vanTabbar = true;
        },
    }
</script>

<style lang="scss" scoped>
// .biggbox[data-v-7ba5bd90]{
//     padding-bottom:0;
// }
// .van-swipe{
//     width:100%;
//     height:100%;
// }
// .my-swipe .van-swipe-item {
//   color: #fff;
//   font-size: 20px;
//   width:100%;
//   height:100%;
//   line-height:100%;
//   text-align: center;
//   background-color: #39a9ed;
// }
// .my-swipe .van-swipe-item  img{
//     width:375px;
//     height:667px;
// }
// .van-button{
//     position: absolute;
//     left:50%;
//     margin-left:-60px;
//     bottom:95px;
//     border-radius: 20px;
//     font-weight: bold;
//     font-size: 20px;
// }
h1{
    width:100%;
    position: absolute;
    top:70%;
    text-align: center;
    font-size: 30px;
    text-shadow:0 0 3px #fff;
}
h2{
    width:100%;
    position: absolute;
    font-size: 25px;
    top:76%;
}
.swiper-container{
        position: fixed;
        top:0px;
        left:0px;
        width: 100%;
        height: 100%;
}
.swiper-slide{
    text-align: center;
    
}
.aaa{
    background-image: url('../../assets/img/guide/shu2.jpg');
    background-size: cover;
}
.bbb{
    background-image: url('../../assets/img/guide/shu4.jpg');
    background-size: cover;
}
.ccc{
    background-image: url('../../assets/img/guide/shu3.jpg');
    background-size: cover;
}
</style>