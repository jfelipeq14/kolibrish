// #region atributte
import { signOut } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { loadCategorys, loadProducts } from './productos/products.service.js'
import { getAllData, saveData, updateData } from '../services.general.js'
import { loadTableCategorias } from './categorias/category.service.js'
import { pageCategory } from './categorias/pageCategory.js'
import { pageProductos } from './productos/pageProducts.js'
import { auth } from '../../config/firebase.js'
import { pageAdmin } from './pageAdmin.js'

let productos
let products = []
let btnCategorias
let btnProductos
let categorias
let modules
let logout
let body
let table
let data
let dataModules
let form
let index
let product
let info
let id
let edit = false
const listCategory = []
const dataCategory = {
  nombre: '',
  productos: [],
  habilitado: true
}
const dataProduct = {
  nombre: '',
  descripcion: '',
  sexo: '',
  url: '',
  habilitado: true
}

export const loadAdminPage = async () => {
  data = await getAllData('categorias')
  data.forEach((category) => {
    listCategory.push(category.data())
  })
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
        <article class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <img src="${doc.img}" class="card-img-top" alt="${doc.descripcion}">
            <div class="card-body">
              <h5 class="card-title">${doc.nombre}</h5>
              <p class="card-text">${doc.descripcion}</p>
              <a href="#" class="btn btn-primary" id="btnCategorias">${doc.nombre}</a>
            </div>
          </div>
        </article>
  
      `
    })

    logout.addEventListener('click', async () => {
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
        form = document.getElementById('form')
        loadTableCategorias(table)
        table.addEventListener('click', (e) => {
          if (e) {
            try {
              info = listCategory.find((category) => category.nombre === e.target.value)
              form.nombre.value = info.nombre
              id = e.target.dataset.id
              edit = true
            } catch (e) {
              console.error(e)
            }
          }
        })

        form.addEventListener('submit', async (e) => {
          e.preventDefault()
          dataCategory.nombre = form.nombre.value
          try {
            if (edit === true && form.nombre.value !== '' && info.id !== '') {
              await updateData(id, dataCategory, 'categorias').then(console.log('Registro actualizado'))
              edit = false
              location.reload()
            } else if (edit === false && form.nombre.value !== '') {
              await saveData(dataCategory, 'categorias').then(console.log('Registro guardado'))
              location.reload()
            } else {
              console.log('nothing')
            }
          } catch (e) {
            console.error(e)
          }
        })
      }
    })

    btnProductos.addEventListener('click', async () => {
      const content = document.getElementById('content')
      content.innerHTML = pageProductos
      if (content) {
        categorias = document.getElementById('categorias')
        table = document.getElementById('table-content')
        form = document.getElementById('form')
        // const categorys = await getAllData('categorias')
        products = loadCategorys(data, categorias)
        categorias.addEventListener('change', (e) => {
          productos = loadProducts(e.target.value, products, table)
        })
        table.addEventListener('click', (e) => {
          try {
            if (e) {
              index = productos.findIndex((element) => element.nombre === e.target.value)

              product = productos.find((element) => element.nombre === e.target.value)

              form.nombre.value = product.nombre
              form.descripcion.value = product.descripcion
              form.sexo.value = product.sexo
              form.url.value = product.url
              form.habilitado.checked = product.habilitado
              id = e.target.dataset.id
              edit = true
            }
          } catch (e) {
            console.error(e)
          }
        })
        form.addEventListener('submit', async (e) => {
          e.preventDefault()
          dataProduct.nombre = form.categorias.value
          try {
            if (edit === true && form && index) {
              await updateProduct(index, dataProduct, productos)
              edit = false
              location.reload()
            } else if (edit === false && form.nombre.value !== '') {
              await saveData(dataCategory, 'categorias').then(console.log('Registro guardado'))
              location.reload()
            } else {
              console.log('nothing')
            }
          } catch (e) {
            console.error(e)
          }
        })
      }
    })

    function updateProduct (index, object, productos) {
      if (index >= 0 && index < productos.length) {
        productos[index] = object
      } else {
        throw new Error('Index out of bounds')
      }
    }
  }
}

// #endregion

// #region events

// #endregion
