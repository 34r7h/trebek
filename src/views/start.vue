<template>
      <p>Count: {{ $store.count }}</p>
      <div style="display: flex; justify-content: space-around; width: 100%;">
        <button @click="$store.increment">Play</button>
        <button @click="$store.decrement">Sponsor</button>
      </div>
</template>