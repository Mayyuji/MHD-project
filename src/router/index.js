import Vue from 'vue'
import VueRouter from 'vue-router'
// 进度条
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

// import Classify from '../views/Classify'
// 路由懒加载
const Classify = () => import('../views/Classify')
const Home = () => import('../views/Home')
const Login = () => import('../views/Login')
const My = () => import('../views/My')
const Other = () => import('../views/Other')
const Favorite = () => import('../views/Other/Favorite')
const History = () => import('../views/Other/History')
const Ranking = () => import('../views/Ranking')
const Register = () => import('../views/Register')
const SearchResult = () => import('../views/SearchResult')
const Vip = () => import('../views/Vip')
const Search = () => import('../views/Search')
nprogress.configure({ showSpinner: false })

Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { path: '/Home', component: Home },
    { path: '/Classify', component: Classify },
    { path: '/Login', component: Login },
    { path: '/My', component: My },
    {
      path: '/Other',
      component: Other,
      children: [
        { path: 'Favorite', component: Favorite },
        { path: 'History', component: History },
        { path: '', redirect: '/Other/History' }
      ]
    },
    { path: '/Ranking', component: Ranking },
    { path: '/Register', component: Register },
    { path: '/Search', component: Search },
    { path: '/SearchResult', component: SearchResult },
    { path: '/Vip', component: Vip },
    { path: '/', redirect: '/Home' }
  ]
})
// 添加全局路由守卫  在这里我们去给每个页面 添加加载进图条
router.beforeEach((to, from, next) => {
  nprogress.start()
  next()
})

router.afterEach((to, from) => {
  nprogress.done()
})
export default router
