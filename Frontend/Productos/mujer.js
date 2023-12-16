// ID
// Category ==>> Hombre = 1; Mujer = 2; Niño = 3;
// Subcategory ==>> Indumentaria = 1; campera = 2; Zapatilla = 3; Accesorios = 4;

let cuadroProductos = document.getElementById("cuadroProductos");
// `div`
let infoOfproduct;

let arrayIdBotonesProductos = [];

const api = async () => {
  // Esta funcion obtiene datos sobre productos hombres
  let url = `https://backend-dev-qfap.4.us-1.fl0.io/api/Product/Category/2`;

  const response = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.value.map((item) => {
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

// TODO: FILTRAR SUB-CATEGORIS

let categoria;
let subcategoria;

const filtrar = async (categoria, subcategoria) => {
  // Esta funcion obtiene datos sobre productos hombres
  let url = `https://backend-dev-qfap.4.us-1.fl0.io/api/Product/Category/${categoria}/SubCategory/${subcategoria}`;

  const api = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // ELIMINAR TODAS LAS CARD
      cuadroProductos.innerHTML = "";

      data.value.map((item) => {
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

// En esta parte se filtran los elementos de los productos
let btnFiltros = document.querySelectorAll(".filtroRopa");

let listaIdFiltros = [
  "indumentaria_1",
  "campera_2",
  "zapatilla_3",
  "accesorios_4",
];

btnFiltros.forEach((b) => {
  b.addEventListener("click", () => {
    if (listaIdFiltros.filter((x) => x === b.id).toString()) {
      if (b.id === "indumentaria_1") {
        categoria = 2; // mujer
        subcategoria = 2; // Indumentaria
        filtrar(categoria, subcategoria);
      }
      if (b.id === "campera_2") {
        categoria = 2; // mujer
        subcategoria = 2; // campera
        filtrar(categoria, subcategoria);
      }
      if (b.id === "zapatilla_3") {
        categoria = 2; // mujer
        subcategoria = 3; // Zapatilla
        filtrar(categoria, subcategoria);
      }
      if (b.id === "accesorios_4") {
        categoria = 2; // mujer
        subcategoria = 4; // Accesorios
        filtrar(categoria, subcategoria);
      }
    }
  });
});
