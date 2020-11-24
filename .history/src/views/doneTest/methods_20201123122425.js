export default {
	getData(){
		console.log('看一下')
		// console.log(this.orderData.input.value.oneNumber)
  },
  async doTest(data){
    let isOk = false
    await	new Promise(async r => {
      await setInterval(() => {
        isOk = true
        r()
        console.log(data)
      }, 3000);
    })
    if(isOk){
      // clearTimeout(timer)
      return isOk
    }
  }
	
}
