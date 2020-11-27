export let life = {}
export let event = {
  toCall(e){
    if(this.callPhone){
      // try{
      //   e.stopPropagation();//非IE浏览器
      // }catch(e){
      //   window.event.cancelBubble = true;//IE浏览器
      // }  
      // finally{
        uni.makePhoneCall({
          // 手机号
          phoneNumber: this.titleData, 
          // 成功回调
          success: (res) => {
            console.log('调用成功!')	
          },
          // 失败回调
          fail: (res) => {
            console.log('调用失败!')
          }
        });
      // }
    }else{
      return
    }
  }
}
export let watch = {}
