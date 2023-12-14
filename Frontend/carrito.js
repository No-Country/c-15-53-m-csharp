"use stricts"

let paso1 = document.querySelector("#paso1Compra");
let btn_finalizar = document.querySelector("#btn-finalizarCompra").addEventListener('click', mostrarForm);
let paso2_opciones = document.querySelector("#opcionesEnvio");
let paso2_2_form = document.querySelector("#datosFormCarrito");
let btnContinuar = document.querySelector("#btn-continuarCarrito");
let msgAgradecimiento = document.querySelector("#msgAgradecimiento");
let listado = document.querySelector("#listaCompraFinal");
let form = document.querySelector('#form');

let item1 = document.querySelector("item1");
let item2 = document.querySelector("item2");
let item3 = document.querySelector("item3");



let funcionActual = 0;

function mostrarForm() {
    paso1.classList.add("quitar");
    form.classList.remove("quitar");
    paso2_opciones.classList.remove("quitar");
    btnContinuar.classList.remove("quitar");
        btnContinuar.addEventListener("click", function() {
        //Ejecuta la función correspondiente al índice actual
        funciones[funcionActual]();
        //Incrementa el índice de la función
        funcionActual++;
        });

let funciones = [
        completarForm,
        enviarForm,
        ultimoMensaje
];
}

//primera funcion
function completarForm() {
    form.classList.remove("quitar");

    paso2_2_form.classList.remove("quitar");

    //guardarme la info del form y hacer una funcion para mandarla a una tabla de ventas
    let contenidoForm = new FormData(form);

    let nombreYapellido = contenidoForm.get('nombreYapellido');
    let dni = contenidoForm.get('dni');
    let telefono = contenidoForm.get('telefono');
    let email = contenidoForm.get('email');
    let direccion = contenidoForm.get('direccion');
    let codigoPostal = contenidoForm.get('codigoPostal');

    let compra = {
        nombreYapellido: nombreYapellido,
        dni: dni,
        telefono: telefono,
        email: email,
        direccion: direccion,
        codigoPostal: codigoPostal
    };
    //aca deberia de devolver el json de la compra a alguna api

}
//segunda funcion
function enviarForm(){
    form.classList.add("quitar");
    listado.classList.remove("quitar");
    console.log(listado);
    msgAgradecimiento.classList.remove("quitar");
}

function ultimoMensaje(){
    //agarrar el elemento del mensaje
    let ultimoMenjaje = document.querySelector("#ultimoMensaje");
    //agregar la clase que lo posiciona
    ultimoMenjaje.classList.add("posicionarMensaje");
    //desabilitar el boton
    btnContinuar.setAttribute('disabled', '');

    //quitarle la clase que lo esconde
    ultimoMenjaje.classList.remove("quitar");
    let body = document.querySelector("#contenedorDesabilitado");
    body.classList.add("opacado");
}
