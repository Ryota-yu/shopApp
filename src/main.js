/* 引入babel */
import 'babel-polyfill'

import Vue from 'vue'
import App from './App'
import router from './router'

import fastclick from 'fastclick'

/* 引入样式文件index */
import './assets/scss/index.scss'

/* 将fastclick绑定到body上，在body下的所有点击事件会消除300ms延迟 */
fastclick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
