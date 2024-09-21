// src/store.js
import { defineStore, createPinia } from 'pinia'

const store = createPinia()

export const useMainStore = defineStore('main', {
  state: () => ({
    count: 0,
    gamestate: {
        players: {
            'Vitalik': {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmp_HtegquSY3RjGzjcKTkWGeDYmPH05GdOg&s', score: 20},
            'Satoshi': {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5agWIohaQDztLl5VBPgX795s_caRPV5fPQ&s', score: 50},
            '34r7h': {avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf75h2HXoFpERCV27sZdIPHWxA5mnzedKuqw&s', score: 100},
        },
        turn: {},
        answers: {
            'Countries': {
                '100': 'France', '200': 'Russia', '300': 'Brazil', '400': 'Japan'
            },
            'History': {
                '100': 'Joan of Arc', '200': 'Gengis Khan', '300': 'Constantine', '400': 'Confucious'
            },
            'biology':{
                '100': 'DNA', '200': 'Bacteria', '300': 'Liver', '400': 'Feathers'
            },
            'space': {
                '100': 'Mars', '200': 'Oort Cloud', '300': 'ISS', '400': 'Satellite'
            },
            'crypto': {
                '100': 'Ethereum', '200': 'Rollup', '300': 'Nonce', '400': 'Consensus'
            },
            'water': {
                '100': 'Ice', '200': 'Alkaline', '300': 'Spring', '400': 'Snow'
            },
        } 
    },
    show: {}
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
