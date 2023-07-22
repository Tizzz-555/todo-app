<template>
  <v-dialog
    :value="true"
    persistent
    max-width="290"
  >
    <v-card>
      <v-card-title class="text-h5"> Eliminare nota? </v-card-title>
      <v-card-text
        >Sei sicuro di voler eliminare questa nota prima di averla
        completata?</v-card-text
      >
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="$emit('close')"
          text
        >
          No
        </v-btn>
        <v-btn
          @click="$store.dispatch('deleteTask', task.id)"
          color="red"
          text
        >
          Sì
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["task"],
};
</script>

<style></style>
