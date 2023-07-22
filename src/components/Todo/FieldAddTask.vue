<template>
  <div>
    <v-text-field
      v-model="newTaskTitle"
      @click:append="addTask"
      @keyup.enter="addTask"
      class="pa-3"
      outlined
      label="Aggiungi nota"
      hide-details
      clearable
    >
      <template v-slot:append>
        <v-icon
          @click="addTask"
          color="primary"
          :disabled="newTaskTitleInvalid"
        >
          mdi-plus
        </v-icon>
      </template>
    </v-text-field>

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
  computed: {
    newTaskTitleInvalid() {
      return !this.newTaskTitle;
    },
  },
  methods: {
    addTask() {
      if (this.$store.state.user) {
        if (!this.newTaskTitleInvalid) {
          this.$store.dispatch("addTask", this.newTaskTitle);
          this.newTaskTitle = "";
          this.showAlert = false; // hide the alert if a task is successfully added
        }
      } else {
        this.showAlert = true; // show the alert if a user isn't set up
      }
    },
  },
};
</script>
