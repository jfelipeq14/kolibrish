import { loadAdminPage } from '../admin/service.js'

const dialog = document.getElementById('pop-up')
// #endregion

// #region funciones
export const loginCheck = (user) => {
  if (user) {
    loadAdminPage()
    dialog.close()
  } else {
    console.error('error')
  }
}
// #endregion
