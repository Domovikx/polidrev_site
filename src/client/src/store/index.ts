import Vue from 'vue';
import Vuex from 'vuex';

import { navigationDrawer } from './modules/navigationDrawer';
import { windowStore } from './modules/windowStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { navigationDrawer, windowStore } as any,
});
