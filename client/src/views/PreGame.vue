<template>
  <div id='home'>
    <h1>D O N T  H A N G  Y O U R  M A N</h1>
    <div class='content'>
      <form @submit.prevent="createRoom">
        <input type='text' v-model="username" placeholder="Type your name..."/>
        <b-button type='submit' variant="success"> <b-icon icon="plus"></b-icon>Create New Game</b-button>
        <!-- <button type='submit'>Create New Game</button> -->
        <!-- <button type='submit'>Join a Game</button> -->
      </form>
    </div>
    <div id='existing-lobbies'>
      <div class='header'><h3>Available Rooms</h3></div>
      <RoomCard  class='card' v-for="room in rooms" :key="room.id" :room="room"/>
    </div>
  </div>
</template>

<script>
import RoomCard from '../components/RoomCard'
export default {
  data () {
    return {
      username: ''
    }
  },
  components: {
    RoomCard
  },
  methods: {
    createRoom () {
      this.$store.dispatch('createRoom', this.username)
    }
  },
  created () {
    this.$store.dispatch('getRooms')
  },
  computed: {
    rooms () {
      return this.$store.state.rooms
    }
  }

}
</script>

<style scoped>
.content {
  position:static; /*it can be fixed too*/
  left:0; right:0;
  top:0; bottom:0;
  margin:auto;

  /*this to solve "the content will not be cut when the window is smaller than the content": */
  max-width:100%;
  max-height:100%;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19);
  /* overflow:auto; */
}

.card {
  margin-top: 1em;
  max-width: 20em;
}

div {
  margin: auto;
}

.header {
  background-color: #1abc9c;
  max-width: 20em;
  margin-top: 1em;
}
</style>
