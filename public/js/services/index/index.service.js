// #region atributos
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { auth } from '../../config/firebase.js'
import { getAllData } from '../services.general.js'
import { pageIndex } from './pageIndex.js'

const listProductos = []
let categoriasList
let signInForm
let body
// #endregion
// #region events
export const loadIndex = async () => {
  const content = document.getElementById('body')
  content.innerHTML += pageIndex
  if (content) {
    categoriasList = document.getElementById('categorias')
    signInForm = document.getElementById('signInForm')
    body = document.getElementById('body')

    addSections()

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
        // mensajes de error
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
        <div class="cards m-2 rounded text-white">
          <img src="${producto.url}" alt="${producto.descripcion}">
          <div>
            <h5>${producto.nombre}</h5>
            <p>${producto.descripcion}</p>
            <a href="#" class="btn btn-sm btn-primary">Comprar</a>
          </div>
        </div>
      `
    })

    categoriasList.innerHTML += `
        <h1 class="text-center">${category.nombre}</h1>
        <article value="${element.id}" class="productos d-flex row my-5 align-items-start justify-content-center">
          ${productos.join('')}
        </article>
      `
    listProductos.push({ id: category.id, productos: category.productos })
  })
}
// #endregion
