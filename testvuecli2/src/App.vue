<template>
  <div id="app">
    <h2>路由相关知识点</h2>
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    //通过代码的方式修改路由 vue-router
    //push => pushState

    homeClick(){
      this.$router.push('/home')
      // this.$router.replace('/home')
    },
    aboutClick(){
      this.$router.push('/about')
      // this.$router.replace('/about')
    }
  },
}
</script>

<style>
  .router-link-active{
    color: aquamarine;
  }
</style>
