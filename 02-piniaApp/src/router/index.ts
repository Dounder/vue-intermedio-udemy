import { createRouter, createWebHistory } from "vue-router";
import Counter1Page from "@/counter/pages/Counter1Page.vue";
import Counter2Page from "@/counter/pages/CounterSetupPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "counter",
      component: Counter1Page,
    },
    {
      path: "/counter-2",
      name: "counter-2",
      component: Counter2Page,
    },
  ],
});

export default router;
