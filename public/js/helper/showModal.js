const dialog = document.getElementById('dialog3')
const showDialogButton = document.getElementById('show3')
const hideDialogButton = document.getElementById('hide3')
const signInForm = document.querySelector('#login-form')

showDialogButton.addEventListener('click', () => {
  dialog.showModal()
})

hideDialogButton.addEventListener('click', () => {
  dialog.close()
  signInForm['login-email'].value = ''
  signInForm['login-password'].value = ''
})
