// 混入
import {debounce} from "common/utils"


export const itemListenerMixin = {
  // home和detail中mounted的重复代码
  // data也可以混入
  data() {
    return {
      ItemImgListener:null
    }
  },
  mounted(){

        const refresh =  debounce(this.$refs.scroll.refresh,200)

      this.ItemImgListener = () => {
        refresh()
      }
      this.$bus.$on('itemImageLoad',this.ItemImgListener)
      console.log("我是混入中的内容");

  }
}
