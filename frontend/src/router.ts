import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

//import Index from '@/pages/Index.vue'

const Index = () => import("@/pages/Index.vue");
const Login = () => import("@/pages/Login.vue");
const SimpleCentered = () => import("@/pages/SimpleCentered.vue");
const FunctionalProgramming = () => import("@/pages/FunctionalProgramming.vue");
const Design = () => import("@/pages/Design.vue");
const Animations = () => import("@/pages/Animations.vue");
const BackgroundColors = () => import("@/pages/BackgroundColors.vue");
const ScrollEffects = () => import("@/pages/ScrollEffects.vue");

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
    name: "Design",
    meta: { title: "Design" },
  },
  {
    path: "/animations",
    component: Animations,
    name: "Animations",
    meta: { title: "Animations" },
  },
  {
    path: "/background-colors",
    component: BackgroundColors,
    name: "Background Colors",
    meta: { title: "Background Colors" },
  },
  {
    path: "/scroll-effects",
    component: ScrollEffects,
    name: "Scroll Effects",
    meta: { title: "Scroll Effects" },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
