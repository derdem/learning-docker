import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

//import Index from '@/pages/Index.vue'

const Index = () => import("@/pages/Index.vue");
const Login = () => import("@/pages/Login.vue");
const SimpleCentered = () => import("@/pages/SimpleCentered.vue");
const FunctionalProgramming = () => import("@/pages/FunctionalProgramming.vue");
const Design = () => import("@/pages/Design.vue");

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Index,
    name: "Home",
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
  {
    path: "/functional-programming",
    component: FunctionalProgramming,
    meta: { title: "Functional Programming" },
  },
  {
    path: "/design",
    component: Design,
    meta: { title: "Design" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
