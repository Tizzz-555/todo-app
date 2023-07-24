<template>
  <div class="completati pa-4">
    <h1>Note Completate</h1>
    <v-select
      class="ml-4 mt-5"
      :items="userNames"
      label="Utenti"
      dense
      v-model="selectedUser"
      clearable
    ></v-select>
    <v-list
      class="pt-0"
      two-line
      flat
    >
      <new-task
        v-for="task in filteredTasks"
        :key="task.id"
        :task="task"
        :isCompleted="true"
      />
    </v-list>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NewTask from "@/components/Todo/NewTask.vue";

export default {
  data() {
    return {
      selectedUser: null,
    };
  },
  computed: {
    ...mapGetters(["completedTasks", "userNames"]),
    filteredTasks() {
      if (!this.selectedUser) {
        return this.completedTasks;
      }
      return this.completedTasks.filter(
        (task) => task.user === this.selectedUser
      );
    },
  },
  components: {
    NewTask,
  },
};
</script>
