<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'Tabbar'
}
</script>

<style>
#tab-bar{
    display: flex;
    background-color: #f6f6f6;
    /* 定位到底部 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    /* 设置顶部阴影 */
    box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.2);
  }

</style>
