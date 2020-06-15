import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'
// 一级路由
const Home = () => import('../components/Home')
const About = () => import('../components/About')
const User = () => import('../components/User')
const Profile = () => import('../components/Profile')
// 二级路由
const News = () => import('../components/HomeNews')
const Message = () => import('../components/HomeMessage')

const router = new Router({
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
      meta:{
        title:'首页'
      },
      children:[
        {
          path:'/',
          redirect:'news'
        },
        {
          path:'news',
          component:News
        },
        {
          path:'message',
          component:Message
        }
      ]
    },
    {
      path: '/about',
      component:About,
      meta:{
        title:'关于'
      },
    },
    {
      path:'/user/:userId',
      component:User,
      meta:{
        title:'用户'
      },
    },
    {
      path:'/profile',
      component:Profile,
      meta:{
        title:'档案'
      },
    }
  ],
  mode:'history',

})

//前置守卫(guard)
router.beforeEach((to,from,next) => {
  document.title = to.matched[0].meta.title
  console.log('before')
  next()
})

//后置守卫(guard)
router.afterEach((to,from) =>{
  console.log('after++++');

})


export default router


