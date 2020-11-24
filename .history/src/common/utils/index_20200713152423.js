import Vue from 'vue'
import dictJosn from './dict.json'
Vue.prototype.duration = function (val, type) {
  if (type) {
    val = parseInt(val)
    if (val >= 60 * 60) {
      let d = parseInt(val / 60 / 60 / 24)
      let h = val % (60 * 60 * 24)
      let m = h % (60 * 60)
      if (d) {
        return '' + d + '天' + parseInt(h / 60 / 60) + '小时' + parseInt(m / 60) + '分'
      } else {
        return '' + parseInt(h / 60 / 60) + '小时' + parseInt(m / 60) + '分' + m % 60 + '秒'
      }
    } else if (val >= 60 * 60) {
      let h = parseInt(val / 60 / 60)
      let m = val % (60 * 60)
      if (h) {
        return '' + h + '小时' + parseInt(m / 60) + '分' + m % 60 + '秒'
      } else {
        return '' + parseInt(m / 60) + '分' + m % 60 + '秒'
      }
    } else if (val >= 60) {
      return '' + parseInt(val / 60) + '分' + val % 60 + '秒'
    } else {
      return '' + val + '秒'
    }
  } else {
    if(val===undefined)return '--'
    val = parseInt(val)
    if (val >= 60) {
      return '' + parseInt(val / 60) + '时' + val % 60 + '分'
    } else {
      return '' + val + '分'
    }
  }
}
Vue.prototype.money = function (cent) {
  cent = parseInt(cent)
  return (cent||cent===0)?(cent/100).toFixed(2):'--'
}

window.utils = {
  keepAliveStorage (key, value) {
    let keepAlive = localStorage.keepAlive ? JSON.parse(localStorage.keepAlive) : {}
    keepAlive[key] = value
    localStorage.keepAlive = JSON.stringify(keepAlive)
  },
  sameObj: function sameObj (o1, o2) {
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
  domInnerHeight (dom) {
    let style = window.getComputedStyle(dom, null)
    let boxSizing = window.utils.domBoxSizing(dom)
    let height = parseInt(style.getPropertyValue('height'))
    if (boxSizing === 'border-box') {
      height -= parseInt(style.getPropertyValue('padding-top')) + parseInt(style.getPropertyValue('padding-bottom'))
      height -= parseInt(style.getPropertyValue('border-top-width')) + parseInt(style.getPropertyValue('border-bottom-width'))
    }
    return height
  },
  domHeight(dom) {
    let style = window.getComputedStyle(dom, null)
    let boxSizing = window.utils.domBoxSizing(dom)
    let height = parseInt(style.getPropertyValue('height'))
    if (boxSizing === 'content-box') {
      height += parseInt(style.getPropertyValue('padding-top')) + parseInt(style.getPropertyValue('padding-bottom'))
      height += parseInt(style.getPropertyValue('border-top-width')) + parseInt(style.getPropertyValue('border-bottom-width'))
    }
    return height
  },
  domWidth (dom) {
    let style = window.getComputedStyle(dom, null)
    let boxSizing = window.utils.domBoxSizing(dom)
    let width = parseInt(style.getPropertyValue('width'))
    if (boxSizing === 'content-box') {
      width += parseInt(style.getPropertyValue('padding-left')) + parseInt(style.getPropertyValue('padding-right'))
      width += parseInt(style.getPropertyValue('border-left-width')) + parseInt(style.getPropertyValue('border-right-width'))
    }
    return width
  },
  domBoxSizing (dom) {
    let target = dom
    let style = window.getComputedStyle(dom, null)
    let boxSizing = style.getPropertyValue('box-sizing') || 'content-box'
    while (boxSizing === 'inherit') {
      target = target.parentNode
      let style = window.getComputedStyle(target, null)
      boxSizing = style.getPropertyValue('box-sizing') || 'content-box'
    }
    return boxSizing
  },
  domStyle (dom, styleName) {
    switch (styleName) {
      case 'width':
        return window.utils.domWidth(dom)
      case 'height':
        return window.utils.domHeight(dom)
      case 'innerHeight':
        return window.utils.domInnerHeight(dom)
      default:
        let style = window.getComputedStyle(dom, null)
        return style.getPropertyValue(styleName)
    }
  },
  /**
   * 
   * @param {*} data areaIdList 
   * @param {*} value 车组绑定的areaId
   * @param {*} type areaId
   * @param {*} target areaName
   */
  getSelectNames(data,value,type,target){
    let name = []
    if (data && data.length > 0 && value && value.length) {
      data.forEach(item=>{
        value.forEach(i=>{
          if(i[type] === item[type]){
            name.push(item[target])
          }
        })
      })
    }
    if(name.length){
      // console.log(name.join('、'))
      let names = name.join('、')
      return names
    }else{
      return '未绑定区域'
    }
  },
  dict: {
    /**
     * 根据(字典类型)、(字典值或字典名)获取(字典名或字典值)
     *
     * @param type {string} 字典类型
     * @param obj {object}  字典名的对象{dictionaries_name:<想搜索的字典名>}，或字典值的对象{dictionaries_value:<想搜索的字典值>}，或者回调函数
     * @param callback {function}  回调函数
     * @returns
     */
    // window.utils.dict.get('TradeType', {dictValue: 'NATIVE'}).dictName  获取TradeType类型NATIVE对应的名称
    // window.utils.dict.get('TradeType') 获取TradeType类型下的所有值 数组形式
    get (type, obj, callback) {
      let data = window.utils.dict.data
      if (!obj) return data[type] || []
      if (!data[type]) return []
      if (obj.dictName !== undefined) {
        return data[type].find(o => o.dictName === obj.dictName) || []
      }
      if (obj.dictValue !== undefined) {
        return data[type].find(o => o.dictValue === obj.dictValue) || []
      }
      return []
    },
    init () {
      // 初始化字典
      let result = {}
      Object.keys(dictJosn).forEach((i) => {
        let arr = []
        for (let key in dictJosn[i]) {
          arr.push({
            dictValue: key,
            dictName: dictJosn[i][key]
          })
        }
        result[i] = arr
      })
      window.utils.dict.data = result
      return result
    },

    data: null
  },
  // 深度拷贝
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
  }
}
window.Date.prototype.format = function (fmt) {
  let o = {
    'M+': this.getMonth() + 1,                 // 月份
    'd+': this.getDate(),                    // 日
    'h+': this.getHours(),                   // 小时
    'm+': this.getMinutes(),                 // 分
    's+': this.getSeconds(),                 // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds()             // 毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (let k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}


