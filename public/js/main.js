// #region atributos
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js'
// import {
//   getDocs,
//   collection
// } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'
import { auth, db } from './config/firebase.js' // configuracion de firebase
import { loginCheck } from './services/auth/loginCheck.js' // funcion para validar el login

// Rutas de los archivos a utilizar
import './services/auth/signinForm.js'
import './services/auth/logout.js'
// #endregion

// #region pruebas
import { setupColecciones } from './services/crud/coleccionesList.js'
const array = [
  {
    id: 1234,
    nombre: 'feb-1',
    'fecha-creacion': '2024-02-01',
    'fecha-modificacion': '2024-02-04',
    'fecha-finalizacion': '2025-02-04',
    conjuntos: [
      {
        id: 5678,
        nombre: 'Depor',
        descripcion: 'Chimba pa correr',
        habilitado: true
      },
      {
        id: 6678,
        nombre: 'Cas',
        descripcion: 'Nada. no sé',
        habilitado: true
      },
      {
        id: 6778,
        nombre: 'Random',
        descripcion: 'No, mejor no lo compre',
        habilitado: true
      }
    ]
  },
  {
    id: 9876,
    nombre: 'feb-2',
    'fecha-creacion': '2024-02-01',
    'fecha-modificacion': '2024-02-04',
    'fecha-finalizacion': '2025-02-04',
    conjuntos: [
      {
        id: 5678,
        nombre: 'Super',
        descripcion: 'Melo',
        habilitado: true
      },
      {
        id: 6678,
        nombre: 'Casteo',
        descripcion: 'A mimir',
        habilitado: true
      },
      {
        id: 6778,
        nombre: 'Nothing',
        descripcion: 'No,sdfdsaf compre',
        habilitado: true
      }
    ]
  }
]
// #endregion

// estado de autenticacion, validar el usuario y cargar datos de la base de datos
onAuthStateChanged(auth, async (user) => {
  if (user) {
    loginCheck(user)
    try {
      setupColecciones([])
    } catch (error) {
      console.log(error)
    }
  } else {
    setupColecciones(array)
    loginCheck(user)
  }
})
