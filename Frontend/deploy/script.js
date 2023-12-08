let buscadorIcono = document.getElementById("buscador-icono");
let formularioBuscador = document.getElementById("formulario-buscador");
let btnCerrar = document.getElementById("btn-cerrar");

// para que tooltip de bootstrap funcione
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

 
  
// buscadorIcono.addEventListener("click", ()=> {
//     buscadorIcono.style.display = "none";
//     formularioBuscador.style.display = "block";
// });

// btnCerrar.addEventListener("click", ()=> {
//     formularioBuscador.style.display = "none";
//     buscadorIcono.style.display = "block";
// });