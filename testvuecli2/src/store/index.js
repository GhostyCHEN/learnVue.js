import Vue from 'vue'
import Vuex from 'vuex'

// 导入mutations
import mutations from './mutations'
// 导入actions
import actions from './actions'
// 导入 getters
import getters from './getters'

// 导入moduleA
import moduleA from './modules/moduleA'

// 1.安装插件
Vue.use(Vuex)


const state = {
  counter:1000,
  students:[
    {id:110,name:'Chen',age:18},
    {id:111,name:'Dong',age:24},
    {id:112,name:'Wang',age:40},
    {id:113,name:'Lin',age:10}
  ],
  info:{
    name:'kobe',
    age:40,
    height:1.98
  }
}
// 2.创建对象
const store = new Vuex.Store({
  // 单一状态树
  state,

  // 状态跟新 commit  不能写异步操作
  mutations,
  // 类似mutations 用来记录异步操作
  actions,
  // 类似于计算属性
  getters,
  // 模块
  modules:{
    a:moduleA
  }
})

// 3.导出store对象
export default store

// ES6 对象的解构
const obj = {
  name:'Mark',
  age:18,
  height:1.88
}

const {name,age,height} = obj;
console.log(name);
