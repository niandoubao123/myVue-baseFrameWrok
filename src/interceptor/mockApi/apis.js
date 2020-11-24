export default {
  "/mch/report/top": "327",
  "/mch": "348",
  "/mch/{id}": "349",
  "/acc/{id}/resetPwdAndSend": "356",
  "/acc/{id}/setDisable": "357",
  "/acc/{id}/changeAcc": "358",
  "/mch/turnover/report": "334",
  "/device/report": "359",
  "/device/{id}/logDownload": "360",
  "/mch/payInfo": "338",
  "/mch/{id}/payInfo": "339",
  "/role": "341",
  "/ad/report": "342",
  "/ad/{id}": "343",
  "/mch/parking/statistics": "316",
  "/mch/report/parkingCountDay": "317",
  "/mch/report/payDay": "318",
  "/mch/guide": "319",
  "/channel/inoutList": "320",
  "/channel/open": "321",
  "/parkingOrder/{id}": "322",
  "/parkingOrder/report": "326",
  "/parkingOrder/{id}/finishByCash": "324",
  "/parkingOrder/{id}/finishByForce": "325",
  "/mch/seller/statistics": "344",
  "/mch/report/newDevMonth": "345",
  "/mch/report/haveDevMonth": "346",
  "/mch/report/my?proxyName=xxx&amp;tittle=xxx": "347",
  "/parking/report": "353",
  "/parking": "354",
  "/parking/{id}": "355"
}
/**
 * 从 api 管理平台上获取原始菜单数据，打印出以上 api 数据
 * @param source
 */
function updateApis(source) {
  let apis = {}
  let pages = source.data.menu.pages
  source.data.menu.catalogs.forEach(item => {
    pages = pages.concat(item.pages)
  })
  pages.forEach(item => {
    apis[item.page_uri.replace(/^.+\s/, '')] = item.page_id
  })
  console.log(JSON.stringify(apis, null, 2))
}