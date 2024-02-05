// #region Verificantion user if exist or no
import '../crud/setData.js'

const dialog = document.getElementById('pop-up')
const btnLogout = document.getElementById('logout')
const btnLogin = document.getElementById('login')
// #endregion

// #region funciones
export const loginCheck = (user) => {
  // si el usuario existe el signin se escondera y dejara el logout
  // de lo contrario el logout se ocultara y mostrara el signin
  if (user) {
    btnLogin.classList.remove('d-block')
    btnLogin.classList.add('d-none')
    btnLogout.classList.remove('d-none')
    btnLogout.classList.add('d-block')

    dialog.close()
  }

  btnLogout.addEventListener('click', () => {
    btnLogin.classList.remove('d-none')
    btnLogin.classList.add('d-block')
    btnLogout.classList.remove('d-block')
    btnLogout.classList.add('d-none')
  })
}
// #endregion
