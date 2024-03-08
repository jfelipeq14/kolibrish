import { db } from '../config/firebase.js'
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  updateDoc
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'
// export const dataCategory = {
//   id: crypto.randomUUID(),
//   nombre: '',
//   productos: [],
//   habilitado: true

// }
// export const productsData = [
//   {
//     id: crypto.randomUUID(),
//     nombre: '',
//     descripcion: '',
//     url: '',
//     habilitado: true
//   }
// ]
export const saveData = (json, table) =>
  addDoc(collection(db, table), json)

export const deleteData = (id, table) => deleteDoc(doc(db, table, id))

export const getDataById = (id, table) => getDoc(doc(db, table, id))

export const updateData = (id, newFields, table) =>
  updateDoc(doc(db, table, id), newFields)

export const getAllData = (table) => getDocs(collection(db, table))
