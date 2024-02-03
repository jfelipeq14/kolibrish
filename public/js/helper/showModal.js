const dialog = document.getElementById('pop-up')
const login = document.getElementById('login')
const hiddenPopup = document.getElementById('hiddenPopup')

login.addEventListener('click', () => {
  dialog.showModal()
})

hiddenPopup.addEventListener('click', () => {
  dialog.close()
}) 
