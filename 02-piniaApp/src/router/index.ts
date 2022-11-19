import { createRouter, createWebHistory } from 'vue-router';
import Counter1Page from '@/counter/pages/Counter1Page.vue';
import Counter2Page from '@/counter/pages/CounterSetupPage.vue';
import ClientsLayout from '@/clients/layout/ClientsLayout.vue';
import ListPage from '@/clients/pages/ListPage.vue';
import ClientPage from '@/clients/pages/ClientPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'counter',
      component: Counter1Page,
    },
    {
      path: '/counter-2',
      name: 'counter-2',
      component: Counter2Page,
    },

    {
      path: '/clients',
      name: 'clients',
      component: ClientsLayout,
      redirect: { name: 'client-list' },
      children: [
        {
          path: 'list',
          name: 'client-list',
          component: ListPage,
        },
        {
          path: ':id',
          name: 'client-id',
          component: ClientPage,
        },
      ],
    },
  ],
});

export default router;
