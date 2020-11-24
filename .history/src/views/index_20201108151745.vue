<template>
    <div>
        <!-- <headerIndex></headerIndex> -->
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
// import headerIndex from '../components/headerPage/headerIndex.vue'
// import banner from '../components/Banner/banner.vue'
// import indexNav from '../components/indexPage/indexNav.vue'
// import thingsTwo from '../components/indexPage/thingsTwo.vue'
// import youLike from '../components/indexPage/youLike.vue'

import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { transform } from "ol/proj";
import OSM from "ol/source/OSM";
    
export default {
    components:{
        tabbar,
        // headerIndex,
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
   data() {
    return {};
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
        new Map({
            target: "map",
            layers: [
            new TileLayer({
                source: new XYZ({
                url:
                    "https://t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=key",
                }),
            }),
            new TileLayer({
                source: new XYZ({
                url:
                    "https://t0.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=key",
                }),
                isGroup: true,
                name: "天地图文字标注",
            }),
            //   new TileLayer({
            //     source: new OSM(),
            //   }),
            ],
            view: new View({
            projection: "EPSG:4326",
            center: [103.3, 35.5],
            zoom: 4,
            }),
        });
        },
    },

}
</script>

<style lang="scss" scoped>
.map{
    width: 100%;
    height: 1200px;
}
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