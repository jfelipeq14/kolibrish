// #region atributos
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js' // firebase general
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js' // autenticacion
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js' // base de datos
// #endregion
// #region config
const firebaseCredential = {
  apiKey: 'AIzaSyAsffhtN4JbTymFlu03yx7v65WTaA5dsUA',
  authDomain: 'kolibrish-6cc75.firebaseapp.com',
  projectId: 'kolibrish-6cc75',
  storageBucket: 'kolibrish-6cc75.appspot.com',
  messagingSenderId: '273221022600',
  appId: '1:273221022600:web:d9fb1d7b98d18a24e9c03d'
}// configuracion de firebase
// #endregion

// #region Initialize Firebase and services
export const app = initializeApp(firebaseCredential)
export const auth = getAuth(app)
export const db = getFirestore(app)
// #endregion
