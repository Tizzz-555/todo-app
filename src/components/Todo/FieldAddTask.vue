<template>
  <div>
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Aggiungi nota"
      append-icon="mdi-plus"
      hide-details
      clearable
    ></v-text-field>

    <!-- Alert message -->
    <user-alert :showAlert="showAlert" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTaskTitle: "",
      showAlert: false,
    };
  },
  components: {
    "user-alert": require("@/components/Todo/UserAlert.vue").default,
  },
  methods: {
    addTask() {
      if (this.$store.state.user) {
        this.$store.dispatch("addTask", this.newTaskTitle);
        this.newTaskTitle = "";
        this.showAlert = false; // hide the alert if a task is successfully added
      } else {
        this.showAlert = true; // show the alert if a user isn't set up
      }
    },
  },
};
</script>
