import { ActionContext } from '../../interfaces/ActionContext.interface';

export const ACTION__SNACKBAR__SHOW = 'ACTION__SNACKBAR__SHOW';
export const MUTATION__SNACKBAR__SHOW = 'MUTATION__SNACKBAR__SHOW';
export const GETTER__SNACKBAR__SHOW = 'GETTER__SNACKBAR__SHOW';

export const snackbar = {
  state: {
    isShow: false,
    message: '',
  },

  actions: {
    [ACTION__SNACKBAR__SHOW]: (
      { commit }: ActionContext,
      { isShow, message }: ActionShowObject,
    ) => {
      commit(MUTATION__SNACKBAR__SHOW, { isShow, message });
    },
  },

  mutations: {
    [MUTATION__SNACKBAR__SHOW]: (
      state: State,
      { isShow, message }: ActionShowObject,
    ) => {
      state.isShow = isShow;
      state.message = message;
    },
  },

  getters: {
    [GETTER__SNACKBAR__SHOW]: (state: State) => {
      return { isShow: state.isShow, message: state.message };
    },
  },
};

interface State {
  isShow: boolean;
  message: string;
}
interface ActionShowObject {
  isShow: boolean;
  message: string;
}
