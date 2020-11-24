<template>
<div>
    <div id="map" class="map">
    </div>
     <button id="zoomtoswitzerland">Zoom to Switzerland</button>
    <button id="zoomtolausanne">Zoom to Lausanne</button>
    <button id="centerlausanne">Center on Lausanne</button>
</div>
  
 
</template>
<script>
import "ol/ol.css";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import XYZ from "ol/source/XYZ";
import { Map, View, Feature, ol } from "ol";
import { Style, Stroke, Fill } from "ol/style";
import { Polygon, MultiPolygon } from "ol/geom";
import { defaults as defaultControls, OverviewMap } from "ol/control";

import areaGeo from "../assets/china.json";

export default {
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

<style lang="scss">
    .map{
        width:800px;
        height:800px;
    }
</style>
