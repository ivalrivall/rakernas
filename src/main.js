import Vue from "vue";
import "./plugins";
import router from "./router";
import store from "./store";

import App from "./App.vue";

import "./registerServiceWorker";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
