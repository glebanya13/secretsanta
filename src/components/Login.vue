<template>
  <v-form v-model="valid" class="mt-16">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="6">
          <v-toolbar color="red darken-4" dark flat>
            <v-toolbar-title>Регистрация</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card class="elevation-12">
            <v-col cols="12" md="12" sm="8">
              <v-text-field
                v-model="firstname"
                :rules="nameRules"
                label="Имя"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="12" sm="8">
              <v-text-field
                v-model="lastname"
                :rules="nameRules"
                label="Фамилия"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12" md="12" sm="8">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                type="email"
              ></v-text-field>
            </v-col>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                @click="submit()"
                class="red darken-4"
                dark
                :disabled="!valid"
                >Подтвердить</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Введите данные",
      (v) => v.length <= 10 || "Имя/фамилия больше 10 символов",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "Введите e-mail",
      (v) => /.+@.+/.test(v) || "Неправильный e-mail",
    ],
  }),
  methods: {
    submit() {
      this.$store.dispatch("LOGIN", {
        email: this.email,
        name: this.firstname,
        surname: this.lastname,
      });
      this.$store.dispatch("LOAD_PLAYERS");
    },
  },
};
</script>

<style>
</style>