<template>
  <div>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
  </div>

</template>

<script>
export default {
  name:'HelloVuex',
  data(){
    return {
      message:'--------HelloVuex内容--------'
    }
  }
}
</script>

<style>

</style>
