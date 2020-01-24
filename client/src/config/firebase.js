const firebase = require('firebase')
require('firebase/firestore')

firebase.initializeApp({
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID
})

const db = firebase.firestore()

export default db
