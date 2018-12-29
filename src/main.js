import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Navbar from './components/Navbar';
import Login from './components/Login';

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false;
Vue.component('Navbar',Navbar);
Vue.component('Login',Login);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
