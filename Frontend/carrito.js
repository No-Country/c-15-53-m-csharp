"use stricts"
//VARIABLES GENERALES PARA LAS FUNCIONES
let contadorMenu = 0;
let funcionActual = 0;
let funciones = [
    enviarForm,
    pantallaDeCompra,
    confirmarCompra
];
//comienzo con el item 1 del nav opaco
cambiarItemNav();


                                // SELECCION DE ELEMENTOS DE LA PAGINA CARRITO PARA EL USO EN FUNCIONES

//-------------------------------------------------------- Paso 0 --------------------------------------------------------
//cambia el color del menu cuando el contadorMenu incrementa uno
function cambiarItemNav() {
    //selecciono los items del menu del carrito
    let menuNumerico = document.querySelectorAll(".menuNumerico > p");
    let menuComprasText = document.querySelectorAll(".navComprasText > p");

    contadorMenu++; // Incrementa antes de aplicar cambios

    cambiarFondo(menuNumerico[contadorMenu - 1]);
    cambiarColor(menuComprasText[contadorMenu - 1]);
}
//funcion que cambia el color del p
function cambiarColor(elem) {
    elem.style.color = "#93A49B";
}
//funcion que cambia el color de fondo del p
function cambiarFondo(elem) {
    elem.style.backgroundColor = "#93A49B";
}

//-------------------------------------------------------- Paso 1 --------------------------------------------------------

// paso1 = card de compras, factura, 2 btns y seccion pasos envio
let paso1 = document.querySelector("#paso1Compra");
//btn de finalizar compra, que genera que se despliegue el formulario
//solo muestra el form si hay al menos un elemento li con clase contenedor tarjeta en la pagina
let btn_finalizar = document.querySelector("#btn-finalizarCompra").addEventListener('click', function () {
    let listaCompras = document.querySelectorAll(".contenedorTarjeta");
    if (listaCompras.length > 0)
        mostrarForm();
});
// btn de finalizar seguirComprando, redirige a la pag productos
let btnVolverTienda = document.querySelector("#btn-volverATienda").addEventListener('click', function () {
    location.replace("productos.html");
})



//--------------------------------------------------------- Paso 2 ---------------------------------------------------------
//formulario del carrito
let form = document.querySelector('#form');
//primera seccion del form = radios de opciones de envio
let paso2_opcionesEnvio = document.querySelector("#opcionesEnvio");
// segunda seccion del form con los datos del cliente = inputs
let paso3_inputsForm = document.querySelector("#datosFormCarrito");
//p para colocar el mensaje de advertencia
let msgAdvertencia = document.querySelector('#msgAdvertencia');

//btn continuar para pasar a otras pantallas
//dependiendo el valor de funcionActual ejecuta una funcion u otra
let btnContinuar = document.querySelector("#btn-continuarCarrito");
btnContinuar.addEventListener("click", function () {
    //Ejecuta la función correspondiente al índice actual
    funciones[funcionActual]();
});


//btn volver para voler a la primera pantalla del carrito
let btnVolver = document.querySelector("#btn-volver");
btnVolver.addEventListener("click", function () {
    location.replace("carrito.html");
});


// --------------------------------------------------------- Paso 3 --------------------------------------------------------

//elementos que debo sacar en la anteultima pantalla del carrito, para poder mostrar solo las tarjetas
let listaTarjetasCompra = document.querySelector("#contenedor-listadoCompras");
let btnEliminarCard = document.querySelectorAll("[id='btnEliminar']");
let btnsPaso1 = document.querySelectorAll(".btnsDoble");
let pasosEnvio = document.querySelector("#pasosEnvio");
let contenedorBtns = document.querySelector("#btnsPaso1");

// div con el mensaje de agradecimiento
let msgAgradecimiento = document.querySelector("#msgAgradecimiento");



// --------------------------------------------------------  - Paso 4 -------------------------------------------------------

//contenedor para poner de fondo en la ultima pantalla del carrito
let contenedor = document.querySelector("#contenedorDesabilitado");

//----------------------------------------------------------------------------------------------------------------

                            // BLOQUES DE FUNCIONES PARA MOSTRAR Y SACAR DISTINTOS ELEMENTOS DEL DOM

//funcion para mostrar el form, se comporta diferente en cada parte, y se muestra el btn continuar y volver
function mostrarForm() {
    paso1.classList.add("quitar");
    form.classList.remove("quitar");
    //box donde estan las opciones de envio
    paso2_opcionesEnvio.classList.remove("quitar");
    btnContinuar.classList.remove("quitar");
    desplegarOpcEnvio();
    btnContinuar.disabled = true;
    btnVolver.classList.remove("quitar");
}

//funcion para desplegar las opciones de envio, y dependiendo cual se elija se despliegan otras 2 funciones
function desplegarOpcEnvio() {
    const radiosOpcionEnvio = document.querySelectorAll("#opcionesEnvio input[type='radio']");
    console.log("dentro de deslplegar");
    console.log(radiosOpcionEnvio.length);
    radiosOpcionEnvio.forEach(btnRadio => {
        btnRadio.addEventListener('change', (event) => {
            let radioSeleccionado = event.target;
            if (radioSeleccionado.id == "opcEnvio1") {
                console.log("desplegar opciones de sucursal");
                //si esta el form en pantalla lo saco
                desplegarOpcSucursales();
            } else if (radioSeleccionado.id == "opcEnvio2") {
                console.log("desplegar parte 3 del form");
                console.log("mostrando form");
                mostrarInputsForm();
                //funcion para comprobar que los input esten completos
            }
        });
    });
}

//funcion para desplegar las opciones de sucursal, y permitiendo cambiar a pantalla de compra
function desplegarOpcSucursales() {
    let opcionesSuc = document.querySelector("#opcionesSucursal");
    opcionesSuc.classList.remove("quitar");
    //si aprieta cualquiera de las opciones de sucursal se activa el btn continuar
    const radiosOpcionesSucursal = document.querySelectorAll("#opcionesSucursal input[type='radio']");
    radiosOpcionesSucursal.forEach(btnRadio => {
        btnRadio.addEventListener('change', (event) => {
            //cambiar el numero de la funcionActual para que el btn continuar siga a la 3 pantalla
            funcionActual = 1;
            btnContinuar.disabled = false;
        })
    });
}

//funcion para mostrar la segunda parte del form con los input para completar y cambiando funcion actual a 0
function mostrarInputsForm() {
    paso3_inputsForm.classList.remove("quitar");
    btnContinuar.disabled = false;
    //funcion actual es 0 para que al cliker continuar se revise el envio del form
    funcionActual = 0;

}

// se envian los datos del form a localStorage
function enviarForm() {
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
        pantallaDeCompra();
    } else {
        //si no estan completos le muestro un mensaje para que complete los input
        msgAdvertencia.innerHTML = '<p class ="text-danger fw-semibold" id "msgErrorForm">Completar datos del form</p>'
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

//Function que qutia el form y muestra la lista de compra con mensaje de agradecimiento
function pantallaDeCompra() {
    cambiarItemNav();

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
    funcionActual = 2;
}

//Funcion que muestra y posiciona un mensaje de confirmacion de compra con btn de salida
function confirmarCompra() {
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
}
