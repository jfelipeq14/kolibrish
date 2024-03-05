import { db } from '../config/firebase.js'
import {
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc
} from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js'

export const saveData = (title, description, table) =>
  addDoc(collection(db, table), { title, description })

export const onGetData = (callback, table) =>
  onSnapshot(collection(db, table), callback)

export const deleteData = (id, table) => deleteDoc(doc(db, table, id))

export const getDataById = (id, table) => getDoc(doc(db, table, id))

export const updateData = (id, newFields, table) =>
  updateDoc(doc(db, table, id), newFields)

export const getAllData = (table) => getDocs(collection(db, table))
