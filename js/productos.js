// ===============================
// CARRITO DE LA TIENDA AONSJ
// ===============================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

actualizarContador();

function agregarAlCarrito(id){

    const producto = carrito.find(p => p.id === id);

    if(producto){

        producto.cantidad++;

    }else{

        carrito.push({
            id:id,
            cantidad:1
        });

    }

    guardarCarrito();

    alert("Producto añadido al carrito.");

}

function guardarCarrito(){

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();

}

function actualizarContador(){

    const contador = document.getElementById("contadorCarrito");

    if(!contador) return;

    let total = 0;

    carrito.forEach(item =>{

        total += item.cantidad;

    });

    contador.textContent = total;

}
