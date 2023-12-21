//  ===== EN ESTA PARTE SE AGRGAN LOS PRODUCTOS AL CARRITO
let TotalCompra = 0;
let posicionArrayCarrito = [];
let count = 0;

let separarMilesComa = (num) => {
  return num.toLocaleString("es-ES", { minimumFractionDigits: 2 });

}



function elcarrito() {
  // Obtener informacion del localstorage
  // let data = JSON.parse(localStorage.getItem("carritoElementos"));
  let getItems = JSON.parse(localStorage.getItem("carritoElementos"));
  // let total = data.cantidad * data.price;
  // TotalCompra += total;


  getItems.map((data) => {
    let padre = document.querySelector(".contArticulo")
    let contenedor = document.createElement('div');
    contenedor.className = 'lista';
    let total = data.cantidad * data.price;
    TotalCompra += total;
    // Crear la estructura HTML
    let estructuraHTML = `
        <ul class="listadoCompras" id="listadoCompras">
            <li class="contenedorTarjeta">
                <div class="imgTarjeta">
                    <img src="${data.img}" alt="foto de producto">
                </div>
                <div class="informacion">
                    <div class="infoTop">
                        <div class="infoCompra">
                            <h3>${data.name}</h3>
                            <div class="especificaciones">
                                <p>Color: ${data.color}</p>
                                <p>Talle: ${data.talle}</p>
                            </div>
                        </div>
                        <button class="btnEliminar" id="btnEliminar">X</button>
                    </div>
                    <div class="precioxUnidad">
                        <p>Precio x Unidad</p>
                        <p>$ ${separarMilesComa(data.price)}</p>
                    </div>
                    <div class="precioTotal">
                        <p>Total (x${data.cantidad})</p>
                        <p>$ ${separarMilesComa(total)}</p>
                    </div>
                </div>
            </li>
        </ul>
  
    `;

    // Agregar la estructura HTML al div contenedor
    contenedor.innerHTML = estructuraHTML;

    // Agregar el div contenedor al body
    padre.appendChild(contenedor);
  });


}

let setTotalPrice = () => {

  let contArticulo = document.querySelector(".contArticulo")

  let facturaCompra = document.createElement("div");
  facturaCompra.className = "facturaCompra";
  let estructuraFactura = `
<div class="totalProductos">
<p>Total productos</p>
<p class="fw-semibold">$ ${separarMilesComa(TotalCompra)}</p>
</div>
<div class="infoEnvio">
<p>Envio</p>
<p class="fw-semibold">envio gratis</p>
</div>
<div class="totalPago fw-semibold">
<p>Total</p>
<p>$ ${(separarMilesComa(TotalCompra))}</p>
</div> `;

  facturaCompra.innerHTML = estructuraFactura;
  contArticulo.appendChild(facturaCompra);

}
elcarrito();
setTotalPrice();

// =====


//  ===== EN ESTA PARTE SE ELIMINAN Y ACTUALIZA LOS PRODUCTOS AL CARRITO
// Función para eliminar un elemento del carrito
function eliminarDelCarrito(event) {
  if (event.target.classList.contains('btnEliminar')) {
    const lista = event.target.closest('.lista'); // Obtener el contenedor del producto

    // Obtener el índice del producto en el carrito
    const index = Array.from(lista.parentElement.children).indexOf(lista);

    // Obtener los productos del localStorage
    let carrito = JSON.parse(localStorage.getItem('carritoElementos'));

    // Obtener el precio total del producto a eliminar
    const totalProducto = carrito[index].cantidad * carrito[index].price;

    // Eliminar el producto del carrito basado en el índice
    carrito.splice(index, 1);

    // Actualizar el carrito en localStorage
    localStorage.setItem('carritoElementos', JSON.stringify(carrito));

    // Eliminar el elemento del DOM
    lista.remove();

    // Reducir el total de la compra al eliminar el producto
    TotalCompra -= totalProducto;

    // Actualizar la factura de compra
    const factura = document.querySelector('.facturaCompra');
    factura.innerHTML = `
      <div class="totalProductos">
        <p>Total productos</p>
        <p class="fw-semibold">$ ${separarMilesComa(TotalCompra)}</p>
      </div>
      <div class="infoEnvio">
        <p>Envío</p>
        <p class="fw-semibold">envío gratis</p>
      </div>
      <div class="totalPago fw-semibold">
        <p>Total</p>
        <p>$ ${separarMilesComa(TotalCompra)}</p>
      </div>
    `;
    location.reload();

  }
}


// Escuchar eventos de clic para eliminar productos del carrito
document.querySelector('.contArticulo').addEventListener('click', eliminarDelCarrito);


// ==============================

// let btnElimiar = document.querySelectorAll(".btnEliminar");

// btnElimiar.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     if (btn.id) {
//       //1. elimnar elemnto de mi array
//       let getArrayArticulos = JSON.parse(
//         localStorage.getItem("carritoElementos")
//       );
//       getArrayArticulos.splice(Number(btn.id), 1);

//       //2. enviar mi array al local storage
//       localStorage.setItem(
//         "carritoElementos",
//         JSON.stringify(getArrayArticulos)
//       );

//       //3. borrar los elemenntos del carrito

//       let listadoCompras = document.getElementById(`elemento-li-${btn.id}`);
//       listadoCompras.remove();

//       //4. traer el local storage actualizado a la página
//       // elcarrito();
//     }
//   });
// });




// =====================================

// function elcarrito() {
//   let listadoCompras = document
//   .querySelector("contenedor-listadoCompras");

//   let getArrayArticulos = JSON.parse(localStorage.getItem("carritoElementos"));
//   let TotalCompra = 0;
//   let posicionArrayCarrito = [];
//   let count = 0;

//   getArrayArticulos.map((data) => {
//     let total = data.cantidad * data.price;
//     TotalCompra += total;

//     divItem = document.createElement("div");
//     divItem.id = "contArticulo";
//     // divItem.id = `elemento-${count}`;
//     // divItem.className = `contenedorTarjeta my-2`;
//     divItem.innerHTML = `
//     <li class="contenedorTarjeta">
//         <div class="imgTarjeta">
//             <img src="${data.img}">
//         </div>
//         <div class="informacion">
//             <div class="infoTop">
//                 <div class="infoCompra">
//                     <h3>Campera esqui Hombre</h3>
//                     <div class="especificaciones">
//                         <p>Color: ${data.color}</p>
//                         <p>Talle: ${data.talle}</p>
//                     </div>
//                 </div>
//                 <button class="btnEliminar" id="btnEliminar">X</button>
//             </div>
//             <div class="precioxUnidad">
//                 <p>Precio x Unidad</p>
//                 <p>$ ${data.price}</p>
//             </div>
//             <div class="precioTotal">
//                 <p>Total (x1)</p>
//                 <p>$ ${total}/p>
//             </div>
//         </div>
//     </li>

//     <div class="facturaCompra">
//     <div class="totalProductos">
//         <p>Total productos</p>
//         <!-- <p class="fw-semibold">$115.000,00</p> -->
//     </div>
//     <div class="infoEnvio">
//         <p>Envio</p>
//         <p class="fw-semibold">envio gratis</p>
//     </div>
//     <div class="totalPago fw-semibold">
//         <p>Total</p>
//         <!-- <p>$115.000,00</p> -->
//     </div>
// </div>

//         `;
//     listadoCompras.appendChild(divItem);

//     // posicionArrayCarrito.push(count.toString());
//     // count += 1;
//   });

//   let totalP = document.querySelector(".totalProductos");
//   pItem2 = document.createElement("p");
//   pItem2.innerHTML = "$ " + TotalCompra;
//   pItem2.className = `fw-semibold`;
//   totalP.appendChild(pItem2);

//   let totalPago = document.querySelector(".totalPago");
//   pItem = document.createElement("p");
//   // pItem.className = `fw-semibold`;
//   pItem.innerHTML = "$ " + TotalCompra;
//   totalPago.appendChild(pItem);
// }