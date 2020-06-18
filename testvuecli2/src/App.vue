<template>
  <div id="app">
    <h2>-----App:modules中内容-----</h2>
    <h2>{{$store.state.a.name }}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullNameTwo}}</h2>
    <h2>{{$store.getters.fullNameThree}}</h2>
    <button @click="asyncUpdatename">异步修改名字</button>

    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <h2>{{$store.state.info}}</h2>
    <button @click="changeInfo">修改info</button>



    <h2>--App内容：getters相关信息--</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2 v-for="item in $store.getters.more20stu" :key="item.id">{{item.name}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2 v-for="item in $store.getters.moreAgeStu(1)" :key="item.name">{{item.name}}</h2>

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
    },
    addCount(count){
      // Payload : 负载
      // 1.普通的提交风格
      // this.$store.commit('incrementCount',count)

      // 2，特殊的提交风格
      this.$store.commit({
        type:'incrementCount',
        count
      })
    },
    changeInfo(){
      // this.$store.commit('updateInfo')
      // this.$store.dispatch('aUpdateInfo','this is payload')
      // 参数传函数
      // this.$store.dispatch('aUpdateInfo', () => {
      //   console.log('里面成功执行');
      // })
      // this.$store.dispatch('aUpdateInfo',{
      //   message:'我是携带的信息',
      //   success: () => {
      //     console.log('里面执行成功');

      //   }
      // })
      this.$store
      .dispatch('aUpdateInfo','我是携带的信息')
      .then(res => {
        console.log('里面执行成功');

        console.log(res);

      })
    },
    updateName(){
      this.$store.commit('updateName','Lacsa')
    },
    asyncUpdatename(){
      this.$store.dispatch('aUpdateName')
    }
  },
}
</script>

<style>

</style>
