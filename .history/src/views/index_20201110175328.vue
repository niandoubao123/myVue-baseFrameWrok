<template>
  <div id="map" class="map">
  </div>
</template>
<script>
import { View,Map, ol } from 'ol'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'

import 'ol/ol.css'       //引入css样式
import OSM from 'ol/source/OSM'
import XYZ from 'ol/source/XYZ'   //使用URL模板中定义的集合XYZ格式的URL平铺数据的层源
import {fromLonLat,transform,get} from 'ol/proj.js'
import 'ol/events/Event'
import 'ol/obj'
import ScaleLine from 'ol/control/ScaleLine'    //比例尺
import GeoJSON from 'ol/format/GeoJSON'  //以GeoJSON（地图数据/矢量数据）格式读取和写入数据
import Feature from 'ol/Feature'    //具有几何和其他属性的地理要素的矢量对象
import VectorSource from 'ol/source/Vector'   //提供矢量图层的数据
import VectorLayer from 'ol/layer/Vector'     //用于显示在客户端渲染的矢量数据
import {Fill,Stroke,Style} from 'ol/style'

export default {
  data () {
    return {
      overlayChartObj: undefined,
      data: {

      }
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    /**
     * 地图初始化
     */
    // init () {
    //   let baseLayer = new TileLayer({
    //     source: new XYZ({
    //       url: 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
    //     //   url: 'https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}'
    //     })
    //   })
    //   this.map = new Map({
    //     target: 'map',
    //     layers: [baseLayer],
    //     view: new View({
    //         projection: 'EPSG:4326',
    //         zoom: 5,
    //         center: [114, 32]
    //     })
    //   })

    //   this.map.on('click', (evt) => {
    //     let data = {
    //         startDate: '2.1',
    //         endDate: '2.29',
    //         quanguoTotal: [2590, 2829, 3235, 3887, 3694, 3151, 3399, 2653, 3073, 2484, 2022, 15153, 5093, 2644, 2009, 2051, 1891, 1751, 825, 892, 399, 649, 416, 517, 411, 440, 329, 430, 579],
    //         hubeiTotal: [1921, 2103, 2345, 3156, 2987, 2447, 2841, 2147, 2618, 2097, 1638, 14840, 4823, 2420, 1843, 1933, 1807, 1693, 775, 631, 366, 630, 398, 499, 401, 409, 318, 423, 570]
    //     }
    //     this.showOverlayChart(evt.coordinate, data)
    //   })
    // }
    init(){
    let baseLayer = new TileLayer({
        source: new XYZ({
        //   url: 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
          url: 'https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}'
        })
      })
      var map = new Map({
          layers: [
              // new ol.layer.Tile({
              //     source: new ol.source.OSM()
              // }),
              baseLayer
          ],
          view: new View({ 
              center: [-72.980624870461128, 48.161307640513321],
              zoom: 8,
              projection: 'EPSG:4326'
          }),
          target: 'map'
      });

      var vectorLayer = new ol.layer.Vector({
          source: new ol.source.Vector({
              url: '../data/geojson/line-samples.geojson', 
              format: new ol.format.GeoJSON()
          }),
          // 设置样式，颜色为红色，线条粗细为1个像素
          style: new ol.style.Style({
              stroke: new ol.style.Stroke({
                  color: 'red',
                  size: 1
              })
          })
      });

      map.addLayer(vectorLayer);
    }
  }
}
</script>

<style lang="scss">
    .map{
        width:800px;
        height:800px;
    }
</style>
