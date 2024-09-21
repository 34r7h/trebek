<!-- src/App.vue -->
<template>
  <div id="app">
    <nav>
      <router-link to="/">Start</router-link>
      <router-link to="/register">Register</router-link>
      <router-link to="/sponsor">Sponsor</router-link>
      <router-link to="/account">Account</router-link>
      <router-link to="/game">Game</router-link>
    </nav>
    <router-view></router-view>
    <div>
      <p>Count: {{ store.count }}</p>
      <button @click="store.increment">Increment</button>
      <button @click="store.decrement">Decrement</button>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from './store'

const store = useMainStore()
</script>

<style>
nav {
  display: flex;
  gap: 1rem;
}
</style>
