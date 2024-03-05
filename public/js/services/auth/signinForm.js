// #region atributos
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { auth } from '../../config/firebase.js'

// elementos del DOM
const signInForm = document.getElementById('signInForm')

// #endregion
// #region events
signInForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = signInForm['login-email'].value
  const password = signInForm['login-password'].value

  try {
    const user = await signInWithEmailAndPassword(
      auth,
      email,
      password
    )
    console.log(user)
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
