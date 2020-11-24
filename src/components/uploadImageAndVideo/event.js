export let life = {
  created () {
    this.methods('resetImgList')
  }
}
export let event = {
  // 添加图片
  addpic(){
    this.methods('addpic')
  },
  // 图片全屏
  fullImage(item){
    this.methods('fullImage',item)
  },
  // 删除图片
  delPic(index){
    this.methods('delPic',index)
  },
  //上传图片
  uploads(){
    this.methods('uploads')
  }
}
export let watch = {
}