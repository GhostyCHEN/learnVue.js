<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFixed"
      ></tab-control>
    <scroll class="content"
    ref="scroll"
    :probe-type="3"
    @scroll="contentScroll"
    :pull-up-load='true'
    @pullingUp='loadMore'>
      <home-swiper :banners='banners' @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends='recommend'></recommend-view>
      <feature-view></feature-view>
      <tab-control
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl2"
      ></tab-control>
      <good-list :goods="showGoods"></good-list>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
// 组件
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

// 网络请求
import {getHomeMultidata, getHomeGoods} from 'network/home'

import {debounce} from "common/utils"
// import BScroll from 'better-scroll' 封装

  export default {
    name: "Home",
    components:{
      HomeSwiper,
      RecommendView,
      FeatureView,

      NavBar,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    data(){
      return{
        banners:[],
        recommend:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:'pop',
        isShowBackTop:false,
        tabOffsetTop:0,
        isTabFixed:false,
        saveY:0,
        ItemImgListener:null
      }
    },
    created(){
      // 1.请求多个数据
      this.getHomeMultidata();

      // 请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')


    },
    mounted(){
      // 3.监听item中图片加载完成
        // 防抖函数
        const refresh =  debounce(this.$refs.scroll.refresh,200)

      this.ItemImgListener = () => {
        // console.log('load');
        // this.$refs.scroll.refresh()
        refresh()
      }
      this.$bus.$on('itemImageLoad',this.ItemImgListener)

      // 获取tabControl的offsetTop
      // 所以组件都有一个属性$el -> 用于获取组件中的元素
      // this.tabOffsetTop = this.$refs.tabControl.offsetTop
      // setTimeout(() => {
      //   console.log(this.$refs.tabControl.$el.offsetTop);
      // },2000)

    },
    activated(){
      this.$refs.scroll.refresh()
      this.$refs.scroll.scrollTo(0,this.saveY,0)

    },
    deactivated() {
      // 1.保存Y值
      this.saveY = this.$refs.scroll.getScrollY()

      // 2.取消全局事件监听
      this.$bus.$off('itemImageLoad',this.ItemImgListener)
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    methods: {
      /**
       * 事件监听相关的方法
      */

      tabClick(index){
        switch(index){
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0)
      },
      contentScroll(position){
        // 1.判断BackTop是否显示
        this.isShowBackTop = (-position.y) > 1000

        // 2.决定tabControl是否吸顶(position:fixed)
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      swiperImageLoad(){
        // console.log(this.$refs.tabControl.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;

      },
      /**
       * 网络请求相关方法
      */
      getHomeMultidata(){
        getHomeMultidata().then(res => {
        // console.log(res);
          this.banners = res.data.banner.list;
          this.recommend = res.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type , page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page += 1

          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style scoped>
  #home{
    /* padding-top: 44px; */
    height: 100vh;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #fff;
    /* 使用浏览器原生滚动使用 */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9; */
  }

  /* 因为Bscroll 导致不起作用 */
  /* .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  } */
  .tab-control{
    position:relative;
    z-index:9;
  }

  .content{
    /* height:300px; */
    overflow:hidden;

    position:absolute;
    top:44px;
    bottom:49px;
    left:0;
    right:0;
  }
  /* .content{
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */
</style>
