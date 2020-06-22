<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners='banners'></home-swiper>
  </div>
</template>

<script>
// 组件
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'



// 网络请求
import {getHomeMultidata} from 'network/home'


  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper
    },
    data(){
      return{
        banners:[],
        recommend:[]
      }
    },
    created(){
      // 1.请求多个数据
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
