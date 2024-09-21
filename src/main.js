// src/main.js
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import pinia from './store'
import { useMainStore } from './store'

const app = createApp(App)

app.use(router)
app.use(pinia)

const mainStore = useMainStore()
app.config.globalProperties.$store = mainStore // Set store globally

app.mount('#app')
