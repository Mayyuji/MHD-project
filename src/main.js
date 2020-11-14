import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/reset.scss'
import { Toast } from 'vant'
import VueLazyload from 'vue-lazyload'
// import BetterScroll from 'better-scroll'
// Vue.use(BetterScroll)
Vue.use(VueLazyload, {
  preLoad: 1.3, // 加载高度1.3(当前屏幕高度的1.3倍)
  error: require('./assets/images/error.jpg'), // 当加载图片出错的时候，显示替代的图片
  loading: require('./assets/images/timg.gif'), // 加载图片的过程中显示的图片内容
  attempt: 1 // 如果加载失败，尝试加载真实图片的次数
})
// 将所有 Toast 的展示时长设置为 2000 毫秒
Toast.setDefaultOptions({ duration: 1500 })

// 将所有 loading Toast 设置为背景不可点击
Toast.setDefaultOptions('loading', { forbidClick: true })
// 显示背景
Toast.setDefaultOptions({ overlay: true })
Vue.use(Toast)
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
