// #region atributos
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js' // firebase general
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js' // autenticacion
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js' // base de datos
// #endregion
// #region config
const firebaseCredential = {
  apiKey: 'AIzaSyBwq1iT_vULXFGgTJ0Hac0bXEFHPTNzEGM',
  authDomain: 'pau-design-709a5.firebaseapp.com',
  projectId: 'pau-design-709a5',
  storageBucket: 'pau-design-709a5.appspot.com',
  messagingSenderId: '787739831335',
  appId: '1:787739831335:web:02f5817ae921a3a4eeb202'
} // configuracion de firebase
// #endregion

// #region Initialize Firebase and services
export const app = initializeApp(firebaseCredential)
export const auth = getAuth(app)
export const db = getFirestore(app)
// #endregion
