import { loadAdminPage } from '../admin/admin.service.js'

const dialog = document.getElementById('pop-up')
// #endregion

// #region funciones
export const loginCheck = (user) => {
  if (user) {
    loadAdminPage() // Si existe un usuario va a cargar la pagina de admin
    dialog.close() // Cierra el modal aunque igual no aparece más
  }
}
// #endregion
