import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

//import Index from '@/pages/Index.vue'

const Index = () => import("@/pages/Index.vue");
const Login = () => import("@/pages/Login.vue");
const SimpleCentered = () => import("@/pages/SimpleCentered.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Index,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/centered",
    component: SimpleCentered,
    meta: { title: "centered" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
