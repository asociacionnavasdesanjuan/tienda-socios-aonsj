// =====================================
// CARRITO AONSJ
// =====================================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// --------------------
// Actualizar contador
// --------------------
function actualizarContador() {

    const contador = document.getElementById("contadorCarrito");

    if (!contador) return;

    let total = 0;

    carrito.forEach(item => {
        total += item.cantidad;
    });

    contador.textContent = total;
}

// --------------------
// Guardar carrito
// --------------------
function guardarCarrito() {

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();

}

// --------------------
// Añadir producto
// --------------------
function agregarAlCarrito(id) {

    const existe = carrito.find(item => item.id === id);

    if (existe) {

        existe.cantidad++;

    } else {

        carrito.push({
            id: id,
            cantidad: 1
        });

    }

    guardarCarrito();

}

// --------------------
// Vaciar carrito
// --------------------
function vaciarCarrito() {

    carrito = [];

    guardarCarrito();

}

// --------------------
// Abrir y cerrar panel
// --------------------
document.addEventListener("DOMContentLoaded", () => {

    actualizarContador();

    const abrir = document.getElementById("abrirCarrito");
    const cerrar = document.getElementById("cerrarCarrito");
    const panel = document.getElementById("panelCarrito");
    const fondo = document.getElementById("fondoCarrito");

    if (abrir && panel && fondo) {

        abrir.addEventListener("click", function (e) {

            e.preventDefault();

            panel.classList.add("abierto");

            fondo.classList.add("activo");

        });

    }

    if (cerrar && panel && fondo) {

        cerrar.addEventListener("click", function () {

            panel.classList.remove("abierto");

            fondo.classList.remove("activo");

        });

    }

    if (fondo && panel) {

        fondo.addEventListener("click", function () {

            panel.classList.remove("abierto");

            fondo.classList.remove("activo");

        });

    }

});
