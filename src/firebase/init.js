import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getFirestore } from 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyC0LdLNhlDXi63rC0SSTpwbMDejrR-bXgg',
  authDomain: 'week7-deshui-3d65b.firebaseapp.com',
  projectId: 'week7-deshui-3d65b',
  storageBucket: 'week7-deshui-3d65b.appspot.com',
  messagingSenderId: '612459580525',
  appId: '1:612459580525:web:34c7ee1e4a739b5c2e4364'
}
// Initialize Firebase
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
