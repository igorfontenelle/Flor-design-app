import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsRoot from './views/Tabs/TabsRoot.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: TabsRoot,
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        component: () => import('./views/Tabs/HomePage.vue'),
      },
      {
        path: 'list',
        component: () => import('./views/Tabs/ListPage.vue'),
      },
      {
        path: 'list/:id',
        component: () => import('./views/order-details/OrderDetails.vue')
      },
      {
        path: 'settings',
        component: () => import('./views/Tabs/SettingsPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  // Use: createWebHistory(process.env.BASE_URL) in your app
  history: createWebHistory(),
  routes,
});

export default router;