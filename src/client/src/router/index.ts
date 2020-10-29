import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import HomePage from '../views/pages/HomePage.vue';
import CabinetFurniturePage from '../views/pages/CabinetFurniturePage.vue';
import SoftFurniturePage from '../views/pages/SoftFurniturePage/SoftFurniturePage.vue';
import PaymentPage from '../views/pages/PaymentPage/PaymentPage.vue';
import WhereToBuyPage from '../views/pages/WhereToBuyPage/WhereToBuyPage.vue';

import AdminPage from '../views/pages/AdminPage/AdminPage.vue';
import LoginPage from '../views/pages/AuthPages/LoginPage.vue';
import RegisterPage from '../views/pages/AuthPages/RegisterPage.vue';

// api for developing
import AllIconsPage from '../icons/AllIconsPage.vue';

Vue.use(VueRouter);

const DEFAULT_TITLE =
  'Polidrev - мебельная фабрика. Мягкая и корпусная мебель.';

const routes: RouteConfig[] = [
  // EmptyLayout
  {
    path: '/api/AllIconsPage',
    name: 'AllIconsPage',
    component: AllIconsPage,
    meta: {
      layout: 'EmptyLayout',
      title: 'api-AllIconsPage',
    },
  },

  {
    path: '/auth/register',
    name: 'RegisterPage',
    component: RegisterPage,
    meta: {
      layout: 'EmptyLayout',
      title: 'Admin',
    },
  },
  {
    path: '/auth/login',
    name: 'LoginPage',
    component: LoginPage,
    meta: {
      layout: 'EmptyLayout',
      title: 'Admin',
    },
  },
  {
    path: '/Admin',
    name: 'AdminPage',
    component: AdminPage,
    meta: {
      layout: 'EmptyLayout',
      title: 'Admin',
    },
  },

  // DefaultLayout
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      layout: 'DefaultLayout',
      title: DEFAULT_TITLE,
    },
  },
  {
    path: '/SoftFurniture',
    name: 'SoftFurniture',
    component: SoftFurniturePage,
    meta: { layout: 'DefaultLayout', title: 'Polidrev - мягкая мебель' },
  },
  {
    path: '/CabinetFurniture',
    name: 'CabinetFurniture',
    component: CabinetFurniturePage,
    meta: { layout: 'DefaultLayout', title: 'Polidrev - корпусная мебель' },
  },
  {
    path: '/Payment',
    name: 'Payment',
    component: PaymentPage,
    meta: { layout: 'DefaultLayout', title: 'Polidrev - оплата' },
  },
  {
    path: '/WhereToBuy',
    name: 'WhereToBuy',
    component: WhereToBuyPage,
    meta: { layout: 'DefaultLayout', title: 'Polidrev - где купить' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE;
  next();
});

export default router;
