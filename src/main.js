import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VeeValidate from 'vee-validate';
import Axios from 'axios';
import Toasted from 'vue-toasted'

import router from './router/routes'
import store from './store/store'
import './utils/toasted'
import interceptorsSetup from './helpers/interceptors'

Vue.config.productionTip = false

interceptorsSetup.response()
interceptorsSetup.request()

Axios.defaults.baseURL = "http://localhost:80/api/v1";

Vue.use(BootstrapVue)
Vue.use(VueMaterial)
Vue.use(VeeValidate)
Vue.use(Toasted)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
