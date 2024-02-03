// #region atributos
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { auth } from '../../config/firebase.js'


const signInForm = document.querySelector('#login-form')
// #endregion

// #region events
signInForm.addEventListener('submit', async (e) => {
  e.preventDefault() // evitar que la pagina se recargue
  // atributos del formulario
  const email = signInForm['login-email'].value
  const password = signInForm['login-password'].value

  // envia las credenciales al back
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    console.log(userCredentials)
  } catch (error) {
    // error en caso de que losdatos esten incorrecto o el usuario no exista
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
