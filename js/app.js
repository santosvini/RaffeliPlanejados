$('.carousel').carousel({
  interval: 2000
})

function Enviar() {
  var name = document.getElementById('name')
  var number = document.getElementById('number')
  var email = document.getElementById('email')
  var address = document.getElementById('address')
  var codeZip = document.getElementById('codeZip')
  var textarea = document.getElementById('validationTextarea')

  if(name.value && number.value && email.value && address.value && codeZip.value && textarea.value != "") {
    alert("Obrigado Sr(a) " + name.value + " os seus dados foram enviados e logo entraremos em contato!")
  } 
}