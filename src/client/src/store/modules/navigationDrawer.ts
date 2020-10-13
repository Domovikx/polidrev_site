export const MUTATION__NAVIGATION_DRIVER = 'MUTATION__NAVIGATION_DRIVER';
export const GETTER__NAVIGATION_DRIVER = 'GETTER__NAVIGATION_DRIVER';

const navigationDrawer = {
  state: {
    drawer: null,
  },

  actions: {},

  mutations: {
    [MUTATION__NAVIGATION_DRIVER]: (
      state: State,
      drawer: null | boolean,
    ): void => {
      state.drawer = drawer;
    },
  },

  getters: {
    [GETTER__NAVIGATION_DRIVER]: (state: State): null | boolean => {
      return state.drawer;
    },
  },
};

export { navigationDrawer };

// ************* interfaces *************
interface State {
  drawer: null | boolean;
}
