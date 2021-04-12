<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div
        :key="`${column.name}-${colIndex}`"
        v-for="(column, colIndex) in board.columns"
        class="trello-column"
      >
        <div class="title is-5 board-title">
          {{ column.name }}
        </div>

        <div class="task-container">
          <task :key="task.id" :task="task" v-for="task in column.tasks" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
import Task from "./Task.vue";
export default {
  components: { Task },
  computed: {
    ...mapState(["board"]),
  },
};
</script>

<style scoped>
* {
  font-family: "Nunito Sans", sans-serif;
}

.hero-body {
  background: #2955a0;
  white-space: nowrap;
  margin-bottom: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.trello-column {
  width: 300px;
  margin: 0 4px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  background: lightblue;
  border-radius: 8px;
}

.task {
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  color: grey;
}

.board-title {
  padding: 5px;
}

.task-container {
  margin: 5px;
}
</style>
