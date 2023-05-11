import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import SenderView from "../views/SenderView.vue";
import Settings from "@/components/SettingsDropdown.vue";
import Footer from "@/components/BgFooter.vue";
import RC from "@/views/ReceiverView.vue";
import gm from "@/views/testGM.vue";
import users from "@/components/ReceiverUsers.vue";

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
  {
    path: "/gm",
    name: "gm",
    component: gm,
  },
  {
    path: "/users",
    name: "users",
    component: users,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
