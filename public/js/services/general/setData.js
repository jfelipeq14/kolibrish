import { db } from '../../config/firebase.js'
import {
  doc,
  setDoc
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'

const jsondata = {
  nombre: 'faldas',
  productos: []
}

const setData = async (stringNameCollection, data) => {
  await setDoc(doc(db, stringNameCollection, data.nombre), data)
}

(() => {
  setData('categorias', jsondata)
})()
