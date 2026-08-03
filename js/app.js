// ===============================
// APP PRINCIPAL - TIENDA AONSJ
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    iniciarBuscador();

});

function iniciarBuscador(){

    const buscador = document.getElementById("buscador");

    if(!buscador) return;

    buscador.addEventListener("keyup", function(){

        const texto = this.value.toLowerCase();

        const productos = document.querySelectorAll(".producto");

        productos.forEach(producto =>{

            const nombre = producto.querySelector("h3").textContent.toLowerCase();

            const descripcion = producto.querySelector("p").textContent.toLowerCase();

            if(
                nombre.includes(texto) ||
                descripcion.includes(texto)
            ){

                producto.style.display="block";

            }else{

                producto.style.display="none";

            }

        });

    });

}
