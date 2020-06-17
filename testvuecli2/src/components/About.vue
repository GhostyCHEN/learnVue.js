<template ><!-- vue实例外创建 -->
  <div>
    <h2>我是关于组件</h2>
    <p>这是关于部分内容!!!</p>
  </div>
</template>
<!-- 调用   <mycom></mycom> -->
<script>
  export default {
    name:'About',
    created(){
      document.title = '关于'
      // console.log('created');

    }
  }
</script>
