import { pageAdmin } from './page'

let modules
let data

window.addEventListener('load', () => {
  const content = document.getElementById('body')
  content.innerHTML = pageAdmin
  if (content) {
    modules = document.getElementById('modules')
    addModules(data)
  }
})

const addModules = (data) => {
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
