import { db } from "../../config/firebase.js";
import {
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

// const coleccion = {
//   id: 9876,
//   nombre: "feb-2",
//   "fecha-creacion": "2024-02-01",
//   "fecha-modificacion": "2024-02-04",
//   "fecha-finalizacion": "2025-02-04",
//   conjuntos: [
//     {
//       id: 5678,
//       nombre: "Depor",
//       descripcion: "Chimba pa correr",
//       habilitado: true,
//     },
//     {
//       id: 6678,
//       nombre: "Cas",
//       descripcion: "Nada. no sé",
//       habilitado: true,
//     },
//     {
//       id: 6778,
//       nombre: "Random",
//       descripcion: "No, mejor no lo compre",
//       habilitado: true,
//     },
//   ],
// };

// Add a new document in collection "cities"
export const setData = async (coleccion) => {
  await setDoc(doc(db, "colecciones", coleccion.nombre), coleccion);
};
