<template>
  <div class="no-tasks">
    <h2>
      Benvenuto su To do! Effettua il login su Utente e inserisci la tua prima
      nota 🙂
    </h2>
    <div class="content">
      <v-icon
        size="100"
        color="primary"
      >
        mdi-check-decagram
      </v-icon>
      <div class="text-h5 primary--text">No tasks</div>
    </div>
  </div>
</template>

<style lang="sass">
.no-tasks
  position: absolute
  left: 50%
  top: 50%
  transform: translate(-50%, -50%)
  opacity: 0.5
  text-align: center

.content
  margin-top: 20px

@media (max-height: 500px)
  .no-tasks
    display: none
</style>
