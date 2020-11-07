import { ActionContext } from '@/interfaces/ActionContext.interface';

import firebase from 'firebase/app';
import { ACTION__SNACKBAR__SHOW } from '../snackbar';

export const ACTION__FURNITURE_CATEGORY__FETCH_CATEGORIES =
  'ACTION__FURNITURE_CATEGORY__FETCH_CATEGORIES';
export const ACTION__FURNITURE_CATEGORY__CREATE_CATEGORY =
  'ACTION__FURNITURE_CATEGORY__CREATE_CATEGORY';
export const ACTION__FURNITURE_CATEGORY__UPDATE_CATEGORIES =
  'ACTION__FURNITURE_CATEGORY__UPDATE_CATEGORIES';
export const MUTATION__FURNITURE_CATEGORY__SET_CATEGORIES =
  'MUTATION__FURNITURE_CATEGORY__SET_CATEGORIES';
export const GETTER__FURNITURE_CATEGORY__GET_CATEGORIES =
  'GETTER__FURNITURE_CATEGORY__GET_CATEGORIES';

export const furnitureCategory = {
  state: {
    categories: null,
  } as State,

  actions: {
    async [ACTION__FURNITURE_CATEGORY__CREATE_CATEGORY](
      { getters, dispatch }: ActionContext,
      { categoryTitle }: CreateCategory,
    ) {
      try {
        const categories = await dispatch(
          ACTION__FURNITURE_CATEGORY__FETCH_CATEGORIES,
        );

        const isCategoryExist = Object.keys(categories).includes(categoryTitle);

        if (isCategoryExist) {
          await dispatch(ACTION__SNACKBAR__SHOW, {
            isShow: true,
            message: `Ошибка. Категория "${categoryTitle}" уже существует.`,
          });
          return;
        }

        await firebase
          .database()
          .ref(`/optionsFeatures/categories`)
          .push({ categoryTitle });

        await dispatch(ACTION__FURNITURE_CATEGORY__FETCH_CATEGORIES);

        await dispatch(ACTION__SNACKBAR__SHOW, {
          isShow: true,
          message: `Категория "${categoryTitle}" УСПЕШНО создана.`,
        });
      } catch (error) {
        throw error;
      }
    },

    async [ACTION__FURNITURE_CATEGORY__FETCH_CATEGORIES]({
      commit,
    }: ActionContext) {
      try {
        const categories =
          (
            await firebase
              .database()
              .ref(`/optionsFeatures/categories`)
              .once('value')
          ).val() || {};

        const categoriesFormatted = Object.entries(categories).reduce(
          (acc, item) => {
            const [id, { categoryTitle }]: any = item;

            acc[categoryTitle] = {
              id,
              categoryTitle,
            };

            return acc;
          },
          {},
        );

        commit(
          MUTATION__FURNITURE_CATEGORY__SET_CATEGORIES,
          categoriesFormatted,
        );

        return categoriesFormatted;
      } catch (error) {
        throw error;
      }
    },

    async [ACTION__FURNITURE_CATEGORY__UPDATE_CATEGORIES](
      { dispatch }: ActionContext,
      categories,
    ) {
      try {
        const formatted = Object.entries(categories).map(([key, val]: any) => [
          val.id,
          { categoryTitle: val.categoryTitle },
        ]);

        const categoriesFormatted = Object.fromEntries(formatted);

        await firebase
          .database()
          .ref(`/optionsFeatures/categories`)
          .set(categoriesFormatted);

        await dispatch(ACTION__FURNITURE_CATEGORY__FETCH_CATEGORIES);
      } catch (error) {
        throw error;
      }
    },
  },

  mutations: {
    [MUTATION__FURNITURE_CATEGORY__SET_CATEGORIES]: (
      state: State,
      categories: {},
    ): void => {
      state.categories = categories;
    },
  },

  getters: {
    [GETTER__FURNITURE_CATEGORY__GET_CATEGORIES]: (state: State) =>
      state.categories,
  },
};

interface State {
  categories: {} | null;
}

export interface CreateCategory {
  categoryTitle: '';
}
