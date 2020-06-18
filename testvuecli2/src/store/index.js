import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)


const moduleA = {
  state:{
    name:'Tom'
  },
  mutations:{
    updateName(state,payload){
      state.name = payload
    }
  },
  getters:{
    fullName(state){
      return state.name + ' one'
    },
    fullNameTwo(state,getters){
      return getters.fullName + ' two'
    },
    fullNameThree(state,getters,rootState){
      return getters.fullNameTwo + 'three' + rootState.counter
    }
  },
  actions:{
    aUpdateName(context){
      setTimeout(() => {
        console.log(context);

        context.commit('updateName','Jack')
      }, 2000);
    }
  },
  modules:{}
}


// 2.创建对象
const store = new Vuex.Store({
  // 单一状态树
  state:{
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
  },
  // 状态跟新 commit  不能写异步操作
  mutations:{
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incrementCount(state,Payload){
      state.counter += Payload.count
    },
    updateInfo(state){
      state.info.name = 'change'
    }
  },
  // 类似mutations 用来记录异步操作
  actions:{
    // context 上下文
    // aUpdateInfo(context,payload){
    //   setTimeout(() =>{
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success();

    //   },2000)
    // }
    aUpdateInfo(context,payload){
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit('updateInfo')
          console.log(payload);
          resolve('111111')
        }, 2000);
      })
    }
  },
  // 类似于计算属性
  getters:{
    powerCounter(state){
      return state.counter * state.counter
    },
    more20stu(state){
      return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state,getters){
      return getters.more20stu.length
    },
    moreAgeStu(state){
      // return function(age){
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  // 模块
  modules:{
    a:moduleA
  }
})

// 3.导出store对象
export default store
