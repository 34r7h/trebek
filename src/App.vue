<!-- src/App.vue -->
<template>
    <nav style="margin: 1em 0; display: flex; align-items: center; justify-content: center;">
      <router-link  style="display: flex; align-items: center;" to="/" v-if="$route.path !== '/'">
        <img style="width: 20px;" src="./assets/trebek.png" alt="">
        <b style="color: white;">TREBEK!</b>
      </router-link>
      <router-link to="/sponsor">Sponsor</router-link>
      <router-link to="/account">Account</router-link>
      <router-link to="/game">Game</router-link>
      <router-link to="/register">Register / Login</router-link>

    </nav>
    <div id="app" style="display: flex; flex-direction: column; align-items: center;">
    <div v-if="$route.path === '/'">
      <h1>TREBEK!</h1>
      <img style="width: 200px;" src="./assets/trebek.png" alt="">
    </div>
    <router-view></router-view>
  </div>
  <!-- {{ $route }} -->
</template>

<script setup>

</script>

<style>
nav {
  display: flex;
  gap: 1rem;
}
</style>
