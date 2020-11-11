import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.scss'

Vue.config.productionTip = false
// 数字 变成带单位的字符串 10元
Vue.filter('formatYi', value => {
  var Yi = Math.pow(10, 8)
  if (value > Yi) {
    return `${(value / Yi).toFixed(2)}亿`
  } else {
    return `${(value / Math.pow(10, 4)).toFixed(2)}万`
  }
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
