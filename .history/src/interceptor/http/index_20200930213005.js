import Vue from 'vue'
import apiMap from './apis.js'
let loadingNum = 0
let loadingTimeout
let loading
let loadingTimes = 0
Vue.prototype.http = async function ({cmd, type, input, success, error, complete, ...arg}) {
  let self = this
  if (!apiMap[cmd]) {
    throw new Error('找不到 api：' + cmd + ', 请确认')
  }
  let isAjaxComplete = false
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
          isAjaxComplete = true
          resolve()
        }
      }
      let url = window.config.host + apiMap[cmd].uri + '?src=H5'
      if (!input) {
        input = {}
      }
      input = JSON.parse(JSON.stringify(input))
      if (apiMap[cmd].type === 'GET') {
        var getParam = '&'
        Object.keys(input).forEach(function (key) {
          var item = input[key]
          if (key === 'pIdx') {
            item = item - 1
          }
          if (typeof item === 'object') {
            if (item instanceof Array) {
              // 数组进行逗号组合为字符串
              if (item.length > 0) {
                item = item.join(',');
                getParam += key + '=' + item + '&'
              }
            } else {
              item = encodeURIComponent(item)
              getParam += key + '=' + JSON.stringify(item) + '&'
            }
          } else if (item || item === 0) {
            item = encodeURIComponent(item)
            getParam += key + '=' + item + '&'
          }
        })
        if(!getParam.includes('mchId')){
          getParam += 'mchId=' + window.localStorage.mchId + '&'
        }
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
    })
    return _http
  }
  function responseHandler (http) {
    if (!http.responseText) {
      return {code: 'failed', msg: '请求无响应'}
    }
    let res = JSON.parse(http.responseText)
    if (http.status === 200) {
      if (res.code === 401) {
        // window.location.href = window.location.href.split('/#/')[0] + '/login.html'
        // uni.postMessage({
        //   data: {
        //     type:'navigateToMiniProgram',
        //   },
        //   success(){
        //     // uni.navigateBack()
        Vue.prototype.$toast.fail('当前登录已过期，请重新登录')
        setTimeout(() => {
          uni.navigateTo({url:'/pages/login/index'})
        }, 1000);
        //   }
        // });
        return
      } else if (res.code !== 200 && (!success || !success.toString().includes('$message'))) {
        // 如果状态码不是 200，并且 success 函数里没有提示相关的错误信息，那么这里提示一下 TODO 会不会有不需要提示的情况 ?
        // Vue.prototype.$message.error(res.msg)
        Vue.prototype.$toast.fail(res.msg)
      }
      if (res.msg === 'OK') {
        res.msg = '操作成功'
      }
      success && success.call(self, res)
    } else {
      error && error.call(self, res)
    }
    complete && complete.call(self, res)
    return res
  }
  
  function addLoading () {
    loadingNum++
    if (loadingTimeout) return
    loadingTimeout = setTimeout(() => {
      // loading了 n 次了, 友情提示一下
      // 第一次 loading 2次, 提示一下
      // 之后每 loading 5次, 提示一下
      if (!isAjaxComplete) {
        loadingTimes++
        let target = document.getElementById("loading-overlay")
        if (target) {
          target.style.display = 'flex'
          loading = target
        }
        if (loadingTimes === 2) {
          // Vue.prototype.$message.warning('您的网络比较差, 操作响应时间会比较长, 请耐心等候')
          loadingTimes = -3
        }
      }
    }, 1000)
  }
}
function reduceLoading () {
  loadingNum--
  if (loadingNum <= 0) {
    clearTimeout(loadingTimeout)
    loadingTimeout = loadingNum = 0
    if (loading) {
      console.log("关闭loading")
      document.getElementById("loading-overlay").style.display = 'none'
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