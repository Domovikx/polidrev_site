import Vue from 'vue';
import Vuex from 'vuex';

import { navigationDrawer } from './modules/navigationDrawer';
import { windowStore } from './modules/windowStore';
import { auth } from './modules/auth';
import { snackbar } from './modules/snackbar';
import { furnitureStore } from './modules/furnitureStore';
import { furnitureCategory } from './modules/optionsFeatures/furnitureCategory';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    navigationDrawer,
    windowStore,
    auth,
    snackbar,
    furnitureStore,
    furnitureCategory,
  },
});
