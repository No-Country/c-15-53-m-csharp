//  ===== EN ESTA PARTE SE AGRGAN LOS PRODUCTOS AL CARRITO

function elcarrito() {
  let listadoCompras = document.getElementById("listadoCompras");

  let getArrayArticulos = JSON.parse(localStorage.getItem("carritoElementos"));
  let TotalCompra = 0;
  let posicionArrayCarrito = [];
  let count = 0;

  getArrayArticulos.map((data) => {
    let total = data.cantidad * data.price;
    TotalCompra += total;

    liItem = document.createElement("li");
    liItem.id = `elemento-li-${count}`;
    liItem.className = `contenedorTarjeta my-2`;
    liItem.innerHTML = ` 
        <div class="imgTarjeta">
            <img src="${data.img}" alt="foto de producto">
        </div>
        <div class="informacion">        
        <div class="infoTop">
        <div class="infoCompra">
                <h3>${data.name}</h3>
                <div class="especificaciones">
                    <p>Color: ${data.colo}</p>
                    <p>Talle: ${data.Talle}</p>
                </div>
            </div>
            <button class="btnEliminar" id="${count}">X</button>
        </div>
        <div class="precioxUnidad">
            <p>Precio x Unidad</p>
            <p>$ ${data.price}</p>
        </div>
        <div class="precioTotal fw-semibold">
            <p>Total (x${data.cantidad})</p>
            <p>$ ${total}</p>
        </div>
      </div>

        `;
    listadoCompras.appendChild(liItem);

    posicionArrayCarrito.push(count.toString());
    count += 1;
  });

  let totalP = document.querySelector(".totalProductos");
  pItem2 = document.createElement("p");
  pItem2.innerHTML = "$ " + TotalCompra;
  pItem2.className = `fw-semibold`;
  totalP.appendChild(pItem2);

  let totalPago = document.querySelector(".totalPago");
  pItem = document.createElement("p");
  // pItem.className = `fw-semibold`;
  pItem.innerHTML = "$ " + TotalCompra;
  totalPago.appendChild(pItem);
}

elcarrito();
//  ===== EN ESTA PARTE SE ELIMINAN Y ACTUALIZA LOS PRODUCTOS AL CARRITO
let btnElimiar = document.querySelectorAll(".btnEliminar");

btnElimiar.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.id) {
      //1. elimnar elemnto de mi array
      let getArrayArticulos = JSON.parse(
        localStorage.getItem("carritoElementos")
      );
      getArrayArticulos.splice(Number(btn.id), 1);

      //2. enviar mi array al local storage
      localStorage.setItem(
        "carritoElementos",
        JSON.stringify(getArrayArticulos)
      );

      //3. borrar los elemenntos del carrito

      let listadoCompras = document.getElementById(`elemento-li-${btn.id}`);
      listadoCompras.remove();

      //4. traer el local storage actualizado a la página
      // elcarrito();
    }
  });
});
