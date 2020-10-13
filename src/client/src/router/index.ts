import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import HomePage from '../views/pages/HomePage.vue';
import CabinetFurniturePage from '../views/pages/CabinetFurniturePage.vue';
import SoftFurniturePage from '../views/pages/SoftFurniturePage.vue';
import PaymentPage from '../views/pages/PaymentPage.vue';
import WhereToBuyPage from '../views/pages/WhereToBuyPage.vue';

// TODO: temp page
import AdminTempPage from '../views/pages/AdminTempPage.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  // EmptyLayout

  // DefaultLayout
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/SoftFurniture',
    name: 'SoftFurniture',
    component: SoftFurniturePage,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/CabinetFurniture',
    name: 'CabinetFurniture',
    component: CabinetFurniturePage,
    meta: { layout: 'DefaultLayout' },
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
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/WhereToBuy',
    name: 'WhereToBuy',
    component: WhereToBuyPage,
    meta: { layout: 'DefaultLayout' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
