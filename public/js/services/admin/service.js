import { pageAdmin } from './page.js'

// #region // logout user
import { signOut } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { auth } from '../../config/firebase.js'
import { pageCategory } from './categorias/page.js'
import { pageProductos } from './productos/page.js'

let btnCategorias
let btnProductos
let modules
let logout

const data = [{ nombre: 'nombre', img: 'url', descripcion: 'lo que sea' }]

export const loadAdminPage = () => {
  const content = document.getElementById('body')
  content.innerHTML = pageAdmin
  if (content) {
    modules = document.getElementById('modules')
    logout = document.getElementById('logout')
    btnCategorias = document.getElementById('btnCategorias')
    btnProductos = document.getElementById('btnProductos')

    addModules(data)
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
    })
    btnProductos.addEventListener('click', () => {
      const content = document.getElementById('content')
      content.innerHTML = pageProductos
    })
  }
}

export const addModules = (data) => {
  if (data.length) {
    data.forEach((data) => {
      modules.innerHTML += `
        <article id="btn${data.nombre}">
            <picture>
                <img src="${data.img}" alt="${data.descripcion}" />
            </picture>
            <p>${data.nombre}</p>
        </article>
        `
    })
  }
}

// #endregion

// #region events

// #endregion
