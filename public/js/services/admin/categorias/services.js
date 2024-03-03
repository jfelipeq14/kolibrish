import { getData } from '../../general/getData.js'
import { pageCategory } from '../../screens/categorias.js'
const btnCategorias = document.getElementById('btnCategorias')
let tableCategorias

btnCategorias.addEventListener('click', () => {
  const content = document.getElementById('content')
  content.innerHTML = pageCategory
  if (content) {
    tableCategorias = document.getElementById('table-content')
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
      tableCategorias.innerHTML += html
      const newdata = data.slice(1, 3)
      console.log(newdata)
    })
  })
})
