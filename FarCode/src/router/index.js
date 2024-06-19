import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/components/pages/HomePage.vue";
import RegisterPage from "@/components/pages/RegisterPage.vue";
// import RegisterForm from "@/components/blocks/RegisterForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/registration/",
    name: "registerToCase",
    component: RegisterPage,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
