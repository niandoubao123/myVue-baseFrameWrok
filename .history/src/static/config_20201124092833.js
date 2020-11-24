// var host = 'http://172.16.2.42:8090'  //韦军
// var host = 'http://172.18.10.132:8084'
var host = 'https://entry-mch3.platformcenter.net/'
// var host = 'http://172.16.2.36:8080'  //蓝明明
// var host = 'http://172.18.10.15:8084' // 陈志谦
// var host = 'https://h5staffcode.platformcenter.net/'
var role = '物业' // 厂家、经销商、物业  只需修改role字段值就可以分别显示当前角色的页面
var wxAppId = ''//微信appid
var baiduHm = ''
window.config = {
  version: 'w2020.14',
  host: host,
  role: role,
  wxAppId:wxAppId,
  baiduHm: baiduHm
}
