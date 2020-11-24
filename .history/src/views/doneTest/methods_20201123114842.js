export default {
	getData(){
		console.log('看一下')
		// console.log(this.orderData.input.value.oneNumber)
  },
  async doTest(data){
    let isOk
    console.log(isOk)
    return setTimeout(()=>{
      isOk = true
      console.log(true)
      console.log(data)
    },3000)
  }
	
}
