export const props =[
  // 这里mescroll 在uniapp上是需要固定高度的，所以通过以下两个api对视图进行定位 ,单位rpx
  'top', // 视图上偏移量
  'bottom', // 视图下偏移量
  'fixed', // 视图下偏移量
]
export let model = {
  isShow: false,
  mescroll: undefined,
  upOption: {
    page: {
      size: 10 // 每页数据的数量,默认10
    },
    noMoreSize: 5, // 配置列表的总数量要大于等于5条才显示'-- END --'的提示
    empty: {
      use:false,
      tip: '暂无相关数据'
    },
    textNoMore: '已经到底了',
    bgColor:'rgb(240, 243, 244)',
    textColor:'rgba(0,0,0,0.45)'
  },
}
export let computed = {
}
