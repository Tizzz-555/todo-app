<template>
  <div>
    <h1 class="completati pa-4">Note Completate</h1>
    <v-select
      class="ml-4"
      :items="userNames"
      label="Utenti"
      dense
    ></v-select>
    <v-list
      class="pt-0"
      two-line
      flat
    >
      <new-task
        v-for="task in completedTasks"
        :key="task.id"
        :task="task"
      />
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NewTask from "@/components/Todo/NewTask.vue";

export default {
  computed: {
    ...mapGetters(["completedTasks", "userNames"]),
  },
  components: {
    NewTask,
  },
};
</script>
