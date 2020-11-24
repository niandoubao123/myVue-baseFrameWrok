export default {
	getData(){
		console.log('看一下')
		// console.log(this.orderData.input.value.oneNumber)
  },
  async doTest(data){
    let isOk = false
    let timer =await setTimeout(()=>{
      isOk = true
      console.log(data)
      return isOk
    },3000)
    if(isOk){
      clearTimeout(timer)
    }
    
  }
	
}
