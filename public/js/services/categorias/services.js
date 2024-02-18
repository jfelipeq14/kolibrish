import { data } from '../crud/data.js'
const tableProductos = document.getElementById('table-content')

if (data.length) {
  let html = ''
  data.forEach((data) => {
    const tbody = `
      <tr>
        <td>${data.nombre}</td>
        <td class="d-flex">
          <button class="btn btn-form">Edit</button>
          <button class="btn btn-form">Delete</button>
        </td>
      </tr>
      `
    html += tbody
  })
  tableProductos.innerHTML += html
  const newdata = data.slice(1, 3)
  console.log(newdata)
}
