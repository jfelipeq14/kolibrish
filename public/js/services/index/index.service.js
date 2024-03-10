// #region atributos
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { auth } from '../../config/firebase.js'
import { getAllData } from '../services.general.js'
import { pageIndex } from './pageIndex.js'
import '../auth/signinForm.js'

const listProductos = []
let categoriasList
let productosList
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
    productosList = document.querySelectorAll('.productos')
    hiddenPopup = document.getElementById('hiddenPopup')
    signInForm = document.getElementById('signInForm')
    dialog = document.getElementById('pop-up')
    login = document.getElementById('login')
    body = document.getElementById('body')

    addSections()

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

const addSections = async () => {
  const data = await getAllData('categorias')
  data.forEach((element) => {
    const category = element.data()

    const productos = category.productos.map((producto) => {
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
    })

    categoriasList.innerHTML += `
        <h1>${category.nombre}</h1>
        <article value="${element.id}" class="productos d-flex">
          ${productos.join('')}
        </article>
      `
    listProductos.push({ id: category.id, productos: category.productos })
  })
}
// #endregion
