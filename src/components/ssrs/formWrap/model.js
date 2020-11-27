//label  表单标题
//req  是否有红*标志   true/false 
//noNeedLine  不需要底部线 y/n
//needTopLine  需要顶部线 y/n
//noChange  需要置灰 y/n
//slotHeight 用于撑起高度的，这个方式还有问题，有待商榷，主要是给textarea用
//point top/bot 是作为问号提示里面小箭头的位置，上或者下
export let props = ['label', 'type', 'text', 'value','req','needTotast','toastWord','LEFT','TOP','ISSHOW','noNeedLine','point','WIDTH','needTopLine','noChange']
export let model = {
  toastData:{
    input:{
      isShow:false
    }
  }
}
export let computed = {

}

