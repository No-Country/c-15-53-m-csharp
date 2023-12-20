const searchInput = document.getElementById('buscadorProductos');

// searchInput.addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//         window.location.href = "./productos.html";

//      }
//   });


  // contar articulos en el carrito
  const carritoCount = () => {
    let text = document.querySelector(".carritoLength");
    if (localStorage.getItem("carritoElementos")){
      let Length = JSON.parse(localStorage.carritoElementos).length;
  
      if (Length <= 0 || typeof Length === "undefined"){
        text.style.display = "none"
      } 
      else {
        text.innerHTML = Length;
        text.style.display = "block";
        
      }

    }else {
      // si no existe creo el carritoElementos en localStorage y bloqueo el spam
      text.style.display = "none"
      localStorage.setItem("carritoElementos", "[]")

    }
  }
  
  carritoCount() ;


// document.getElementById("searchInput").addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//       // Obtener el valor del input
//       let searchValue = event.target.value.trim();
  
//       if (searchValue !== "") {
//         // Redirigir a una página específica basada en la búsqueda
//         window.location.href = "./productos.html" ;
//       } else {
//         // Si no se ingresó ningún valor, manejarlo aquí (por ejemplo, mostrar un mensaje de error)
//         alert("Por favor, ingresa algo en el campo de búsqueda");
//       }
//     }
//   });
  