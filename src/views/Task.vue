<template>
  <div class="card mt">
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
</template>

<script>
export default {
  props: ["task"],
};
</script>

<style scoped>
.mt {
  margin: 5px 0px;
}

.small-text {
  font-size: 14px;
}
</style>
