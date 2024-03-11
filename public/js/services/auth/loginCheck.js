import { loadAdminPage } from '../admin/admin.service.js'

// #endregion

// #region funciones
export const loginCheck = (user) => {
  if (user) {
    loadAdminPage() // Si existe un usuario va a cargar la pagina de admin
  }
}
// #endregion
