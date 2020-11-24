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
    let isOk =  await this.methods('doTest',data)
    console.log(isOk)
    if(isOk){
      console.log('异步')
    }
	}
}
export let watch = {
	
}
