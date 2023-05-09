import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import './assets/main.css'

const firebaseConfig = {
  apiKey: 'AIzaSyBCopha7GqItf-auMVvCoaK_OZKsq6FuSQ',
  authDomain: 'personalwebsite-5992d.firebaseapp.com',
  projectId: 'personalwebsite-5992d',
  storageBucket: 'personalwebsite-5992d.appspot.com',
  messagingSenderId: '575285589201',
  appId: '1:575285589201:web:8ba776b0cfc0349a2b01f0',
  measurementId: 'G-DR2H8G6LY1'
}

const firebase = initializeApp(firebaseConfig)
const app = createApp(App)

app.use(router).mount('#app')
