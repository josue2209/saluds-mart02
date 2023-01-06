function save() {
  let email = document.getElementById('email').value;
  let comentatio = document.getElementById('comentario').value 
  localStorage.setItem('email',email);
  localStorage.setItem('comentario',comentatio);
  alert('el mensaje fue enviado');

  window.location.href="./contacto.html";
}