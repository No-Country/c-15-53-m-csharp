let buscadorIcono = document.getElementById("buscador-icono");
let formularioBuscador = document.getElementById("formulario-buscador");
let btnCerrar = document.getElementById("btn-cerrar");

buscadorIcono.addEventListener("click", ()=> {
    buscadorIcono.style.display = "none";
    formularioBuscador.style.display = "block";
});

btnCerrar.addEventListener("click", ()=> {
    formularioBuscador.style.display = "none";
    buscadorIcono.style.display = "block";
});