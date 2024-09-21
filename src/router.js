// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Start from './components/start.vue'
import Register from './components/register.vue'
import Sponsor from './components/sponsor.vue'
import Account from './components/account.vue'
import Game from './components/game.vue'

const routes = [
  { path: '/', component: Start },
  { path: '/register', component: Register },
  { path: '/sponsor', component: Sponsor },
  { path: '/account', component: Account },
  { path: '/game', component: Game },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
