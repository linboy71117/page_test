import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import SenderView from "../views/SenderView.vue";
import Settings from "@/components/SettingsDropdown.vue";
import Footer from "@/components/BgFooter.vue";
import RC from "@/views/ReceiverStick.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: SenderView,
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings,
  },
  {
    path: "/footer",
    name: "footer",
    component: Footer,
  },
  {
    path: "/RC",
    name: "rc",
    component: RC,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
