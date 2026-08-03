// =====================================
// PRODUCTOS AONSJ
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    const contenedor = document.getElementById("contenedorProductos");

    if (!contenedor) return;

    fetch("data/productos.json")
        .then(response => response.json())
        .then(productos => {

            contenedor.innerHTML = "";

            productos.forEach(producto => {

                contenedor.innerHTML += `
                    <div class="card producto">

                        <img src="${producto.imagen}"
                             alt="${producto.nombre}"
                             style="width:100%;height:220px;object-fit:cover;border-radius:10px;">

                        <h3>${producto.nombre}</h3>

                        <p>${producto.descripcion}</p>

                        <h2>${producto.precio.toFixed(2)} €</h2>

                        <button class="btn"
                                onclick="agregarAlCarrito(${producto.id})">
                            Añadir al carrito
                        </button>

                    </div>
                `;

            });

        })
        .catch(error => {

            console.error("Error cargando productos:", error);

        });

});
