import { db } from '../../config/firebase.js'
import {
  doc,
  setDoc
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'

// modelForCategory
// const jsondata = {
//   id: myuuid,
//   nombre: 'pantalones',
//   productos: []
// }

export const setData = async (stringNameCollection, jsonData) => {
  await setDoc(doc(db, stringNameCollection, jsonData.nombre), jsonData)
}
