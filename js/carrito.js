// ===============================
// CARRITO AONSJ V1.0
// ===============================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

actualizarContador();

// Añadir producto
function agregarAlCarrito(id){

    const existe = carrito.find(p => p.id === id);

    if(existe){

        existe.cantidad++;

    }else{

        carrito.push({
            id:id,
            cantidad:1
        });

    }

    guardarCarrito();

}

// Guardar carrito
function guardarCarrito(){

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );

    actualizarContador();

}

// Actualizar contador
function actualizarContador(){

    const contador =
        document.getElementById("contadorCarrito");

    if(!contador) return;

    let total = 0;

    carrito.forEach(producto=>{

        total += producto.cantidad;

    });

    contador.textContent = total;

}

// Vaciar carrito
function vaciarCarrito(){

    carrito=[];

    guardarCarrito();

}

// Obtener carrito
function obtenerCarrito(){

    return carrito;

}
// ===============================
// PANEL LATERAL DEL CARRITO
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const abrir = document.getElementById("abrirCarrito");
    const cerrar = document.getElementById("cerrarCarrito");
    const panel = document.getElementById("panelCarrito");
    const fondo = document.getElementById("fondoCarrito");

    if (abrir) {
        abrir.addEventListener("click", function(e){
            e.preventDefault();
            panel.classList.add("abierto");
            fondo.classList.add("activo");
        });
    }

    if (cerrar) {
        cerrar.addEventListener("click", function(){
            panel.classList.remove("abierto");
            fondo.classList.remove("activo");
        });
    }

    if (fondo) {
        fondo.addEventListener("click", function(){
            panel.classList.remove("abierto");
            fondo.classList.remove("activo");
        });
    }

});
