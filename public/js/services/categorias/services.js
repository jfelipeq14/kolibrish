const tableProductos = document.getElementById('table-content')
const array = [
  {
    id: 1234,
    nombre: 'Faldas',
    productos: [
      {
        id: 5678,
        nombre: 'Falda Xd',
        descripcion: 'Cool, men',
        habilitado: true
      }
    ]
  },
  {
    id: 8010,
    nombre: 'Cacheteros',
    productos: [
      {
        id: 5678,
        nombre: 'Falda Xd',
        descripcion: 'Cool, men',
        habilitado: true
      }
    ]
  },
  {
    id: 8617,
    nombre: 'Chaquetas',
    productos: [
      {
        id: 5678,
        nombre: 'Falda Xd',
        descripcion: 'Cool, men',
        habilitado: true
      }
    ]
  }
]
if (array.length) {
  let html = ''
  array.forEach((data) => {
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
  const newArray = array.slice(1, 3)
  console.log(newArray)
}
