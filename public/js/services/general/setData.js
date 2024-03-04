import { db } from '../../config/firebase.js'
import {
  doc,
  setDoc
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'
// import { data } from './local/data.js'

export const setDataCollection = async (stringNameCollection, jsonData) => {
  await setDoc(doc(db, stringNameCollection, jsonData.nombre), jsonData)
}

// (() => {
//   for (let i = 0; i < data.length; i++) {
//     const element = data[i]
//     setDataCollection('categorias', element)
//   }
// })()

export const setDataForArray = async (stringNameCollection, arrayData) => {
  // obtener los datos de esa coleccion
  // crear una variable con los array
  // agregar los datos nuevos al array que trae la db
}
