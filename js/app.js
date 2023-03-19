$('.carousel').carousel({
  interval: 2000
})

const form = document.querySelector('#form')
const name = document.querySelector('#name')
const number = document.querySelector('#number')
const email = document.querySelector('#email')
const address = document.querySelector('#address')
const codeZip = document.querySelector('#codeZip')
const textarea = document.querySelector('#validationTextarea')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (name.value === "") {
    alert('Favor, preencha o nome')
    return; 
  }
  if (number.value === "") {
    alert('Favor, preencha o celular')
    return; 
  }
  if (email.value === "") {
    alert('Favor, preencha o email')
    return; 
  }
  if (address.value === "") {
    alert('Favor, preencha o endereço')
    return; 
  }
  if (codeZip.value === "") {
    alert('Favor, preencha o cep')
    return; 
  }
  if (textarea.value === "") {
    alert('Favor, preencha o seu projeto')
    return; 
  }
  form.submit();
});