// FORMULARIO CONTACTO Cambiar color de boton enviar al momento de cumpli con los requisitos
const formBuscador = document.getElementById('myform');
const btnContacto = document.getElementById('btn-form-contacto');
let msgAdvertencia = document.querySelector('#msgAdvertencia');

const colorVerde = "#274A38";
const colorblanco = "#ffffff";

const inputNombre = document.getElementById('NombreApellido');
const inputEmail = document.getElementById('user_email');
const inputText = document.getElementById('validationTextarea');

formBuscador.addEventListener("input", function () {
    if (inputNombre.checkValidity() && inputEmail.checkValidity() && inputText.checkValidity()) {
        btnContacto.style.backgroundColor = colorVerde;
        btnContacto.style.color = colorblanco;
        btnContacto.preventDefault();

    }
    if (!inputNombre.checkValidity() || !inputEmail.checkValidity() || !inputText.checkValidity()) {
        btnContacto.style.backgroundColor = colorblanco;
        btnContacto.style.color = colorVerde;
    }
})

//evito que se recargue la pagina al apretar el boton enviar y agrego un mensaje de confirmacion al final del form
formBuscador.addEventListener("submit", (event) => {
    event.preventDefault();

    // Vacía todos los input
    formBuscador.querySelectorAll("input").forEach(input => {
        input.value = "";
    });
    formBuscador.querySelector("textarea").value = "";

    // Muestra un mensaje de confirmación
    msgAdvertencia.innerHTML = '<p class ="text-warning  fs-5 fw-semibold text-center" id "msgErrorForm">¡Formulario Enviado,  pronto nos comunicaremos contigo! </p>';
});
