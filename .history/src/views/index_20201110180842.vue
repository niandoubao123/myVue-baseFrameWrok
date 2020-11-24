<template>
  <div id="map" class="map">
  </div>
</template>
<script>
import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import View from 'ol/View';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style';
import {OSM, Vector as VectorSource} from 'ol/source';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer';

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
        var source = new VectorSource({
        url: 'data/geojson/switzerland.geojson',
        format: new GeoJSON(),
        });
        var style = new Style({
        fill: new Fill({
            color: 'rgba(255, 255, 255, 0.6)',
        }),
        stroke: new Stroke({
            color: '#319FD3',
            width: 1,
        }),
        image: new CircleStyle({
            radius: 5,
            fill: new Fill({
            color: 'rgba(255, 255, 255, 0.6)',
            }),
            stroke: new Stroke({
            color: '#319FD3',
            width: 1,
            }),
        }),
        });
        var vectorLayer = new VectorLayer({
        source: source,
        style: style,
        });
        var view = new View({
        center: [0, 0],
        zoom: 1,
        });
        new Map({
        layers: [
            new TileLayer({
            source: new OSM(),
            }),
            vectorLayer ],
        target: 'map',
        view: view,
        });

        var zoomtoswitzerland = document.getElementById('zoomtoswitzerland');
        zoomtoswitzerland.addEventListener(
        'click',
        function () {
            var feature = source.getFeatures()[0];
            var polygon = feature.getGeometry();
            view.fit(polygon, {padding: [170, 50, 30, 150]});
        },
        false
        );

        var zoomtolausanne = document.getElementById('zoomtolausanne');
        zoomtolausanne.addEventListener(
        'click',
        function () {
            var feature = source.getFeatures()[1];
            var point = feature.getGeometry();
            view.fit(point, {padding: [170, 50, 30, 150], minResolution: 50});
        },
        false
        );

        var centerlausanne = document.getElementById('centerlausanne');
        centerlausanne.addEventListener(
        'click',
        function () {
            var feature = source.getFeatures()[1];
            var point = feature.getGeometry();
            var size = map.getSize();
            view.centerOn(point.getCoordinates(), size, [570, 500]);
        },
        false
        )
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
