// formulario buscador
function buscador() {
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

// contar articulos en el carrito

const carritoCount = () => {
    let text = document.querySelector(".carritoLength");
    if (localStorage.getItem("carritoElementos")) {
        let Length = JSON.parse(localStorage.carritoElementos).length;

        if (Length <= 0 || typeof Length === "undefined") {
            text.style.display = "none"
        }
        else {
            text.innerHTML = Length;
            text.style.display = "block";

        }

    } else {
        // si no existe creo el carritoElementos en localStorage y bloqueo el spam
        text.style.display = "none"
        localStorage.setItem("carritoElementos", "[]")

    }
}

carritoCount();

buscador();