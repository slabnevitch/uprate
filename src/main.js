import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VModal from 'vue-js-modal'
import VCalendar from 'v-calendar';
import Vue2TouchEvents from 'vue2-touch-events'


Vue.use(VModal)
Vue.use(VCalendar, {
  componentPrefix: 'v'
})
Vue.use(Vue2TouchEvents)

Vue.prototype.$eventBus = new Vue();


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
