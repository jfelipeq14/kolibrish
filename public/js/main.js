// autentication change
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
//
import {
  getDocs,
  collection
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'
import { auth, db } from './config/firebase.js'
import { loginCheck } from './services/auth/loginCheck.js'

// Rutas de los archivos en esta misma carpeta
import './services/auth/signinForm.js'
import './services/auth/logout.js'
import './services/crud/postList.js'

//
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user)
    try {
      const querySnapshot = await getDocs(collection(db, 'posts'))
      setupPosts(querySnapshot.docs)
    } catch (error) {
      console.log(error)
    }
  } else {
    setupPosts([])
    loginCheck(user)
  }
})
