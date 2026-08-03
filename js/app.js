cont.innerHTML += `
<div class="card">

<img src="${p.img}">

<div style="background:#e53935;color:white;padding:8px;font-weight:bold;">
🔥 OFERTA
</div>

<h3>${p.nombre}</h3>

<div style="color:#f7b500;font-size:20px;">
★★★★★
</div>

<p style="font-size:28px;font-weight:bold;color:#0b6b3b;">
${p.precio.toFixed(2)} €
</p>

<p style="color:green;font-weight:bold;">
✅ En stock
</p>

<p style="color:#666;">
🚚 Entrega 24/48 horas
</p>

<button onclick="add(${i})">
🛒 Añadir al carrito
</button>

</div>`;
