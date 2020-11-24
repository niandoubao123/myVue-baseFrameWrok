import Vue from 'vue'
import apiMap from './apis.js'
Vue.prototype.http = async function ({cmd, type, input, success, error, complete, ...arg}) {
  let self = this
  if (!apiMap[cmd]) {
    throw new Error('找不到 api：' + cmd + ', 请确认')
  }
  addLoading()
  let http = await ajax()
  let result = responseHandler(http)
  reduceLoading()
  return result
  async function ajax () {
    let _http
    await new Promise(resolve => {
      const http = new XMLHttpRequest()
      http.onreadystatechange = function () {
        if (http.readyState === 4) {
          _http = http
          resolve()
        }
      }
      let url = window.config.host + apiMap[cmd].uri + '?src=Web'
      if (!input) {
        input = {}
      }
      // formData 特殊处理
      if (input instanceof FormData) {
        http.open(apiMap[cmd].type || 'POST', url.replace(/\{.+\}/, arg.id), true)
        http.setRequestHeader('sessionId', window.localStorage.sessionId)
        // http.setRequestHeader('Content-type', 'application/x-www-form-urlencode')
        http.send(input)
      } else {
        input = JSON.parse(JSON.stringify(input))
        if (apiMap[cmd].type === 'GET') {
          var getParam = '&'
          Object.keys(input).forEach(function (key) {
            var item = input[key]
            if (key === 'pIdx') {
              item = item - 1
            }
            if (typeof item === 'object') {
              item = encodeURIComponent(item)
              getParam += key + '=' + JSON.stringify(item) + '&'
            } else if (item || item === 0) {
              item = encodeURIComponent(item)
              getParam += key + '=' + item + '&'
            }
          })
          if (getParam === '&') {
            getParam = ''
          }
          url += getParam.replace(/&$/, '')
        } else if (apiMap[cmd].type !== 'DELETE') {
          removeEmpty(input)
        }
        http.open(apiMap[cmd].type || 'POST', url.replace(/\{.+\}/, arg.id), true)
        http.setRequestHeader('sessionId', window.localStorage.sessionId)
        http.setRequestHeader('Content-type', 'application/json')
        http.send(JSON.stringify(input))
      }
    })
    return _http
  }
  function responseHandler (http) {
    if (!http.responseText) {
      return {code: 'failed', msg: '请求无响应'}
    }
    let res = JSON.parse(http.responseText)
    if (http.status === 200) {
      if (res.msg.toLowerCase() === 'ok') {
        res.msg = '操作成功'
      }
      if (res.code === 401) {
        window.location.href = window.location.href.split('/#/')[0] + '/login.html'
        return
      } else if (res.code !== 200 && (!success || !success.toString().includes('$message'))) {
        // 如果状态码不是 200，并且 success 函数里没有提示相关的错误信息，那么这里提示一下 TODO 会不会有不需要提示的情况 ?
        Vue.prototype.$message.error(res.msg)
      }
      ///////////////////////// 打印请求信息 start /////////////////////////
      // let pageId = apiMap[cmd].pageId
      // console.group(apiMap[cmd].title, 'http://172.18.2.23:7001/web/#/11?page_id=' + pageId)
      // if (/\{/.test(apiMap[cmd].uri) && !arg.id) {
      //   console.log('url：', apiMap[cmd].uri)
      //   console.error('缺少 id 字段')
      // } else {
      //   console.log('url：', apiMap[cmd].uri.replace(/\{[^\}]+\}/, arg.id))
      // }
      // console.log('请求：', JSON.stringify(input, null, 2))
      // console.log('响应：', res)
      // console.groupEnd(apiMap[cmd].title, 'http://172.18.2.23:7001/web/#/11?page_id=' + pageId)
      ///////////////////////// 打印请求信息 end /////////////////////////
      success && success.call(self, res)
    } else {
      error && error.call(self, res)
    }
    complete && complete.call(self, res)
    return res
  }
}
let loadingNum = 0
let loadingTimeout
let loading
let loadingTimes = 0
function addLoading () {
  loadingNum++
  if (loadingTimeout) return
  loadingTimeout = setTimeout(() => {
    // loading了 n 次了, 友情提示一下
    // 第一次 loading 2次, 提示一下
    // 之后每 loading 5次, 提示一下
    loadingTimes++
    if (loadingTimes === 2) {
      Vue.prototype.$message.warning('您的网络比较差, 操作响应时间会比较长, 请耐心等候')
      loadingTimes = -3
    }
    let target = document.querySelector('.title-bar-text .icon')
    if (target) {
      loading = Vue.prototype.$loading({
        target: target,
        spinner: 'el-icon-loading',
        background: '#f7f8f9',
      })
    } else {
      loading = Vue.prototype.$loading({
        target: document.body,
        spinner: 'el-icon-loading',
        text: '正在获取数据',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    }
    
  }, 1000)
}
function reduceLoading () {
  loadingNum--
  if (loadingNum <= 0) {
    clearTimeout(loadingTimeout)
    loadingTimeout = loadingNum = 0
    if (loading) {
      loading.close()
      loading = null
    }
  }
}

// 过滤空字符串为 undefined
function removeEmpty (obj) {
  if (obj instanceof Array) {
    obj.forEach(removeEmpty)
  } else {
    Object.keys(obj).forEach(key => {
      if (obj[key] === '') {
        obj[key] = undefined
      }
    })
  }
}