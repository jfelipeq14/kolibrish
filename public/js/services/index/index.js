// #region atributos
// import { data } from '../general/local/data.js'
import { searchById } from '../general/search.js'
const categoriasList = document.getElementById('categorias')
const productosList = document.getElementById('productos')
const buttons = document.getElementById('categorias')
const listProductos = []
let dataCategory
// #endregion
// #region functions
export const addButtons = async (data) => {
  if (data.length) {
    data.forEach((data) => {
      categoriasList.innerHTML += `
        <button value="${data.id}" class="btn-sm btn-fucsia">${data.nombre}</button>
      `
      listProductos.push({ id: data.id, productos: data.productos })
    })
  }
}

const setupProducts = (id) => {
  dataCategory = searchById(id, listProductos)
  if (dataCategory) {
    productosList.innerHTML = dataCategory.productos.map((producto) => {
      return `
      <div class="cards">
        <img
          src="https://images.wallpaperscraft.com/image/single/astronaut_spacesuit_helmet_1185318_480x854.jpg"
          alt=""
        />
        <h3 class="title">${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <button class="btn-white btn-xs">COMPRAR</button>
      </div>
      `
    })
  }
}

// #endregion
// #region event
buttons.addEventListener('click', (e) => {
  setupProducts(parseInt(e.target.value))
})
// #endregion
