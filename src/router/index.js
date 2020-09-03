import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ "../views/Contact.vue")
  },
  {
    path: "/se-connecter",
    name: "Connexion",
    component: () =>
      import("../views/Connexion.vue")
  },

  {
    path: "/users/:id",
    name: "UserEdit",
    component: () =>
      import( /* webpackChunkName: "about" */ "@/views/UserEdit.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import("../views/Dashboard.vue"),
    children: [{
        path: "/users",
        name: "Users",
        component: () =>
          import( /* webpackChunkName: "about" */ "@/views/UsersAll.vue"),
      },
      {
        path: "/drugs",
        name: "Drugs",
        component: () =>
          import( /* webpackChunkName: "about" */ "@/views/DrugsAll.vue"),
      },
      {
        path: "/rappels",
        name: "Rappels",
        component: () =>
          import( /* webpackChunkName: "about" */ "@/views/RappelsAll.vue"),
      },
    ]
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../views/NotFound.vue")
  }
];

const router = new VueRouter({
  mode: "history", //permet d'enlever le #
  routes
});

export default router;