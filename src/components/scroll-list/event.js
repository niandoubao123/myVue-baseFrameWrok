export let life = {
	// onLoad(){
		
  //   console.log('重置加载')
	// 	this.methods('resetMescroll')
	// },
	created() {
		console.log('展示')
		this.methods('resetMescroll', true)
	},
	beforeDestroy() {
		console.log('销毁')
		this.methods('resetMescroll', false)
	}
}
export let event = {
	mescrollInit(mescroll) {
    console.log('init')
		this.methods('mescrollInit', mescroll)
	},
	downCallback () {
		this.methods('downCallback')
	},
	upCallback (page) {
		this.methods('upCallback', page)
	}
}
export let watch = {}
