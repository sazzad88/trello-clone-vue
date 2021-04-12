import Vue from "vue";
import Vuex from "vuex";
import DefaultBoard from "./base-board";
import { saveStatePlugin } from "./utils";
Vue.use(Vuex);

console.log(JSON.parse(localStorage.getItem("board")));

let board = {};
if (JSON.parse(localStorage.getItem("board"))) {
  board = JSON.parse(localStorage.getItem("board"));
} else {
  board = DefaultBoard;
  localStorage.setItem("board", JSON.stringify(DefaultBoard));
}

const store = new Vuex.Store({
  plugins: [saveStatePlugin],
  state: {
    board,
  },
  mutations: {},
  getters: {
    getTask(state) {
      return (id) => {
        for (const column of state.board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) return task;
          }
        }
      };
    },
  },
});

export default store;
