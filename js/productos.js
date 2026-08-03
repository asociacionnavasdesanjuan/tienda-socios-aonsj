const productos = [
  {
    nombre: "Jaula de Cría",
    precio: 39.95,
    imagen: "https://via.placeholder.com/400x300?text=JAULA"
  },
  {
    nombre: "Comedero",
    precio: 2.50,
    imagen: "https://via.placeholder.com/400x300?text=COMEDERO"
  },
  {
    nombre: "Bebedero",
    precio: 1.20,
    imagen: "https://via.placeholder.com/400x300?text=BEBEDERO"
  },
  {
    nombre: "Pasta de Cría",
    precio: 12.95,
    imagen: "https://via.placeholder.com/400x300?text=PASTA"
  }
];

const contenedor = document.getElementById("productos");

if (contenedor) {
  productos.forEach(producto => {
    contenedor.innerHTML += `
      <div class="tarjeta">
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p><strong>${producto.precio.toFixed(2)} €</strong></p>
        <a href="tienda.html">Ver producto</a>
      </div>
    `;
  });
}
