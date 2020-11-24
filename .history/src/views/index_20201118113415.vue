<template>
<div>
   <el-amap vid="amapPro"
    :amap-manager="amapManager"
    :mapStyle="mapStyle"
    :zoom="zoom"
    :events="events"
    :resizeEnable="resizeEnable"
    >
    </el-amap>
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