<template>
    <div>
        <headerIndex></headerIndex>
       
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item> <img src="../assets/img/banner/111.jpg"  alt=""> </van-swipe-item>
            <van-swipe-item> <img src="../assets/img/banner/222.jpg"  alt=""> </van-swipe-item>
            <van-swipe-item> <img src="../assets/img/banner/333.jpg"  alt=""> </van-swipe-item>
            <van-swipe-item> <img src="../assets/img/banner/444.jpg"  alt=""> </van-swipe-item>
            </van-swipe>

        <indexNav></indexNav>
        <thingsTwo></thingsTwo>
        <youLike></youLike>
        <tabbar></tabbar>
    </div>
</template>

<script>
import tabbar from '../components/tabbar/tabbar.vue'
import headerIndex from '../components/headerPage/headerIndex.vue'
// import banner from '../components/Banner/banner.vue'
import indexNav from '../components/indexPage/indexNav.vue'
import thingsTwo from '../components/indexPage/thingsTwo.vue'
import youLike from '../components/indexPage/youLike.vue'
    export default {
        components:{
            tabbar,
            headerIndex,
            // banner,
            indexNav,
            thingsTwo,
            youLike
        }
    }
</script>

<style lang="scss" scoped>

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
    width:100%;
}
.my-swipe .van-swipe-item img{
    width:100%;
    height:257px;
    border-radius:0 0 10px 10px;
}
</style>