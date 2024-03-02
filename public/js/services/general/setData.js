import { db } from '../../config/firebase.js'
import {
  doc,
  setDoc
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'
const jsondata = {
  nombre: 'faldas', productos: []
}
const setData = async (categorias, jsondata) => {
  await setDoc(doc(db, 'categorias', jsondata.nombre), jsondata)
}

(() => {
  setData('categorias', jsondata)
})()
