import Vue from "vue";
import Router from "vue-router";
import Red from "./components/colors/Red";
import Green from "./components/colors/Green";
import Yellow from "./components/colors/Yellow";
import Home from "./components/Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/red",
      component: Red
    },
    {
      path: "/yellow",
      component: Yellow
    },
    {
      path: "/green",
      component: Green
    }
  ]
});
