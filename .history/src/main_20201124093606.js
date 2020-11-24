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

require('./static/config.js')
require('./common/index.js')
require('./interceptor/index.js')


// 全局注册
Vue.use(Dialog);

Vue.use(Vant);

Vue.config.productionTip = false

import VueAMap from 'vue-amap';
Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  // 高德key
  key: '6b8d48ae9efa92ebd3f52c1a34eb659b', // 官网申请
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.MarkerClusterer','AMap.AMapUI','AMapUI.loadUI'],
  v: '1.4.15', // 我也不知道为什么要写这个，不写项目会报错，而且我随便写的，跟我下载的版本对应不了
  uiVersion: '1.0.11' // ui版本号，也是需要写
})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
