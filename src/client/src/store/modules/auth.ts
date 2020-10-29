/**
 * https://polidrev-site.firebaseio.com/
 */

// TODO: the file will be completely modified

import firebase from 'firebase/app';
import { app } from '../../main';

import { ActionContext } from '../../interfaces/ActionContext.interface';
import { RegistrationData } from '../../interfaces/RegistrationData.interface';
import { ACTION__SNACKBAR__SHOW } from './snackbar';

export const ACTION__AUTH__GET_UID = 'ACTION__AUTH__GET_UID';
export const ACTION__AUTH__LOGIN = 'ACTION__AUTH__LOGIN';
export const ACTION__AUTH__LOGOUT = 'ACTION__AUTH__LOGOUT';
export const ACTION__AUTH__REGISTER = 'ACTION__AUTH__REGISTER';
export const MUTATION__AUTH__SET_UID = 'MUTATION__AUTH__SET_UID';
export const GETTER__AUTH__UID = 'GETTER__AUTH__UID';

export const auth = {
  state: {
    uid: null,
  },

  actions: {
    async [ACTION__AUTH__REGISTER](
      { dispatch, commit, getters }: ActionContext,
      { email, password, userRole }: RegistrationData,
    ) {
      try {
        console.log('ACTION__AUTH__REGISTER :>> ');
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        await dispatch(GETTER__AUTH__UID);
        const uid = getters[GETTER__AUTH__UID];

        await firebase
          .database()
          .ref(`/users/${uid}/info`)
          .set({ userRole });
      } catch (error) {
        dispatch(ACTION__SNACKBAR__SHOW, {
          isShow: true,
          message: error.message,
        });
        throw error;
      }
    },

    async [GETTER__AUTH__UID]({ commit }: any) {
      const user: any = firebase.auth().currentUser || null;
      const userUid: any = user.uid || null;
      await commit(MUTATION__AUTH__SET_UID, userUid);
      return userUid;
    },
  },

  mutations: {
    [MUTATION__AUTH__SET_UID](state: any, uid: any) {
      state.uid = uid;
    },
  },

  getters: {
    [GETTER__AUTH__UID]: (state: any) => state.uid,
  },
};
