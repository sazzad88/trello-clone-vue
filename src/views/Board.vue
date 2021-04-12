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
          <div
            :key="task.id"
            v-for="task in column.tasks"
            class="card row-item"
            @click="goToTask(task.id)"
          >
            <header class="card-header">
              <p class="card-header-title">
                {{ task.name }}
              </p>
            </header>
            <div class="card-content" v-if="task.description !== ''">
              <div class="content small-text">
                {{ task.description }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <router-view v-if="isTaskOpen" />
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["board"]),
    isTaskOpen() {
      //   return false;
      return this.$route.name == "task";
    },
  },

  methods: {
    goToTask(id) {
      //   console.log(id);
      this.$router.push({
        name: "task",
        params: { id },
      });
    },
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

.row-item {
  margin: 5px 0px;
  cursor: pointer;
}

.small-text {
  font-size: 14px;
}
</style>
