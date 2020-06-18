export default {
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
}
