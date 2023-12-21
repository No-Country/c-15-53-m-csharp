// ID
// Category ==>> Hombre = 1; Mujer = 2; Niño = 3;
// Subcategory ==>> Indumentaria = 1; campera = 2; Zapatilla = 3; Accesorios = 4;
// formulario busuueedaa
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


let cuadroProductos = document.getElementById("cuadroProductos");
// `div`
let infoOfproduct;

let arrayIdBotonesProductos = [];
let arrayProductos = [];


const api = async (inputValue) => {
  // Esta funcion obtiene datos sobre productos hombres
  let url = `https://prueba-dev-rfsk.1.us-1.fl0.io/api/Product/all`;



  const response = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      ///NO VA
      data.value.map((item) => {arrayProductos.push(item) });

       // FILTRAR POR NOMBRE
    //   data.value.filter(x=> x.name.toLowerCase().includes(inputValue.toLowerCase()))

    //   .map((item) => {
    //     let seguirIdBoton = "Product-Category-" + item.id; // asignarle id a los botones para enviar informacion
    //     arrayIdBotonesProductos.push("#" + seguirIdBoton);
       
    //     divItem = document.createElement(`div`);
    //     divItem.className = "col";
    //     divItem.innerHTML = `
    //     <div class="card">
    //     <img src=${item.img} class="card-img-top img-fluid" alt="pantalones" loading="lazy"/>
    //       <div class="card-img-overlay d-flex align-items-center justify-content-center">
    //         <button value="${item.id}"  id="${seguirIdBoton}" type="button" class="btn btn-light rounded-4 fw-semibold shadow comprarItem">
    //           <a type="button" href="../selProducto/ComprarProductos.html">
    //              Comprar
    //           </a>
    //         </button>
    //       </div>
    //       <div class="card-body text-center">
    //       <p class="text-center-name card-text fw-bold">${item.name}</p>
    //       <p class="text-center-card-description card-text fw-bold">${item.cardDescription}</p>
    //       <p class="text-center-price card-text fw-semibold">$ ${item.price}</p>
    //       </div>
    //     </div>
    // `;
    //     cuadroProductos.appendChild(divItem);
    //   });
    })
    .then(()=> {
       arrayProductos
       .filter(x=> x.name.toLowerCase().includes(valor.toLowerCase()))
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
            sessionStorage.setItem("idProducto", infoOfproduct);
          }
        });
      });
    });
};
buscador ();
let valor = sessionStorage.getItem("inputValue");
api(valor);

