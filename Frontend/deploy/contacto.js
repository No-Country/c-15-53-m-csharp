// FORMULARIO CONTACTO Cambiar color de boton enviar al momento de cumpli con los requisitos
const formBuscador = document.getElementById('myform');
const btnContacto = document.getElementById('btn-form-contacto');

const colorVerde = "#274A38";
const colorblanco = "#ffffff";

const inputNombre = document.getElementById('NombreApellido');
const inputEmail = document.getElementById('user_email');
const inputText = document.getElementById('validationTextarea');

formBuscador.addEventListener("input", function() {
    if (inputNombre.checkValidity() && inputEmail.checkValidity() && inputText.checkValidity()) {
        btnContacto.style.backgroundColor = colorVerde;
        btnContacto.style.color = colorblanco;
    }
    if (!inputNombre.checkValidity() || !inputEmail.checkValidity() || !inputText.checkValidity()) {
        btnContacto.style.backgroundColor = colorblanco;
        btnContacto.style.color =  colorVerde;
    }
 })
 
 