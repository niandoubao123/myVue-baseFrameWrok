import Vue from 'vue'
import apiMap from './apis.js'
import JsonFormat from './jsonFormat.js'
import expendFormat from './expandFormat.js'
import realData from './realData.js'
Vue.prototype.http = function ({cmd, input, success, error, complete, ...arg}) {
  try {
    console.log(cmd, JSON.parse(JSON.stringify(input)))
  } catch (e) {}
  return new Promise(resolve => {
    const http = new XMLHttpRequest()
    http.onreadystatechange = function () {
      if (http.readyState === 4) {
        let res = JSON.parse(http.responseText)
        if (http.status === 200) {
          let data = JSON.parse(res.data.page_content).api_output
          if (realData[cmd]) {
            data = realData[cmd]
          } else {
            data = new JsonFormat(data, 'commentJson').exampleJson // 解析出接口文档里的响应示例
            data.data = expendFormat(data.data, input) // 使响应示例变成随机的、更丰富的模拟数据
          }
          success && success(data)
        } else {
          error && error(res)
        }
        complete && complete(res)
        resolve()
      }
    }
    http.open(arg.type || 'POST', arg.url || 'http://172.18.2.23:7001/server/index.php?s=/api/page/info', true)
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
    http.send('page_id=' + apiMap[cmd])
  })
}