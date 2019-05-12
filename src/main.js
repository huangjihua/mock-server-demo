// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import vueFundebug from './vue-fundebug'

const http = {
  install() {
    Vue.prototype.axios = axios
  }
}
Vue.config.productionTip = false

// Vue.use(vueFundebug)
Vue.use(http)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
