import { getData } from './getData.js'

// #region atributos
const categoriasList = document.getElementById('categorias')
const productosList = document.getElementById('productos')
const listProductos = []
let validColeccion
// #endregion

// #region functions
export const setupColecciones = async (string) => {
  const array = await getData(string)
  if (array.length) {
    let html = ''
    array.forEach((data) => {
      const option = `
        <button id="${data.id}" class="btn-md">${data.nombre}</button>
      `
      listProductos.push({ id: data.id, conjuntos: data.conjuntos })
      html += option
    })
    categoriasList.innerHTML += html
  }
}

const searchById = (id, data) => {
  if (id && data.length) {
    return data.find((search) => search.id === id)
  }
}
// #endregion

// #region event
categoriasList.addEventListener('change', () => {
  const id = categoriasList.value
  validColeccion = searchById(parseInt(id), listProductos)
  if (validColeccion) {
    console.log(listProductos)
    productosList.innerHTML = validColeccion.conjuntos.map((conjunto) => {
      // console.log(conjunto.nombre)
      return `
        <div class="card">
          <h3 class="title">${conjunto.nombre}</h3>
          <p>${conjunto.habilitado}</p>
          <span>${conjunto.descripcion}</span>
        </div>
        `
    })
  }
})
// #endregion
