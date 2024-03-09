// #region atributos
// const listProductos = []
let validData
const products = []
// #endregion

// #region functions
export const loadCategorys = (data, categorys) => {
  data.forEach((element) => {
    categorys.innerHTML += `
      <option value="${element.id}">${element.nombre}</option>
    `
    products.push({ id: element.id, productos: element.productos })
  })

  return products
}

export const loadProducts = (id, products, table) => {
  validData = products.find((element) => element.id === id)
  if (validData) {
    table.innerHTML = ''
    const data = validData.productos.map((producto) => {
      return producto
    })
    for (let i = 0; i < data.length; i++) {
      table.innerHTML += `
      <tr>
        <td>${data[i].nombre}</td>
        <td>${data[i].descripcion}</td>
        <td>${data[i].habilitado}</td>
        <td class="d-flex">
          <button class="btn-edit btn-icon">⚙</button>
          <button class="btn-delete btn-icon">✖</button>
        </td>
      </tr>
      `
    }
  }
}
// #endregion
