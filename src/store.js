// src/store.js
import { defineStore, createPinia } from 'pinia'

const store = createPinia()

export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})

export default store
