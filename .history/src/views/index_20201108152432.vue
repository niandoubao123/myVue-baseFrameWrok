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
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ";
import { Map, View, Feature } from "ol";
import { Style, Stroke, Fill } from "ol/style";
import { Polygon, MultiPolygon } from "ol/geom";
import { defaults as defaultControls } from "ol/control";

import areaGeo from "../assets/china.json";
    
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
        return {
        map: null,
        routeLayer: null,
        routeFeature: null,
        lineData: [],
        };
    },
    created() {},
    mounted() {
        this.initMap();
        this.addArea(areaGeo);
    },
    methods: {
        // 初始化地图
        initMap() {
        this.map = new Map({
            target: "Map",
            controls: defaultControls({
            zoom: true,
            }).extend([]),
            layers: [
            new TileLayer({
                source: new XYZ({
                url:
                    "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
                }),
            }),
            ],
            view: new View({
            projection: "EPSG:4326",
            center: [118.792207,32.133476],
            zoom: 9,
            maxZoom: 19,
            minZoom: 5,
            }),
        });
        },
        // 设置区域
        addArea(geo = []) {
        if (geo.length == 0) {
            return false;
        }
        let features = [];
        geo.forEach((g) => {
            console.log(g);

            let lineData = g.features[0];
            let routeFeature = "";
            console.log(lineData.geometry.type);
            if (lineData.geometry.type == "MultiPolygon") {
            routeFeature = new Feature({
                geometry: new MultiPolygon(lineData.geometry.coordinates),
            });
            } else if (lineData.geometry.type == "Polygon") {
            routeFeature = new Feature({
                geometry: new Polygon(lineData.geometry.coordinates),
            });
            }
            routeFeature.setStyle(
            new Style({
                fill: new Fill({
                color: "#4e98f444", //填充颜色
                }),
                stroke: new Stroke({
                width: 3, //边界宽度
                color: [71, 137, 227, 1], //边界颜色
                }),
            })
            );
            features.push(routeFeature);
        });
        // 设置图层
        let routeLayer = new VectorLayer({
            source: new VectorSource({
            features: features,
            }),
        });
        // 添加图层
        this.map.addLayer(routeLayer);
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