import Vue from 'vue'
import VueRouter from 'vue-router'

import Classify from '../views/Classify'
import Home from '../views/Home'
import Login from '../views/Login'
import My from '../views/My'
import Other from '../views/Other'
import Favorite from '../views/Other/Favorite'
import History from '../views/Other/History'
import Ranking from '../views/Ranking'
import Register from '../views/Register'
import SearchResult from '../views/SearchResult'
import Vip from '../views/Vip'

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
        { path: '', redirect: '/Other/Favorite' }
      ]
    },
    { path: '/Ranking', component: Ranking },
    { path: '/Register', component: Register },
    { path: '/SearchResult', component: SearchResult },
    { path: '/Vip', component: Vip },
    { path: '/', redirect: '/Home' }
  ]
})
export default router
