// #region atributte
import { pageAdmin } from './pageAdmin.js'
import { signOut } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { auth } from '../../config/firebase.js'
import { pageCategory } from './categorias/pageCategory.js'
import { pageProductos } from './productos/pageProducts.js'
import { loadTableCategorias } from './categorias/services.category.js'
// import { getAllData } from '../services.general.js'
import { loadCategorys, loadProducts } from './productos/services.products.js'
import { localData } from '../local/localData.js'

let btnCategorias
let btnProductos
let categorias
let modules
let logout
let body
let table
const data = localData
let products = []
let dataModules

export const loadAdminPage = async () => {
  const content = document.getElementById('body')
  content.innerHTML = pageAdmin
  if (content) {
    btnCategorias = document.getElementById('btnCategorias')
    btnProductos = document.getElementById('btnProductos')
    modules = document.getElementById('modules')
    logout = document.getElementById('logout')
    body = document.getElementById('body')

    body.classList.remove('bg-linear')
    // data = await getAllData('modulos')
    dataModules = [{
      nombre: 'Categorias',
      descripcion: 'lo que sea',
      img: 'enlace'
    }, {
      nombre: 'Productos',
      descripcion: 'cualquier cosa',
      img: 'enlace'
    }]

    dataModules.forEach((doc) => {
      // const doc = element.data()
      modules.innerHTML += `
      <article>
      <picture class="d-block">
      <img src="${doc.img}" alt="${doc.descripcion}" />
      </picture>
      <button class="btn-md" id="btn${doc.nombre}">${doc.nombre}</button>
      </article>
      `
    })

    logout.addEventListener('click', async (e) => {
      try {
        await signOut(auth)
        location.reload()
      } catch (error) {
        console.log(error)
      }
    })

    btnCategorias.addEventListener('click', () => {
      const content = document.getElementById('content')
      content.innerHTML = pageCategory
      if (content) {
        table = document.getElementById('table-content')
        loadTableCategorias(table)
      }
    })

    btnProductos.addEventListener('click', async () => {
      const content = document.getElementById('content')
      content.innerHTML = pageProductos
      if (content) {
        categorias = document.getElementById('categorias')
        table = document.getElementById('table-content')
        // const categorys = await getAllData('categorias')
        products = loadCategorys(data, categorias)

        categorias.addEventListener('change', (e) => {
          loadProducts(e.target.value, products, table)
        })
      }
    })
  }
}

// #endregion

// #region events

// #endregion
