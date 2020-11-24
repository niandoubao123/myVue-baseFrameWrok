export let life = {
	// onLoad() {
	// 	this.methods('getData')
	// },
	created(){
		this.methods('getData')
    // this.doTest()
  },
  mounted(){
    this.methods('getMounted')
  }
}
export let event = {
	async doTest(val){
    console.log(val)
    let data ={
      name:'小明',
      age:20,
      sex:'男'
    }
    let isOk =  await this.methods('doTest',data)
    if(isOk){
      console.log('异步')
    }
	}
}
export let watch = {
	
}
