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
        <div class="Map" id="Map" ref="map"></div>
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
// import TileLayer from "ol/layer/Tile";
// import VectorLayer from "ol/layer/Vector";
// import VectorSource from "ol/source/Vector";
// import XYZ from "ol/source/XYZ";
// import { Map, View, Feature } from "ol";
// import { Style, Stroke, Fill } from "ol/style";
// import { Polygon, MultiPolygon } from "ol/geom";
// import { defaults as defaultControls } from "ol/control";

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
    // data() {
    //     return {
    //     map: null,
    //     routeLayer: null,
    //     routeFeature: null,
    //     lineData: [],
    //     };
    // },
    // created() {},
    // mounted() {
    //     this.initMap();
    //     this.addArea(areaGeo);
    // },
    // methods: {
    //     // 初始化地图
    //     initMap() {
    //     this.map = new Map({
    //         target: "Map",
    //         controls: defaultControls({
    //         zoom: true,
    //         }).extend([]),
    //         layers: [
    //         new TileLayer({
    //             source: new XYZ({
    //             url:
    //                 "http://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}",
    //             }),
    //         }),
    //         ],
    //         view: new View({
    //         projection: "EPSG:4326",
    //         center: [118.792207,32.133476],
    //         zoom: 9,
    //         maxZoom: 19,
    //         minZoom: 5,
    //         }),
    //     });
    //     },
    //     // 设置区域
    //     addArea(geo = []) {
    //     if (geo.length == 0) {
    //         return false;
    //     }
    //     let features = [];
    //     geo.forEach((g) => {
    //         console.log(g);

    //         let lineData = g.features[0];
    //         let routeFeature = "";
    //         console.log(lineData.geometry.type);
    //         if (lineData.geometry.type == "MultiPolygon") {
    //         routeFeature = new Feature({
    //             geometry: new MultiPolygon(lineData.geometry.coordinates),
    //         });
    //         } else if (lineData.geometry.type == "Polygon") {
    //         routeFeature = new Feature({
    //             geometry: new Polygon(lineData.geometry.coordinates),
    //         });
    //         }
    //         routeFeature.setStyle(
    //         new Style({
    //             fill: new Fill({
    //             color: "#4e98f444", //填充颜色
    //             }),
    //             stroke: new Stroke({
    //             width: 3, //边界宽度
    //             color: [71, 137, 227, 1], //边界颜色
    //             }),
    //         })
    //         );
    //         features.push(routeFeature);
    //     });
    //     // 设置图层
    //     let routeLayer = new VectorLayer({
    //         source: new VectorSource({
    //         features: features,
    //         }),
    //     });
    //     // 添加图层
    //     this.map.addLayer(routeLayer);
    //     },
    // },
    async loadPlugins () {
    await new Promise(resolve => {
        // require([
        //     './libs/ol3-extend/ol.min.js',
        //     './libs/ol3-extend/transform.js',
        //     './libs/ol3-extend/ol-tooltip.js',
        //     './libs/ol3-extend/ol_config.js'
        // ], (ol, transformGCJ, tooltip, mapConfig) => {
        //     this.methods('initMapInstance', window.ol, transformGCJ, tooltip, mapConfig)
        //     resolve()
        // })
        })
        $(this.$refs.mapBase).bind('contextmenu', function (e) {
        return false
        })
    },
    initMapInstance (ol, transformGCJ, tooltip, mapConfig) {
        this.ol = ol
        // 地图的图层
        this.methods('map_layers', ol, mapConfig.default)
        // 地图的控制器
        this.methods('map_controls', ol, mapConfig.default)
        // 初始化一些东西
        this.methods('map_init', ol, transformGCJ.default, tooltip.default, mapConfig.default)
        // 显示地图的底图
        this.methods('map_show', ol, transformGCJ.default, tooltip.default, mapConfig.default)// 这里是主要的代码,如果想了解openlayers要看这里。
        this.map.addLayer(this.layers.tile)
        // this.map.addLayer(this.layers.pointName.layer())
        this.mapChangeResolution = async e => {
        this.changeResolution = true
        }
        this.map.getView().on('change:resolution', this.mapChangeResolution)
        // 地图移动事件
        this.methods('mapAddMoveend')
        this.map.on('moveend', this.mapMoveend)
        // 添加元素
        this.methods('feature', ol, transformGCJ, mapConfig.default, fromwkt, tooltip.default)
        // 空间字段转wkt格式
        function fromwkt (geometry) {
        let format = new ol.format.WKT()
        try {
            let feature = format.readFeature(geometry, {
            dataProjection: mapConfig.default.mapProject,
            featureProjection: mapConfig.default.sysProject
            })
            return feature
        } catch (ex) {
            console.log(ex)
            return null
        }
        }

        function transformwkt (wktstr) {
        let str = wktstr.substring(wktstr.indexOf('(') + 1, wktstr.indexOf(')'))
        let point = str.split(' ')
        if (point.length >= 2) {
            let tf = new transformGCJ()
            let lbglat = tf.wgs84togcj02(point[0], point[1])
            if (lbglat.length >= 2) {
            return 'point(' + lbglat[0] + ' ' + lbglat[1] + ')'
            }
        }
        return wktstr
        }

        this.$emit('setting', this.map, ol, fromwkt, transformwkt, transformGCJ, tooltip, mapConfig, this.mapClick, this.mapPointermove, this.featureTooltipLayer)
    },
    // 显示地图
    map_show (ol, transformGCJ, tooltip, mapConfig) {
        // 地图主窗体
        let tf = new transformGCJ()
        console.log('------------', mapConfig)
        let map = this.map = new ol.Map({
        layers: [], // 图层
        target: this.$refs.mapBase, // 挂载在哪个对象上
        view: new ol.View({
            center: ol.proj.fromLonLat(tf.wgs84togcj02(mapConfig.center[0], mapConfig.center[1])),
            project: mapConfig.mapProject,
            zoom: mapConfig.zoom,
            minZoom: mapConfig.minZoom,
            maxZoom: mapConfig.maxZoom
        }),
        loadTilesWhileAnimating: true, // 将这个设置为true，默认为false
        controls: ol.control.defaults(this.controlOptions).extend(this.mapControls),
        interactions: ol.interaction.defaults().extend([]),
        logo: mapConfig.attribution ? mapConfig.attributionLogo : null
        })
        // 地图弹出框
        map.addOverlay(this.popoverLayer)
        // 地图元素提示标签
        map.addOverlay(this.featureTooltipLayer)
        // 鼠标移动
        this.mapPointermove = async evt => {
        let feature = map.forEachFeatureAtPixel(evt.pixel,
            function (feature) {
            return feature
            })
        if (feature) {
            // 设置标题的元素出现提示框
            if (feature.get('alt')) {
            this.featureTooltipLayer.show(feature.get('alt'))
            } else {
            this.featureTooltipLayer.hide()
            }
            // 设置弹框的元素出现手指鼠标手势
            if (feature.get('popover')) {
            map.getTarget().style.cursor = 'pointer'
            } else {
            map.getTarget().style.cursor = 'auto'
            }
        } else {
            map.getTarget().style.cursor = 'auto'
            this.featureTooltipLayer.hide()
        }
        // 提示框跟随移动
        this.featureTooltipLayer.setPosition(evt.coordinate)
        }
        map.on('pointermove', this.mapPointermove)
        // 空间字段转wkt格式
        let fromwkt = function (geometry) {
        let format = new ol.format.WKT()
        try {
            let feature = format.readFeature(geometry, {
            dataProjection: mapConfig.mapProject,
            featureProjection: mapConfig.sysProject
            })
            return feature
        } catch (ex) {
            console.log(ex)
            return null
        }
        }
    },
    // 初始化一些东西
    map_init (ol, transformGCJ, tooltip, mapConfig) {
        // 重定义缩放按钮的位置
        this.controlOptions = {
        zoomOptions: {className: 'custom-zoom'},
        attribution: mapConfig.attribution,
        rotateOptions: {
            className: 'ol-rotate custom-rotate',
            tipLabel: '恢复方向为正北'
        }
        }
        // 地图弹出框
        this.popoverLayer = new ol.Overlay({
        element: document.createElement('div'),
        autoPan: true
        })
        // 地图元素提示标签
        this.featureTooltipLayer = new tooltip()
    },
    // 地图的各种层
    map_layers (ol, mapConfig, map) {
        // var proj_3857 = new ol.proj.get("EPSG:3857");
        // var proj_3857Extent = proj_3857.getExtent();
        // var mapWidth3857 = ol.extent.getWidth(proj_3857.getExtent());
        //
        // var resolutions3857 = [156543.03392804097, 78271.51696402048, 39135.75848201024,
        //   19567.87924100512, 9783.93962050256, 4891.96981025128, 2445.98490512564, 1222.99245256282,
        //   611.49622628141, 305.748113140705, 152.8740565703525, 76.43702828517625, 38.21851414258813,
        //   19.109257071294063, 9.554628535647032, 4.777314267823516, 2.388657133911758, 1.194328566955879,
        //   0.5971642834779395];
        //
        // /**
        //  * 网格标注
        //  * @type {ol.tilegrid.TileGrid}
        //  */
        // var tileGrid = new ol.tilegrid.TileGrid({
        //   resolutions: resolutions3857,
        //   tileSize: [256, 256],
        //   extent: proj_3857Extent,
        //   origin: ol.extent.getBottomLeft(proj_3857Extent),
        // });
        //
        // var tilesource = new ol.source.TileImage({
        //   tileUrlFunction: function (xyz, obj1, obj2) {
        //     if (!xyz) {
        //       return "";
        //     }
        //     var z = xyz[0];
        //     var x = xyz[1];
        //     var y = xyz[2];
        //     // QQ平面图
        //     return "http://rt1.map.gtimg.com/realtimerender?z=" + z + "&x=" + x + "&y=" + y + "&type=vector&style=0&v=1.1.2"
        //     // 卫星图
        //     // return "https://p3.map.gtimg.com/sateTiles/" + z + "/" + Math.floor(x / 16.0) + "/" + Math.floor(y / 16.0) + "/" + x + "_" + y + ".jpg?version=230"
        //   },
        //   tileGrid: tileGrid,
        //   projection: proj_3857,
        // })
        let layers = {
        // 底图,瓦片
        // tile: new ol.layer.Tile({
        //   title: 'QQ在线地图',
        //   type: 'base',
        //   visible: mapConfig.aMapOfflineVisible,
        //   source: tilesource,
        //   projection: proj_3857
        // }),
        tile: new ol.layer.Tile({
            title: 'openlayers',
            type: 'base',
            visible: mapConfig.aMapOfflineVisible,
            source: new ol.source.TileImage({
            url: this.isMapShow? mapConfig.aMapOfflineUrl : '' ,
            project: mapConfig.mapProject
            })
        }),
        // // 路径站点
        // pointName: {
        //   source: new ol.source.Vector({
        //     wrapX: false,
        //     features: []
        //   }),
        //   style (f) {
        //     return new ol.style.Style({
        //       image: new ol.style.Circle({
        //         radius: 8,
        //         fill: new ol.style.Fill({
        //           color: [254, 161, 0, 1]
        //         })
        //       }),
        //       stroke: new ol.style.Stroke({
        //         width: 1,
        //         color: [0, 204, 255, 1]
        //       }),
        //       text: new ol.style.Text({
        //         textAlign: 'left',
        //         textBaseline: 'top',
        //         font: '14px Microsoft Yahei',
        //         text: f.get('name'),
        //         fill: new ol.style.Fill({color: '#fff'}),
        //         offsetX: 10,
        //         offsetY: -9,
        //         rotation: 0
        //       })
        //     })
        //   },
        //   layer () {
        //     layers.pointName.layer = new ol.layer.Vector({
        //       title: '站点层',
        //       source: layers.pointName.source,
        //       style: layers.pointName.style
        //     })
        //     return layers.pointName.layer
        //   }
        // }
        }
        this.layers = layers
    },
    // 地图的控制器
    map_controls (ol, mapConfig) {
        // 控制器集合
        this.mapControls = []
        // 鼠标位置经纬度显示栏是否显示
        if (mapConfig.mousePositionControl) {
        this.mapControls.push(new ol.control.MousePosition({
            coordinateFormat: ol.coordinate.createStringXY(6),
            projection: mapConfig.mapProject,
            showZoom: true,
            isgcj: false,
            className: 'custom-mouse-position',
            undefineHTML: '&nbsp;'
        }))
        }
        // 地图图层控制栏是否显示
        if (mapConfig.layerSwitcher) {
        this.mapControls.push(new ol.control.LayerSwitcher())
        }
        // 鹰眼图是否显示
        if (mapConfig.overviewMap) {
        this.mapControls.push(new ol.control.OverviewMap({
            className: 'ol-overviewmap custom-overviewmap',
            layers: [mapConfig.overviewMapLayer],
            collapseLabel: '\u00BB',
            label: '\u00AB',
            collapsed: false,
            tipLabel: '折叠/展开鹰眼图'
        }))
        }
        // 比例尺是否显示
        if (mapConfig.scaleLine) {
        this.mapControls.push(new ol.control.ScaleLine({
            className: 'custom-scale-line ol-scale-line'
        }))
        }
        // 全屏功能是否可用
        if (mapConfig.fullScreen) {
        this.mapControls.push(new ol.control.FullScreen({
            className: 'ol-full-screen custom-full-screen',
            tipLabel: '全屏'
        }))
        }
        // 返回地图初始范围是否可用
        if (mapConfig.zoomToExtent) {
        this.mapControls.push(new ol.control.ZoomToExtent({
            extent: ol.proj.transformExtent(mapConfig.extent, mapConfig.mapProject, mapConfig.sysProject),
            className: 'custom-zoom-extent',
            tipLabel: '返回起始点',
            label: '●'
        }))
        }
    },
    handleMouseDownClick (e) {
        this.$emit('contextmenu')
    },
    mapAddMoveend () {
        this.mapMoveend = async evt => {
        if (this.changeResolution) {
            // this.feature.pointName()
            // this.methods('showLevel')
            this.changeResolution = false
        }
        }
    },
    // 使用canvas绘制一个几何图形
    createCanvas (legend, canvasSize, value, nodeType) {
        let iconWidth = 20
        if (nodeType === 'toll') {
        iconWidth = 0
        }
        let canvas = document.createElement('canvas')
        canvas.width = canvasSize[0] + iconWidth
        canvas.height = canvasSize[1]
        let context = canvas.getContext('2d')
        context = this.methods('createRoundRect', context, 0, 0, canvas.width, canvas.height, 0)

        /* **************** 图标 *******************/
        if (nodeType === 'serviceArea') {
        context.drawImage(this.Image, 0, 0, 30, 30, 0, 1, iconWidth, iconWidth)
        }
        /* *************** 边框与背景 **************/
        // context.fillStyle = legend.background
        // context.strokeStyle = 'rgba(170, 170, 170, 1)'
        // context.fillStyle = 'rgba(8, 22, 38, 0.4)'
        // context.fill()
        // context.stroke()
        // 文本设置样式
        context.save()
        context.font = '13px 微软雅黑'
        context.fillStyle = '#ccd2e0'
        context.textBaseline = 'middle'
        context.textAlign = 'center'
        context.strokeStyle = '#000'
        context.shadowColor = '#000'
        context.lineWidth = 2
        context.shadowOffsetX = 0
        context.shadowOffsetY = 0
        context.shadowBlur = 5
        context.strokeText(value, canvasSize[0] / 2 + iconWidth, canvasSize[1] / 2)
        context.fillText(value, canvasSize[0] / 2 + iconWidth, canvasSize[1] / 2)
        // context.stroke()
        return canvas
    },
    // 绘制圆角矩形
    createRoundRect (context, x1, y1, width, height, radius) {
        // 移动到左上角
        context.moveTo(x1 + radius, y1)
        // 添加一条连接到右上角的线段
        context.lineTo(x1 + width - radius, y1)
        // 添加一段圆弧
        context.arcTo(x1 + width, y1, x1 + width, y1 + radius, radius)
        // 添加一条连接到右下角的线段
        context.lineTo(x1 + width, y1 + height - radius)
        // 添加一段圆弧
        context.arcTo(x1 + width, y1 + height, x1 + width - radius, y1 + height, radius)
        // 添加一条连接到左下角的线段
        context.lineTo(x1 + radius, y1 + height)
        // 添加一段圆弧
        context.arcTo(x1, y1 + height, x1, y1 + height - radius, radius)
        // 添加一条连接到左上角的线段
        context.lineTo(x1, y1 + radius)
        // 添加一段圆弧
        context.arcTo(x1, y1, x1 + radius, y1, radius)
        context.closePath()
        return context
    },
    feature (ol, transformGCJ, mapConfig, fromwkt, tooltip) {
        var that = this
        this.feature = {
        // 站点名称
        pointName () {
            let layer = function () {
            let newLayer = {
                source: new ol.source.Vector({
                wrapX: false,
                features: []
                }),
                style (f) {
                return new ol.style.Style({
                    image: new ol.style.Circle({
                    radius: 8,
                    fill: new ol.style.Fill({
                        color: [254, 161, 0, 1]
                    })
                    }),
                    stroke: new ol.style.Stroke({
                    width: 1,
                    color: [0, 204, 255, 1]
                    }),
                    text: new ol.style.Text({
                    textAlign: 'left',
                    textBaseline: 'top',
                    font: '14px Microsoft Yahei',
                    text: f.get('name'),
                    fill: new ol.style.Fill({color: '#fff'}),
                    offsetX: 10,
                    offsetY: -9,
                    rotation: 0
                    }),
                    zIndex: -1
                })
                },
                layer () {
                newLayer.layer = new ol.layer.Vector({
                    title: '站点层',
                    source: newLayer.source,
                    style: newLayer.style
                })
                return newLayer.layer
                }
            }
            newLayer.layer()
            return newLayer
            }
            let layers = {
            // '9': {}
            }
            let guangxi_allstation = window.utils.guangxi_allstation.value
            guangxi_allstation.features.forEach(item => {
            if (item.geometry !== null && item.geometry !== '') {
                var feature = fromwkt('POINT(' + item.geometry.coordinates[0] + ' ' + item.geometry.coordinates[1] + ')')
                let canvasSize = [item.properties.name.length * 12 + 10, 23]
                let canvas = that.methods(
                'createCanvas',
                that.legend,
                canvasSize,
                item.properties.name,
                item.nodeType
                )
                feature.setStyle(new ol.style.Style({
                image: new ol.style.Icon({
                    img: canvas,
                    imgSize: [canvas.width, canvas.height]
                })
                }))
                layers[item.properties.mapLevel] = layers[item.properties.mapLevel] || layer()
                layers[item.properties.mapLevel].source.addFeature(feature)
            }
            })
            that.layers = layers
            let currentClass = that.map.getView().getZoom()
            for (let level in layers) {
            if (currentClass < level) {
                layers[level].layer.setVisible(false)
            }
            that.map.addLayer(layers[level].layer)
            }
            that.$emit('setting', that.map, ol, fromwkt, transformwkt, transformGCJ, tooltip, mapConfig, that.mapClick, that.mapPointermove, that.featureTooltipLayer)
            // WGS坐标转火星坐标wkt格式
            function transformwkt (wktstr) {
            let str = wktstr.substring(wktstr.indexOf('(') + 1, wktstr.indexOf(')'))
            let point = str.split(' ')
            if (point.length >= 2) {
                let tf = new transformGCJ()
                let lbglat = tf.wgs84togcj02(point[0], point[1])
                if (lbglat.length >= 2) {
                return 'point(' + lbglat[0] + ' ' + lbglat[1] + ')'
                }
            }
            return wktstr
            }
        }
        }
    },
    showLevel () {
        let currentClass = this.map.getView().getZoom()
        for (let level in this.layers) {
        if (currentClass < level) {
            this.layers[level].layer.setVisible(false)
        } else {
            this.layers[level].layer.setVisible(true)
        }
        }
    }

}
</script>

<style lang="scss" scoped>
.map{
    width: 100vw;
    height: 100vh;
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