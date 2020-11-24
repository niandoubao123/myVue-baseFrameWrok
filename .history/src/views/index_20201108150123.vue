<template>
    <div>
        <headerIndex></headerIndex>
            <!-- <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item> <img src="../assets/img/banner/111.jpg"  alt=""> </van-swipe-item>
            <van-swipe-item> <img src="../assets/img/banner/222.jpg"  alt=""> </van-swipe-item>
            <van-swipe-item> <img src="../assets/img/banner/333.jpg"  alt=""> </van-swipe-item>
            <van-swipe-item> <img src="../assets/img/banner/444.jpg"  alt=""> </van-swipe-item>
            </van-swipe> -->

        <!-- <indexNav></indexNav>
        <thingsTwo></thingsTwo>
        <youLike></youLike> -->
        <div id="map" class="map"></div>
        <tabbar></tabbar>
    </div>
</template>

<script>
import tabbar from '../components/tabbar/tabbar.vue'
import headerIndex from '../components/headerPage/headerIndex.vue'
// import banner from '../components/Banner/banner.vue'
// import indexNav from '../components/indexPage/indexNav.vue'
// import thingsTwo from '../components/indexPage/thingsTwo.vue'
// import youLike from '../components/indexPage/youLike.vue'
import "ol/ol.css";
import ImageLayer from "ol/layer/Image";
import Map from "ol/Map";
import Projection from "ol/proj/Projection";
import Static from "ol/source/ImageStatic";
import View from "ol/View";
import { getCenter } from "ol/extent";

let extent = [0, 0, 338, 600];
let projection = new Projection({
    code: "xkcd-image",
    units: "pixels",
    extent: extent
});
    
export default {
    components:{
        tabbar,
        headerIndex,
        // banner,
        // indexNav,
        // thingsTwo,
        // youLike
    },
    // created(){
    //     let data =[
    //         {
    //             'monday':'星期一',
    //             'tuesday':'星期二',
    //             'thrsday':'星期三',
    //             'fourday':'星期四',
    //             'friday':'星期五',
    //             'secondday':'星期六',
    //             'seconddays':'星期天',
    //         }
    //     ]
    // this.$window.utils.dict.init(data)
    // },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
        new Map({
            layers: [
            new TileLayer({
                source: new OSM()
            })
            ],
            target: "map",
            view: new View({
            center: [0, 0],
            zoom: 2
            })
        });
    
        console.log("init finished");
        }
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