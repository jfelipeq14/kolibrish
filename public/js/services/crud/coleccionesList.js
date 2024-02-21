import { data } from './data.js'
// #region atributos
const categoriasList = document.getElementById('categorias')
const productosList = document.getElementById('productos')
const buttons = document.getElementById('categorias')
const listProductos = []
let validProduct
// #endregion
// #region functions
export const setupColecciones = async () => {
  if (data.length) {
    let html = ''
    data.forEach((data) => {
      const option = `
        <button value="${data.id}" class="btn-sm btn-fucsia">${data.nombre}</button>
      `
      listProductos.push({ id: data.id, productos: data.productos })
      html += option
    })
    categoriasList.innerHTML += html
  }
}
const searchById = (id, data) => {
  if (id && data.length) {
    return data.find((search) => search.id === id)
  }
}
// #endregion
// #region event
buttons.addEventListener('click', (e) => {
  getProducts(parseInt(e.target.value))
})
const getProducts = (id) => {
  validProduct = searchById(parseInt(id), listProductos)
  if (validProduct) {
    productosList.innerHTML = validProduct.productos.map((conjunto) => {
      return `
      
      `
    })
  }
}
// #endregion
