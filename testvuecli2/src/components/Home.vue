<template> <!-- vue实例外创建 -->
  <div>
    <h2>这是首页组件</h2>
    <p>首页内容！！！</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
  export default {
    name:'Home',
    created(){
      console.log('created');
      document.title = '首页'
    }
  }
</script>
