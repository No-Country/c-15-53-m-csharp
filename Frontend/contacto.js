// FORMULARIO CONTACTO Cambiar color de boton enviar al momento de cumpli con los requisitos
const formContacto = document.getElementById('myform');
const formclass = document.querySelector(".form");

const btnContacto = document.getElementById('btn-form-contacto');
let msgAdvertencia = document.querySelector('#msgAdvertencia');

const colorVerde = "#274A38";
const colorblanco = "#ffffff";

const inputNombre = document.getElementById('NombreApellido');
const inputEmail = document.getElementById('user_email');
const inputText = document.getElementById('validationTextarea');

formContacto.addEventListener("input", function () {
    if (inputNombre.checkValidity() && inputEmail.checkValidity() && inputText.checkValidity()) {
        btnContacto.style.backgroundColor = colorVerde;
        btnContacto.style.color = colorblanco;
 
    }
    if (!inputNombre.checkValidity() || !inputEmail.checkValidity() || !inputText.checkValidity()) {
        btnContacto.style.backgroundColor = colorblanco;
        btnContacto.style.color = colorVerde;
    }
})

formContacto.addEventListener("submit", (event) => {
    event.preventDefault();
    // enviar info
    const formData = new FormData(formContacto);

    const data = Object.fromEntries(formData); // Convertir todos los input en un objeto
    
    // ==== POST ========
    fetch('https://prueba-dev-rfsk.1.us-1.fl0.io/send-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
 
  //evito que se recargue la pagina al apretar el boton enviar y agrego un mensaje de confirmacion al final del form

    // Vacía todos los input
    formContacto.querySelectorAll("input").forEach(input => {
        input.value = "";
    });
    formContacto.querySelector("textarea").value = "";

    // Muestra un mensaje de confirmación
    msgAdvertencia.innerHTML = '<p class ="text-warning  fs-5 fw-semibold text-center" id "msgErrorForm">¡Formulario Enviado,  pronto nos comunicaremos contigo! </p>';
});

 

 