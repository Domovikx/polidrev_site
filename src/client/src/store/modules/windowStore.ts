import { ActionContext } from '@/interfaces/ActionContext.interface';

import { isMobileChecker } from '../../utils/isMobileChecker';
import { viewportBreakpoints } from '../../utils/viewportBreakpoints';

export const ACTION__WINDOW_STORE__CHECK_IS_MOBILE =
  'ACTION__WINDOW_STORE__CHECK_IS_MOBILE';
export const ACTION__WINDOW_STORE__CHECK_BREAKPOINT =
  'ACTION__WINDOW_STORE__CHECK_BREAKPOINT';
export const MUTATION__WINDOW_STORE__SET_IS_MOBILE =
  'MUTATION__WINDOW_STORE__SET_IS_MOBILE';
export const MUTATION__WINDOW_STORE__SET_BREAKPOINT =
  'MUTATION__WINDOW_STORE__SET_BREAKPOINT';
export const GETTER__WINDOW_STORE__GET_IS_MOBILE =
  'GETTER__WINDOW_STORE__GET_IS_MOBILE';
export const GETTER__WINDOW_STORE__GET_BREAKPOINT =
  'GETTER__WINDOW_STORE__GET_BREAKPOINT';

export const windowStore = {
  state: {
    isMobile: false,
    breakpoint: '',
  } as State,

  actions: {
    [ACTION__WINDOW_STORE__CHECK_IS_MOBILE]: (
      { commit }: ActionContext,
      userAgent: string,
    ) => {
      const isMobile = isMobileChecker(userAgent);
      commit(MUTATION__WINDOW_STORE__SET_IS_MOBILE, isMobile);
    },

    [ACTION__WINDOW_STORE__CHECK_BREAKPOINT]: (
      { commit }: ActionContext,
      clientWidth: number,
    ) => {
      const breakpoint = viewportBreakpoints(clientWidth);
      commit(MUTATION__WINDOW_STORE__SET_BREAKPOINT, breakpoint);
    },
  },

  mutations: {
    [MUTATION__WINDOW_STORE__SET_IS_MOBILE]: (
      state: State,
      isMobile: boolean,
    ): void => {
      state.isMobile = isMobile;
    },

    [MUTATION__WINDOW_STORE__SET_BREAKPOINT]: (
      state: State,
      breakpoint: string,
    ): void => {
      state.breakpoint = breakpoint;
    },
  },

  getters: {
    [GETTER__WINDOW_STORE__GET_IS_MOBILE]: (state: State): boolean =>
      state.isMobile,
    [GETTER__WINDOW_STORE__GET_BREAKPOINT]: (state: State): string =>
      state.breakpoint,
  },
};

interface State {
  isMobile: boolean;
  breakpoint: string;
}
