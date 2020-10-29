export const MUTATION__NAVIGATION_DRIVER = 'MUTATION__NAVIGATION_DRIVER';
export const GETTER__NAVIGATION_DRIVER = 'GETTER__NAVIGATION_DRIVER';

export const navigationDrawer = {
  state: {
    drawer: null,
  } as State,

  actions: {},

  mutations: {
    [MUTATION__NAVIGATION_DRIVER]: (
      state: State,
      drawer: boolean | null,
    ): void => {
      state.drawer = drawer;
    },
  },

  getters: {
    [GETTER__NAVIGATION_DRIVER]: (state: State): boolean | null => {
      return state.drawer;
    },
  },
};

interface State {
  drawer: null | boolean;
}
