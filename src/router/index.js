import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/index/login'
import PageTest from '@/page/index/pageTest'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/page',
      name: 'PageTest',
      component: PageTest
    }
  ]
})
