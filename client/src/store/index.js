import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: ['eslint', 'jquery', 'sequelize', 'multer', 'socketio', 'vuetify', 'mongoose', 'mongodb', 'googlecloud', 'firebase', 'promise', 'callback', 'hooks'],
    rooms: [],
    username: ''
  },
  mutations: {
    pushRoom (state, payload) {
      state.rooms = payload
    }
  },
  actions: {
    createRoom (context, payload) {
      db.collection('rooms').add({
        user1: payload,
        user2: '',
        mistakes1: 0,
        mistakes2: 0,
        answers1: [],
        answers2: []
      })
        .then(data => {
          context.commit('pushRoom', data)
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
    }
  },
  modules: {
  }
})
