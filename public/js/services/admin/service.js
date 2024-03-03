import { pageAdmin } from './page.js'

let modules

export const loadPage = () => {
  const content = document.getElementById('body')
  content.innerHTML = pageAdmin
  // if (content) {
  // modules = document.getElementById('modules')
  // addModules(data)
  // }
}

export const addModules = (data) => {
  if (data.length) {
    data.forEach((data) => {
      modules.innerHTML += `
        <article id="btn${data.nombre}">
            <picture>
                <img src="${data.img}" alt="${data.descripcion}" />
            </picture>
            <p>${data.nombre}</p>
        </article>
        `
    })
  }
}
