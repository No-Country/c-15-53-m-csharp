"use stricts"

let paso1 = document.querySelector("#paso1Compra");
let btn_finalizar = document.querySelector("#btn-finalizarCompra").addEventListener('click', mostrarForm);
let paso2_opciones = document.querySelector("#opcionesEnvio");
let paso2_2_form = document.querySelector("#datosFormCarrito");
let btnContinuar = document.querySelector("#btn-continuarCarrito");
let msgAgradecimiento = document.querySelector("#msgAgradecimiento");
let listado = document.querySelector("#listaCompraFinal");
let form = document.querySelector('#form');
let contenedor = document.querySelector("#contenedorDesabilitado");

let btnVolverTienda = document.querySelector("#btn-volverATienda").addEventListener('click', function () {
    // rederijo a la pagina de productos en la vista general cuando este
    location.replace("productos.html");
})


//titulo 1 2 y 3 de carrito
let item1 = document.querySelector("item1");
let item2 = document.querySelector("item2");
let item3 = document.querySelector("item3");



let funcionActual = 0;

function mostrarForm() {
    //quito la pantalla 1
    paso1.classList.add("quitar");
    //muestro la primera parte del form -> los radio
    form.classList.remove("quitar");
    paso2_opciones.classList.remove("quitar");
    //  me cercioro que algun boton radio este seleccionado para poder mostrar la segunda parte del form
    btnRadios = document.querySelectorAll("input[type='radio']");
    btnRadios.forEach(btnRadio => {
        btnRadio.addEventListener('change', function () {
            paso2_2_form.classList.remove("quitar");
            //luego de que se pueda mostrar la segunda parte del form se activa el boton continuar
            btnContinuar.disabled = false;

        })
    });
    //muestro en pantalla el boton continuar
    btnContinuar.classList.remove("quitar");
    //lo desactivo
    btnContinuar.disabled = true;

    btnContinuar.addEventListener("click", function () {
        //Ejecuta la función correspondiente al índice actual
        funciones[funcionActual]();
        //Incrementa el índice de la función
        console.log("funcion actual: " + funcionActual);
        funcionActual++;
    });

    let funciones = [
        completarForm,
        // ultimoMensaje
    ];
}

//primera funcion
function completarForm() {
    console.log("1");
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
    //detener el envio del form si no se completaron todos los datos, evitar que el boton se active
    //cuando todos los campos esten completos guardamos los valores en local storage
    //  se activa el boton para que se quite el form de pantalla 
    //  
    console.log(comprobarDatos());
    if(comprobarDatos()){
        console.log("comprobando que los datos del form esten completados");

    }

        
    
    window.localStorage.setItem("compra", JSON.stringify(compra));
    //aca deberia de devolver el json de la compra a alguna api
    console.log(localStorage.compra);
    // btnContinuar.disabled = false; 
   // enviarForm();

}

function comprobarDatos() {
    let campos = form.querySelectorAll("input");

    for (let campo of campos) {
        if (campo.value === "") {
            // El campo no está completado
            return false;
        }
    }

    // Todos los campos están completados
    
    return true;
}
//segunda funcion
function enviarForm() {
    console.log("2");

    form.classList.add("quitar");

    listado.classList.remove("quitar");
    btnContinuar.innerHTML = "Comprar";
    console.log(listado);
    msgAgradecimiento.classList.remove("quitar");
}

function ultimoMensaje() {
    console.log("3");

    //agarrar el elemento del mensaje
    let ultimoMenjaje = document.querySelector("#ultimoMensaje");
    contenedor.classList.add("desabilitar");
    //agregar la clase que lo posiciona
    ultimoMenjaje.classList.add("posicionarMensaje");
    //desabilitar el boton
    btnContinuar.setAttribute('disabled', '');

    //quitarle la clase que lo esconde
    ultimoMenjaje.classList.remove("quitar");
    let body = document.querySelector("#contenedorDesabilitado");
}
