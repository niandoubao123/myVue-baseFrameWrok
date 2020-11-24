export let props = ['titleName','searchType','st','et',"plateNumber",'maskTop','noNeedMask','btnWords','noNeedBtn','placeholder']
export let model = {
  EnterPlateNumber:{
    input:{
      firstWord:'',
      secondWord:'',
      lastWords:'',
      provinceList:[
        {provinceName:'京',id:'京'},
        {provinceName:'津',id:'津'},
        {provinceName:'冀',id:'冀'},
        {provinceName:'晋',id:'晋'},
        {provinceName:'蒙',id:'蒙'},
        {provinceName:'辽',id:'辽'},
        {provinceName:'吉',id:'吉'},
        {provinceName:'黑',id:'黑'},
        {provinceName:'沪',id:'沪'},
        {provinceName:'苏',id:'苏'},
        {provinceName:'浙',id:'浙'},
        {provinceName:'皖',id:'皖'},
        {provinceName:'闽',id:'闽'},
        {provinceName:'赣',id:'赣'},
        {provinceName:'鲁',id:'鲁'},
        {provinceName:'豫',id:'豫'},
        {provinceName:'鄂',id:'鄂'},
        {provinceName:'湘',id:'湘'},
        {provinceName:'粤',id:'粤'},
        {provinceName:'桂',id:'桂'},
        {provinceName:'琼',id:'琼'},
        {provinceName:'渝',id:'渝'},
        {provinceName:'川',id:'川'},
        {provinceName:'贵',id:'贵'},
        {provinceName:'云',id:'云'},
        {provinceName:'藏',id:'藏'},
        {provinceName:'陕',id:'陕'},
        {provinceName:'甘',id:'甘'},
        {provinceName:'青',id:'青'},
        {provinceName:'宁',id:'宁'},
        {provinceName:'新',id:'新'},
        {provinceName:'台',id:'台'},
        {provinceName:'港',id:'港'},
        {provinceName:'澳',id:'澳'},
        {provinceName:'使',id:'使'},
        {provinceName:'领',id:'领'},
        {provinceName:'警',id:'警'},
        {provinceName:'学',id:'学'},
      ],
      plateAlbList:[
        {AlbName:0,id:'0',isNumber:true},
        {AlbName:1,id:'1',isNumber:true},
        {AlbName:2,id:'2',isNumber:true},
        {AlbName:3,id:'3',isNumber:true},
        {AlbName:4,id:'4',isNumber:true},
        {AlbName:5,id:'5',isNumber:true},
        {AlbName:6,id:'6',isNumber:true},
        {AlbName:7,id:'7',isNumber:true},
        {AlbName:8,id:'8',isNumber:true},
        {AlbName:9,id:'9',isNumber:true},
        {AlbName:'A',id:'A',isNumber:false},
        {AlbName:'B',id:'B',isNumber:false},
        {AlbName:'C',id:'C',isNumber:false},
        {AlbName:'D',id:'D',isNumber:false},
        {AlbName:'E',id:'E',isNumber:false},
        {AlbName:'F',id:'F',isNumber:false},
        {AlbName:'G',id:'G',isNumber:false},
        {AlbName:'H',id:'H',isNumber:false},
        {AlbName:'J',id:'J',isNumber:false},
        {AlbName:'K',id:'K',isNumber:false},
        {AlbName:'L',id:'L',isNumber:false},
        {AlbName:'M',id:'M',isNumber:false},
        {AlbName:'N',id:'N',isNumber:false},
        {AlbName:'P',id:'P',isNumber:false},
        {AlbName:'Q',id:'Q',isNumber:false},
        {AlbName:'R',id:'R',isNumber:false},
        {AlbName:'S',id:'S',isNumber:false},
        {AlbName:'T',id:'T',isNumber:false},
        {AlbName:'U',id:'U',isNumber:false},
        {AlbName:'V',id:'V',isNumber:false},
        {AlbName:'W',id:'W',isNumber:false},
        {AlbName:'X',id:'X',isNumber:false},
        {AlbName:'Y',id:'Y',isNumber:false},
        {AlbName:'Z',id:'Z',isNumber:false},
        {AlbName:'学',id:'学',isNumber:false},
        {AlbName:'港',id:'港',isNumber:false},
        {AlbName:'澳',id:'澳,isNumber:false'}
      ],
      showProvince:false,  //展示省份
      showAlb:false,   //展示字母键盘
      whitchKey:''
    }
  }
}
export let data = {
}
export let computed = {
  plateNumber1 : {
    get () {
      return this.plateNumber||''
    },
    set (val) {
      this.$emit('update:plateNumber', val)
    }
  },
  startTime:{
    get(){
      return this.st
    },
    set(val){
      this.$emit('update:st',val)
      let self = this
      setTimeout(() => {
        self.$emit('update:st',val)
      }, 100);
    }
  },
  endTime:{
    get(){
      return this.et
    },
    set(val){
      this.$emit('update:et',val)
      let self = this
      setTimeout(() => {
        self.$emit('update:et',val)
      }, 100);
    }
  }
}