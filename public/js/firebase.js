import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
//import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

const firebaseConfig = {
    // Paste your firebase config here

    apiKey: "AIzaSyBwq1iT_vULXFGgTJ0Hac0bXEFHPTNzEGM",
    authDomain: "pau-design-709a5.firebaseapp.com",
    projectId: "pau-design-709a5",
    storageBucket: "pau-design-709a5.appspot.com",
    messagingSenderId: "787739831335",
    appId: "1:787739831335:web:02f5817ae921a3a4eeb202"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)