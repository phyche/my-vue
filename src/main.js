// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui' //新添加
import 'element-ui/lib/theme-chalk/index.css' //新添加，避免后期打包样式不同，要放在import App from './App';之前
import Vue from 'vue'
import VueRouter from 'vue-router'
import routers from './router/routes'
import App from './App'

Vue.use(ElementUI)   //新添加
Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable no-new */
const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  el: '#app',
  //template: '<App/>',
  router,
  //components: { App }
  render: h => h(App)
}).$mount('#app')


