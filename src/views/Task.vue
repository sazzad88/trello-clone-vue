<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <div v-if="task" class="title is-5">
                <!-- {{ task.name }} -->
                <div class="field">
                  <input
                    class="input"
                    @keyup.enter="updateTask($event, 'name')"
                    :value="task.name"
                  />
                </div>
                <div class="field">
                  <textarea
                    @keyup.enter="updateTask($event, 'description')"
                    class="textarea"
                    :value="task.description"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="goToBoard"
    ></button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTask"]),
    task() {
      return this.getTask(this.$route.params.id);
    },
  },

  methods: {
    goToBoard() {
      this.$router.push({
        name: "board",
      });
    },

    updateTask(e, propertyName) {
      this.$store.commit("UPDATE_TASK", {
        task: this.task,
        key: propertyName,
        value: e.target.value,
      });

      this.$router.push({
        name: "board",
      });
    },
  },
};
</script>

<style scoped>
.box {
  background: #f8f5f5;
}
</style>
