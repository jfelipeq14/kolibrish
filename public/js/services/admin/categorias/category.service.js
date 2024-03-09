import { getAllData } from '../../services.general.js'

export const loadTableCategorias = async (table) => {
  const data = await getAllData('categorias')
  let html = ''
  data.forEach((element) => {
    const category = element.data()
    const tbody = `
      <tr>
        <td>${category.nombre}</td>
        <td class="d-flex">
          <button class="btn-edit btn-icon" data-id="${element.id}" value="${category.nombre}">⚙</button>
          <button class="btn-delete btn-icon">✖</button>
        </td>
      </tr>
      `
    html = tbody
    table.innerHTML += html
  })
}
