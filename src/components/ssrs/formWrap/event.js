export let life = {
  created () {
    let _self = this
    // document.addEventListener('click', function(e) {
    //   if (e.target.className !== 'toasts') {
    //     _self.toastData.input.isShow = false
    //   }
    // })
  }
}
export let event = {
  toast(){
    this.toastData.input.isShow = !this.toastData.input.isShow
  },
  hiddenToast(){
    this.toastData.input.isShow = false
  }
}
export let watch = {
}