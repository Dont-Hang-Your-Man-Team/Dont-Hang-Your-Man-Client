<template>
  <div id="resultbox" class="row">
    <div class="col">
      <b-card
      header="Player 1"
      header-tag="header"
      footer="DON'T HANG YOUR MAN"
      footer-tag="footer"
     :title="player1">
    </b-card>
    </div>
    <div class="col">
      {{ winner }}
      {{ answers1 }}
      {{ answers2 }}
      <!-- <img v-if="!winner" src="@/assets/waiting.gif">
      <p v-else-if="winner !== 'tie'">{{winner}}</p>
      <p v-else>It's a tie!</p> -->
    </div>
    <div class="col">
      <b-card
      header="Player 2"
      header-tag="header"
      footer="DON'T HANG YOUR MAN"
      footer-tag="footer"
      :title="player2">
    </b-card>
    </div>
    <!-- <audio src="@/assets/yaysound.mp3" autoplay></audio> -->
  </div>
</template>

<script>
export default {
  name: 'result',
  data () {
    return {
      displayScore: false
    }
  },
  computed: {
    winner () {
      return this.$store.getters.isDone
    },
    player1 () {
      return this.$store.state.room.user1
    },
    player2 () {
      return this.$store.state.room.user2
    },
    answers1 () {
      return this.$store.state.room.answers1
    },
    answers2 () {
      return this.$store.state.room.answers2
    }
  },
  created: function () {
    if (!this.winner) {
      this.displayScore = false
    } else {
      this.displayScore = true
    }
  }
}
</script>

<style scoped>
#resultbox {
    margin-top: 5em;
}
</style>
