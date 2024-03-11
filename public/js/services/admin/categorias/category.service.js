import { getAllData } from '../../services.general.js'

export const loadTableCategorias = async (table) => {
  const data = await getAllData('categorias')
  let html = ''
  data.forEach((element) => {
    const category = element.data()
    const tbody = `
      <tr>
        <td scope="row">${category.nombre}</td>
        <td class="d-flex">
          <button class="btn btn-sm btn-secondary mx-2" data-id="${element.id}" value="${category.nombre}">⚙</button>
          <button class="btn btn-sm btn-danger mx-2">✖</button>
        </td>
      </tr>
      `
    html = tbody
    table.innerHTML += html
  })
}
