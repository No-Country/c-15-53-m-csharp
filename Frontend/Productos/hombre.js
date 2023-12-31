// ID
// Category ==>> Hombre = 1; Mujer = 2; Niño = 3;
// Subcategory ==>> Indumentaria = 1; campera = 2; Zapatilla = 3; Accesorios = 4;

let cuadroProductos = document.getElementById("cuadroProductos");
// `div`
let infoOfproduct;

let arrayIdBotonesProductos = [];
let arrayProductos = [];

const api = async () => {
  // Esta funcion obtiene datos sobre productos hombres
  let url = `https://prueba-dev-rfsk.1.us-1.fl0.io/api/Product/Category/1`;

  const response = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      arrayProductos = [];
      data.value.map((item) => { arrayProductos.push(item) });



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

const filtrar = async (categoria, subcategoria ) => {
  // Esta funcion obtiene datos sobre productos hombres
  let url = `https://prueba-dev-rfsk.1.us-1.fl0.io/api/Product/Category/${categoria}/SubCategory/${subcategoria}`;

  const api = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // ELIMINAR TODAS LAS CARD
      data.value.map((item) => { arrayProductos.push(item) });

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
        categoria = 1; // hombre
        subcategoria = 1; // Indumentaria
        filtrar(categoria, subcategoria);
      }
      if (b.id === "campera_2") {
        categoria = 1; // hombre
        subcategoria = 2; // campera
        filtrar(categoria, subcategoria);
 
      }
      if (b.id === "zapatilla_3") {
        categoria = 1; // hombre
        subcategoria = 3; // Zapatilla
        filtrar(categoria, subcategoria);

      }
      if (b.id === "accesorios_4") {
        categoria = 1; // hombre
        subcategoria = 4; // Accesorios
        filtrar(categoria, subcategoria);

      }
    }
  });
});



function buscador () {
  const searchInput = document.querySelector('.buscadorProductos-p');
 
  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  
  searchInput.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault(); // Evitar el comportamiento por defecto del Enter (enviar formulario)
  
      let valor = removeAccents(searchInput.value);
  
      console.log(sessionStorage.setItem("inputValue", valor));
  
      sessionStorage.setItem("inputValue", valor);
  
      window.location.href = './productos.html';
  
      
    }
  });

}


 function filtroMayorMenorPrescio(arreglo) {
  
// filtrar por precio
let menor = document.getElementById("filtroMenor");
let mayor = document.getElementById("filtroMayor");

mayor.addEventListener("click", () => {

  let cuadroProductos = document.getElementById("cuadroProductos");
  let max = arreglo.length 
  let contador = 0;

  while (cuadroProductos.firstChild && contador < max) {
    cuadroProductos.removeChild(cuadroProductos.firstChild)
     contador += 1;
  }


  arreglo.sort((a, b) => b.price - a.price)  // MAYOR
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
  arreglo
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

 }



buscador();




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
