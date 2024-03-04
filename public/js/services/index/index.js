// #region atributos
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { searchById } from '../../services/general/search.js'
import { getData } from '../general/getData.js'
import { auth } from '../../config/firebase.js'
import { pageIndex } from './page.js'
import '../auth/signinForm.js'

const listProductos = []
let categoriasList
let productosList
let dataCategory
let hiddenPopup
let signInForm
let dialog
let login
let body
// #endregion
// #region events
export const loadIndex = async () => {
  const content = document.getElementById('body')
  content.innerHTML += pageIndex
  if (content) {
    categoriasList = document.getElementById('categorias')
    productosList = document.getElementById('productos')
    hiddenPopup = document.getElementById('hiddenPopup')
    signInForm = document.getElementById('signInForm')
    dialog = document.getElementById('pop-up')
    login = document.getElementById('login')
    body = document.getElementById('body')

    addButtons()

    categoriasList.addEventListener('click', (e) => {
      setupProducts(e.target.value)
    })

    login.addEventListener('click', () => {
      dialog.showModal()
    })

    hiddenPopup.addEventListener('click', () => {
      dialog.close()
    })
    signInForm.addEventListener('submit', async (e) => {
      e.preventDefault()
      const email = signInForm['login-email'].value
      const password = signInForm['login-password'].value

      try {
        const user = await signInWithEmailAndPassword(
          auth,
          email,
          password
        )
        console.log(user)
      } catch (error) {
        if (error.code === 'auth/wrong-password') {
          console.log('Wrong password', 'error')
        } else if (error.code === 'auth/user-not-found') {
          console.log('User not found', 'error')
        } else {
          console.log('Something went wrong', 'error')
        }
      }
    })
    body.classList.add('bg-linear')
  }
}
// #endregion

// #region functions

const addButtons = () => {
  getData('categorias').then((data) => {
    data.forEach((data) => {
      categoriasList.innerHTML += `
        <button value="${data.id}" class="btn-sm btn-fucsia">${data.nombre}</button>
        `
      listProductos.push({ id: data.id, productos: data.productos })
    })
  })
}

const setupProducts = (id) => {
  dataCategory = searchById(id, listProductos)
  if (dataCategory) {
    productosList.innerHTML = dataCategory.productos.map((producto) => {
      return `
      <div class="cards">
        <img
        src="${producto.url}"
        alt="${producto.descripcion}"
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
