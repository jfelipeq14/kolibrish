//Verificantion user if exist or no
const loggedOutLinks = document.querySelectorAll(".logged-out"); //selecciona todos los elementos #logged-out
const loggedInLinks = document.querySelectorAll(".logged-in");

export const loginCheck = (user) => {
  //si el usuario existe el signin se escondera y dejara el logout
  //de lo contrario el logout se ocultara y mostrara el signin
  if (user) {
    loggedInLinks.forEach((link) => (link.style.display = "block"));
    loggedOutLinks.forEach((link) => (link.style.display = "none"));
  } else {
    loggedInLinks.forEach((link) => (link.style.display = "none"));
    loggedOutLinks.forEach((link) => (link.style.display = "block"));
  }
};
