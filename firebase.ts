// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvQ_u3_Lr0wnRTkhy_hKXgYRWLcO-j6_c",
    authDomain: "netflix-redesign-4de1f.firebaseapp.com",
    projectId: "netflix-redesign-4de1f",
    storageBucket: "netflix-redesign-4de1f.appspot.com",
    messagingSenderId: "701815354039",
    appId: "1:701815354039:web:6a091a00b23fccf584d332"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }