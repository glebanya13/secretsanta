<template>
  <v-app>
    <v-app-bar app color="red darken-4" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://www.flaticon.com/premium-icon/icons/svg/2428/2428055.svg"
          transition="scale-transition"
          width="40"
        />

        <h2>Secret Santa</h2>
      </div>
      <v-spacer></v-spacer>

      <v-icon @click="update()">mdi-cloud-upload</v-icon>
    </v-app-bar>

    <v-main>
      <Home />
    </v-main>
  </v-app>
</template>

<script>
import Home from "./views/Home";

export default {
  name: "App",
  components: {
    Home,
  },
  methods: {
    update() {
      this.$store.dispatch("LOAD_PLAYERS");
    },
  },
};
</script>
