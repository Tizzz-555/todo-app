<template>
  <v-dialog
    :value="true"
    persistent
    max-width="290"
  >
    <v-card>
      <v-card-title class="text-h5"> Modificare nota? </v-card-title>
      <v-card-text
        >Modifica il titolo di questa nota:
        <v-text-field />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          @click="$emit('close')"
          text
        >
          Esci
        </v-btn>
        <v-btn
          @click="$store.dispatch('deleteTask', task.id)"
          color="red"
          text
        >
          Salva
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
