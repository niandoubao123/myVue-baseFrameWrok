// import Vue from 'vue'
if (process.env.NODE_ENV === 'development') {
  // 调试环境拦截器
} else {
  // 生产环境拦截器
}
console.log(window.config)
if (window.config.host) {
  require('./http/index.js')
} else {
  require('./mockApi/index.js')
}