<template> <!-- vue实例外创建 -->
  <div>
    <h2>这是首页组件</h2>
    <p>首页内容！！！</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>


    <router-view></router-view>


  </div>
</template>
<script>
  export default {
    name:'Home',
    data(){
      return{
        path:'/home/news'
      }
    },
    created(){
      console.log('created');
      document.title = '首页'
    },
    destroyed(){
      console.log('distroyed');

    },
    activated() {
      this.$router.push(this.path)
    },
    beforeRouteLeave (to, from, next) {
      console.log(this.$route.path)
      this.path = this.$route.path
      next()
    }
  }
</script>
