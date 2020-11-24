export default class {
	resetMescroll (flag) {
		this.isShow = flag
	}
	downCallback () {
		console.log("出发下拉")
    this.$emit('down', this.mescroll)
	}
	upCallback (page) {
		console.log("出发上拉")
    this.$emit('up', this.mescroll, page)
	}
	mescrollInit(mescroll) {
		this.mescroll = mescroll;
    this.$emit('init', mescroll)
	}
}
