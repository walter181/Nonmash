import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore } from 'firebase/firestore'
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
const db = getFirestore()
export default db
