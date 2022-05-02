import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import router from './router/MainRouter';
import vuetify from './plugins/vuetify'
import store from "./store";

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App),
}).$mount('#app')
