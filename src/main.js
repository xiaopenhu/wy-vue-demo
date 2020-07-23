import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 自定义指令全局注册
import Directives from './directive/directives'
Vue.use(Directives)
// 自定义指令全局注册

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
