// #region atributos
// import { data } from '../general/local/data.js'
import { searchById } from '../general/search.js'
const categoriasList = document.getElementById('categorias')
const productosList = document.getElementById('productos')
const listProductos = []
const buttons = document.getElementById('categorias')
let dataCategory
// #endregion
// #region functions
window.addEventListener('load', () => {
  const content = document.getElementById('content')
  const wrapper = document.createElement('article')
  // add page
  wrapper.innerHTML = [
    '<section id="main" class="d-flex">',
    '<article>',
    '<h1 class="title">NUEVO PRODUCTO</h1>',
    '<button class="btn-white btn-sm">Categoria</button>',
    '</article>',
    '<article>',
        `<a href="#categorias" class="btn-sm">
        <img
          src="https://images.wallpaperscraft.com/image/single/astronaut_spacesuit_helmet_1185318_240x320.jpg"
          alt="Descripcion"
        />
      </a>`,
        '</article>',
        '</section>',
        '<section class="section">',
        '<header id="categorias"></header>',
        '<article id="productos"></article>',
        '</section>'
  ].join('')
  content.append(wrapper)
})

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
