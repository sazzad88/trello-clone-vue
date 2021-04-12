import Vue from "vue";
import Vuex from "vuex";
import DefaultDashboard from "./base-board";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    board: DefaultDashboard,
  },
  mutations: {},
});

export default store;
