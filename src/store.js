import Vue from "vue";
import Vuex from "vuex";
import DefaultBoard from "./base-board";
import { saveStatePlugin, uuid } from "./utils";
Vue.use(Vuex);

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
  mutations: {
    CREATE_TASK(state, { tasks, name }) {
      tasks.push({
        id: uuid(),
        name,
        descriptin: "",
      });
    },
    UPDATE_TASK(state, { task, key, value }) {
      Vue.set(task, key, value);
    },
    MOVE_TASK(state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
      const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0];
      toTasks.splice(toTaskIndex, 0, taskToMove);
      // toTasks.push(taskToMove);
    },
    MOVE_COLUMN(state, { fromColumnIndex, toColumnIndex }) {
      const columnList = state.board.columns;
      const columnToMove = columnList.splice(fromColumnIndex, 1)[0];
      columnList.splice(toColumnIndex, 0, columnToMove);
    },
  },
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
