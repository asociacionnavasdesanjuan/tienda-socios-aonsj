// ============================================
// CARRITO OFICIAL AONSJ v1.0
// ============================================

// Carrito guardado en el navegador
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// --------------------------------------------
// Al cargar la página
// --------------------------------------------
document.addEventListener("DOMContentLoaded", () => {

    actualizarContador();

    iniciarCarrito();

});

// --------------------------------------------
// Inicializar eventos
// --------------------------------------------
function iniciarCarrito(){

    const abrir = document.getElementById("abrirCarrito");
    const cerrar = document.getElementById("cerrarCarrito");
    const fondo = document.getElementById("fondoCarrito");

    if(abrir){

        abrir.addEventListener("click", function(e){

            e.preventDefault();

            abrirCarrito();

        });

    }

    if(cerrar){

        cerrar.addEventListener("click", cerrarCarrito);

    }

    if(fondo){

        fondo.addEventListener("click", cerrarCarrito);

    }

}

// --------------------------------------------
// Abrir carrito
// --------------------------------------------
function abrirCarrito(){

    const panel = document.getElementById("panelCarrito");
    const fondo = document.getElementById("fondoCarrito");

    if(panel){

        panel.classList.add("abierto");

    }

    if(fondo){

        fondo.classList.add("activo");

    }

    mostrarCarrito();

}

// --------------------------------------------
// Cerrar carrito
// --------------------------------------------
function cerrarCarrito(){

    const panel = document.getElementById("panelCarrito");
    const fondo = document.getElementById("fondoCarrito");

    if(panel){

        panel.classList.remove("abierto");

    }

    if(fondo){

        fondo.classList.remove("activo");

    }

}

// --------------------------------------------
// Añadir producto
// --------------------------------------------
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

}

// --------------------------------------------
// Guardar
// --------------------------------------------
function guardarCarrito(){

    localStorage.setItem(

        "carrito",

        JSON.stringify(carrito)

    );

    actualizarContador();

}

// --------------------------------------------
// Contador
// --------------------------------------------
function actualizarContador(){

    const contador = document.getElementById("contadorCarrito");

    if(!contador) return;

    let total=0;

    carrito.forEach(item=>{

        total += item.cantidad;

    });

    contador.textContent=total;

}

// --------------------------------------------
// Mostrar carrito
// --------------------------------------------
function mostrarCarrito(){

    const lista=document.getElementById("listaCarrito");

    if(!lista) return;

    if(carrito.length===0){

        lista.innerHTML="<p>Tu carrito está vacío.</p>";

        return;

    }

    let html="";

    carrito.forEach(item=>{

        html += `

            <div class="card">

                Producto ID: ${item.id}<br>

                Cantidad: ${item.cantidad}

            </div>

        `;

    });

    lista.innerHTML=html;

}
