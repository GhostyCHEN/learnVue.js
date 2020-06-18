export default {
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
