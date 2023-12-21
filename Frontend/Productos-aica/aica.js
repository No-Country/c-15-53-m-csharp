// ID
// Category ==>> Hombre = 1; Mujer = 2; Niño = 3;
// Subcategory ==>> Indumentaria = 1; campera = 2; Zapatilla = 3; Accesorios = 4;

let cuadroProductos = document.getElementById("cuadroProductos");
// `div`
let infoOfproduct;

let arrayIdBotonesProductos = [];
let arrayProductos = [];

let subCatByid;

const api = async () => {
  // para saber en quee pagina estoy  (Indumentaria = 1; campera = 2; Zapatilla = 3; Accesorios = 4;)

  let cat = document.querySelector(".contenedor-productos");
  let IdClase = cat.id;
  if (IdClase === "pIndumentaria") subCatByid = 1;
  if (IdClase === "pAbrigos") subCatByid = 2;
  if (IdClase === "pCalzdos") subCatByid = 3;
  if (IdClase === "pAccesorios") subCatByid = 4;

  // console.log(subCatByid, IdClase);
  // Esta funcion obtiene datos sobre productos hombres
  let url = `https://prueba-dev-rfsk.1.us-1.fl0.io/api/Product/all`;

  const response = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

      arrayProductos = [];
      data.value.filter((x) => x.subCategoryId === subCatByid)
        .map((item) => { arrayProductos.push(item) });

      data.value
        .filter((x) => x.subCategoryId === subCatByid)
        .map((item) => {
          let seguirIdBoton = "Product-Category-" + item.id; // asignarle id a los botones para enviar informacion
          arrayIdBotonesProductos.push("#" + seguirIdBoton);

          divItem = document.createElement(`div`);
          divItem.className = "col";
          divItem.innerHTML = `
        <div class="card">
        <img src=${item.img} class="card-img-top img-fluid" alt="pantalones" loading="lazy"/>
          <div class="card-img-overlay d-flex align-items-center justify-content-center">
            <button value="${item.id}"  id="${seguirIdBoton}" type="button" class="btn btn-light rounded-4 fw-semibold shadow comprarItem">
              <a type="button" href="../selProducto/ComprarProductos.html">
                 Comprar
              </a>
            </button>
          </div>
          <div class="card-body text-center">
          <p class="text-center-name card-text fw-bold">${item.name}</p>
          <p class="text-center-card-description card-text fw-bold">${item.cardDescription}</p>
          <p class="text-center-price card-text fw-semibold">$ ${item.price}</p>
          </div>
        </div>
    `;
          cuadroProductos.appendChild(divItem);

        });
    })
    .then(() => {
      // Ej :arrayIdBotonesProductos = ["#Product-Category-15", "#Product-Category-16", "#Product-Category-16"]
      // arrayIdBotonesProductos.join(", "); ===>>> "#Product-Category/15", "#Product-Category-16", "#Product-Category-16"
      //
      let idConvertido = arrayIdBotonesProductos.join(", ");

      // Separar la cadena en un array usando la coma como delimitador y eliminar los espacios
      // ej: idConvertido = "#Product-Category-15", "#Product-Category-16
      //             ===>>> ["Product-Category-15", "Product-Category-16]

      let idLista = String(arrayIdBotonesProductos)
        .split(",")
        .map((item) => item.replace("#", ""));

      let capturarItem = document.querySelectorAll(idConvertido);

      capturarItem.forEach((button) => {
        button.addEventListener("click", () => {
          if (button.id === idLista.filter((x) => button.id === x)[0]) {
            infoOfproduct = button.value;
            localStorage.setItem("idProducto", infoOfproduct);
          }
        });
      });
    });
};

api();

// filtrar por precio
let menor = document.getElementById("filtroMenor");
let mayor = document.getElementById("filtroMayor");

mayor.addEventListener("click", () => {

  let cuadroProductos = document.getElementById("cuadroProductos");
  let max = arrayProductos.length 
  let contador = 0;

  while (cuadroProductos.firstChild && contador < max) {
    cuadroProductos.removeChild(cuadroProductos.firstChild)
     contador += 1;
  }


  arrayProductos.sort((a, b) => b.price - a.price)  // MAYOR
    .map((item) => {
      let seguirIdBoton = "Product-Category-" + item.id; // asignarle id a los botones para enviar informacion
      arrayIdBotonesProductos.push("#" + seguirIdBoton);

      divItem = document.createElement(`div`);
      divItem.className = "col";
      divItem.innerHTML = "";
      divItem.innerHTML = `
   <div class="card">
   <img src=${item.img} class="card-img-top img-fluid" alt="pantalones" />
     <div class="card-img-overlay d-flex align-items-center justify-content-center">
       <button value="${item.id}"  id="${seguirIdBoton}" type="button" class="btn btn-light rounded-4 fw-semibold shadow comprarItem">
         <a type="button" href="../selProducto/ComprarProductos.html">
            Comprar
         </a>
       </button>
     </div>
     <div class="card-body text-center">
     <p class="text-center-name card-text fw-bold">${item.name}</p>
     <p class="text-center-card-description card-text fw-bold">${item.cardDescription}</p>
     <p class="text-center-price card-text fw-semibold">$ ${item.price}</p>
     </div>
   </div>
`;
      cuadroProductos.appendChild(divItem);
    });

});
menor.addEventListener("click", () => {

  let cuadroProductos = document.getElementById("cuadroProductos");
  while (cuadroProductos.firstChild) {
    cuadroProductos.removeChild(cuadroProductos.firstChild)
  }
  cuadroProductos.innerHTML = ""
  arrayProductos
    .sort((a, b) => a.price - b.price)  // MENOR
    .map((item) => {
      let seguirIdBoton = "Product-Category-" + item.id; // asignarle id a los botones para enviar informacion
      arrayIdBotonesProductos.push("#" + seguirIdBoton);

      divItem = document.createElement(`div`);
      divItem.className = "col";
      divItem.innerHTML = `
   <div class="card">
   <img src=${item.img} class="card-img-top img-fluid" alt="pantalones" />
     <div class="card-img-overlay d-flex align-items-center justify-content-center">
       <button value="${item.id}"  id="${seguirIdBoton}" type="button" class="btn btn-light rounded-4 fw-semibold shadow comprarItem">
         <a type="button" href="../selProducto/ComprarProductos.html">
            Comprar
         </a>
       </button>
     </div>
     <div class="card-body text-center">
     <p class="text-center-name card-text fw-bold">${item.name}</p>
     <p class="text-center-card-description card-text fw-bold">${item.cardDescription}</p>
     <p class="text-center-price card-text fw-semibold">$ ${item.price}</p>
     </div>
   </div>
`;
      cuadroProductos.appendChild(divItem);
    });

});


