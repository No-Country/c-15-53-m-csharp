let buscadorIcono = document.getElementById("buscador-icono");
let formularioBuscador = document.getElementById("formulario-buscador");
let btnCerrar = document.getElementById("btn-cerrar");

let cuadroProductos = document.getElementById("cuadroProductos");
// `div`
let infoOfproduct;

let arrayIdBotonesProductos = [];

const api = async () => {
  let url = `https://backend-dev-qfap.4.us-1.fl0.io/api/Product/Category/1`;

  const api = await fetch(url)
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
        <img src=${
          item.img
        } class="card-img-top img-fluid" alt="pantalones" loading="lazy"/>
          <div class="card-img-overlay d-flex align-items-center justify-content-center">
            <button value="${
              url + "/" + item.id
            }"  id="${seguirIdBoton}" type="button" class="btn btn-light rounded-4 fw-semibold shadow comprarItem">
              <a type="button" href="../selProducto/ComprarProductos.html">
                 Comprar
              </a>
            </button>
          </div>
          <div class="card-body text-center">
            <p class="card-text fw-bold">${item.name}</p>
            <p class="card-text fw-semibold">$ ${item.price}</p>
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
            let result = getInfoProducto(button.value);
            infoOfproduct = result;
            console.log(infoOfproduct);
          }
        });
      });
    });
};

api();
