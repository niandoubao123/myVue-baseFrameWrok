export let life = {
  async created(){
    uni.getSystemInfo({
      success: (e) => {
        let statusBar = 0   // statusBar ---------- 状态栏高度
        let navBar = 0   // statusBar ---------- 状态栏高度
        let customBar = 0   // customBar -------- 状态栏高度 + 导航栏高度
        
        
        // #ifdef MP
        statusBar = e.statusBarHeight
        customBar = e.statusBarHeight + 45
        if (e.platform === 'android') {
          customBar = e.statusBarHeight + 50
        }
        // #endif
        
        
        // #ifdef MP-WEIXIN
        statusBar = e.statusBarHeight
        // @ts-ignore
        const custom = wx.getMenuButtonBoundingClientRect()
        customBar = custom.bottom + custom.top - e.statusBarHeight
        // #endif
  
  
        // #ifdef MP-ALIPAY
        statusBar = e.statusBarHeight
        customBar = e.statusBarHeight + e.titleBarHeight
        // #endif
  
  
        // #ifdef APP-PLUS
        console.log('app-plus', e)
        statusBar = e.statusBarHeight
        customBar = e.statusBarHeight + 45
        // #endif
  
  
        // #ifdef H5
        statusBar = 0
        customBar = e.statusBarHeight + 45
        // #endif
        
        navBar = customBar-statusBar
        this.statusBar = statusBar
        this.customBar = customBar
        this.navBar = navBar
        
        if ((e.model.search('iPhone X') !== -1 || e.model.search('iPhone 11') !== -1 || e.model.search('iPhone 12'))!=-1) {
          this.isIphoneAdaptation = true
          if(this.isIphoneAdaptation){
            this.titleHeight = 170
          }
        }        
      }
    })
    //尝试
    //判断适配iPhoneX
    // this.methods('checkIphoneX')
  }
}
export let event = {
  change(index) {
    this.currents = index;
    //触发页面
    this.$emit('getData')
  },
  //屏幕滑动
 //手指按下屏幕
 handleTouchstart(event){
  this.startTime = Date.now()
  this.startX = event.changedTouches[0].clientX
  this.startY = event.changedTouches[0].clientY
},
//手指离开屏幕
handleTouchend(event){
  const endTime = Date.now()
  const endX = event.changedTouches[0].clientX
  const endY = event.changedTouches[0].clientY
  //判断按下的时长
  if(endTime - this.startTime >2000){
    return
  }
  //滑动的方向
  let direction = "";
  //先判断用户滑动的距离，是否合法，合法:判断滑动的方向 注意 距离要加上绝对值
  if(Math.abs(endX -this.startX)>10){
    //滑动方向
    if(Math.abs(endY -this.startY)>30){
      // console.log("y方向偏移太多，不让你滑了")
      return
    }else{
      direction = endX -this.startX >0?"right":"left"
    }
  }else{
    return
  }
  //用户做了合法的滑动操作
  // console.log('方向'+direction)
  if(direction==='left'){
    if(this.currents+1===this.list.length){
      return
    }else{
      this.currents++
      //触发页面
      this.$emit('getData')
    }
  }
  if(direction==='right'){
    if(this.currents===0){
      return
    }else{
      this.currents--
      //触发页面
      this.$emit('getData')
    }
  }
}
}
export let watch = {}
