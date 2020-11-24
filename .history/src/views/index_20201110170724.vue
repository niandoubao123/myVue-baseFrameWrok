<template>
  <div id="map" class="map">
  </div>
</template>
<script>
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'

export default {
  data () {
    return {
      map: undefined,
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
    init () {
      let baseLayer = new TileLayer({
        source: new XYZ({
          url: 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}'
        //   url: 'https://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}'
        })
      })
      this.map = new Map({
        target: 'map',
        layers: [baseLayer],
        view: new View({
            extent: [102, 29, 104, 31],
            projection: 'EPSG:4326',
            zoom: 5,
            center: [114, 32]
        })
      })

      this.map.on('click', (evt) => {
        let data = {
            startDate: '2.1',
            endDate: '2.29',
            quanguoTotal: [2590, 2829, 3235, 3887, 3694, 3151, 3399, 2653, 3073, 2484, 2022, 15153, 5093, 2644, 2009, 2051, 1891, 1751, 825, 892, 399, 649, 416, 517, 411, 440, 329, 430, 579],
            hubeiTotal: [1921, 2103, 2345, 3156, 2987, 2447, 2841, 2147, 2618, 2097, 1638, 14840, 4823, 2420, 1843, 1933, 1807, 1693, 775, 631, 366, 630, 398, 499, 401, 409, 318, 423, 570]
        }
        this.showOverlayChart(evt.coordinate, data)
      })
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
