import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get'
// }).then(res => {
//   console.log(res);
// })


// 1.axios基本使用
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   // 专门针对get请求的参数拼接
//   params:{
//     type:'pop',
//     type:1
//   }
// })

// axios相关配置信息
// axios.defaults.baseURL = 'http://152.136.185.210:8000/api/n3'
// axios.defaults.timeout = 5000


// 2.axios发送并发请求
// axios.all([axios({
//   url:'/home/multidata'
// }),axios({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// })]).then(results =>{
//   console.log(results);

// })

// 4.创建对于的axios实例
// const instance1 = axios.create({
//   baseURL : 'http://152.136.185.210:8000/api/n3',
//   timeout : 5000
// })

// instance1({
//   url:'/home/multidata'
// }).then(res => {
//   console.log(res);

// })

// instance1({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   console.log(res);

// })



// 5.封装request模块
import {request} from './network/request'

// 方式一
// request({
//   url:'/home/multidata',
// },res => {
//   console.log(res);
// },err => {
//   console.log(err);
// })

// 方式二
// request({
//   baseConfig:{
//     url:'home/multidata'
//   },
//   success(res){
//     console.log(res);
//   },
//   failure(err){
//     console.log(err);
//   }
// })

// 方式三Promise
request({
  url:'home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  // console.log(err);
})
