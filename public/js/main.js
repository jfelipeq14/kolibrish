// #region atributos
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import {
  getDocs,
  collection
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'
import { auth, db } from './config/firebase.js' // configuracion de firebase
import { loginCheck } from './services/auth/loginCheck.js' // funcion para validar el login

// Rutas de los archivos a utilizar
import './services/auth/signinForm.js'
import './services/auth/logout.js'
import './services/crud/postList.js'
// #endregion

// estado de autenticacion, validar el usuario y cargar datos de la base de datos
onAuthStateChanged(auth, async (user) => {

  if (user) {
    loginCheck(user);
    try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setupPosts(querySnapshot.docs);
    } catch (error) {
      console.log(error)
    }
  } else {
    setupPosts([]);
    loginCheck(user);
  }
})
