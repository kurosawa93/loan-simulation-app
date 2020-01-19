import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Queue from "../views/Queue.vue";
import Rejected from "../views/Rejected.vue";
import Approved from "../views/Approved.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/queue",
    name: "queue",
    component: Queue
  },
  {
    path: "/rejected",
    name: "rejected",
    component: Rejected
  },
  {
    path: "/approved",
    name: "approved",
    component: Approved
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
