<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :mobile-breakpoint="768"
      app
    >
      <v-img
        class="pa-4 pt-7"
        src="mountains2.jpg"
        height="170"
        gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
      >
        <v-avatar
          size="70"
          class="mb-2"
        >
          <img
            src="spennellata2.jpeg"
            alt="Mattia Beccari"
          />
        </v-avatar>
        <div class="ml-2 white--text text-subtitle-1 font-weight-bold">
          {{ user }}
        </div>
        <div class="ml-2 white--text text-subtitle-2">your_email@email.com</div>
      </v-img>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      src="mountains.png"
      prominent
      height="170"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-container class="header-container pt-3">
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <search />
        </v-row>
        <v-row>
          <v-toolbar-title class="text-h4 ml-4">
            {{ $store.state.appTitle }}
          </v-toolbar-title>
        </v-row>
        <v-row>
          <live-date-time />
        </v-row>
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
      <snackbar />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Todo", icon: "mdi-format-list-checks", to: "/" },
      { title: "Utente", icon: "mdi-account-circle", to: "/utente" },
      { title: "Completati", icon: "mdi-notebook", to: "/completati" },
      { title: "Albo", icon: "mdi-thought-bubble-outline", to: "/albo" },
      { title: "About", icon: "mdi-information", to: "/about" },
    ],
  }),
  mounted() {
    this.$store.dispatch("getTasks");
  },
  computed: {
    ...mapState(["user"]),
  },
  components: {
    search: require("@/components/Tools/Search.vue").default,
    "live-date-time": require("@/components/Tools/LiveDateTime.vue").default,
    snackbar: require("@/components/Shared/SnackBar.vue").default,
  },
};
</script>

<style lang="sass">
.header-container
  max-width: none !important
</style>
