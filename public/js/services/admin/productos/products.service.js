// #region atributos
// const listProductos = []
let validData
const products = []
// #endregion

// #region functions
export const loadCategorys = (data, categorys) => {
  data.forEach((element) => {
    categorys.innerHTML += `
      <option value="${element.id}">${element.data().nombre}</option>
    `
    products.push({ id: element.id, productos: element.data().productos })
  })

  return products
}

export const loadProducts = (id, products, table) => {
  const listProducts = []
  validData = products.find((element) => element.id === id)
  if (validData) {
    table.innerHTML = ''
    const data = validData.productos.map((producto) => {
      listProducts.push(producto)
      return producto
    })

    for (let i = 0; i < data.length; i++) {
      if (data[i].habilitado) {
        table.innerHTML += `
        <tr>
          <td>${data[i].nombre}</td>
          <td>${data[i].descripcion}</td>
          <td>${data[i].sexo}</td>
          <td>${data[i].habilitado}</td>
          <td class="d-flex">
            <button class="btn btn-sm btn-secondary mx-2" value="${data[i].nombre}">⚙</button>
            <button class="btn btn-sm btn-danger mx-2">✖</button>
          </td>
        </tr>
        `
      }
    }

    return listProducts
  }
}
// #endregion
