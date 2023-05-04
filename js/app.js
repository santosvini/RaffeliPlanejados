$('.carousel').carousel({
  interval: 3000
})

function hideNav() {
  $(".nav-link").on("click", function(){
    $('.navbar-collapse').collapse('hide');
  });
}

function submitForm() {
  
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
}

function moveSection() {
  const section = document.querySelectorAll('.nav-item a[href^="#"]')

  function transiton(event) {
    event.preventDefault();

    const href = event.currentTarget.getAttribute('href');
    const links = document.querySelector(href);
    links.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  section.forEach((link) => {
    link.addEventListener('click', transiton)
  })
}

hideNav();
submitForm();
moveSection();