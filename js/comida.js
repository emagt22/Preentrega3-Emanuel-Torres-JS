function renderProductos(){
    let prod = cargarProductosLocalStorage();
    let contenido = "";

    prod.forEach(producto => {
        contenido += 
        `<div class="col-md-3 mb-4">
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                <div class="card-body">
                    <h2 class="text-center">${producto.nombre}</h2>
                    <ul >
                        <li class="card-text text-danger"><b>Precio: $${producto.precio}</b></li>
                        <li class="card-text" >Categoria: ${producto.categoria}</li>
                    </ul>
                    <a href="verproductos.html" onClick="verProd(${producto.id})"; class="text-decoration-none">
                        <button class="btn btn-primary" onclick="verProd(${producto.id});">Ver Producto</button>
                    </a>                      
                </div>
            </div>
        </div>`; 
    });

    document.getElementById("contenido").innerHTML = contenido; 
}

renderProductos();
renderBotonCarrito();

