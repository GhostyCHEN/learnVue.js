<template>
  <div id="app">
    <h1>路由相关知识点</h1>
    <!-- <router-link to="/home" tag="button" replace>首页</router-link>
    <router-link to="/about" replace>关于</router-link> -->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to='/home'>首页</router-link>
    <router-link to='/about'>关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <!-- <router-link to="/profile">档案</router-link> -->
    <!-- <router-link :to="{path:'/profile',
    query:{
      name:'DGM',
      age:18,
      height:1.88
    }
    }">档案</router-link> -->
    <!-- 用按钮点击传递 -->
    <button @click="profileClick">档案</button>
    <keep-alive exclude="Profile,User ">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:"lisi"
    }
  },
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
    },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'DGM',
          age:20,
          height:1.78
        }
      })
    }
  },
}
</script>

<style>
  .router-link-active{
    color: aquamarine;
  }
</style>
