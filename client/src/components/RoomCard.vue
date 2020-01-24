<template>
  <div class='card-title' v-if="room.user2 === ''">
    <h3>{{ room.user1 }}'s room</h3>
    <!-- <form @submit.prevent="joinRoom(room.id)">
      <input type='text' v-model='username2'>
       <button type='submit'>Join Room</button>
    </form> -->
    <div>
      <b-button @click="$bvModal.show(room.id)">Join</b-button>

      <b-modal
        :id="room.id"
        :title="`${room.user1}'s Room`"
        ref="my-modal"
        hide-footer
        >

        <form @submit.prevent="joinRoom(room.id)">
          <input type="text" placeholder="Input Your Username Here" v-model="username2">
          <button type="submit">Enter</button>
        </form>
    </b-modal>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username2: ''
    }
  },
  props: {
    room: Object
  },
  methods: {
    joinRoom (id) {
      console.log('yea')
      this.$store.dispatch('joinRoom', { id, username: this.username2 })
      this.$refs['my-modal'].hide()
      this.username2 = ''
    }
  }
}
</script>

<style>
</style>
