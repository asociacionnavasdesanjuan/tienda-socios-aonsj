let carrito = [];

function añadirProducto(nombre, precio){

    carrito.push({
        nombre:nombre,
        precio:precio
    });

    alert(nombre + " añadido al carrito");

    console.log(carrito);

}
