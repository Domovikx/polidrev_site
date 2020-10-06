import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import HomePage from '../views/pages/HomePage.vue';
import CabinetFurniturePage from '../views/pages/CabinetFurniturePage.vue';
import SoftFurniturePage from '../views/pages/SoftFurniturePage.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  // EmptyLayout

  // DefaultLayout
  {
    path: '/CabinetFurniture',
    name: 'CabinetFurniture',
    component: CabinetFurniturePage,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/SoftFurniture',
    name: 'SoftFurniture',
    component: SoftFurniturePage,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: { layout: 'DefaultLayout' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
