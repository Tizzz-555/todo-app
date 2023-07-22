<template>
  <v-alert
    v-if="showAlert"
    class="ml-3 mr-3 mb-3"
    dense
    type="info"
  >
    Per inserire una nota fai il login del tuo nome in "Utente".
  </v-alert>
</template>

<script>
export default {
  props: {
    showAlert: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<style></style>
