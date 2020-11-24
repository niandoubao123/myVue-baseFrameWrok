export let life = {
  created () {
    let _self = this
    document.addEventListener('click', function(e) {
        _self.EnterPlateNumber.input.showAlb = false
        _self.EnterPlateNumber.input.showProvince = false
        _self.EnterPlateNumber.input.whitchKey = 0
    })
    if(this.plateNumber&&this.plateNumber!='微信身份车'&&this.plateNumber!='无牌车'){
      this.EnterPlateNumber.input.firstWord = this.plateNumber.slice(0,1)
      this.EnterPlateNumber.input.secondWord = this.plateNumber.slice(1,2)
      this.EnterPlateNumber.input.lastWords = this.plateNumber.slice(2,9)
    }
  }
}
export let event = {
  enterWord(){
    this.methods('enterWord')
  },
  showTimeDialogMonth(value){
    this.$emit('showTime',value)
  },
  cancelTime(value){
    // this.$emit('cancelTime',value)
    console.log(value)
    this.methods('cancelTime',value)
  },
  //点击省份输入框
  enterProv(){
    this.methods('enterProv',true)
  },
  //点击省份
  async enterPro(item){
    let isOk = await this.methods('enterPro',item)
    if(isOk){
      this.methods('enterAlbn',true)
    }
  },
  //删除省份
  deletePro(){
    this.methods('deletePro')
  },

  //点击字母输入框
  enterAlbn(){
    this.methods('enterAlbn',true)
  },
  //点击数字
  async enterAlb(item){
    let isOk = await this.methods('enterAlb',item)
    if(isOk===2){
      this.methods('setKey',2)
    }
  },
  //数字键盘的删除
  async deleteAlb(){
    let isOk = await this.methods('deleteAlb')
    if(isOk === 1){
      this.methods('setKey',0)
      this.methods('enterProv',true)
      this.EnterPlateNumber.input.firstWord = ''
    }
    if(isOk===2){
      this.methods('setKey',2)
      // this.methods('enterAlbn',true)
    }
    if(isOk===3){
      this.methods('setKey',1)
      // this.methods('enterAlbn',true)
      this.EnterPlateNumber.input.secondWord = ''
    }
  },

  //点击剩余字母框
  enterLastn(){
    this.methods('enterLastn',true)
  },

  //搜索
  clickSearch(){
    let str1 = this.EnterPlateNumber.input.firstWord
    let str2 = this.EnterPlateNumber.input.secondWord
    let str3 = this.EnterPlateNumber.input.lastWords
    this.$emit('clickSearch',str1+str2+str3)
  },

  //点击输入框
  touch(){
    this.$emit('selectType')
  }
}
export let watch = {}
