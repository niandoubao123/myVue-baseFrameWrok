export default {
	getData(){
		console.log('看一下')
		// console.log(this.orderData.input.value.oneNumber)
  },
  async doTest(data){
    let isOk = false
    let timer = setTimeout(()=>{
      isOk = true
      console.log(data)
    },3000)
    clearTimeout(timer)
    return isOk
  }
	
}
