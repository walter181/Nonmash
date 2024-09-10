import 'bootstrap/dist/css/bootstrap.min.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBDvjugrPFSSUbVxlyYxxKyAZw-kaQBHbM',
  authDomain: 'week7-deshui.firebaseapp.com',
  projectId: 'week7-deshui',
  storageBucket: 'week7-deshui.appspot.com',
  messagingSenderId: '974650996146',
  appId: '1:974650996146:web:b17e60ba9a7518d0ff60ab'
}

// Initialize Firebase
initializeApp(firebaseConfig)
const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')
