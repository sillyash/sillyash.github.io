import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";

const routes = [
  {
    path: "/",     
    name: "Home",     
    component: HomePage,
  },
  {
    path: "/about",     
    name: "About",     
    component: AboutMe,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactMe
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
