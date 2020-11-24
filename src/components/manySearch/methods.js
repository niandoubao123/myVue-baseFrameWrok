export default class {
  @Model('EnterPlateNumber')
  enterWord(){
    this.plateNumber1 = this.EnterPlateNumber.input.firstWord?this.EnterPlateNumber.input.firstWord:' '+ this.EnterPlateNumber.input.secondWord?this.EnterPlateNumber.input.secondWord:''+ this.EnterPlateNumber.input.lastWords?this.EnterPlateNumber.input.lastWords:''
    this.$emit('update:plateNumber', this.plateNumber1)
  }

  cancelTime(value){
    console.log('xx')
    if(value==='st'){
      this.startTime = undefined
      // this.$emit('update:st', undefined)
    }
    if(value==='et'){
      this.endTime = undefined
    }
  }

  @Model('EnterPlateNumber')
  setKey(val){
    this.EnterPlateNumber.input.whitchKey = val
  }

  @Model('EnterPlateNumber')
  enterProv(val){
    this.EnterPlateNumber.input.showProvince = val
    this.EnterPlateNumber.input.showAlb = false
    this.EnterPlateNumber.input.whitchKey = 0
  }

  @Model('EnterPlateNumber')
  async enterPro(val){
    let isOk = false
    this.EnterPlateNumber.input.firstWord = val.provinceName
    if(this.EnterPlateNumber.input.firstWord!=''){
      isOk = true
    }
    return isOk
  }

  @Model('EnterPlateNumber')
  deletePro(){
    this.EnterPlateNumber.input.firstWord = ''
  }

  @Model('EnterPlateNumber')
  enterAlbn(val){
    this.EnterPlateNumber.input.showAlb = val
    this.EnterPlateNumber.input.showProvince = false
    this.EnterPlateNumber.input.whitchKey = 1
  }

  @Model('EnterPlateNumber')
  async enterAlb(val){
    let isOk = 1
    if(this.EnterPlateNumber.input.whitchKey === 1&typeof(val.AlbName)==='number'){
      isOk = 1
      return
    }
    if(this.EnterPlateNumber.input.whitchKey === 1){
      isOk = 2
      this.EnterPlateNumber.input.secondWord = val.AlbName
    }
    if(this.EnterPlateNumber.input.whitchKey === 2){
      isOk = 3
      let str = val.AlbName.toString()
      this.EnterPlateNumber.input.lastWords+=str
    }
    return isOk
  }

  @Model('EnterPlateNumber')
  enterLastn(val){
    this.EnterPlateNumber.input.showAlb = val
    this.EnterPlateNumber.input.showProvince = false
    this.EnterPlateNumber.input.whitchKey = 2
  }

  @Model('EnterPlateNumber')
  async deleteAlb(){
    let isOk = 0
    if(this.EnterPlateNumber.input.whitchKey === 1){
      this.EnterPlateNumber.input.secondWord = ''
      isOk = 1
    }
    if(this.EnterPlateNumber.input.whitchKey === 2){
      this.EnterPlateNumber.input.lastWords = this.EnterPlateNumber.input.lastWords.substr(0, this.EnterPlateNumber.input.lastWords.length - 1)
      if(this.EnterPlateNumber.input.lastWords===''){
        isOk = 3
      }else{
        isOk = 2
      }
    }
    return isOk
  }

}