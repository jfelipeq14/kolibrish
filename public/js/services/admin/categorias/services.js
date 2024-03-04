import { getData } from '../../general/getData.js'

export const loadTableCategorias = (table) => {
  getData('categorias').then((data) => {
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
      html = tbody
      table.innerHTML += html
    })
  })
}
