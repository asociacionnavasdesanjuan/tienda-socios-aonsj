// ===============================
// CARRITO TIENDA OFICIAL DEL SOCIO
// Asociación Ornitológica
// ===============================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const listaCarrito = document.getElementById("listaCarrito");
const contador = document.getElementById("contadorCarrito");
const total = document.getElementById("totalCarrito");
const btnWhatsapp = document.getElementById("btnWhatsapp");

//--------------------------------
// Guardar carrito
//--------------------------------

function guardarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//--------------------------------
// Añadir producto
//--------------------------------

function agregarAlCarrito(producto) {

    const existe = carrito.find(p => p.id == producto.id);

    if (existe) {
        existe.cantidad++;
    } else {

        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });

    }

    guardarCarrito();
    actualizarCarrito();

}

//--------------------------------
// Eliminar producto
//--------------------------------

function eliminarProducto(id){

    carrito = carrito.filter(p => p.id != id);

    guardarCarrito();

    actualizarCarrito();

}

//--------------------------------
// Cambiar cantidad
//--------------------------------

function cambiarCantidad(id,cambio){

    const producto = carrito.find(p=>p.id==id);

    if(!producto) return;

    producto.cantidad += cambio;

    if(producto.cantidad<=0){

        eliminarProducto(id);

        return;

    }

    guardarCarrito();

    actualizarCarrito();

}

//--------------------------------
// Actualizar carrito
//--------------------------------

function actualizarCarrito(){

    if(!listaCarrito) return;

    listaCarrito.innerHTML="";

    let totalProductos=0;

    let importe=0;

    carrito.forEach(producto=>{

        totalProductos+=producto.cantidad;

        importe+=producto.precio*producto.cantidad;

        listaCarrito.innerHTML+=`

        <div class="item-carrito">

            <img src="${producto.imagen}" class="img-carrito">

            <div class="datos-carrito">

                <h4>${producto.nombre}</h4>

                <p>${producto.precio.toFixed(2)} €</p>

                <div class="cantidad">

                    <button onclick="cambiarCantidad(${producto.id},-1)">−</button>

                    <span>${producto.cantidad}</span>

                    <button onclick="cambiarCantidad(${producto.id},1)">+</button>

                </div>

            </div>

            <button class="eliminar" onclick="eliminarProducto(${producto.id})">

                ✖

            </button>

        </div>

        `;

    });

    if(contador){

        contador.textContent=totalProductos;

    }

    if(total){

        total.innerHTML=importe.toFixed(2)+" €";

    }

}

//--------------------------------
// Vaciar carrito
//--------------------------------

function vaciarCarrito(){

    carrito=[];

    guardarCarrito();

    actualizarCarrito();

}

//--------------------------------
// WhatsApp
//--------------------------------

function enviarWhatsapp(){

    if(carrito.length==0){

        alert("El carrito está vacío");

        return;

    }

    let mensaje="*PEDIDO TIENDA OFICIAL DEL SOCIO*%0A%0A";

    carrito.forEach(producto=>{

        mensaje+=`${producto.nombre}%0A`;

        mensaje+=`Cantidad: ${producto.cantidad}%0A`;

        mensaje+=`Precio: ${(producto.precio*producto.cantidad).toFixed(2)} €%0A%0A`;

    });

    const totalPedido=carrito.reduce((a,b)=>a+b.precio*b.cantidad,0);

    mensaje+="*TOTAL:* "+totalPedido.toFixed(2)+" €";

    window.open(

        "https://wa.me/34640868527?text="+mensaje,

        "_blank"

    );

}

if(btnWhatsapp){

    btnWhatsapp.addEventListener("click",enviarWhatsapp);

}

actualizarCarrito();
