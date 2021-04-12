<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
        <article class="media">
          <div class="media-content">
            <div class="content">
              <div v-if="task" class="title is-5">
                {{ task.name }}
              </div>
            </div>
            <nav class="level is-mobile">
              <div class="level-left">
                <a class="level-item" aria-label="retweet">
                  <span class="icon is-small">
                    <i class="fas fa-retweet" aria-hidden="true"></i>
                  </span>
                </a>
                <a class="level-item" aria-label="like">
                  <span class="icon is-small">
                    <i class="fas fa-heart" aria-hidden="true"></i>
                  </span>
                </a>
              </div>
            </nav>
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
      console.log(this.getTask(this.$route.params.id));
      return this.getTask(this.$route.params.id);
    },
  },

  methods: {
    goToBoard() {
      this.$router.push({
        name: "board",
      });
    },
  },
};
</script>

<style scoped></style>
