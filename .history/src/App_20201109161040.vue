<template>
  <div id="app" class="biggbox">
    
    <!-- 中部 -->
    <transition>
      <router-view></router-view>
    </transition>

  </div>
</template>


<script>
import '../src/assets/css/core.css'
import '../src/assets/css/home.css'
import '../src/assets/css/icon.css'
export default {
  data() {
    return {
      active: 0
    }
  },
  created(){
    let datas=[
      {
        dictKey:'faleDataOne',
        dictList:[
          {
            dictId: "569c1a1d-e2d9-4ca2-9ca8-aa574f49db51",
            dictKey: "upgrade_status_0",
            dictName: "等待升级",
            dictValue: "0",
          }
        ]
      }
    ]
    this.$window.utils.dict.init(datas)
  },
  components:{
  }
}
</script>

<style lang="scss" scoped>
.biggbox{
  padding-bottom:50px;
  overflow: hidden;
}
.v-enter,
.v-leave-to{
  opacity: 0;
}
.v-enter-active,
.v-leave-active{
  transition: all 0.2s linear;
}
</style>
