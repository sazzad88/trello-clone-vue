import Vue from "vue";
import Vuex from "vuex";
import DefaultBoard from "./base-board";
import { saveStatePlugin } from "./utils";
Vue.use(Vuex);

const board = JSON.parse(localStorage.getItem("board")) || DefaultBoard;

const store = new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board,
  },
  mutations: {},
});

export default store;
