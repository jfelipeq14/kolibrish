// #region atributos
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
// import {
//   getDocs,
//   collection
// } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'
import { auth } from './config/firebase.js' // configuracion de firebase
import { loginCheck } from './services/auth/loginCheck.js' // funcion para validar el login
import { setupColecciones } from './services/crud/coleccionesList.js'
// import { getData } from './services/crud/getData.js'
// Rutas de los archivos a utilizar
import './services/auth/signinForm.js'
import './services/auth/logout.js'
// #endregion
// #region pruebas
// #endregion
// estado de autenticacion, validar el usuario y cargar datos de la base de datos
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user)
    try {
      console.log('Goleador')
    } catch (error) {
      console.log(error)
    }
  } else {
    setupColecciones()
    loginCheck(user)
  }
})
