// #region atributos
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { auth } from '../../config/firebase.js'
// elementos del DOM
const signInForm = document.getElementById('signInForm')
// #endregion
// #region events
signInForm.addEventListener('submit', async (e) => {
  e.preventDefault() // Evita que la pagina recargue
  const email = signInForm['login-email'].value
  const password = signInForm['login-password'].value

  try {
    const user = await signInWithEmailAndPassword(
      auth,
      email,
      password
    ) // Envia los datos del formulario
    console.log(user) // Muestra el usuario
  } catch (error) {
    // mensajes de error
    if (error.code === 'auth/wrong-password') {
      console.log('Wrong password', 'error')
    } else if (error.code === 'auth/user-not-found') {
      console.log('User not found', 'error')
    } else {
      console.log('Something went wrong', 'error')
    }
  }
})
// #endregion
