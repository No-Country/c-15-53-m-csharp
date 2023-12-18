let btnGrupoTalles = document.getElementById("grupoTalles");
let btnGrupoCantidad = document.getElementById("grupoCantidad");
let btnGrupoBotonesColor = document.getElementById("grupoBotonesColor");

let colorBlanco = "#ffffff";
let colorVerde = "#274A38";

let btnIzquierda = document.querySelectorAll(
  "#btnColor, #btnCantidad, #btnTalle"
);

function CambiarEstadoColoresDerecha(button) {
  let cambio = ["btnColor", "btnCantidad", "btnTalle"]
    .filter((x) => x != button)
    .forEach((y) => {
      let elmento = document.getElementById(y);
      elmento.style.color = colorVerde;
      elmento.style.background = colorBlanco;
    });
  return cambio;
}

btnIzquierda.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "btnColor") {
      btnGrupoBotonesColor.style.display = "block";
      CambiarEstadoColoresDerecha(button.id);

      button.style.background = colorVerde;
      button.style.color = colorBlanco;
      button.style.border = "1px solid  #274A38";
      btnGrupoCantidad.style.display = "none";
      btnGrupoTalles.style.display = "none";
    }
    if (button.id === "btnTalle") {
      btnGrupoTalles.style.display = "block";
      CambiarEstadoColoresDerecha(button.id);

      button.style.background = colorVerde;
      button.style.color = colorBlanco;
      button.style.border = "1px solid  #274A38";

      btnGrupoBotonesColor.style.display = "none";
      btnGrupoCantidad.style.display = "none";
    }

    if (button.id === "btnCantidad") {
      btnGrupoCantidad.style.display = "block";
      CambiarEstadoColoresDerecha(button.id);

      button.style.background = colorVerde;
      button.style.color = colorBlanco;
      button.style.border = "1px solid  #274A38";

      btnGrupoTalles.style.display = "none";
      btnGrupoBotonesColor.style.display = "none";
    }
  });
});

let btnDerecha = document.querySelectorAll(".botonD");

let listaBotonesDerecha = [
  "btnRojo",
  "btnNegro",
  "btnMorado",
  "btnAmarillo",
  "btnAzul",
  "btnUno",
  "btnDos",
  "btnTres",
  "btnXs",
  "btnS",
  "btnM",
  "btnL",
  "btnXL",
];

let talleList = ["btnXs", "btnS", "btnM", "btnL", "btnXL"];
let colorList = ["btnRojo", "btnNegro", "btnMorado", "btnAmarillo", "btnAzul"];
let cantidadList = ["btnUno", "btnDos", "btnTres"];

let parrafoTalle = document.getElementById("parrafoTalle");
let parrafoCantidad = document.getElementById("parrafoCantidad");
let parrafoColor = document.getElementById("parrafoColor");

btnDerecha.forEach((b) => {
  b.addEventListener("click", () => {
    if (listaBotonesDerecha.filter((x) => x === b.id).toString()) {
      if (talleList.includes(b.id)) {
        parrafoTalle.textContent = "TALLE " + b.value + " /  "; // Mostrar en pantalla
        valoresParaCarrito["talle"] = b.value; //Para agrgar al carrito
        talleInfo.style.display = "inline-flex"; // Mostrar en pantalla
      }

      if (cantidadList.includes(b.id)) {
        parrafoCantidad.textContent = "  CANTIDAD " + b.value;
        valoresParaCarrito["cantidad"] = parseInt(b.value); //Para agrgar al carrito
        cantidadInfo.style.display = "inline-flex"; // Mostrar en pantalla
        console.log(valoresParaCarrito["cantidad"]);
      }

      if (colorList.includes(b.id)) {
        if (b.id === "btnRojo")
          parrafoColor.innerHTML = "COLOR " + svgRojo + " / ";
        if (b.id === "btnNegro")
          parrafoColor.innerHTML = "COLOR " + svgNegro + " / ";
        if (b.id === "btnMorado")
          parrafoColor.innerHTML = "COLOR " + svgMorado + " / ";
        if (b.id === "btnAmarillo")
          parrafoColor.innerHTML = "COLOR " + svgAmarillo + " / ";
        if (b.id === "btnAzul")
          parrafoColor.innerHTML = "COLOR " + svgAzul + " / " + " ";

        valoresParaCarrito["color"] = b.value;
        console.log(valoresParaCarrito["color"]);
        colorInfo.style.display = "inline-flex";
      }
    }
  });
});

let talleInfo = document.getElementById("talleInfo");
let colorInfo = document.getElementById("colorInfo");
let cantidadInfo = document.getElementById("cantidadInfo");

let valoresParaCarrito = {};

let btn_Comprar = document.getElementById("btnComprar");

btn_Comprar.addEventListener("click", (button) => {
  if (button.target.id === "btnComprar") {
    // Enviar los valores a los carritos

    // 1. Al presionar el botón convierto el valor objInfoCard que esta en localStorage en un objeto
    let articulo = JSON.parse(localStorage.getItem("objInfoCard"));

    // 2. agregar color, talle, cantidad al articulo.
    articulo.color = valoresParaCarrito["color"];
    articulo.cantidad = valoresParaCarrito["cantidad"];
    articulo.talle = valoresParaCarrito["talle"];

    // Luego tengo que gurdar ese objeto en un array de objetos que tengo en localStorage (carritoElementos)

    // 3. Convierto arrayArticulos que esta en localStorage con JSON.parse() porque el localStorage almacena la información como string
    let arrayArticulos = localStorage.getItem("carritoElementos");

    if (arrayArticulos === null) {
      arrayArticulos = localStorage.setItem("carritoElementos", "");
    }

    // 4. Agrego el objeto en el array y lo envio al localStorage

    arrayArticulos = articulo;
    localStorage.setItem("carritoElementos", JSON.stringify(arrayArticulos));

    // Reiciniar los valores que van para el carrito luego de enviar los datos: valoresParaCarrito  = { };
    // talleInfo.style.display = "none";
    // cantidadInfo.style.display = "none";
    // colorInfo.style.display = "none";
  }
});

let svgRojo = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 30 30" fill="none">
  <circle cx="15" cy="15" r="15" fill="red"/>
</svg>`;

let svgNegro = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 30 30" fill="none">
  <circle cx="15" cy="15" r="15" fill="#000000"/>
</svg>`;

let svgMorado = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 30 30" fill="none">
  <circle cx="15" cy="15" r="15" fill="#9747FF"/>
</svg>`;

let svgAmarillo = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 30 30" fill="none">
  <circle cx="15" cy="15" r="15" fill="#ECAE03"/>
</svg>`;

let svgAzul = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 30 30" fill="none">
  <circle cx="15" cy="15" r="15" fill="#2D0CFB"/>
</svg>`;
