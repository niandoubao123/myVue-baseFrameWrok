export default class {
  checkIphoneX(){
    let _self = this
    uni.getSystemInfo({
      success: function(e) {
        if (e.model.search('iPhone X') !== -1 || e.model.search('iPhone 11') !== -1) {
          console.log('型号')
          console.log(e.model)
          _self.isIphoneAdaptation = true
        }        
      }
    });
  }
}
