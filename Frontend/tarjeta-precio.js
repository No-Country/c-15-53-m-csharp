// img 1
const originalElement1 = document.getElementById("img-1-gorro");
const replacementElement1 = document.getElementById("img-1-gorro-replacement");

const originalElement2 = document.getElementById("img-1-buzo");
const replacementElement2 = document.getElementById("img-1-buzo-replacement");

const originalElement3 = document.getElementById("img-1-pantalon");
const replacementElement3 = document.getElementById("img-1-pantalon-replacement");

const originalElement4 = document.getElementById("img-1-zapatillas");
const replacementElement4 = document.getElementById("img-1-zapatillas-replacement");

// img 2
const originalElement5 = document.getElementById("img-2-ramera-c");
const replacementElement5 = document.getElementById("img-2-ramera-c-replacement");

const originalElement6 = document.getElementById("img-2-ramera-c");
const replacementElement6 = document.getElementById("img-2-ramera-c-replacement");

const originalElement7 = document.getElementById("img-2-ramera-c");
const replacementElement7 = document.getElementById("img-2-ramera-c-replacement");

const originalElement8 = document.getElementById("img-2-gorra");
const replacementElement8 = document.getElementById("img-2-gorra-replacement");

const originalElement9 = document.getElementById("img-2-ramera-m");
const replacementElement9 = document.getElementById("img-2-ramera-m-replacement");

ObtenerTarjetaPrecio(originalElement1, replacementElement1);
ObtenerTarjetaPrecio(originalElement2, replacementElement2);
ObtenerTarjetaPrecio(originalElement3, replacementElement3);
ObtenerTarjetaPrecio(originalElement4, replacementElement4);

ObtenerTarjetaPrecio(originalElement5, replacementElement5);
ObtenerTarjetaPrecio(originalElement6, replacementElement6);
ObtenerTarjetaPrecio(originalElement7, replacementElement7);
ObtenerTarjetaPrecio(originalElement8, replacementElement8);
ObtenerTarjetaPrecio(originalElement9, replacementElement9);

function ObtenerTarjetaPrecio(originalElement, replacementElement) {
  let popoverInstance;

  originalElement.addEventListener("click", function () {
    if (popoverInstance) {
      popoverInstance.hide();
      originalElement.classList.remove("visually-hidden");
      replacementElement.classList.add("visually-hidden");
    } else {
      popoverInstance = new bootstrap.Popover(originalElement, {
        container: "body",
        trigger: "manual",
      });
      popoverInstance.show();
      originalElement.classList.add("visually-hidden");
      replacementElement.classList.remove("visually-hidden");
    }
  });

  replacementElement.addEventListener("mouseout", function (event) {
    setTimeout(function () {
      if (
        popoverInstance &&
        !popoverInstance._element.contains(event.relatedTarget)
      ) {
        popoverInstance.hide();
        originalElement.classList.remove("visually-hidden");
        replacementElement.classList.add("visually-hidden");
        popoverInstance = null;
      }
    }, 2000);
  });
}
