<template>
    <div class="test">
      <div class="amap-wrapper map">
          <!--vid:marker对象id,zoomEnable:鼠标滚轮是否允许放大缩小-->
          <!--dragEnable:书否允许拖拽，zoom:地图范围-->
          <!--center:地图中心-->
          <el-amap class="amap-box"
                    ref="map"
                   :vid="'amap-vue'"
                   :zoomEnable="true"
                   :dragEnable="maps.enable"
                   :zoom="maps.zoom"
                   :events="maps.events"
                   :center="maps.center">
            <!--position:标记中心，label:标记文本-->
            <!--clickable:是否允许点击，events触发事件-->
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
    </div>

</template>

<script>
    export default {
        name: "Test",
        data(){
            return {
              maps:{
                enable:true,
                enableclick:true,
                markevent:"click",
                zoom:5,
                events: {
                  init: (o) => {
                    console.log(o.getCenter())
                    console.log(this.$refs.map.$$getInstance())
                    o.getCity(result => {
                      console.log(result)
                    })
                  },
                  'moveend': () => {
                  },
                  'zoomchange': () => {
                  },
                  'click': (e) => {
                    console.log(e)
                    alert('map clicked');
                  }
                },
                center: [105, 35],
                markpoint:[
                  {"name":{"content":"深圳","offset":[20,20]},"point":[114.06, 22.52]},
                ],
              },
              markerEvents: {
                // 点击事件
                click(e) {
                  console.log(e)
                    self.this.$message.success("深圳")
                }
              }
            }
        },
        created() {
          self.this = this
        }
    }
</script>

<style scoped>
  /*地图宽高*/
.amap-wrapper {
  width: 100vw;
  height: 400px;
}
</style>