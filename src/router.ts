import Vue from "vue";
import Router from "vue-router";

const loadView = (view: string) => {
  return () => import(`@/views/${view}.vue`);
};

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: loadView("Home")
    }
  ]
});
