import { db } from '../../config/firebase.js'
import {
  collection,
  getDocs
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'

export const getData = async (nameCollection) => {
  const data = []
  if (nameCollection) {
    const querySnapshot = await getDocs(collection(db, nameCollection))
    if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        data.push(doc.data())
      })
    }
  }
  return data // Devuelve toda la informacion que encontró en un array
}
