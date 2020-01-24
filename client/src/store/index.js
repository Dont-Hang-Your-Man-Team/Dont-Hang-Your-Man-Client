import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firebase'
import router from '../router/index.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: ['eslint', 'jquery', 'sequelize', 'multer', 'socketio', 'vuetify', 'mongoose', 'mongodb', 'googlecloud', 'firebase', 'promise', 'callback', 'hooks'],
    rooms: [],
    user1: '',
    user2: '',
    room: {}
  },
  mutations: {
    pushRoom (state, payload) {
      state.rooms = payload
    },
    setUser2 (state, payload) {
      state.user2 = payload
    },
    setUser1 (state, payload) {
      state.user1 = payload
    },
    setCurrentRoom (state, payload) {
      state.room = payload
    },
    updateScore (state, payload) {
      if (state.room.user1 === payload.username) {
        state.room.answers1 = payload.answers
        state.room.mistakes1 = payload.mistakes
      } else {
        state.room.answers2 = payload.answers
        state.room.mistakes2 = payload.mistakes
      }
    }
  },
  actions: {
    createRoom (context, payload) {
      let newRoom = {
        user1: payload,
        user2: '',
        mistakes1: 0,
        mistakes2: 0,
        answers1: [],
        answers2: []
      }
      db.collection('rooms').add(newRoom)
        .then(data => {
          // context.commit('pushRoom', newRoom)
          router.push('/lobby/' + data.id)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getRooms (context) {
      db.collection('rooms')
        .onSnapshot((docs) => {
          let arr = []
          docs.forEach(doc => {
            let document = doc.data()
            document['id'] = doc.id
            arr.push(document)
          })
          context.commit('pushRoom', arr)
        })
    },
    joinRoom (context, payload) {
      db.collection('rooms').doc(payload.id)
        .update({
          user2: payload.username
        })
    },
    getRoom (context, payload) {
      db.collection('rooms').doc(payload)
        .onSnapshot((doc) => {
          context.commit('setCurrentRoom', doc.data())
        })
    },
    finishGame (context, payload) {
      context.commit('updateScore', payload)
    }
  },
  modules: {
  }
})
