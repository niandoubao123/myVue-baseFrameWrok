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
import { defaults as defaultControls } from "ol/control";
import Tile from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import OSM from "ol/source/OSM";

let extent = [0, 0, 338, 600];
let projection = new Projection({
    code: "xkcd-image",
    units: "pixels",
    extent: extent
});
    
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
   name: "tree",
    data() {
        return {
            map: null
        };
    },
    methods: {
        /**
         * 初始化一个 openlayers 地图
         */
        initMap() {
            let target = "map"; //跟页面元素的 id 绑定来进行渲染
            let tileLayer = [
                new Tile({
                    source: new OSM()
                })
            ];
            let view = new View({
                center: fromLonLat([104.912777, 34.730746]), //地图中心坐标
                zoom: 4.5 //缩放级别
            });
            this.map = new Map({
                target: target, //绑定dom元素进行渲染
                layers: tileLayer, //配置地图数据源
                view: view //配置地图显示的options配置（坐标系，中心点，缩放级别等）
            });
        }
    },
    mounted() {
        this.initMap();
    }

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