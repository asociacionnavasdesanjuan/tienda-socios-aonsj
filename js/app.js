let carrito = [];

function añadirProducto(boton, nombre, precio){

    let cantidad = parseInt(
        boton.parentElement.querySelector("input").value
    );

    for(let i = 0; i < cantidad; i++){

        carrito.push({
            nombre:nombre,
            precio:precio
        });

    }

    actualizarCarrito();

function actualizarCarrito(){

    let resumen = {};
    let total = 0;

    carrito.forEach(function(producto){

        if(!resumen[producto.nombre]){
            resumen[producto.nombre]={
                cantidad:0,
                precio:producto.precio
            };
        }

        resumen[producto.nombre].cantidad++;
        total += producto.precio;

    });

    let texto="";

    for(let nombre in resumen){

        let cantidad=resumen[nombre].cantidad;
        let precio=resumen[nombre].precio*cantidad;

        texto += "• " + nombre +
                 " x" + cantidad +
                 " - " + precio.toFixed(2) +
                 " €<br>";

    }

    if(carrito.length==0){
        texto="Todavía no hay productos.";
    }

    document.getElementById("productos").innerHTML=texto;
    document.getElementById("total").innerHTML="<strong>Total: "+total.toFixed(2)+" €</strong>";

}function añadirProducto(nombre, precio){

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
document.querySelectorAll(".cantidad").forEach(function(caja){

    const menos = caja.children[0];
    const numero = caja.children[1];
    const mas = caja.children[2];

    mas.onclick = function(){

        numero.value = parseInt(numero.value) + 1;

    }

    menos.onclick = function(){

        if(parseInt(numero.value) > 1){

            numero.value = parseInt(numero.value) - 1;

        }

    }

});
