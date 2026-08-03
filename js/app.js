let carrito = [];

function añadirProducto(nombre, precio){

    carrito.push({
        nombre:nombre,
        precio:precio
    });

    actualizarCarrito();

}

function actualizarCarrito(){

    let texto="";

    let total=0;

    carrito.forEach(function(producto){

        texto += "• " + producto.nombre + " - " + producto.precio.toFixed(2) + " €<br>";

        total += producto.precio;

    });

    if(carrito.length==0){

        texto="Todavía no hay productos.";

    }

    document.getElementById("productos").innerHTML=texto;

    document.getElementById("total").innerHTML="<strong>Total: "+total.toFixed(2)+" €</strong>";

}

function enviarWhatsApp(){

    if(carrito.length==0){

        alert("El carrito está vacío");

        return;

    }

    let mensaje="*Pedido Asociación Ornitológica de Navas de San Juan*%0A%0A";

    carrito.forEach(function(producto){

        mensaje += "• "+producto.nombre+" - "+producto.precio.toFixed(2)+" €%0A";

    });

    let total=0;

    carrito.forEach(function(producto){

        total += producto.precio;

    });

    mensaje += "%0ATotal: "+total.toFixed(2)+" €";

    window.open("https://wa.me/34640868527?text="+mensaje);

}
