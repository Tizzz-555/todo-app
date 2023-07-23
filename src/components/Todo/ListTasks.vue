<template>
  <v-list
    class="pt-0"
    two-line
    flat
  >
    <new-task
      v-for="task in $store.getters.tasksFiltered"
      :key="task.id"
      :task="task"
    />
  </v-list>
</template>

<script>
export default {
  components: {
    "new-task": require("@/components/Todo/NewTask.vue").default,
  },
};
</script>
