import axios from 'axios'


// 方式1
// export function request(config,success,failure) { //传入success和failure函数参数
//   // 1.创建axios的实例
//   const instance1 = axios.create({
//     baseURL : 'http://152.136.185.210:8000/api/n3',
//     timeout : 5000
//   })

//   // 发送真正的网络请求
//   instance1(config)
//   .then(res =>{
//     // console.log(res);
//     success(res)
//   })
//   .catch(err => {
//     // console.log(err);
//     failure(err)
//   })
// }

// 方式2
// export function request(config,) { //传入success和failure函数参数
//   // 1.创建axios的实例
//   const instance1 = axios.create({
//     baseURL : 'http://152.136.185.210:8000/api/n3',
//     timeout : 5000
//   })

//   // 发送真正的网络请求
//   instance1(config.baseConfig)
//   .then(res =>{
//     // console.log(res);
//     config.success(res)
//   })
//   .catch(err => {
//     // console.log(err);
//     config.failure(err)
//   })
// }

// 方式三
// export function request(config,) { //传入success和failure函数参数
//   // 1.创建axios的实例
//   return new Promise((resolve,reject) => {
//     const instance1 = axios.create({
//       baseURL : 'http://152.136.185.210:8000/api/n3',
//       timeout : 5000
//     })

//     // 发送真正的网络请求
//     instance1(config)
//     .then(res =>{
//       resolve(res)
//     })
//     .catch(err => {
//       reject(err)
//     })
//   })
// }

// 方式四 比三更加简洁
export function request(config,) { //传入success和failure函数参数
  // 1.创建axios的实例
  const instance1 = axios.create({
      baseURL : 'http://152.136.185.210:8000/api/n3',
      timeout : 5000
  })

  // 2.axios的拦截器
  // 2.1请求拦截的作用
  instance1.interceptors.request.use(config =>{
    // console.log(config);
    // 1.config中一些信息不符合服务器的要求
    // 2.每次发送网络请求，希望在页面中显示请求图标
    // 3.某些网络请求(比如登陆token),必须携带一些特殊的信息
    return config
  },err => {
    console.log(err);

  })
  // 2.2响应拦截
  instance1.interceptors.response.use(res => {
    console.log(res);
    return res.data
  },err => {
    console.log(err);

  })
  // 3.发送真正的网络请求
  return instance1(config)

}
