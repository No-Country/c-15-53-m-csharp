let img = document.getElementById("miImagen");
let nombreArt = document.getElementById("nombreArt");
let precioArt = document.getElementById("precioArt");
let description = document.getElementById("description");

// `div`
let infoOfproduct;

let arrayIdBotonesProductos = [];

const obtenerIdProducto = localStorage.getItem("idProducto");
console.log(obtenerIdProducto);
localStorage.removeItem("idProducto");
const api = async () => {
  // Esta funcion muestra la imagen, descripcion de un solo productos para comprarlo
  let url =
    `https://backend-dev-qfap.4.us-1.fl0.io/api/Product/` + obtenerIdProducto;

  const api = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      miImagen.src = data.value.img;
      nombreArt.innerHTML = data.value.name;
      precioArt.innerHTML = "$ " + data.value.price;
      description.innerHTML = data.value.description;
      console.log("data.img", data.value.img);
    });
};

api();
