<template>
  <div id="lobbycase" class="row">
    <div class="col">
      <b-card
      header="Player 1"
      header-tag="header"
      footer="DON'T HANG YOUR MAN"
      footer-tag="footer"
     :title="player1_name">
      <b-card-text v-if="!player2_name">Awaiting your opponent </b-card-text>
    </b-card>
    </div>
    <div class="col">
      <img v-if="!player2_name" src="@/assets/mario.gif">
      <img v-else @click="startGame" src="@/assets/startie.gif">
    </div>
    <div class="col">
      <b-card
      header="Player 2"
      header-tag="header"
      footer="DON'T HANG YOUR MAN"
      footer-tag="footer"
      :title="player2_name">
      <b-card-text v-if="player2_name">Ready to start? Click Start Game to play</b-card-text>
    </b-card>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    player1_name () {
      return this.$store.state.room.user1
    },
    player2_name () {
      return this.$store.state.room.user2
    },
    currentRoom () {
      return this.$store.state.room
    }
  },
  methods: {
    startGame () {
      this.$router.push('/match')
    }
  },
  created: function () {
    this.$store.dispatch('getRoom', this.$route.params.id)
  }
}
</script>

<style scoped>
#lobbycase {
  margin-top: 5em;
}
</style>
