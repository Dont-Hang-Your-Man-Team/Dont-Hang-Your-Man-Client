import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import PreGame from '../views/PreGame.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: PreGame
  },
  {
    path: '/match',
    name: 'match',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "" */ '../views/Match.vue')
  },
  {
    path: '/end',
    name: 'game end',
    component: () => import(/* webpackChunkName: "endgame" */ '../views/EndGame.vue')
  },
  {
    path: '/lobby/:id',
    name: 'lobby',
    component: () => import(/* webpackChunkName: "room" */ '../views/Lobby.vue')
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  base: process.env.BASE_URL
})

export default router
