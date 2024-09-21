// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import Start from './views/start.vue'
import Register from './views/register.vue'
import Sponsor from './views/sponsor.vue'
import Account from './views/account.vue'
import Game from './views/game.vue'

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
