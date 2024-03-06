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
          <button class="btn-blue btn-icon">⚙</button>
          <button class="btn-blue btn-icon">✖</button>
        </td>
      </tr>
      `
    html = tbody
    table.innerHTML += html
  })
}
const formCategory = document.getElementById('formCategory')
formCategory.addEventListener('submit', async (e) => {
  e.preventDefault()

  try {
    const dataCategory = {
      id: crypto.randomUUID(),
      nombre: formCategory.nombre,
      productos: [],
      habilitado: true

    }
  } catch (error) {
    console.error(error)
  }
})
