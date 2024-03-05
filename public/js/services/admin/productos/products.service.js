// #region atributos
// const listProductos = []
let validData
const products = []
// #endregion

// #region functions
export const loadCategorys = (data, categorys) => {
  data.forEach((element) => {
    const category = element.data()
    categorys.innerHTML += `
      <option value="${category.id}">${category.nombre}</option>
    `
    products.push({ id: category.id, productos: category.productos })
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
          <button class="btn-blue btn-icon">⚙</button>
          <button class="btn-blue btn-icon">✖</button>
        </td>
      </tr>
      `
    }
  }
}
// #endregion
