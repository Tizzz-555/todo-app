<template>
  <div>
    <v-list-item
      @click="$store.commit('doneTask', task.id)"
      :class="{ 'blue lighten-5': task.done }"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox
            :input-value="task.done"
            color="primary"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content>
          <!-- Title -->
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.done }"
          >
            {{ task.title }}
          </v-list-item-title>

          <!-- Username -->
          <v-list-item-subtitle> {{ task.user }}</v-list-item-subtitle>
        </v-list-item-content>

        <!-- Delete button -->
        <v-list-item-action>
          <v-btn
            @click.stop="$store.dispatch('deleteTask', task.id)"
            icon
          >
            <v-icon color="primary lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>

    <dialog-delete />
  </div>
</template>

<script>
export default {
  props: ["task"],
  components: {
    "dialog-delete": require("@/components/Todo/Dialogs/DialogDelete.vue")
      .default,
  },
};
</script>
