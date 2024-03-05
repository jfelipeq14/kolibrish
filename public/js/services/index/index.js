// #region atributos
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { auth } from '../../config/firebase.js'
import { getAllData } from '../services.general.js'
import { pageIndex } from './pageIndex.js'
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

const addButtons = async () => {
  const data = await getAllData('categorias')
  data.forEach((element) => {
    const category = element.data()
    categoriasList.innerHTML += `
      <button value="${category.id}" class="btn-sm btn-fucsia">${category.nombre}</button>
      `
    listProductos.push({ id: category.id, productos: category.productos })
  })
}

const setupProducts = async (id) => {
  dataCategory = listProductos.find((producto) => producto.id === id)
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
        
      </div>
      `
      // <button class="btn-white btn-xs">COMPRAR</button>
    })
  }
}
// #endregion
