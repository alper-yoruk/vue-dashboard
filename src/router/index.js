import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Team from "../views/Team.vue";
import SignIn from "../views/SignInFlow/SignIn.vue";
import Recover from "../views/SignInFlow/Recover.vue";
import Request from "../views/SignInFlow/Request.vue";
import * as netlifyIdentityWidget from "netlify-identity-widget";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/team",
    name: "team ",
    component: Team,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/signin",
    name: "signin",
    component: SignIn
  },
  {
    path: "/recover",
    name: "recover",
    component: Recover
  },
  {
    path: "/request",
    name: "request",
    component: Request
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = netlifyIdentityWidget.currentUser();
  const requiresAuth = to.matched.some(record => {
    return record.meta.requiresAuth;
  });

  if (requiresAuth && !currentUser) {
    next("signin");
  } else {
    next();
  }
});

export default router;
