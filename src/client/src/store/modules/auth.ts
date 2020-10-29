/**
 * https://polidrev-site.firebaseio.com/
 */

import firebase, { User } from 'firebase/app';

import { ActionContext } from '../../interfaces/ActionContext.interface';
import { ACTION__SNACKBAR__SHOW } from './snackbar';

export const ACTION__AUTH__REGISTER = 'ACTION__AUTH__REGISTER';
export const ACTION__AUTH__LOGIN = 'ACTION__AUTH__LOGIN';
export const ACTION__AUTH__LOGOUT = 'ACTION__AUTH__LOGOUT';
export const ACTION__AUTH__GET_UID = 'ACTION__AUTH__GET_UID';
export const ACTION__AUTH__IS_ADMIN = 'ACTION__AUTH__IS_ADMIN';
export const MUTATION__AUTH__SET_UID = 'MUTATION__AUTH__SET_UID';
export const GETTER__AUTH__UID = 'GETTER__AUTH__UID';

export const auth = {
  state: {
    uid: null,
  },

  actions: {
    async [ACTION__AUTH__REGISTER](
      { dispatch, getters }: ActionContext,
      { email, password, isAdmin }: RegisterData,
    ) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch(ACTION__AUTH__GET_UID);
        await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .set({ isAdmin });

        await dispatch(ACTION__SNACKBAR__SHOW, {
          isShow: true,
          message: 'Новый пользователь УСПЕШНО зарегистрирован',
        });
      } catch (error) {
        dispatch(ACTION__SNACKBAR__SHOW, {
          isShow: true,
          message: error.message,
        });
        throw error;
      }
    },

    async [ACTION__AUTH__LOGIN](
      { dispatch }: ActionContext,
      { email, password }: RegisterData,
    ) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
        const uid = await dispatch(ACTION__AUTH__GET_UID);
        const isAdmin = await dispatch(ACTION__AUTH__IS_ADMIN, uid);

        if (isAdmin) {
          return true;
        } else {
          await firebase.auth().signOut();
          return false;
        }
      } catch (error) {
        dispatch(ACTION__SNACKBAR__SHOW, {
          isShow: true,
          message: error.message,
        });
        throw error;
      }
    },

    async [ACTION__AUTH__LOGOUT]({ commit }: ActionContext) {
      await firebase.auth().signOut();
      // app.$router.go();
    },

    async [ACTION__AUTH__GET_UID]({ commit }: ActionContext) {
      const user: User | null = firebase.auth().currentUser;
      const uid: string | null = user?.uid || null;
      await commit(MUTATION__AUTH__SET_UID, uid);
      return uid;
    },

    async [ACTION__AUTH__IS_ADMIN]({}: ActionContext, uid: string | null) {
      const isAdmin: boolean = (
        await firebase
          .database()
          .ref(`/users/${uid}/info/isAdmin`)
          .once('value')
      ).val();
      return isAdmin;
    },
  },

  mutations: {
    [MUTATION__AUTH__SET_UID](state: State, uid) {
      state.uid = uid;
    },
  },

  getters: {
    [GETTER__AUTH__UID]: (state: State) => state.uid,
  },
};

interface State {
  uid: string | null;
}
export interface RegisterData {
  email: string;
  password: string;
  isAdmin?: boolean;
}
