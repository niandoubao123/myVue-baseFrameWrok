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
    window.document.documentElement.setAttribute('data-theme', 'primary4');
    let datas=[
      {
        dictKey:'faleDataOne',
        dictList:[
          {
            dictId: "569c1a1d-e2d9-4ca2-9ca8-aa574f49db51",
            dictKey: "faleDataOne_0",
            dictName: "假数据1.1",
            dictValue: "aaa",
          },
          {
            dictId: "569c1a1d-e2d9-4ca2-9ca8-aa574f49db51",
            dictKey: "faleDataOne_1",
            dictName: "假数据1.2",
            dictValue: "bbb",
          },
          {
            dictId: "569c1a1d-e2d9-4ca2-9ca8-aa574f49db51",
            dictKey: "faleDataOne_2",
            dictName: "假数据1.3",
            dictValue: "ccc",
          }
        ]
      },
      {
        dictKey:'faleDataTwo',
        dictList:[
          {
            dictId: "569c1a1d-e2d9-4ca2-9ca8-aa574f49db51",
            dictKey: "faleDataOne_0",
            dictName: "假数据2.1",
            dictValue: "ddd",
          },
          {
            dictId: "569c1a1d-e2d9-4ca2-9ca8-aa574f49db51",
            dictKey: "faleDataOne_1",
            dictName: "假数据2.2",
            dictValue: "eee",
          },
          {
            dictId: "569c1a1d-e2d9-4ca2-9ca8-aa574f49db51",
            dictKey: "faleDataOne_2",
            dictName: "假数据2.3",
            dictValue: "fff",
          }
        ]
      },
    ]
    this.$window.utils.dict.init(datas)
    // console.log(this.$window.utils.dict.key('faleDataOne').getName('ccc'))
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
