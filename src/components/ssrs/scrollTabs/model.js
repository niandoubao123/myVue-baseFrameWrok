//Height   tab高度  number
//barWidth   底部滑块宽度  number
//barHeight   底部滑块高度  number
//list   tab数组  []
//current   当前  number
//bgColor   背景色
//bgImg   背景色

//用这个组件  需要做几件事  切换tab需要重置页码，请求数据，更改url/入参等  (按需操作)
//而且   list的结构必须如下  为了满足多次使用  所以这个只能这样麻烦一点
// list: [
//   {
//     name: '待指派',
//     key:'waitPointCount',
//     count:undefined
//   }, 
//   {
//     name: '待处理',
//     key:'waitDealCount',
//     count:undefined
//   }, 
//   {
//     name: '已解决',
//     key:'hasResolveCount',
//     count:undefined
//   },
//   {
//     name: '已关闭',
//     key:'hasCloseCount',
//     count:undefined
//   }
// ],
export let props = [
  'barWidth',
  'Height',
  'barHeight',
  'list',
  'current',
  'bgColor',
  'bgImg',
  'title',
  "cancelBottomHeight"  //不需要底部抬高
];
export let model = {
  statusBar : 0,  // statusBar ---------- 状态栏高度
  navBar : 0, // statusBar ---------- 状态栏高度
  customBar : 0, // customBar -------- 状态栏高度 + 导航栏高度
  //按下的时间
  startTime:0,
  //按下的坐标
  startX:0,
  startY:0,
  titleHeight:140
};
export let computed = {
  currents:{
    get(){
      return this.current;
    },
    set(val){
      this.$emit('update:current', val);
    }
  },
  lists:{
    get(){
      this.list.forEach(item => {
        if(item.count){
          item.name = item.name+'('+item.count+')';
        }else{
          item.name = item.name+'(0)';
        }
      });
      return this.list;
    }
  }
};
