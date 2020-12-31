import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$version = '1.0.0'

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
