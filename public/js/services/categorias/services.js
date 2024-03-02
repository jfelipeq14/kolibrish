import { getData } from '../general/getData.js'
import { pageCategory } from '../../screens/categorias.js'
import { pageProductos } from '../../screens/productos.js'
const tableProductos = document.getElementById('table-content')
const btnCategorias = document.getElementById('btnCategorias')
const btnProductos = document.getElementById('btnProductos')

btnCategorias.addEventListener('click', () => {
  const content = document.getElementById('content')
  content.innerHTML = pageCategory
  if (content) {
    tableProductos = document.getElementById('table-content')
  }
})
btnProductos.addEventListener('click', () => {
  const content = document.getElementById('content')
  content.innerHTML = pageProductos
  if (content) {
    tableProductos = document.getElementById('table-content')
  }
})

window.addEventListener('load', async () => {
  await getData('categorias').then((data) => {
    let html = ''
    data.forEach((data) => {
      const tbody = `
      <tr>
      <td>${data.nombre}</td>
      <td class="d-flex">
      <button class="btn-blue btn-icon">⚙</button>
      <button class="btn-blue btn-icon">✖</button>
      </td>
      </tr>
      `
      html += tbody
      tableProductos.innerHTML += html
      const newdata = data.slice(1, 3)
      console.log(newdata)
    })
  })
})
