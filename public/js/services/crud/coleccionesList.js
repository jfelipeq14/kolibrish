import { getData } from './getData.js'

// #region atributos
const coleccionesList = document.getElementById('coleccion')
const conjuntosList = document.getElementById('conjuntos')
const arrayConjuntos = []
let validColeccion
// #endregion

// #region functions
export const setupColecciones = async (string) => {
  const array = await getData(string)
  if (array.length) {
    let html = ''
    array.forEach((data) => {
      const option = `
        <option value="${data.id}">${data.nombre}</option>
      `
      arrayConjuntos.push({ id: data.id, conjuntos: data.conjuntos })
      html += option
    })
    coleccionesList.innerHTML += html
  }
}

const searchById = (id, data) => {
  if (id && data.length) {
    return data.find((search) => search.id === id)
  }
}
// #endregion

// #region event
coleccionesList.addEventListener('change', () => {
  const id = coleccionesList.value
  validColeccion = searchById(parseInt(id), arrayConjuntos)
  if (validColeccion) {
    console.log(arrayConjuntos)
    conjuntosList.innerHTML = validColeccion.conjuntos.map((conjunto) => {
      // console.log(conjunto.nombre)
      return `
        <article class="card">
          <h3 class="title">${conjunto.nombre}</h3>
          <p>${conjunto.habilitado}</p>
          <span>${conjunto.descripcion}</span>
        </article>
        `
    })
  }
})
// #endregion
