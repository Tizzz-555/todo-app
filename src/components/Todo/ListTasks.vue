<template>
  <v-list
    class="pt-0"
    two-line
    flat
  >
    <draggable
      :list="$store.getters.tasksFiltered"
      handle=".handle"
    >
      <new-task
        v-for="task in $store.getters.tasksFiltered"
        :key="task.id"
        :task="task"
      />
    </draggable>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    "new-task": require("@/components/Todo/NewTask.vue").default,
    draggable,
  },
};
</script>
