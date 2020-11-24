export let life = {
	// onLoad() {
	// 	this.methods('getData')
	// },
	created(){
		this.methods('getData')
		// this.doTest()
	}
}
export let event = {
	async doTest(){
    let data ={
      name:'小明',
      age:20,
      sex:'男'
    }
    await this.methods('doTest',data)
		console.log('没有那个就能自己调用自己了？')
	}
}
export let watch = {
	
}
