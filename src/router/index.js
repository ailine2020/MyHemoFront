import Vue from "vue";
import VueRouter from "vue-router";
import auth from "@/auth/";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
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
    path: "/card",
    name: "Card",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import("../views/Card.vue")
  },
  {
    path: "/signin",
    name: "Connexion",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion
      if (auth.getLocalAuthToken()) next("users/");
      // un utilisateur déjà connecté sera redirigé vers le dashboard...
      else next();
    },
    component: () =>
      import("../views/Connexion.vue")
  },
  {
    path: "/signup",
    name: "Inscription",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion
      if (auth.getLocalAuthToken()) next("/dashboard");
      // un utilisateur déjà connecté sera redirigé vers le dashboard...
      else next();
    },
    component: () =>
      import("@/views/Inscription.vue")
  },
  {
    path: "/users/:id",
    name: "UserEdit",
    component: () =>
      import( /* webpackChunkName: "about" */ "@/views/UserEdit.vue"),
  },
  {
    path: "/add-rappels",
    name: "AddRappels",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
    component: () =>
      import( /* webpackChunkName: "about" */ "@/views/AddRappels.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    beforeEnter: (to, from, next) => {
      // on vérifie l'état de connexion:
      if (!auth.getLocalAuthToken()) next("/signin");
      // un utilisateur non connecté sera redirigé vers le signin...
      else next();
    },
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
        beforeEnter: (to, from, next) => {
          // on vérifie l'état de connexion:
          if (!auth.getLocalAuthToken()) next("/signin");
          // un utilisateur non connecté sera redirigé vers le signin...
          else next();
        },
        component: () =>
          import( /* webpackChunkName: "about" */ "@/views/DrugsAll.vue"),
      },
      {
        path: "/rappels",
        name: "Rappels",
        beforeEnter: (to, from, next) => {
          // on vérifie l'état de connexion:
          if (!auth.getLocalAuthToken()) next("/signin");
          // un utilisateur non connecté sera redirigé vers le signin...
          else next();
        },
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