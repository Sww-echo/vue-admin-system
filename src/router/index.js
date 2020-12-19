import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import systemHome from "../views/components/systemHome";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "systemHome",
    component: systemHome
  },
  {
    path: "/basicform",
    name: "basicForm ",
    component: () => import("../views/components/basicForm")
  },
  {
    path: "/basictable",
    name: "basicTable ",
    component: () => import("../views/components/basicTable")
  },
  {
    path: "/customicon",
    name: "customIcon ",
    component: () => import("../views/components/customIcon")
  },
  {
    path: "/droplist",
    name: "dropList ",
    component: () => import("../views/components/dropList")
  },
  {
    path: "/fileupload",
    name: "fileUpload ",
    component: () => import("../views/components/fileUpload")
  },
  {
    path: "/internationalization",
    name: "internationalization ",
    component: () => import("../views/components/internationalization")
  },
  {
    path: "/markdown",
    name: "markdown ",
    component: () => import("../views/components/markdown")
  },
  {
    path: "/popup",
    name: "popUp ",
    component: () => import("../views/components/popUp")
  },
  {
    path: "/richtext",
    name: "richText ",
    component: () => import("../views/components/richText")
  },
  {
    path: "/schart",
    name: "schart ",
    component: () => import("../views/components/schart")
  },
  {
    path: "/taboption",
    name: "tabOption ",
    component: () => import("../views/components/tabOption")
  },
  {
    path: "*",
    redirect: systemHome
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // },
  // {
  //   path: "/setting",
  //   name: "setting",
  //   component: () =>
  //     import(/* webpackChunkName: "setting" */ "../views/Setting.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
