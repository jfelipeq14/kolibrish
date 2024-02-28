import { data } from '../crud/data.js'

// #region atributos
const categorias = document.getElementById('categorias')
const productosTable = document.getElementById('table-content')
const listProductos = []
let validData
// #endregion

// #region functions
if (data.length) {
  data.forEach((data) => {
    categorias.innerHTML += `
      <option value="${data.id}">${data.nombre}</option>
    `
    listProductos.push({ id: data.id, productos: data.productos })
  })
}

const searchById = (id, data) => {
  if (id && data.length) {
    return data.find((search) => search.id === id)
  }
}
// #endregion

// #region event
categorias.addEventListener('change', () => {
  const id = categorias.value
  validData = searchById(parseInt(id), listProductos)
  if (validData) {
    const data = validData.productos.map((producto) => {
      return producto
    })
    let html = ''
    for (let i = 0; i < data.length; i++) {
      const tbody = `
      <tr>
        <td>${data[i].nombre}</td>
        <td>${data[i].descripcion}</td>
        <td>${data[i].habilitado}</td>
        <td class="d-flex">
          <button class="btn-blue btn-icon">⚙</button>
          <button class="btn-blue btn-icon">✖</button>
        </td>
      </tr>
      `
      html += tbody
    }
    productosTable.innerHTML = html
  }
})
// #endregion
