import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAF0KnLWHX6hRSCnlVjaHYI4hvIjMvddNo',
    authDomain: 'online-cinema-25169.firebaseapp.com',
    projectId: 'online-cinema-25169',
    storageBucket: 'online-cinema-25169.firebasestorage.app',
    messagingSenderId: '1012379667780',
    appId: '1:1012379667780:web:bc34558d79b8b0cdcd5b11',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
