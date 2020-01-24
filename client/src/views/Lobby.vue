<template>
  <div id="lobbycase" class="row">
    <div class="col">
      <b-card
      header="Player 1"
      header-tag="header"
      footer="DON'T HANG YOUR MAN"
      footer-tag="footer"
     :title="player1_name">
      <b-card-text v-if="player2_name.length === 0">Awaiting your opponent </b-card-text>
    </b-card>
    </div>
    <div class="col">
      <img v-if="player2_name.length === 0" src="@/assets/mario.gif">
      <img v-if="player2_name.length >= 1" @click="startGame" src="@/assets/startie.gif">
    </div>
    <div class="col">
      <b-card
      header="Player 2"
      header-tag="header"
      footer="DON'T HANG YOUR MAN"
      footer-tag="footer"
      :title="player2_name">
      <b-card-text v-if="player2_name >= 1">Ready to start? Click Start Game to play</b-card-text>
    </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      player1_name: this.$store.state.username || 'Gabriel',
      player2_name: this.$store.state.username || 'Ganda'
    }
  },
  methods: {
    startGame () {
      this.$router.push('/match')
    }
  }
}
</script>

<style scoped>
#lobbycase {
  margin-top: 5em;
}
</style>
