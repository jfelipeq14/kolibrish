// #region atributos
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
// import {
//   getDocs,
//   collection
// } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'
import { auth } from './config/firebase.js'
import { loginCheck } from './services/auth/loginCheck.js'
import './services/auth/signinForm.js'
import './services/auth/logout.js'
import './services/index/index.js'

// #endregion
// #region functions
// -------- TODAS LAS FUNCIONES VAN ACA SIN ESTE COMENTARIO --------
window.addEventListener('load', () => {
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        loginCheck(user)
      } catch (error) {
        console.log(error)
      }
    }
  })
})

// #endregion
// #region events

// #endregion
