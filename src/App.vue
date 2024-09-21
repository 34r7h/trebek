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
import { ref, onMounted } from 'vue';

const serverStatus = ref('Checking server...');

onMounted(() => {
    const socket = new WebSocket('wss://trebek.lol:8082'); // Replace with your server's IP

    socket.onopen = () => {
        serverStatus.value = 'Connected to game server!';
        console.log('Connected to game server');
    };

    socket.onmessage = (event) => {
        console.log('Message from server:', event.data);
    };

    socket.onerror = (error) => {
        serverStatus.value = 'Failed to connect to server.';
        console.error('WebSocket Error:', error);
    };

    socket.onclose = () => {
        serverStatus.value = 'Disconnected from game server.';
        console.log('Disconnected from game server');
    };
});
</script>

<style>
nav {
  display: flex;
  gap: 1rem;
}
</style>
