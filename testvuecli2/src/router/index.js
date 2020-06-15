import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

export default new Router({
  //配置路由和组件之间的映射关系
  routes: [
    {
      path:'/',
      // component:Home,
      // 重定向
      redirect:'/home'
    },
    {
      path: '/home',
      component:Home,
    },
    {
      path: '/about',
      component:About,
    },
    {
      path:'/user',
      component:User
    }
  ],
  mode:'history'
})
