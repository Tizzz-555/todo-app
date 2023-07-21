import Vue from "vue";
import VueRouter from "vue-router";
import TodoView from "../views/TodoView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todo",
    component: TodoView,
  },
  {
    path: "/completati",
    name: "Completati",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CompletatiView.vue"),
  },
  {
    path: "/albo",
    name: "Albo",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AlboView.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
