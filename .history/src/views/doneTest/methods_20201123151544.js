export default {
	getData(){
		// console.log('看一下')
		// console.log(this.orderData.input.value.oneNumber)
  },
  getMounted(){

  },
  async doTest(data){
    let isOk = false
    let timer
    await	new Promise(r => {
      timer = setTimeout(() => {
        isOk = true
        console.log(data)
        r()
      }, 3000);
    })
    if(isOk){
      clearTimeout(timer)
    }
    return isOk
  }
	
}
