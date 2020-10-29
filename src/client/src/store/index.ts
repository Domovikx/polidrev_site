import Vue from 'vue';
import Vuex from 'vuex';

import { navigationDrawer } from './modules/navigationDrawer';
import { windowStore } from './modules/windowStore';
import { auth } from './modules/auth';
import { snackbar } from './modules/snackbar';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { navigationDrawer, windowStore, auth, snackbar },
});
