import 'core-js/stable'
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'

// import {
//   applyPolyfills,
//   defineCustomElements
// } from '@aws-amplify/ui-components/loader';
//
// import Amplify from 'aws-amplify';
// import awsconfig from './views/theme/awsconfig';
// Amplify.configure(awsconfig);
//
// applyPolyfills().then(() => {
//   defineCustomElements(window);
// });

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.use(Vuex)
Vue.prototype.$log = console.log.bind(console)

new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
