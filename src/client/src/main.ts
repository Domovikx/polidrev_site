/**
 * https://polidrev-site.web.app/
 */

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

// firebase
// https://www.npmjs.com/package/firebase#include-only-the-features-you-need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { firebaseConfig } from './config/firebaseConfig';

Vue.config.productionTip = false;

// firebase
let app: null | Vue = null;

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount('#app');
  }
});

export { app };
