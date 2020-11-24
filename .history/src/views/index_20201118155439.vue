<template>
  <div>
    <el-amap class="map" 
      vid="amapPro"
      :amap-manager="amapManager"
      :mapStyle="mapStyle"
      :zoom="zoom"
      :zoomEnable="zoomEnable"
      :dragEnable="dragEnable"
      :events="events"
      :resizeEnable="resizeEnable"
      >
        <div v-for="(mark,index) in maps.markpoint" :key="index">
            <el-amap-marker
              :position="mark.point"
              :label="mark.name"
              :clickable="maps.enableclick"
              :events="markerEvents">
            </el-amap-marker>
        </div>
      </el-amap>
  </div>
</template>
<script>
import {AMapManager, lazyAMapApiLoaderInstance} from 'vue-amap'
let amapManager = new AMapManager() // 新建生成地图画布
 
export default {
  data () {
    let self = this
    return {
      curProData: [{       
        province: "四川省",
        city: "成都市",
        county: "金牛区",
        labelOffset: [0, -12],
        lat: 30.705218, // 经度
        lng: 104.058201, // 纬度,
        state: 1
      }],
      // ------------高德地图参数开始-----------------
      zoomEnable:true,//地图缩放  默认true
      dragEnable:true,//地图拖拽  默认true
      maps:{
        markevent:"click",
        enableclick:true,
        markpoint:[
          {"name":{"content":"深圳","offset":[20,20]},"point":[114.06, 22.52]},
        ],
      },
      markerEvents: {
        // 点击事件
        click(e) {
          console.log(e)
          alert("深圳")
        }
      },
      resizeEnable: true, //是否监控地图容器尺寸变化
      zoom: 5, // 设置初始化级别
      // mapStyle: 'amap://styles/55dad8ab2a28e58f401c273fc485a263', // 使用的自定义地图样式，可以根据需求显示/隐藏内容，改变主题颜色等，具体的使用下面会写
      mapStyle: 'amap://styles/a7420be868c06b9c0678f06a2ed44f48', // 使用的自定义地图样式，可以根据需求显示/隐藏内容，改变主题颜色等，具体的使用下面会写
      amapManager,
      events: {
        init (o) {
          console.log(o)
          lazyAMapApiLoaderInstance.load().then(() => {
            self.initPage() // 初始化数据self指向this
            self.changeMap() // 绑定鼠标缩放事件
            self.setLine() // 画一条北京到莫斯科的路线
          })
        },
      },
      // ------------高德地图参数结束----------------
    }
  },
  methods: {
    // -----------------道德地图开始----------
    // 道德地图启动页面
    // 初始化省份和数量的数据
    initPage() {
      let markers = []
      let _this = this
      // curProData数据的格式[{city:'成都市',province: '四川省',...},{city:'XX市',province: '湖南省',...},{city:'XX市',province: '四川省',...}]
      // let datas= [
      //   {       
      //     province: "四川省",
      //     city: "成都市",
      //     county: "金牛区",
      //     labelOffset: [0, -12],
      //     lat: 30.705218, // 经度
      //     lng: 104.058201, // 纬度,
      //     state: 1
      //   },
      //   {       
      //     province: "福建省",
      //     city: "厦门市",
      //     county: "金牛区",
      //     labelOffset: [0, -12],
      //     lat: 119.306239, // 经度 119.306239,26.075302
      //     lng: 26.075302, // 纬度,
      //     state: 1
      //   },
      // ]
      // console.log(this.getWordCntMap(datas))
      let provinceData = _this.curProData // 当前项目数据
      let obj = this.getWordCntMap(provinceData) // obj的格式,通过getWordCntMap方法得到{'四川省': 2,'湖南省': 3,....}
      let map = _this.amapManager.getMap()
      
      // map.clearMap() // 清除所有的覆盖物信息  这个东西会把上面覆盖的东西去掉 比如我加的markers
      console.log(markers,obj)
      // 绘画省份的点和数量
      AMapUI.loadUI(['overlay/SimpleMarker'], function (SimpleMarker) {
        for (let key in obj) {
          markers.push(
            new SimpleMarker({
              zIndex: 50,
              iconLabel: '<div class="mapIcon" style="width:50px;height:20px;background:#fff;"><span class="mapIcon_title">' + '·南宁·' + '</span><span class="mapIcon_num">' + obj[key] + '</span></div>',
              //直接设置html(需要以"<"开头并且以">"结尾)
              iconStyle: '',
              //设置基点偏移
              offset: new AMap.Pixel(-10, -30), // iconLabel偏移量
              map: map,
              showPositionPoint: true, // 定位点
              // position: _this.geoProvince[key] // geoProvince里面是省份的经纬度:例如geoProvince: {'四川省': [104.10194, 30.65984],...}
              position:[108.36637,22.817746] // geoProvince里面是省份的经纬度:例如geoProvince: {'四川省': [104.10194, 30.65984],...}
            })
          )
        }
      })
    },
    // 绘制路径
    setLine() {
      let map = this.amapManager.getMap()
      AMapUI.loadUI(['misc/PathSimplifier'], function(PathSimplifier) {
        if (!PathSimplifier.supportCanvas) {
          alert('当前环境不支持 Canvas！');
          return;
        }
        var pathSimplifierIns = new PathSimplifier({
            zIndex: 100,
            autoSetFitView: false,
            map: map, // 所属的地图实例
            getPath: function(pathData, pathIndex) {
              console.log('康康')
              console.log(pathData)   //就是下面setData的内容
              console.log(pathIndex)
              return pathData.path;
            },
            getHoverTitle: function(pathData, pathIndex, pointIndex) {
              console.log('应该是一样的吧')
              console.log(pathData)
              console.log(pathIndex)
              console.log(pointIndex)
              if (pointIndex >= 0) {
                //point
                return pathData.name + '，点：' + pointIndex + '/' + pathData.path.length;
              }
              return pathData.name + '，点数量' + pathData.path.length;
            },
            renderOptions: {
              renderAllPointsIfNumberBelow: -1 // 绘制路线节点，如不需要可设置为-1
            }
          });
          // 设定数据源数组，并触发重新绘制。data为空时将清除显示内容。
          pathSimplifierIns.setData([{
            name: '北京-莫斯科 线路',
            path: [
              [116.405289, 39.904987],
              [37.35, 55.45],
              [123.465009,41.677287]
            ]
          }]);
          // pathSimplifierIns.render()
          //对第一条线路（即索引 0）创建一个巡航器
          var navg1 = pathSimplifierIns.createPathNavigator(0, {
            loop: true, // 循环播放
            speed: 1050000 // 巡航速度，单位千米/小时
          });
          navg1.start();
      });
    },
    // 初始化放大后项目的数据
    initPro() {
      let markers = []
      let _this = this
      // curProData数据的格式[{city:'成都市',province: '四川省',...},{city:'XX市',province: '湖南省',...},{city:'XX市',province: '四川省',...}]
      // let curProData: [{       
      //   province: "四川省",
      //   city: "成都市",
      //   county: "金牛区",
      //   labelOffset: [0, -12],
      //   lat: 30.705218, // 经度
      //   lng: 104.058201, // 纬度,
      //   state: 1
      // },{...}]
      let provinceData = _this.curProData // 省份数据
      let map = _this.amapManager.getMap()
      map.clearMap()
      AMapUI.loadUI(['overlay/SimpleMarker'], function (SimpleMarker) {
        let color = ['#00F04F', '#01DAFF', '#0098E9', '#F3A100', '#F7666A', '#FCE800']
        // 已接入,波纹圆圈蓝色/黄色 0.1.2.3
        // 未接入 4.5
        provinceData.forEach(element => {
          if (element.lng && element.lat) {
            markers.push(
              new SimpleMarker({
                // 定位点的样式
                showPositionPoint: {
                  color: element['state'] == 5 || element['state'] == 4 ? color[element['state']] : 'rgba(255,255,255,0)',
                  radius: element['state'] == 5 || element['state'] == 4 ? 5 : 0
                },
                // 自定义定位点,波纹感的圆点
                iconLabel: `${(element['state'] !== 4 && element['state'] !== 5) ? '<div class="example"><span class="dot colorStyle'+ element.state +'"></span></div>' : ''}`,              
                //直接设置html(需要以"<"开头并且以">"结尾)
                map: map,
                position: [element.lng, element.lat], // 经纬度
                // 定位点的label标签
                label: {
                    offset: element['labelOffset'] ? new AMap.Pixel(+element['labelOffset'][0], +element['labelOffset'][1]) : '', // 修改label相对于marker的位置
                    // offset: new AMap.Pixel(0,0), // 修改label相对于marker的位置
                    content: '<div class="makerLabel"><span class="mapIcon_title" style="color:' + color[element['state']] + '">' + '呵呵' + '</span></div>'
                }
              }),
            )
          }
           
        });
      })
    },
    // 绑定高德地图放大缩小map事件
    changeMap() {
      let map = this.amapManager.getMap()
      map.on('zoomchange',() => {
        var zoom = map.getZoom(); //获取当前地图级别
        if (zoom >= 6) {
          this.initPro()
        } else {
          this.initPage()
        }
      });
    },
    // 根据省份计算重复的个数
    getWordCntMap (arr) {
      let arrData = arr
      let obj = {}
      for (let i = 0; i < arrData.length; i++) {
        if (arrData[i].lat) {
          var item = arrData[i].province // province为计算的属性,可换成你想计算的重复个数的属性名字
          obj[item] = (obj[item] + 1) || 1
        }
      }
      return obj
    },
    // -----------------道德地图结束----------
  },
  created () {
    // console.log(this.maps)
    // this.addprojects() // 请求项目数据详情
  },
  watch: {
    // 我的页面上有下拉选项.根据选择的选项重新渲染map数据
    // 举个列子数据格式如下
    // let levelData = [{
    //   level10: [{       
    //     province: "四川省",
    //     city: "成都市",
    //     county: "金牛区",
    //     labelOffset: [0, -12],
    //     lat: 30.705218, // 经度
    //     lng: 104.058201, // 纬度,
    //     state: 1
    //   }],
    //   level12: [{       
    //     province: "四川省",
    //     city: "泸州市",
    //     county: "CC区",
    //     labelOffset: [0, -12],
    //     lat: 30.705218, // 经度
    //     lng: 104.058201, // 纬度,
    //     state: 1
    //   }],
    //   level15: [{       
    //     province: "河南省",
    //     city: "保定市",
    //     county: "XX区",
    //     labelOffset: [0, -12],
    //     lat: 30.705218, // 经度
    //     lng: 104.058201, // 纬度,
    //     state: 1
    //   }],
    //   other15: [{       
    //     province: "湖南省",
    //     city: "长沙市",
    //     county: "XX区",
    //     labelOffset: [0, -12],
    //     lat: 30.705218, // 经度
    //     lng: 104.058201, // 纬度,
    //     state: 1
    //   }]     
    // }],
    // 监听等级数据改变
    levelSize(cul) {
      switch(+cul) {
        case 0:
        this.curProData = this.levelData.level10;
        break
        case 1:
        this.curProData = this.levelData.level12;
        break
        case 2:
        this.curProData = this.levelData.level15;
        break
        case 3:
        this.curProData = this.levelData.other15;
        break
        case 4:
        this.curProData = this.projects;
        break
        default:
        this.curProData = this.projects
      }
      this.initPage()
      const map = this.amapManager.getMap();
      map.setZoom(4) // 重置地图的级别
    },
  },
}
</script>

<style scoped>
  .map{
    width:100vw;
    height: 100vh;
  }
  /* 初始化定位标签样式 */
.amap-marker-label{
  vertical-align: middle;
  color: #555;
  background-color: #fffeef;
  font-size: 12px;
  white-space: nowrap;
  border: 1px solid #8e8e8e;
  width: auto;
  border-radius: 5px 5px 5px 0;
}
.mapIcon{
  vertical-align: middle;
  color: #555;
  background-color: #fffeef;
  font-size: 12px;
  white-space: nowrap;
  position: relative;
  border: 1px solid #8e8e8e;
  width: auto;
  border-radius: 5px 5px 5px 0;
  height: 23px;
  line-height: 23px;
  top: 25px;
  left: -6px;
}
.mapIcon_title{
  padding: 5px;
  border-radius: 5px 0 0 0;
}
.mapIcon_num{
  padding: 0 5px;
  display: inline-block;
  height: 100%;
  color: #fff;
  background-color: #dc3912;
  border-radius: 0 5px 5px 0;
}
.mapIcon:before,
.mapIcon:after{
  content: '';
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  border: solid rgba(0,0,0,0);
  border-width: 6px;
  left: 9px;
}
.mapIcon:before{ 
  bottom: -13px;
  border-top-color: #8e8e8e;
}
.mapIcon:after{
  bottom: -12px;
  border-top-color: #fffeef;
}
.amap-simple-marker-label{
  display: inline-flex;
}
/* 波纹圆圈 */
.example {
  position: absolute;
  top: 25px;
  left: 2px;
}
.dot{
  display: inline-block;
}
/* 颜色 */
/* let color = ['#00F04F', '#01DAFF', '#0098E9', '#F3A100', '#F7666A', '#FCE800'] */
.colorStyle0:before,
.colorStyle0:after{
  background-color: #00F04F;
}
 
.colorStyle1:before,
.colorStyle1:after{
  background-color: #01DAFF;
}
 
.colorStyle2:before,
.colorStyle2:after{
  background-color: #0098E9;
}
 
.colorStyle3:before,
.colorStyle3:after{
  background-color: #F3A100;
}
 
.colorStyle4:before,
.colorStyle4:after{
  background-color: #F7666A;
}
 
.colorStyle5:before,
.colorStyle5:after{
  background-color: #FCE800;
}
 
.colorStyle0:after{
  box-shadow: 0 0 10px rgba(0,240,79,.3) inset;
}
.colorStyle1:after{
  box-shadow: 0 0 10px rgba(1,218,255,.3) inset;
}
.colorStyle2:after{
  box-shadow: 0 0 10px rgba(0,152,233,.3)inset;
}
.colorStyle3:after{
  box-shadow: 0 0 10px rgba(243,161,0,.3) inset;
}
.colorStyle4:after{
  box-shadow: 0 0 10px rgba(247,102,106,.3) inset;
}
.colorStyle5:after{
  box-shadow: 0 0 10px rgba(252,232,0,.3) inset;
}
.dot:before{
  content:' ';
  position: absolute;
  z-index:2;
  left:0;
  top:0;
  width:12px;
  height:12px;
  /* background-color: #ff4200; */
  border-radius: 50%;
}
 
.dot:after {
  content:' ';
  position: absolute;
  z-index:1;
  width:12px;
  height:12px;
  /* background-color: #ff4200; */
  border-radius: 50%;
  /* box-shadow: 0 0 10px rgba(0,0,0,.3) inset; */
  -webkit-animation-name:'ripple';/*动画属性名，也就是我们前面keyframes定义的动画名*/
  -webkit-animation-duration: 1.5s;/*动画持续时间*/
  -webkit-animation-timing-function: ease; /*动画频率，和transition-timing-function是一样的*/
  -webkit-animation-delay: 0s;/*动画延迟时间*/
  -webkit-animation-iteration-count: infinite;/*定义循环资料，infinite为无限次*/
  -webkit-animation-direction: normal;/*定义动画方式*/
}
@keyframes ripple {
   0% {
    left:6px;
    top:6px;
    opcity:85;
    width:0;
    height:0;
  }
  100% {
    left:-14px;
    top:-14px;
    opacity: 0;
    width:40px;
    height:40px;
  }
}
</style>