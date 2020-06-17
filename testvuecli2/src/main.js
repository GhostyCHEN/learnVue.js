import Vue from 'vue'
import App from './App'
import router from './router'
// 挂载store
import store from './store'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // 👆 Vue.prototype.$store = store
  render: h => h(App)
})
