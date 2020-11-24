import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from "vant";
import 'vant/lib/index.css'
import 'animate.css'
import { Dialog } from 'vant';
import { CouponCell, CouponList } from 'vant';
import {Popup} from 'vant'
// swiper插件
import "swiper/css/swiper.min.css";
import axios from "axios"
Vue.prototype.$axios=axios
Vue.use(CouponCell);
Vue.use(CouponList);
Vue.use(Popup);

// 全局注册
Vue.use(Dialog);

Vue.use(Vant);

Vue.config.productionTip = false

Vue.filter("dateformat", function (dataString) {
  var dd = new Date(dataString);

  var y = dd.getFullYear();
  var m = dd.getMonth() + 1;
  var d = dd.getDate();

  var hh = dd.getHours();
  var mm = dd.getMinutes();
  var ss = dd.getSeconds();

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
Vue.prototype.$window = {}
let lodash = require('lodash')
Vue.prototype.$window.utils = {
  sameObj: function sameObj(o1, o2) {
    if (o1 === o2) return true
    let keys1 = o1 && Object.keys(o1).sort()
    let keys2 = o2 && Object.keys(o2).sort()
    if (JSON.stringify(keys1) !== JSON.stringify(keys2)) {
      // console.log('不一样的属性: ' + JSON.stringify(keys1), JSON.stringify(keys2))
      return false
    }
    let isSame = true
    let len = keys1.length
    for (let i = 0; i < len; i++) {
      let key = keys1[i]
      let item1 = o1[key]
      let item2 = o2[key]
      if (typeof item1 !== typeof item2) {
        // console.log('不一样的属性: ' + key, item1, item2)
        isSame = false
        break
      }
      if (isSame && typeof item1 === 'object') {
        isSame = sameObj(item1, item2)
        if (isSame) {
          continue
        } else {
          // console.log('不一样的属性: ' + key, item1, item2)
          break
        }
      }
      if (item1 !== item2) {
        isSame = false
        // console.log('不一样的属性: ' + key, item1, item2)
        break
      }
    }
    return isSame
  },
  // 字典类型存储转换
  // 使用方法
  dict: {
    /**
     * @param type {string} 字典类型
     * @returns
     */
    get (type) {
      if (this.data[type] && Object.prototype.hasOwnProperty.call(this.data[type],'itemList')) {  
        return this.data[type].itemList || []
      } else {
        return []
      }
    },
    /**
     * 根据(字典值)获取(字典名)
     * @param val {string} 字典值
     * @returns
     */
    getName (val) {
      if (!val || val === 'null') {
        return
      }
      try {
        console.log('内层',this)
        console.log(this.nameList[val].dictName || ``)
        if (Object.prototype.hasOwnProperty.call(this,'nameList')) {
          // console.log(this.nameList[val])
          return this.nameList[val].dictName || ``
        }
      } catch (e) {
        console.warn('未找到字典名', val, this.nameList)
        return `未分类(${val})`
      }
    },
    key (type) {
      return this.data[type] || {getName: () => ('')}
    },
    init (data) {
      // 初始化字典
      let result = {}
      data && data.forEach(item => {
        let key = item.dictKey
        if (result[key]) {
          result[key].itemList = result[key].itemList.concat(item.dictList)
        } else {
          result[key] = {itemList: item.dictList}
        }
        result[key].nameList = lodash.keyBy(item.dictList, o => (o.dictValue))
        result[key].getName = this.getName
      })
      this.data = result
      console.log(result)
      return result
    },
    data: []
  },
  /**
   * 使用方法
   * 1、连接某个 websocket
   */
  // websocket: {
  //   instance: undefined,
  //   async open (url) {
  //     // if (window.utils.websocket.instance) return
  //     window.utils.websocket.instance = new WebSocket(url)
  //     window.utils.websocket.instance.addEventListener('open', e => {
  //       window.utils.websocket.instance.send(`{
  //           "sessionId": "${localStorage.sessionId}",
  //           "id": "${localStorage.sessionId}",
  //           "command": "WS.LOGIN",
  //           "params": {}
  //         }`)
  //       wsOnOpen.forEach(item => {
  //         item.callback(window.utils.websocket.instance)
  //       })
  //     })
  //     window.utils.websocket.instance.addEventListener('message', e => {
  //       if (!e.data) return
  //       let data = JSON.parse(e.data)
  //       if (!data.data) return
  //       wsOnMessage.forEach(item => {
  //         if (data.data.cmd === item.cmd) {
  //           item.callback(data.data, window.utils.websocket.instance)
  //         }
  //       })
  //     })
  //     window.utils.websocket.instance.addEventListener('close', WSClose)
  //     // 断线重连
  //     function WSClose(e) {
  //       console.log(
  //         `%c websocket %c 断线了`,
  //         'background:#35495e;padding:1px;border-radius:3px 0 0 3px;color:#FFF',
  //         'background:#41b883;padding:1px;border-radius:0 3px 3px 0;color:#FFF'
  //       )
  //       if (!window.utils.websocket.instance || window.utils.websocket.instance.notReOpen) return
  //       window.utils.websocket.instance.close()
  //       window.utils.websocket.instance = undefined
  //       setTimeout(() => {
  //         console.log('试图重连', url)
  //         window.utils.websocket.open(url)
  //       }, 2000)
  //     }
  //   },
  //   onMessage (cmd, callback) {
  //     let hasSame = wsOnMessage.find(item => item.callback === callback)
  //     if (hasSame) return // 不许重复绑定事件监听
  //     wsOnMessage.push({
  //       cmd: cmd,
  //       callback: callback
  //     })
  //   },
  //   offMessage (cmd, callback) {
  //     if (callback) {
  //       let that = wsOnMessage.find(item => item.callback === callback && item.cmd === cmd)
  //       if (!that) return
  //       let index = wsOnMessage.indexOf(that)
  //       wsOnMessage.splice(index, 1)
  //     } else {
  //       let those = wsOnMessage.filter(item => item.cmd === cmd)
  //       those.forEach(item => {
  //         let index = wsOnMessage.indexOf(item)
  //         wsOnMessage.splice(index, 1)
  //       })
  //     }
  //   },
  //   onOpen (cmd, callback) {
  //     let hasSame = wsOnOpen.find(item => item.callback === callback)
  //     if (hasSame) return // 不许重复绑定事件监听
  //     wsOnOpen.push({
  //       cmd: cmd,
  //       callback: callback
  //     })
  //   },
  //   offOpen (cmd, callback) {
  //     if (callback) {
  //       let that = wsOnOpen.find(item => item.callback === callback && item.cmd === cmd)
  //       if (!that) return
  //       let index = wsOnOpen.indexOf(that)
  //       wsOnOpen.splice(index, 1)
  //     } else {
  //       let those = wsOnOpen.filter(item => item.cmd === cmd)
  //       those.forEach(item => {
  //         let index = wsOnOpen.indexOf(item)
  //         wsOnOpen.splice(index, 1)
  //       })
  //     }
  //   },
  //   close () {
  //     if (!window.utils.websocket.instance) return
  //     window.utils.websocket.instance.notReOpen = true
  //     window.utils.websocket.instance.close()
  //   }
  // },
  setDuration (m) {
    var r = ''
    var h = 60
    var d = 60 * 24
    if (m > d) {
      r += parseInt(m / d) + '天'
      m = m % d
    }
    if (m > h) {
      r += parseInt(m / h) + '小时'
      m = m % h
    }

    if (m) {
      r += m + '分'
    }
    return r
  },

  // 计算结束时间
  computedOverTime (type, val) {
    let overtime
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth()
    let day = now.getDate()
    let h = 23
    let m = 59
    let s = 59
    switch (type) {
      case 'month':
        overtime = new Date(new Date().setMonth(new Date().getMonth() - val))
        break
      case 'day':
        overtime = new Date(new Date().setDate(new Date().getDate() - val))
        break
      default:
        overtime = new Date(new Date(year, month, day, h, m, s).getTime())
    }
    return overtime
  },
  // 计算时间
  computedTime (dateType, date, operationType, val, format) {
    let time
    let now = new Date(date)
    let year = now.getFullYear()
    let month = now.getMonth()
    let day = now.getDate()
    let h = date ? now.getHours() : 23
    let m = date ? now.getMinutes() : 59
    let s = date ? now.getSeconds() : 59
    switch (dateType) {
      case 'month':
        if (operationType === '+') {
          time = new Date(now.setMonth(now.getMonth() + val)).format(format ? format : 'yyyy-MM-dd hh:mm:ss')
        } else {
          time = new Date(now.setMonth(now.getMonth() - val)).format(format ? format : 'yyyy-MM-dd hh:mm:ss')
        }
        break
      case 'day':
        if (operationType === '+') {
          time = new Date(now.setDate(now.getDate() + val)).format(format ? format : 'yyyy-MM-dd hh:mm:ss')
        } else {
          time = new Date(now.setDate(now.getDate() - val)).format(format ? format : 'yyyy-MM-dd hh:mm:ss')
        }
        break
      case 'hours':
        if (operationType === '+') {
          time = new Date(now.setHours(now.getHours() + val)).format(format ? format : 'yyyy-MM-dd hh:mm:ss')
        } else {
          time = new Date(now.setHours(now.getHours() - val)).format(format ? format : 'yyyy-MM-dd hh:mm:ss')
        }
        break
      default:
        time = new Date(new Date(year, month, day, h, m, s).getTime()).format(format ? format : 'yyyy-MM-dd hh:mm:ss')
    }
    return time
  },
  deepClone: function deepClone(obj) {
    const rootObj = {} // 记录新的对象
    const cache = [obj] // 引用对象数组
    const cacheNewValues = [rootObj] // 记录对应引用的新值

    const assign = (innerObj) => {
      const newObj = innerObj === obj ? rootObj : {}
      Object.keys(innerObj).forEach(key => {
        const value = innerObj[key]
        const index = cache.indexOf(value)
        // 未缓存
        if (index === -1) {
          const type = Object.prototype.toString.call(value)
          if (typeof type === 'object') {
            newObj[key] = assign(value)
            // 记录引用的对象以及对应引用的新值
            cache.push(value)
            cacheNewValues.push(newObj[key])
          } else {
            newObj[key] = value
          }
        } else {
          // 已缓存，取对应缓存的新值
          newObj[key] = cacheNewValues[index]
        }
      })

      return newObj
    }

    return assign(obj);
  },
  //用于生成uuid
  UUID () {
    function S4() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    function guid() {
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }
    return "cms"+guid();
}
  // arrImages：[{fileUrl:'图片地址',renameFileName:'图片名'}]
}


Vue.prototype.$successToast = function(msg) {
  Vue.showToast({
    icon: "success",
    duration: 1000,
    position: 'top',
    title: msg,
  })
}
Vue.prototype.$errorToast = function(msg) {
  Vue.showToast({
    duration: 1000,
    position: 'top',
    icon: 'none',
    title: msg,
  })
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
