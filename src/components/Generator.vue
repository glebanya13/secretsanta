<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-btn @click="generation()" class="green darken-2 mt-6" dark
        >Сгенерировать</v-btn
      >
    </v-row>
    <v-row align="center" justify="center">
      <h2 class="mt-16">{{ player.name }} {{ player.surname }}</h2>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      player: "",
      // players: [
      //     {id: 1, name: 'Глеб', surname: 'Шершнев', selected: false},
      //     {id: 2, name: 'Ксендз', surname: 'Женя', selected: false},
      //     {id: 3, name: 'Женя', surname: 'Долгалев', selected: false},
      //     {id: 4, name: 'Артур', surname: 'Шершнев', selected: false}
      // ]
    };
  },
  computed: {
    ...mapGetters(["players", "currentUserId"]),
  },
  methods: {
    generation() {
        console.log(this.currentUserId)
      var players = this.players.filter((x) => x.id != this.currentUserId);
      var number = Math.floor(Math.random() * players.length) + 1;
      var randomPlayer = players.find((x) => x.id == number);

      // randomPlayer.selected = true
      // if(randomPlayer.selected == false){
      this.player = randomPlayer;
      this.$store.dispatch("DELETE_PLAYER", randomPlayer);
      // this.player.selected = true
      // }else{
      // }

      console.log(players);
      console.log(players.length);
      if (players.length == 1) {
        alert("Игроки закончились");
      }
      // if(randomPlayer.selected == false){

      // }
      // if(randomPlayer.selected == true){
      //     var randomPlayer1 = this.players.filter(x => x.selected == false).find(x => x.id == number)
      //     this.player = randomPlayer1.name + " " + randomPlayer1.surname
      //     randomPlayer1.selected = true
      // }
    },
  },
};
</script>