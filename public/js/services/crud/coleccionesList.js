// #region atributos
const coleccionesList = document.querySelector('.colecciones')

// #endregion
// #region functions
export const setupColecciones = (array) => {
  if (array.length) {
    let html = ''
    array.forEach((data) => {
      const colecciones = data
      const li = `
        <h3 class="name-coleccion">${colecciones.nombre}</h3>
    `
      html += li
    })
    coleccionesList.innerHTML = html
  } else {
    coleccionesList.innerHTML = '<h4 class="text-white">Login to See colecciones</h4>'
  }
}
// #endregion
