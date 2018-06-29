import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Projet from "./views/Projet.vue";
import Terme from "./views/Terme.vue";
import Competence from "./views/Competence.vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/projet",
      name: "projet",
      component: Projet
    },
    {
      path: "/terme",
      name: "terme",
      component: Terme
    },
    {
      path: "/competence",
      name: "competence",
      component: Competence
    }
  ]
});
