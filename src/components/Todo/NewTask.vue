<template>
  <div>
    <v-list-item
      @click="!isCompleted && $store.dispatch('doneTask', task.id)"
      :class="{ 'blue lighten-5': task.done }"
      class="white"
      :ripple="false"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox
            :input-value="task.done"
            color="primary"
            :disabled="isCompleted"
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

        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon>
            {{ task.dueDate | niceDate }}</v-list-item-action-text
          >
        </v-list-item-action>

        <v-list-item-action>
          <task-menu
            :task="task"
            :isCompleted="task.done"
          />
        </v-list-item-action>

        <v-list-item-action v-if="$store.state.sorting">
          <v-btn
            color="primary"
            class="handle"
            icon
          >
            <v-icon>mdi-drag-horizontal-variant</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
import { formatWithOptions } from "date-fns/fp";
import { it } from "date-fns/locale";

export default {
  props: ["task", "isCompleted"],
  filters: {
    niceDate(value) {
      return formatWithOptions({ locale: it }, "d MMM")(new Date(value));
    },
  },
  components: {
    "task-menu": require("@/components/Todo/TaskMenu.vue").default,
  },
};
</script>

<style lang="sass">
.sortable-ghost
  opacity: 0
.sortable-drag
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3)
</style>
