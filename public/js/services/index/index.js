// #region atributos
import { searchById } from '../../services/general/search.js'
import { data } from '../../services/general/local/data.js'
import { pageIndex } from './page.js'
import '../auth/signinForm.js'
// #endregion
// #region atributos
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
import { auth } from '../../config/firebase.js'

const listProductos = []
let categoriasList
let productosList
let dataCategory
let dialog
let login
let hiddenPopup
let signInForm
let body

// #endregion
// #region events
export const loadIndex = () => {
  const content = document.getElementById('body')
  content.innerHTML += pageIndex
  if (content) {
    body = document.getElementById('body')
    categoriasList = document.getElementById('categorias')
    productosList = document.getElementById('productos')
    dialog = document.getElementById('pop-up')
    login = document.getElementById('login')
    hiddenPopup = document.getElementById('hiddenPopup')
    signInForm = document.getElementById('signInForm')
    addButtons(data)
    categoriasList.addEventListener('click', (e) => {
      setupProducts(parseInt(e.target.value))
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
const addButtons = (data) => {
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
