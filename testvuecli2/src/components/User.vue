<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户界面的相关信息</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.userId}}</h2>
  </div>
</template>

<script>
export default {
  name:'User',
  computed: {
    userId(){
      return this.$route.params.userId;
    }
  },
  created(){
    console.log('created');
    document.title = '用户'
  }
}
</script>

<style>

</style>
