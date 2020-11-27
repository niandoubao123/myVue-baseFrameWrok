export let life = {}
export let event = {
  showDetail(itemData){
    //这里可以针对不同情况调用不同方法
    // if(this.showLeft==='on'){
    //   console.log('勾选模式')
    //   //勾选的话  有待商榷  在考虑是否按照目前这样还是将单选框抽出去  插槽
    // }
    if(this.isShow==='on'){
      console.log('进详情模式')
      this.$emit('toDetailPage',itemData)
    }
    if(this.showLeft!='on'&this.isShow!='on'){
      console.log("这就是普通卡片,没有点击事件")
      return
    }
  }
}
export let watch = {}
