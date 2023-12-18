let img = document.getElementById("miImagen");
let nombreArt = document.getElementById("nombreArt");
let precioArt = document.getElementById("precioArt");
let description = document.getElementById("description");

// `div`
let infoOfproduct;

const obtenerIdProducto = localStorage.getItem("idProducto");
console.log(obtenerIdProducto);
// localStorage.removeItem("idProducto");

const api = async () => {
  // Esta funcion muestra la imagen, descripcion de un solo productos para comprarlo
  let url =
    `https://prueba-dev-rfsk.1.us-1.fl0.io/api/Product/` + obtenerIdProducto;

  const api = await fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.value);

      miImagen.src = data.value.img;
      nombreArt.innerHTML = data.value.name;
      precioArt.innerHTML = "$ " + data.value.price;
      description.innerHTML = data.value.description;

      let objInfoCard = {
        id: data.value.id,
        img: data.value.img,
        name: data.value.name,
        price: "$ " + data.value.price,
        description: data.value.description,
        cardDescription: data.value.cardDescription,
        categoryId: data.value.categoryId,
        subCategoryId: data.value.subCategoryId,
        price: data.value.price,
      };
      localStorage.setItem("objInfoCard", JSON.stringify(objInfoCard)); //Agregar al localStorage
    })
    .then((data) => {
      // Insertar texto que esta al principio
      let textUnoProducto = document.querySelector(".text-uno-producto");

      if (localStorage.getItem("objInfoCard")) {
        // ID
        // Category ==>> Hombre = 1; Mujer = 2; Niño = 3;
        // Subcategory ==>> Indumentaria = 1; campera = 2; Zapatilla = 3; Accesorios = 4;

        let categoria = JSON.parse(localStorage.objInfoCard).categoryId;
        let subCategoria = JSON.parse(localStorage.objInfoCard).subCategoryId;

        if (categoria === 1) categoria = "Hombre";
        if (categoria === 2) categoria = "Mujer";
        if (categoria === 3) categoria = "Niño";

        if (subCategoria === 1) subCategoria = "Indumentaria";
        if (subCategoria === 2) subCategoria = "Campera";
        if (subCategoria === 3) subCategoria = "Zapatilla";
        if (subCategoria === 4) subCategoria = "Accesorios";

        textUnoProducto.innerHTML = `Producto/${categoria}/${subCategoria}`;
      }
    })
    .catch((err) => console.log("Solicitud fallida", err));
};

api();
