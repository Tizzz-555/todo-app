<template>
  <div class="completati pa-6">
    <h1>Completed Tasks</h1>
    <ul>
      <li
        v-for="task in completedTasks"
        :key="task.id"
      >
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["completedTasks"]),
  },
};
</script>
