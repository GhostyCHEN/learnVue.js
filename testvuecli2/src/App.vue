<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <hello-vuex/>
  </div>
</template>

<script>

import HelloVuex from '@/components/HelloVuex'
export default {
  name: 'App',
  data(){
    return{
      message:'-----------App内容----------',
    }
  },
  components:{
    HelloVuex,
  },
  methods: {
    addition(){
      this.$store.commit('increment')
    },
    subtraction(){
      this.$store.commit('decrement')
    }
  },
}
</script>

<style>

</style>
