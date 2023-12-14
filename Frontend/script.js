let buscadorIcono = document.getElementById("buscador-icono");
let formularioBuscador = document.getElementById("formulario-buscador");
let btnCerrar = document.getElementById("btn-cerrar");

let cuadroProductos = document.getElementById("cuadroProductos");
// `div`
let count = 1;

const api = async () => {
  let url = `https://backend-dev-qfap.4.us-1.fl0.io/api/Product/Category/1`;

  const api = await fetch(url);

  const data = await api.json();
  console.log(data);
  data.value.map((item) => {
    divItem = document.createElement(`div`);
    divItem.className = "col";

    divItem.innerHTML = `
    <div class="card">
    <img src=${item.img}
      class="card-img-top img-fluid" alt="pantalones" />
    <div class="card-img-overlay d-flex align-items-center justify-content-center">
      <button  value="${
        url + "/" + item.id
      }" class="comprarItem" type="button" class="btn btn-light rounded-4 fw-semibold shadow">
        <a type="button" href="#">
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
};
// ../selProducto/ComprarProductos.html
api();

//  en esta parte se obtiene los datos del elemento selecionado al hacer click en el boton Comprar

let comprarItem = document.querySelectorAll(".comprarItem");

function getInfoProducto(valor) {
  console.log(valor);
  alert(valor);
  return valor;
}

comprarItem.forEach((button) => {
  addEventListener("click", () => {
    getInfoProducto(button.value);
    console.log(getInfoProducto(button.value));
  });
});

/*
const api = async () => {
  let url = `https://backend-dev-qfap.4.us-1.fl0.io/api/Product/Category/1`;
  
  const api = await fetch(url);
 
  const data = await api.json();
  console.log(data);
  data.value.map((item) => {
    divItem = document.createElement(`div`);
    divItem.className = "col";

    divItem.innerHTML = `
    <div class="card">
    <img src=${item.img}
      class="card-img-top img-fluid" alt="pantalones" />
    <div class="card-img-overlay d-flex align-items-center justify-content-center">
      <button  value="${
        url + "/" + item.id
      }" class="comprarItem" type="button" class="btn btn-light rounded-4 fw-semibold shadow">
        <a type="button" href="#">
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
};
*/
