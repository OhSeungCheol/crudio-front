import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// bootstrap vue 설정
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import BootstrapVue from 'bootstrap-vue'
import BootstrapVueIcons from 'bootstrap-vue'
Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue);
// bootstrap vue 설정

import router from './router/MainRouter';

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
