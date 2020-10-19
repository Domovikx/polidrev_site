import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import HomePage from '../views/pages/HomePage.vue';
import CabinetFurniturePage from '../views/pages/CabinetFurniturePage.vue';
import SoftFurniturePage from '../views/pages/SoftFurniturePage.vue';
import PaymentPage from '../views/pages/PaymentPage/PaymentPage.vue';
import WhereToBuyPage from '../views/pages/WhereToBuyPage/WhereToBuyPage.vue';

// api
import AllIconsPage from '../icons/AllIconsPage.vue';
// TODO: temp page
import AdminTempPage from '../views/pages/AdminTempPage.vue';

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
    path: '/AdminTemp',
    name: 'AdminTemp',
    component: AdminTempPage,
    meta: { layout: 'DefaultLayout' },
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
