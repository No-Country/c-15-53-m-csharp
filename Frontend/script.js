const searchInput = document.getElementById('buscadorProductos');

searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        window.location.href = "./productos.html";

     }
  });



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
  