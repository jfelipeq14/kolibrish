// #region // logout user
import { signOut } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { auth } from '../../config/firebase.js'

const logout = document.querySelector('#logout')
// #endregion

// #region events
logout.addEventListener('click', async (e) => {
  e.preventDefault()
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error)
  }
}) // cerrar sesion
// #endregion
