<template>
  <div id='home'>
    <h1>D O N T  H A N G  Y O U R  M A N</h1>
    <div class='content'>
      <form @submit.prevent="">
        <input type='text' v-model="username"/>
        <button type='submit'>Create New Game</button>
        <!-- <button type='submit'>Join a Game</button> -->
      </form>
    </div>
    <div id='existing-lobbies'>
      <div class='card' v-for="room in rooms" :key="room.id">
        <div class='card-title'>
          <h3>{{ room.user1 }}'s room</h3>
          <form @submit.prevent="joinRoom(room.id)">
            <input type='text' v-model='username2'>
            <button type='submit'>Join Room</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: '',
      username2: ''
    }
  },
  methods: {
    createRoom () {
      this.$store.dispatch('createRoom', this.username)
    },
    joinRoom (id) {
      console.log('yea')
      this.$store.dispatch('joinRoom', { id, username: this.username2 })
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
</style>
