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
          text
          @click="dialog = false"
        >
          No
        </v-btn>
        <v-btn
          color="red"
          text
          @click="dialog = false"
        >
          Sì
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script></script>

<style></style>
