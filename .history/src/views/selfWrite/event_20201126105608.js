export let life = {
	// onLoad() {
	// 	this.methods('getData')
	// },
	// created(){
	// 	// this.methods('getData')
  // },
  mounted(){
    this.methods('getMounted')
  }
}
export let event = {
	async hereEvent(val){
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
  },
  hahaEvent(){
    this.methods('haha')
  }
}
export let watch = {
	
}
