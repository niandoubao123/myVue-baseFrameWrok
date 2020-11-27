//label  表单标题
//req  是否有红*标志   true/false 
//noNeedLine  不需要底部线 y/n
//needTopLine  需要顶部线 y/n
//noChange  需要置灰 y/n
//NUMBER  数字
//wordOne  数字前文字
//wordTwo  数字后文字
// placeholder
export let props = ['label','req','noNeedLine','needTopLine','noChange','NUMBER','wordOne','wordTwo','placeholder','noNeedIcon']
export let model = {
  toastData:{
    input:{
      isShow:false
    }
  }
}
export let computed = {
_placeholder(){
  return this.placeholder?this.placeholder:'暂无数据'
}
}
