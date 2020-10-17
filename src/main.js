import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";

Vue.config.productionTip = false;

// initialize netlify identity
netlifyIdentityWidget.init();

// initialize GoTrue for Netlify
export const auth = new GoTrue({
  APIUrl: "https://peaceful-lovelace-4b1023.netlify.app/.netlify/identity",
  setCookie: true
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
