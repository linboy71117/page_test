import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import ReceiverView from "../views/ReceiverView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: ReceiverView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
