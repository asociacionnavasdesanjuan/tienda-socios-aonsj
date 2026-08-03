let carrito=[];
const cont=document.getElementById('productos');
productos.forEach((p,i)=>{
cont.innerHTML+=`<div class="card">
<img src="${p.img}">
<h3>${p.nombre}</h3>
<p>${p.precio.toFixed(2)} €</p>
<button onclick="add(${i})">Añadir</button>
</div>`;
});
function add(i){carrito.push(productos[i]);refrescar();}
function refrescar(){
 let html="",t=0;
 if(!carrito.length){document.getElementById("lista").innerHTML="Todavía no hay productos.";document.getElementById("total").textContent="Total: 0,00 €";return;}
 carrito.forEach(p=>{html+="• "+p.nombre+"<br>";t+=p.precio;});
 document.getElementById("lista").innerHTML=html;
 document.getElementById("total").textContent="Total: "+t.toFixed(2)+" €";
}
function enviar(){
 if(!carrito.length)return alert("Carrito vacío");
 let txt="Pedido:%0A";
 carrito.forEach(p=>txt+="• "+p.nombre+"%0A");
 window.open("https://wa.me/34640868527?text="+txt);
}
