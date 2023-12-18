"use stricts"

// paso 1 del carrito = card de compras, factura, 2 btns y seccion pasos envio
let paso1 = document.querySelector("#paso1Compra");
//btn de finalizar compra, que genera que se despliegue el formulario
//solo muestra el form si hay al menos un elemento li con clase contenedor tarjeta en la pagina
let btn_finalizar = document.querySelector("#btn-finalizarCompra").addEventListener('click', function () {
    let listaCompras = document.querySelectorAll(".contenedorTarjeta");
    if (listaCompras.length > 0)
        mostrarForm();
});
//primera seccion del form = radios de formas de envio
let paso2_opciones = document.querySelector("#opcionesEnvio");
// segunda seccion del form con los datos del cliente = inputs
let paso2_2_form = document.querySelector("#datosFormCarrito");
//btn continuar para pasar a otras pantallas
let btnContinuar = document.querySelector("#btn-continuarCarrito");
//btn volver para voler a la primera pantalla del carrito
let btnVolver = document.querySelector("#btn-volver");
// div con el mensaje de agradecimiento
let msgAgradecimiento = document.querySelector("#msgAgradecimiento");
//formulario del carrito
let form = document.querySelector('#form');
//p para colocar el mensaje de advertencia
let msgAdvertencia = document.querySelector('#msgAdvertencia');
//contenedor para poner de fondo en la ultima pantalla del carrito
let contenedor = document.querySelector("#contenedorDesabilitado");

let contenedorBtns = document.querySelector("#btnsPaso1");


//elementos que debo sacar en la anteultima pantalla del carrito, para poder mostrar solo las tarjetas
let listaTarjetasCompra = document.querySelector("#contenedor-listadoCompras");
let btnEliminarCard = document.querySelectorAll("[id='btnEliminar']");
let btnsPaso1 = document.querySelectorAll(".btnsDoble");
let pasosEnvio = document.querySelector("#pasosEnvio");
//para que muestre el mensaje de error en el form una sola vez


let btnVolverTienda = document.querySelector("#btn-volverATienda").addEventListener('click', function () {
    // rederijo a la pagina de productos en la vista general cuando este
    location.replace("productos.html");
})
let menuNumerico = document.querySelectorAll(".menuNumerico > p");
let menuComprasText = document.querySelectorAll(".menuComprasText > p");


let contadorMenu = 0;
let funcionActual = 0;

//titulo 1 2 y 3 de carrito
function cambiarItemNav() {
    let menuNumerico = document.querySelectorAll(".menuNumerico > p");
    let menuComprasText = document.querySelectorAll(".navComprasText > p");

    contadorMenu++; // Incrementa antes de aplicar cambios

    cambiarFondo(menuNumerico[contadorMenu - 1]);
    cambiarColor(menuComprasText[contadorMenu - 1]);
}

function cambiarColor(elem) {
    elem.style.color = "#93A49B";
}
function cambiarFondo(elem) {
    elem.style.backgroundColor = "#93A49B";

}

cambiarItemNav();

function mostrarForm() {
    //quito la pantalla 1
    paso1.classList.add("quitar");
    //muestro la primera parte del form -> los radio
    form.classList.remove("quitar");
    paso2_opciones.classList.remove("quitar");
    //  me cercioro que algun boton radio este seleccionado para poder mostrar la segunda parte del form
    //btnRadios = paso2_opciones.querySelectorAll("input[type='radio']");
    const radiosOpcionEnvio = document.querySelectorAll("#opcionesEnvio input[type='radio']");
    radiosOpcionEnvio.forEach(btnRadio => {
        btnRadio.addEventListener('change', (event)=>{
            let radioSeleccionado = event.target;
            //si el radio seleccionado es el que tiene id opcEnvio1, se despliegan las opciones de sucursal
            if(radioSeleccionado.id === "opcEnvio1"){
                let opcionesSuc = document.querySelector("#opcionesSucursal");
                opcionesSuc.classList.remove("quitar");
            }else{
                mostrarInputsForm();
            }
        });
    });


    //muestro en pantalla el boton continuar
    btnContinuar.classList.remove("quitar");
    //lo desactivo
    btnContinuar.disabled = true;


    btnVolver.classList.remove("quitar");
    btnVolver.addEventListener("click", function () {
        location.replace("carrito.html");
    })

    btnContinuar.addEventListener("click", function () {
        //Ejecuta la función correspondiente al índice actual
        funciones[funcionActual]();
    });

    let funciones = [
        completarForm,
        ultimoMensaje
    ];
}
function mostrarInputsForm(){
    paso2_2_form.classList.remove("quitar");
    btnContinuar.disabled = false; 
}

//primera funcion
// se envian los datos del form a localStorage
function completarForm() {
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

    localStorage.setItem("compra", JSON.stringify(compra));
    // let datosForm = JSON.parse(localStorage.getItem("compra"));
    //llamo a una funcion que recorre todos los input del form y me dice si estan completos
    //si estan completos muestro la 3ra pantalla
    if (comprobarDatos()) {
        enviarForm();
        cambiarItemNav();
    } else {
        //si no estan completos le muestro un mensaje para que complete los input
        msgAdvertencia.innerHTML = '<p class ="text-danger fw-semibold" id "msgErrorForm">Completar datos</p>'
    }


}
//funcion para comprobar que todos los input esten completados
function comprobarDatos() {
    let campos = form.querySelectorAll("input");

    for (let campo of campos) {
        if (campo.value === "") {
            return false;
        }
    }
    return true;
}
//segunda funcion
//qutiar el form y mostrar la lista de compra con mensaje de agradecimiento
function enviarForm() {

    btnVolver.classList.add("quitar");
    form.classList.add("quitar");
    //paso1 le quito la clase que lo esconde

    paso1.classList.remove("quitar");
    //quito tolos los elementos que no aparecen en esta pantalla
    for (let boton of btnEliminarCard) {
        boton.classList.add("quitar");
    }
    for (let boton of btnsPaso1) {
        boton.classList.add("quitar");
    }
    pasosEnvio.classList.add("quitar");
    contenedorBtns.style.setProperty("margin-bottom", "0");



    btnContinuar.innerHTML = "Comprar";
    msgAgradecimiento.classList.remove("quitar");
    funcionActual = 1;
}


//arreglar la funcion para que se pueda sacar el cartel con una x y que no tape la pantalla del todo
function ultimoMensaje() {
    cambiarItemNav();
    //agarrar el elemento del mensaje
    let ultimoMenjaje = document.querySelector("#ultimoMensaje");
    let btnEsc = document.querySelector("#btnSacarCartel");
    contenedor.classList.add("desabilitar");
    //agregar la clase que lo posiciona
    ultimoMenjaje.classList.add("posicionarMensaje");
    //desabilitar el boton
    btnContinuar.setAttribute('disabled', '');

    //quitarle la clase que lo esconde
    ultimoMenjaje.classList.remove("quitar");

    btnEsc.addEventListener('click', function () {
        // rederijo a la pagina de productos en la vista general cuando este
        location.replace("index.html");
    })
    let body = document.querySelector("#contenedorDesabilitado");
}
