/**
 * https://polidrev-site.firebaseio.com/
 */

import firebase from 'firebase/app';

import { ActionContext } from '../../interfaces/ActionContext.interface';

export const ACTION__FURNITURE__INIT = 'ACTION__FURNITURE__INIT';
export const ACTION__FURNITURE__FETCH_FURNITURE =
  'ACTION__FURNITURE__FETCH_FURNITURE';
export const ACTION__FURNITURE__CREATE_FURNITURE =
  'ACTION__FURNITURE__CREATE_FURNITURE';

export const furnitureStore = {
  state: {
    softFurniture: {},
    cabinetFurniture: {},
  } as State,

  actions: {
    async [ACTION__FURNITURE__INIT]({ dispatch }: ActionContext) {
      try {
        const furniture = await dispatch(
          ACTION__FURNITURE__FETCH_FURNITURE,
          {},
        );

        const furnitureKeys = Object.keys(furniture);
        const stateKeys = Object.keys(furnitureStore.state);

        stateKeys.forEach(async (stateKey) => {
          if (!furnitureKeys.includes(stateKey)) {
            await dispatch(ACTION__FURNITURE__CREATE_FURNITURE, {
              categoryName: stateKey,
              categoryTitle: stateKey,
            });
          }
        });
      } catch (error) {
        throw error;
      }
    },

    async [ACTION__FURNITURE__FETCH_FURNITURE]() {
      try {
        const categories =
          (
            await firebase
              .database()
              .ref(`/furniture`)
              .once('value')
          ).val() || {};

        const categoriesFormatted = Object.entries(categories).reduce(
          (acc, item) => {
            const [id, { categoryName, categoryTitle }]: any = item;

            acc[categoryName] = {
              id,
              categoryName,
              categoryTitle,
            };

            return acc;
          },
          {},
        );

        return categoriesFormatted;
      } catch (error) {
        throw error;
      }
    },

    async [ACTION__FURNITURE__CREATE_FURNITURE](
      {}: ActionContext,
      { categoryName, categoryTitle }: FurnitureCategory,
    ) {
      try {
        await firebase
          .database()
          .ref(`/furniture/`)
          .push({ categoryName, categoryTitle });
      } catch (error) {
        throw error;
      }
    },
  },

  mutations: {},

  getters: {},
};

interface State {
  softFurniture: {};
  cabinetFurniture: {};
}

export interface FurnitureCategory {
  categoryName?: string;
  categoryTitle?: string;
}
