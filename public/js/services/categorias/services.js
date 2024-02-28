import { data } from '../general/local/data.js'
const tableProductos = document.getElementById('table-content')

if (data.length) {
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
  })
  tableProductos.innerHTML += html
  const newdata = data.slice(1, 3)
  console.log(newdata)
}
