import Vue from "vue";
import Vuex from "vuex";
import home from "./modules/home";
import basicTable from "./modules/basicTable";
import tabOption from "./modules/tabOption";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    home,
    basicTable,
    tabOption
  }
});
